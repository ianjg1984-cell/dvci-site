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
