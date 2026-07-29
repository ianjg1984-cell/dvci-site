-- D.V.C.I. anonymous emoji-reaction counter
-- Run this once in Supabase: Project -> SQL Editor -> New query -> paste -> Run

create table if not exists reaction_counts (
  idiom_id text not null,
  emoji text not null,
  count integer not null default 0,
  primary key (idiom_id, emoji)
);

alter table reaction_counts enable row level security;

-- Anyone (anon) can read counts, but cannot write to the table directly —
-- writes only happen through the controlled function below.
create policy "public can read reaction counts"
  on reaction_counts for select
  using (true);

create or replace function increment_reaction(p_idiom_id text, p_emoji text)
returns integer
language plpgsql
security definer
as $$
declare
  new_count integer;
begin
  insert into reaction_counts (idiom_id, emoji, count)
  values (p_idiom_id, p_emoji, 1)
  on conflict (idiom_id, emoji)
  do update set count = reaction_counts.count + 1
  returning count into new_count;
  return new_count;
end;
$$;

grant select on reaction_counts to anon, authenticated;
grant execute on function increment_reaction(text, text) to anon, authenticated;
revoke insert, update, delete on reaction_counts from anon, authenticated;

-- D.V.C.I. no-login comments (name + text, held for approval)
-- Run this in the same project, same SQL Editor, as a second query.

create table if not exists comments (
  id bigint generated always as identity primary key,
  idiom_id text not null,
  name text not null default 'Anonymous' check (char_length(name) <= 60),
  comment text not null check (char_length(comment) >= 1 and char_length(comment) <= 500),
  created_at timestamptz not null default now(),
  approved boolean not null default false
);

alter table comments enable row level security;

-- The public can only ever see comments you've approved.
create policy "public can read approved comments"
  on comments for select
  using (approved = true);

-- The public can submit new comments, but only ever as unapproved —
-- there is no policy letting anon set approved = true, or update/delete
-- anything, so moderation can only happen from your own Supabase dashboard.
create policy "public can insert pending comments"
  on comments for insert
  with check (approved = false);

grant select, insert on comments to anon, authenticated;
revoke update, delete on comments from anon, authenticated;

-- To moderate: open the "comments" table in Supabase's Table Editor,
-- and either tick "approved" to true on ones you want live, or delete
-- rows you don't want at all.

-- D.V.C.I. tap-to-approve links (no secrets in this part — safe to run
-- and safe to keep in the repo). Pairs with a separate, NOT-committed
-- script that wires up the Discord notification itself, since that one
-- contains your private webhook URL.

create extension if not exists pgcrypto;

alter table comments add column if not exists approval_token uuid not null default gen_random_uuid();

-- Approves a pending comment, but only if the token matches — the token
-- is a random UUID emailed/messaged only to the site owner, so this is
-- safe to expose to anon even though anyone technically has "permission"
-- to call it: without the right token for the right row, it's a no-op.
create or replace function approve_comment_by_token(p_id bigint, p_token uuid)
returns boolean
language plpgsql
security definer
as $$
declare
  affected integer;
begin
  update comments
  set approved = true
  where id = p_id and approval_token = p_token and approved = false;
  get diagnostics affected = row_count;
  return affected > 0;
end;
$$;

create or replace function reject_comment_by_token(p_id bigint, p_token uuid)
returns boolean
language plpgsql
security definer
as $$
declare
  affected integer;
begin
  delete from comments
  where id = p_id and approval_token = p_token and approved = false;
  get diagnostics affected = row_count;
  return affected > 0;
end;
$$;

grant execute on function approve_comment_by_token(bigint, uuid) to anon, authenticated;
grant execute on function reject_comment_by_token(bigint, uuid) to anon, authenticated;
