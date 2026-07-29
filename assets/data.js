/* D.V.C.I. — Dictionary of Very Curious Idioms
   Entry data. Each entry is a good-faith summary of the leading etymological
   research (OED, Phrase Finder, Brewer's Dictionary of Phrase & Fable, etc.).
   Where scholars disagree or the popular story doesn't hold up, we say so —
   that honesty is the whole point of this project. */

const IDIOMS = [
  {
    id: "steal-thunder",
    phrase: "Steal someone's thunder",
    meaning: "To take credit for someone else's idea, or to upstage them.",
    category: "Theatre & Performance",
    verdict: "well-documented",
    verdictLabel: "Well Documented",
    story: `In 1704 the playwright John Dennis invented a new stage device — a
    "mustard bowl" of wooden balls rolled together backstage — to simulate the
    sound of thunder for his play <em>Appius and Virginia</em>. The play flopped
    and closed almost immediately. Soon after, Dennis discovered the same
    theatre using his thunder technique for a production of <em>Macbeth</em>.
    Furious, he is reported to have stood up in the audience and shouted,
    "That is my thunder, by God; the villains will not play my play, but they
    steal my thunder!"`,
    mythVsFact: null,
    source: "First recorded anecdote traced to Dennis via Joseph Addison and later cited by Brewer's Dictionary of Phrase and Fable."
  },
  {
    id: "riot-act",
    phrase: "Read the riot act",
    meaning: "To reprimand someone forcefully, warning them to stop misbehaving.",
    category: "Law & Government",
    verdict: "well-documented",
    verdictLabel: "Well Documented",
    story: `This one isn't a metaphor at all — it's a literal law. The Riot Act
    of 1714 gave British authorities the power to declare any gathering of
    twelve or more people unlawful. An official had to read a specific,
    formally worded proclamation aloud; if the crowd didn't disperse within an
    hour of hearing it, officers could use force to break it up. Everyday use
    of the phrase to mean "a stern telling-off" took hold in the 1800s.`,
    mythVsFact: null,
    source: "Riot Act 1714 (1 Geo.1 St.2 c.5), UK Parliamentary Archives."
  },
  {
    id: "hook-or-crook",
    phrase: "By hook or by crook",
    meaning: "By whatever means necessary, fair or otherwise.",
    category: "Medieval Life",
    verdict: "disputed",
    verdictLabel: "Likely Origin (Disputed)",
    story: `The leading theory dates to medieval England, where peasants were
    legally permitted to gather firewood from common land — but only deadwood
    they could reach and pull down using a billhook (a curved cutting tool) or
    a shepherd's crook. Anything they could pull down "by hook or by crook"
    was theirs to keep. It's a tidy story with real supporting evidence from
    14th-century manorial records, though a handful of etymologists think it
    may simply be an old alliterative pairing that got a folk story attached
    to it later.`,
    mythVsFact: "The story is plausible and old (the phrase appears in Wycliffe's writing from the 1380s), but no single document proves the firewood custom is definitely where it started rather than just where it was popularised.",
    source: "Cited in Wycliffe's Controversial Tracts (c.1380); manorial common-land customs documented in English legal history."
  },
  {
    id: "sent-to-coventry",
    phrase: "Sent to Coventry",
    meaning: "To be deliberately ignored or ostracised by a group.",
    category: "War & Conflict",
    verdict: "well-documented",
    verdictLabel: "Well Documented",
    story: `The best-supported explanation comes from the English Civil War.
    Coventry was a stronghold of Parliamentary support, and captured Royalist
    soldiers were sometimes sent there to be held. Local residents — hostile
    to the Royalist cause — refused to speak to or associate with the
    prisoners at all. The historian Edward Hyde, Earl of Clarendon, records
    something very close to this practice in his 17th-century account of the
    rebellion.`,
    mythVsFact: null,
    source: "Edward Hyde, Earl of Clarendon, The History of the Rebellion and Civil Wars in England (1717 posthumous publication)."
  },
  {
    id: "cold-shoulder",
    phrase: "Give someone the cold shoulder",
    meaning: "To deliberately treat someone with unfriendly indifference.",
    category: "Food & Dining",
    verdict: "disputed",
    verdictLabel: "Likely Origin (Disputed)",
    story: `Sir Walter Scott is the first writer we can find using this phrase
    in print, in his 1816 novel <em>The Antiquary</em>. The idea is that an
    unwelcome guest would be served a cold shoulder of mutton — a cheap,
    unceremonious leftover — instead of a hot meal, as a not-so-subtle hint
    that they'd overstayed their welcome. It's often repeated as settled fact,
    but historians have never found documentary proof that this was an actual
    dining custom rather than an image Scott simply invented for effect.`,
    mythVsFact: "It's frequently stated as historical fact that this was a real, widespread custom. In truth, Scott's novel is the earliest evidence we have — he may have been drawing on a genuine practice, or he may have coined a vivid figure of speech that later got mistaken for social history.",
    source: "Sir Walter Scott, The Antiquary (1816)."
  },
  {
    id: "red-handed",
    phrase: "Caught red-handed",
    meaning: "Caught in the act of doing something wrong.",
    category: "Law & Government",
    verdict: "well-documented",
    verdictLabel: "Well Documented",
    story: `This one comes from Scots law. From at least the 15th century,
    "red hand" appears in Scottish legal texts describing a criminal — usually
    a poacher or a murderer — caught with blood literally still on their
    hands, which was treated as decisive proof of guilt. The phrase moved into
    general English usage in the 19th century, most notably popularised by
    Sir Walter Scott (again) in his 1819 novel <em>Ivanhoe</em>.`,
    mythVsFact: null,
    source: "Scottish legal records from the 15th century onward; popularised in Sir Walter Scott, Ivanhoe (1819)."
  },
  {
    id: "curry-favour",
    phrase: "Curry favour",
    meaning: "To ingratiate yourself with someone through flattery, especially for personal gain.",
    category: "Language Itself",
    verdict: "well-documented",
    verdictLabel: "Well Documented",
    story: `This is a fantastic example of a phrase mutating through
    mishearing. It comes from a 14th-century French satirical poem, the
    <em>Roman de Fauvel</em>, about a cunning, corrupt chestnut-coloured horse
    named Fauvel. To "curry Fauvel" — literally, to groom the horse — became a
    figure of speech for sucking up to a powerful but flawed authority.
    "Fauvel" doesn't mean anything on its own in English, so over time
    English speakers reshaped it into a word that did: "favour."`,
    mythVsFact: null,
    source: "Roman de Fauvel (c.1310); tracked in the Oxford English Dictionary's entry for 'curry'."
  },
  {
    id: "pull-out-stops",
    phrase: "Pull out all the stops",
    meaning: "To make a maximum, unrestrained effort.",
    category: "Music",
    verdict: "well-documented",
    verdictLabel: "Well Documented",
    story: `A rare case of an idiom with a completely literal, mechanical
    origin. On a pipe organ, "stops" are knobs that control which ranks of
    pipes are allowed to sound — pushed in, they silence a set of pipes;
    pulled out, they let them play. Pulling out every stop unleashes the
    organ's full volume and every tonal colour it has. The metaphorical use
    for giving something everything you've got dates to the mid-1800s.`,
    mythVsFact: null,
    source: "Oxford English Dictionary, entry for 'stop, n.', sense relating to organ mechanics."
  },
  {
    id: "beyond-the-pale",
    phrase: "Beyond the pale",
    meaning: "Outside the bounds of acceptable behaviour.",
    category: "History & Empire",
    verdict: "disputed",
    verdictLabel: "Likely Origin (Disputed)",
    story: `"Pale" here means a fence made of wooden stakes (from the Latin
    <em>palus</em>, a stake) — it's the same root as "impale." "The Pale" was
    used as a name for several real English-controlled territories with a
    boundary fence or ditch, most famously the area around Dublin under
    English rule in the late medieval and Tudor periods. To be "beyond the
    pale" meant being outside that zone of English law and control — and, to
    the English who coined the phrase, outside civilisation as they saw it.
    Historians debate exactly which "Pale" (Ireland, or the English-held Pale
    of Calais) the idiom first referred to.`,
    mythVsFact: null,
    source: "Documented use of 'the English Pale' in Irish administrative records from the 14th–16th centuries."
  },
  {
    id: "bite-the-bullet",
    phrase: "Bite the bullet",
    meaning: "To face an unpleasant or painful situation with courage.",
    category: "Popular Myths",
    verdict: "myth",
    verdictLabel: "Popular Myth",
    story: `The story everyone tells is that battlefield surgeons, lacking
    anaesthetic, gave wounded soldiers a bullet to clench between their teeth
    during amputations. It's vivid, but there's essentially no historical
    evidence for it — surgical accounts from the era describe leather straps
    or wooden gags, not bullets, and biting down on a metal bullet during
    surgery would risk cracking teeth for no real benefit. The earliest solid
    citation is Rudyard Kipling's 1891 novel <em>The Light That Failed</em>,
    used in a general sense of stoic endurance, not a specific medical scene.
    A related, older phrase — "chew a bullet" — shows up around 1796 with a
    similar meaning, suggesting the image was always more figurative than
    literal.`,
    mythVsFact: "The battlefield-amputation story is almost certainly folklore built backward from the phrase, not a documented practice.",
    source: "Rudyard Kipling, The Light That Failed (1891); earlier 'chew a bullet' cited from 1796."
  },
  {
    id: "ps-and-qs",
    phrase: "Mind your Ps and Qs",
    meaning: "Behave properly; be on your best manners.",
    category: "Still Unsolved",
    verdict: "mystery",
    verdictLabel: "Still a Mystery",
    story: `Nobody actually knows where this one comes from, despite no
    shortage of confident-sounding theories. Candidates include: pub
    landlords tracking pints and quarts on a tally slate; apprentice
    typesetters needing to mind the difference between mirror-image lowercase
    "p" and "q" blocks; and French dancing masters telling students to watch
    their "pieds" (feet) and "queues" (wigs). The earliest known print use is
    from 1779, in a general sense of "mind your manners" — with no explanation
    attached, which is exactly the problem. Take any confident answer you hear
    with a large pinch of salt.`,
    mythVsFact: "Every explanation you've probably heard is a guess, including the printer's-type one, which is the most commonly repeated but has no documentary backing.",
    source: "Earliest citation: 1779 correspondence, cited in the Oxford English Dictionary; no attributed origin story survives from the period."
  },
  {
    id: "raining-cats-and-dogs",
    phrase: "Raining cats and dogs",
    meaning: "Raining extremely heavily.",
    category: "Still Unsolved",
    verdict: "mystery",
    verdictLabel: "Still a Mystery",
    story: `A genuine etymological mystery, and one of the most-asked-about
    idioms in English. You may have heard that in 17th-century towns, poor
    drainage meant heavy rain would wash the bodies of dead animals through
    the streets, making it look like it had "rained" cats and dogs — this
    image does appear in Jonathan Swift's satirical writing, but as a
    description of a flood's aftermath, not as an explanation of the phrase's
    origin. Other theories point to Norse mythology (cats influencing weather,
    dogs accompanying storm gods) or a mangled version of the obsolete Greek
    word "catadupe," meaning waterfall. None has ever been confirmed.`,
    mythVsFact: "The 'dead animals in the street' story is often told as the definitive origin. It isn't — it's a vivid image from a related but separate piece of 18th-century writing, not a documented etymology.",
    source: "Jonathan Swift, 'A Description of a City Shower' (1710) and Complete Collection of Genteel and Ingenious Conversation (1738)."
  },
  {
    id: "turn-a-blind-eye",
    phrase: "Turn a blind eye",
    meaning: "To deliberately ignore something you know is happening.",
    category: "Popular Myths",
    verdict: "myth",
    verdictLabel: "Popular Myth (Probably)",
    story: `The popular story is wonderfully specific: at the Battle of
    Copenhagen in 1801, Admiral Horatio Nelson — blind in one eye — was signalled
    by his superior to withdraw. He supposedly raised his telescope to his
    blind eye, said "I really do not see the signal," and pressed on to
    victory. It's a great anecdote, and it may contain a kernel of truth, but
    the phrase itself isn't recorded in general use until decades after
    Nelson's death, and the earliest detailed tellings of the story read more
    like embellished naval legend than contemporary reporting.`,
    mythVsFact: "The Nelson anecdote is widely repeated as the origin, but the timeline doesn't hold up well — general use of the idiom postdates the alleged event by a wide enough margin that historians treat the connection as unproven, flattering folklore rather than settled fact.",
    source: "Robert Southey, The Life of Nelson (1813), the earliest well-known telling — written 12 years after the battle it describes."
  },
  {
    id: "cat-out-of-the-bag",
    phrase: "Let the cat out of the bag",
    meaning: "To reveal a secret, often accidentally.",
    category: "Still Unsolved",
    verdict: "mystery",
    verdictLabel: "Still a Mystery",
    story: `Two competing legends explain this one, and neither has solid
    proof behind it. The market-fraud theory says dishonest traders would
    sell a sack supposedly containing a piglet, but secretly swap in a
    worthless cat — the fraud exposed the moment the bag was opened (this
    theory also tries to explain "a pig in a poke"). The naval theory points
    to the cat o' nine tails whip being kept in a cloth bag aboard ship, with
    "letting the cat out of the bag" meaning a punishment was about to be
    revealed. The earliest recorded use, from 1760, is a book review
    complaining that the ending had been given away — already a fairly
    abstract, secret-revealing sense, with no mention of literal cats, pigs,
    or whips.`,
    mythVsFact: "Both the market-fraud and naval-whip stories are frequently presented as fact. Neither is backed by evidence from the period; the earliest real citation is purely figurative.",
    source: "The London Magazine, 1760 book review, cited in the Oxford English Dictionary."
  },
  {
    id: "swing-a-cat",
    phrase: "No room to swing a cat",
    meaning: "An extremely small or cramped space.",
    category: "Still Unsolved",
    verdict: "disputed",
    verdictLabel: "Likely Origin (Disputed)",
    story: `A popular and grim theory holds that "cat" here refers to the cat
    o' nine tails, the multi-tailed whip used for punishment in the Royal
    Navy — a full swing of the lash needed real clearance, hard to come by
    belowdecks. It's a plausible story given how many cramped-ship idioms
    exist, but there's no direct documentary link tying this specific phrase
    to that specific object; it may equally be a simple, literal image of a
    room too small to swing an actual cat by the tail (an old and unpleasant
    country pastime, sadly attested elsewhere in period writing).`,
    mythVsFact: null,
    source: "Both theories appear in 19th-century dictionaries of naval and colloquial slang, without a definitive citation for either."
  },
  {
    id: "toe-the-line",
    phrase: "Toe the line",
    meaning: "To conform to a rule or standard.",
    category: "Sport & Military",
    verdict: "disputed",
    verdictLabel: "Likely Origin (Disputed)",
    story: `Several institutions each had a literal line for people to put
    their toes on, and any of them could be the true origin. Runners lined up
    with toes at a starting line before a race. Soldiers on parade were drilled
    to stand with toes exactly aligned along a mark on the ground. The British
    House of Commons is popularly (though shakily) said to have chamber floor
    lines set two sword-lengths apart that members were not to cross during
    debate. The military drill and athletics senses both have solid 19th-century
    citations; the swords-in-Parliament version is much harder to verify.`,
    mythVsFact: "The 'sword's length in Parliament' version is the one people repeat most, but it rests on far shakier evidence than the plainer military and sporting explanations.",
    source: "Early 19th-century military drill manuals and sporting press citations, per the Oxford English Dictionary."
  },
  {
    id: "skeleton-in-the-cupboard",
    phrase: "A skeleton in the cupboard",
    meaning: "A shameful secret kept hidden, usually within a family.",
    category: "Still Unsolved",
    verdict: "disputed",
    verdictLabel: "Likely Origin (Disputed)",
    story: `First recorded in English in 1816, in an essay discussing family
    secrets, well before the more American "skeleton in the closet" variant
    existed. One appealing theory ties it to the early 19th-century medical
    world: dissection for anatomical study was tightly restricted and
    unpopular, so doctors who owned an actual human skeleton for teaching
    purposes sometimes had to keep it hidden away, quite literally a guilty
    secret behind a cupboard door. It's a neat fit for the period, but no
    single source confirms this practical explanation over a more general,
    purely figurative reading of the phrase.`,
    mythVsFact: null,
    source: "William Hendry Stowell, essay of 1816, cited as the earliest known appearance by the Oxford English Dictionary."
  },
  {
    id: "sleep-tight",
    phrase: "Sleep tight",
    meaning: "A wish for someone to sleep well.",
    category: "Popular Myths",
    verdict: "myth",
    verdictLabel: "Popular Myth",
    story: `A widely shared explanation claims that old rope-strung beds
    needed their ropes tightened periodically for a firm, comfortable sleep
    surface — hence "sleep tight." It's a charming image, but etymologists
    have found no supporting evidence connecting the phrase to bed maintenance.
    Far more likely: "tight" is simply an old adverbial use meaning "soundly"
    or "properly" (as in "hold tight" or "sit tight"), applied to sleep the
    same way it was applied to lots of other 19th-century verbs.`,
    mythVsFact: "The rope-bed explanation is one of the most-repeated idiom origin stories online and in classrooms. It has no documented basis — 'tight' meaning 'soundly' already explains the phrase without needing a literal bed-rope story at all.",
    source: "Oxford English Dictionary, adverbial sense of 'tight' meaning 'soundly, properly'; earliest 'sleep tight' citations from 19th-century American diaries, later adopted into British usage."
  }
];

const CATEGORIES = [...new Set(IDIOMS.map((i) => i.category))].sort();
