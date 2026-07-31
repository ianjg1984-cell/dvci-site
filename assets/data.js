/* D.V.C.I.: Dictionary of Very Curious Idioms
   Entry data. Each entry is a good-faith summary of the leading etymological
   research (OED, Phrase Finder, Brewer's Dictionary of Phrase & Fable, etc.).
   Where scholars disagree or the popular story doesn't hold up, we say so.
   That honesty is the whole point of this project. */

const IDIOMS = [
  {
    id: "steal-thunder",
    phrase: "Steal someone's thunder",
    meaning: "To take credit for someone else's idea, or to upstage them.",
    category: "Theatre & Performance",
    verdict: "well-documented",
    verdictLabel: "Well Documented",
    story: `In 1704 the playwright John Dennis invented a new stage device, a
    "mustard bowl" of wooden balls rolled together backstage, to simulate the
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
    story: `This one isn't a metaphor at all. It's a literal law. The Riot Act
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
    legally permitted to gather firewood from common land, but only deadwood
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
    soldiers were sometimes sent there to be held. Local residents, hostile
    to the Royalist cause, refused to speak to or associate with the
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
    unwelcome guest would be served a cold shoulder of mutton, a cheap,
    unceremonious leftover, instead of a hot meal, as a not-so-subtle hint
    that they'd overstayed their welcome. It's often repeated as settled fact,
    but historians have never found documentary proof that this was an actual
    dining custom rather than an image Scott simply invented for effect.`,
    mythVsFact: "It's frequently stated as historical fact that this was a real, widespread custom. In truth, Scott's novel is the earliest evidence we have. He may have been drawing on a genuine practice, or he may have coined a vivid figure of speech that later got mistaken for social history.",
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
    "red hand" appears in Scottish legal texts describing a criminal (usually
    a poacher or a murderer) caught with blood literally still on their
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
    named Fauvel. To "curry Fauvel," literally to groom the horse, became a
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
    pipes are allowed to sound: pushed in, they silence a set of pipes, and
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
    <em>palus</em>, a stake), the same root as "impale." "The Pale" was
    used as a name for several real English-controlled territories with a
    boundary fence or ditch, most famously the area around Dublin under
    English rule in the late medieval and Tudor periods. To be "beyond the
    pale" meant being outside that zone of English law and control, and to
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
    evidence for it: surgical accounts from the era describe leather straps
    or wooden gags, not bullets, and biting down on a metal bullet during
    surgery would risk cracking teeth for no real benefit. The earliest solid
    citation is Rudyard Kipling's 1891 novel <em>The Light That Failed</em>,
    used in a general sense of stoic endurance, not a specific medical scene.
    A related, older phrase, "chew a bullet," shows up around 1796 with a
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
    from 1779, in a general sense of "mind your manners," with no explanation
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
    the streets, making it look like it had "rained" cats and dogs. This
    image does appear in Jonathan Swift's satirical writing, but as a
    description of a flood's aftermath, not as an explanation of the phrase's
    origin. Other theories point to Norse mythology (cats influencing weather,
    dogs accompanying storm gods) or a mangled version of the obsolete Greek
    word "catadupe," meaning waterfall. None has ever been confirmed.`,
    mythVsFact: "The 'dead animals in the street' story is often told as the definitive origin. It isn't. It's a vivid image from a related but separate piece of 18th-century writing, not a documented etymology.",
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
    Copenhagen in 1801, Admiral Horatio Nelson, blind in one eye, was signalled
    by his superior to withdraw. He supposedly raised his telescope to his
    blind eye, said "I really do not see the signal," and pressed on to
    victory. It's a great anecdote, and it may contain a kernel of truth, but
    the phrase itself isn't recorded in general use until decades after
    Nelson's death, and the earliest detailed tellings of the story read more
    like embellished naval legend than contemporary reporting.`,
    mythVsFact: "The Nelson anecdote is widely repeated as the origin, but the timeline doesn't hold up well: general use of the idiom postdates the alleged event by a wide enough margin that historians treat the connection as unproven, flattering folklore rather than settled fact.",
    source: "Robert Southey, The Life of Nelson (1813), the earliest well-known telling, written 12 years after the battle it describes."
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
    worthless cat, with the fraud exposed the moment the bag was opened (this
    theory also tries to explain "a pig in a poke"). The naval theory points
    to the cat o' nine tails whip being kept in a cloth bag aboard ship, with
    "letting the cat out of the bag" meaning a punishment was about to be
    revealed. The earliest recorded use, from 1760, is a book review
    complaining that the ending had been given away, already a fairly
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
    Navy. A full swing of the lash needed real clearance, hard to come by
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
    surface, hence "sleep tight." It's a charming image, but etymologists
    have found no supporting evidence connecting the phrase to bed maintenance.
    Far more likely: "tight" is simply an old adverbial use meaning "soundly"
    or "properly" (as in "hold tight" or "sit tight"), applied to sleep the
    same way it was applied to lots of other 19th-century verbs.`,
    mythVsFact: "The rope-bed explanation is one of the most-repeated idiom origin stories online and in classrooms. It has no documented basis. The word 'tight' meaning 'soundly' already explains the phrase without needing a literal bed-rope story at all.",
    source: "Oxford English Dictionary, adverbial sense of 'tight' meaning 'soundly, properly'; earliest 'sleep tight' citations from 19th-century American diaries, later adopted into British usage."
  },
  {
    id: "in-a-pickle",
    phrase: "In a pickle",
    meaning: "In a difficult, awkward, or messy situation.",
    category: "Literature",
    verdict: "well-documented",
    verdictLabel: "Well Documented",
    story: `One of the older idioms here, and one of the best sourced.
    Shakespeare used it directly in <em>The Tempest</em> (1610), when King
    Alonso asks the drunken jester Trinculo, "How camest thou in this
    pickle?" The image comes from the Dutch phrase "in de pekel zitten,"
    literally "to sit in the pickling brine," a sharp, vinegary liquid used
    for preserving food, extended metaphorically to describe being stuck in
    a sour, unpleasant situation.`,
    mythVsFact: null,
    source: "William Shakespeare, The Tempest (1610), Act V Scene I; Dutch idiom 'in de pekel zitten' cited by the Oxford English Dictionary."
  },
  {
    id: "coals-to-newcastle",
    phrase: "Taking coals to Newcastle",
    meaning: "Doing something pointless or superfluous.",
    category: "Trade & Industry",
    verdict: "well-documented",
    verdictLabel: "Well Documented",
    story: `Newcastle-upon-Tyne sat at the centre of England's coal-mining
    and coal-exporting industry from at least the 16th century onward,
    shipping coal to London and beyond. Bringing coal to a city that already
    produced and exported enormous quantities of it was the definition of a
    wasted errand. The phrase is recorded in print from the 1600s and
    needed no explaining even then, since Newcastle's coal trade was common
    knowledge across England.`,
    mythVsFact: null,
    source: "Recorded from the 17th century; referenced in period trade writing about Newcastle's coal exports, cited in the Oxford English Dictionary."
  },
  {
    id: "true-colours",
    phrase: "Show your true colours",
    meaning: "To reveal your real character or intentions, especially after hiding them.",
    category: "Sailing & the Sea",
    verdict: "well-documented",
    verdictLabel: "Well Documented",
    story: `"Colours" is an old nautical term for a ship's national flag.
    Ships, privateers and naval vessels especially, would sometimes fly a
    false flag to approach a target without alarming it, only hoisting their
    real, or "true," colours at the last moment before attacking. The trick
    was such a well-known piece of naval deception that it produced a
    general-purpose idiom for someone who has been concealing their real
    intentions.`,
    mythVsFact: null,
    source: "Documented naval practice from the 17th–18th centuries; cited in maritime history and the Oxford English Dictionary's entry for 'colour, n.'"
  },
  {
    id: "three-sheets-to-the-wind",
    phrase: "Three sheets to the wind",
    meaning: "Very drunk.",
    category: "Sailing & the Sea",
    verdict: "well-documented",
    verdictLabel: "Well Documented",
    story: `A "sheet" on a sailing ship isn't a sail. It's a rope that
    controls the angle of a sail. If a sheet comes loose ("to the wind"),
    that sail flaps freely and the ship lists and lurches unpredictably.
    With three sheets loose at once, a ship would stagger about exactly like
    a person struggling to walk in a straight line, a comparison sailors
    were already making by the early 1800s.`,
    mythVsFact: null,
    source: "Early 19th-century nautical slang, cited in the Oxford English Dictionary's entry for 'sheet, n.'"
  },
  {
    id: "cut-of-your-jib",
    phrase: "I don't like the cut of your jib",
    meaning: "To dislike (or like) someone based on their general appearance or manner.",
    category: "Sailing & the Sea",
    verdict: "well-documented",
    verdictLabel: "Well Documented",
    story: `A ship's jib is a triangular sail set at the front of the
    vessel, and its particular shape, its "cut," varied noticeably between
    different nations' shipbuilders. Experienced sailors could identify a
    ship's origin, and guess whether it was friendly or hostile, just by
    studying the cut of its jib from a distance, long before the vessel was
    close enough to show its flag. Lord Byron used the phrase figuratively
    in print in the 1820s, and it stuck.`,
    mythVsFact: null,
    source: "Lord Byron, Don Juan (1823); nautical usage documented in the Oxford English Dictionary's entry for 'jib, n.'"
  },
  {
    id: "push-the-boat-out",
    phrase: "Push the boat out",
    meaning: "To spend generously, especially to celebrate something.",
    category: "Sailing & the Sea",
    verdict: "well-documented",
    verdictLabel: "Well Documented",
    story: `Thought to come from the literal, communal effort of launching a
    boat: pushing a beached vessel out into the water took a group effort,
    and it became customary for whoever's boat it was to stand the group a
    round of drinks afterwards in thanks. By the early 20th century,
    "pushing the boat out" had become general British slang for spending
    freely on a celebration, whether or not any actual boat was involved.`,
    mythVsFact: null,
    source: "Documented in British nautical and colloquial slang dictionaries from the early-to-mid 20th century."
  },
  {
    id: "break-the-ice",
    phrase: "Break the ice",
    meaning: "To ease initial social tension or awkwardness, especially between strangers.",
    category: "Sailing & the Sea",
    verdict: "well-documented",
    verdictLabel: "Well Documented",
    story: `Before icebreaker ships, frozen harbours and rivers could
    completely cut off a town from trade and travel. Small boats specially
    reinforced to break a path through surface ice were sent ahead to open
    the way for other vessels, a literal "breaking of the ice" that let
    normal business resume. Writers were using it figuratively, for
    smoothing over the "frozen" awkwardness of a first meeting, as early as
    the late 1500s.`,
    mythVsFact: null,
    source: "Figurative use documented from the late 16th century, cited in the Oxford English Dictionary's entry for 'ice, n.'"
  },
  {
    id: "full-monty",
    phrase: "The full Monty",
    meaning: "The whole thing; everything, with nothing left out.",
    category: "Slang & Everyday Speech",
    verdict: "disputed",
    verdictLabel: "Likely Origin (Disputed)",
    story: `A favourite of etymologists precisely because nobody can settle
    it. Leading candidates include: Montague Burton, the tailoring chain,
    where ordering "the full Monty" meant buying a complete three-piece suit
    rather than just a jacket; Field Marshal Bernard Montgomery's reported
    insistence on a full English breakfast during WWII military campaigns;
    and an old card game called "Monte." The phrase only shows up clearly in
    print from the 1980s–90s, well after any of these possible sources,
    which makes tracing the true root very difficult.`,
    mythVsFact: "There is no confirmed link to Montague Burton or Field Marshal Montgomery, however often those stories are repeated as settled fact. The Oxford English Dictionary lists the origin as unknown.",
    source: "Oxford English Dictionary, entry for 'monty, n.', origin listed as uncertain."
  },
  {
    id: "bobs-your-uncle",
    phrase: "Bob's your uncle",
    meaning: "There you go; it's as simple as that.",
    category: "Slang & Everyday Speech",
    verdict: "disputed",
    verdictLabel: "Likely Origin (Disputed)",
    story: `The popular story is deliciously specific: in 1887, British
    Prime Minister Robert ("Bob") Cecil, 3rd Marquess of Salisbury,
    appointed his own nephew Arthur Balfour to a string of prestigious
    political posts, prompting cynics to joke that having "Bob as your
    uncle" was all it took to succeed. It's a great story about nepotism,
    but the phrase isn't actually recorded in print until the 1930s,
    decades after the alleged event, so historians can't confirm the
    political scandal is genuinely where it came from, rather than being a
    later folk explanation attached to an already-existing phrase.`,
    mythVsFact: "The Robert Cecil/Arthur Balfour nepotism story is told as definite fact very often. The multi-decade gap between the 1887 event and the phrase's first recorded use makes that link unproven.",
    source: "Earliest citation from the 1930s, per the Oxford English Dictionary; the Salisbury/Balfour anecdote is widely repeated but undocumented as the actual coining event."
  },
  {
    id: "gone-for-a-burton",
    phrase: "Gone for a Burton",
    meaning: "Lost, broken, ruined, or (originally) killed.",
    category: "War & Conflict",
    verdict: "mystery",
    verdictLabel: "Still a Mystery",
    story: `This piece of British slang is best documented in Royal Air
    Force use during the Second World War, where it grimly meant a pilot had
    been killed or a plane destroyed. Where "Burton" itself comes from is
    genuinely unresolved. One theory ties it to adverts for Burton beer,
    brewed in Burton-upon-Trent, implying the missing man had simply "gone to
    the pub." Another points to Burton's, the menswear chain, on the dark
    joke that a dead airman had effectively "gone for" (been measured for)
    his last suit. No wartime source pins down which, if either, is correct.`,
    mythVsFact: null,
    source: "RAF slang documented from World War II service records and slang dictionaries; the specific 'Burton' reference remains unconfirmed."
  },
  {
    id: "sixes-and-sevens",
    phrase: "At sixes and sevens",
    meaning: "In a state of confusion or disarray.",
    category: "Medieval Life",
    verdict: "disputed",
    verdictLabel: "Likely Origin (Disputed)",
    story: `London has a genuinely documented dispute that fits this phrase
    perfectly: in 1484, the Worshipful Company of Merchant Taylors and the
    Worshipful Company of Skinners argued so fiercely over which guild should
    rank sixth and which seventh in the City of London's official order of
    precedence that the Lord Mayor had to intervene, eventually ruling that
    the two companies would alternate the two positions annually, an
    arrangement that continues to this day. It's a wonderful story, but the
    phrase "at six and seven" already existed before 1484 (Chaucer used a
    version of it in the 1380s) with a similar sense of confusion or risk,
    likely from dice games, so the guild dispute may have reinforced an
    existing phrase rather than created it.`,
    mythVsFact: null,
    source: "Livery company precedence dispute documented in City of London records, 1484; earlier Chaucerian usage in Troilus and Criseyde (c.1380s) cited in the Oxford English Dictionary."
  },
  {
    id: "kick-the-bucket",
    phrase: "Kick the bucket",
    meaning: "To die.",
    category: "Popular Myths",
    verdict: "myth",
    verdictLabel: "Popular Myth",
    story: `The most commonly repeated explanation, someone kicking away a
    bucket they were standing on to hang themselves, has no solid
    historical backing as the phrase's actual origin. A more credible theory,
    favoured by Brewer's Dictionary of Phrase and Fable, points to an old
    regional (East Anglian) use of "bucket" for the wooden beam or yoke from
    which slaughtered pigs were hung up by their feet. The animal's death
    spasms would cause it to visibly "kick the bucket." Either way, the
    phrase is recorded from the 1700s, well documented in general use, even
    if the precise picture behind it isn't settled.`,
    mythVsFact: "The 'suicide by kicking away a bucket' story is treated as obvious fact by a lot of people, but it's folklore rather than documented history. The slaughterhouse-beam theory has more circumstantial support, though it too isn't proven beyond doubt.",
    source: "Brewer's Dictionary of Phrase and Fable, entry for 'kick the bucket'; earliest print citations from the 18th century."
  },
  {
    id: "on-the-fiddle",
    phrase: "On the fiddle",
    meaning: "Engaged in petty cheating, fraud, or dishonest dealing, especially for small personal gain.",
    category: "Slang & Everyday Speech",
    verdict: "mystery",
    verdictLabel: "Still a Mystery",
    story: `There's no single confirmed source for this one. One theory
    ties it to naval life: a "fiddle" was a small raised rail around a
    mess-table at sea meant to stop plates and cutlery sliding off in rough
    weather, and sailors trying to fit more food onto their plate than the
    fiddle's edge should really allow gave rise to a general sense of
    "getting a bit extra you're not entitled to." Others link it simply to
    the older use of "fiddle" in thieves' slang to mean a small swindle or
    scam, recorded from the 1700s onward, independent of anything nautical.
    Both are plausible; neither is proven.`,
    mythVsFact: null,
    source: "18th-century thieves' cant and naval slang both use 'fiddle' in related senses; no single definitive origin has been established, per slang dictionaries including Partridge's Dictionary of Slang."
  },
  {
    id: "taking-the-mickey",
    phrase: "Taking the mickey",
    meaning: "To mock, tease, or make fun of someone, often gently.",
    category: "Slang & Everyday Speech",
    verdict: "disputed",
    verdictLabel: "Likely Origin (Disputed)",
    story: `Generally believed to be a softened version of the cruder
    "taking the piss," itself thought to come from Cockney rhyming slang,
    where "Mickey Bliss" rhymes with "piss." Rhyming slang regularly got
    shortened to just its first word, turning "Mickey Bliss" into simply
    "Mickey" or "the mickey," giving speakers a way to say the same thing
    without the crude original. It's a well-supported theory given how
    rhyming slang typically behaves, though, as with a lot of slang,
    nobody wrote down the exact moment it was coined.`,
    mythVsFact: null,
    source: "Cockney rhyming slang pattern documented in Partridge's Dictionary of Slang and Unconventional English; 'Mickey Bliss' cited as the rhyming source for 'mickey.'"
  },
  {
    id: "codswallop",
    phrase: "Codswallop",
    meaning: "Nonsense; rubbish talk.",
    category: "Popular Myths",
    verdict: "myth",
    verdictLabel: "Popular Myth",
    story: `A widely repeated origin story credits Hiram Codd, who in 1872
    patented a fizzy-drink bottle sealed with a glass marble (the
    "Codd-neck bottle"), and claims that beer drinkers dismissively called
    soft drinks "Codd's wallop" ("wallop" being old slang for beer),
    meaning weak, watered-down nonsense by comparison. It's a wonderfully
    specific story, but there's no documented evidence connecting Codd's
    bottle to the phrase at all. "Codswallop" isn't recorded anywhere in
    print until the 1950s and 60s, roughly eighty years after Codd's
    bottle had already gone out of fashion, which makes the tidy origin
    story very hard to believe.`,
    mythVsFact: "The Hiram Codd/fizzy-bottle story circulates as though it's settled etymology, complete with a specific inventor and date. In reality, the multi-decade gap between Codd's bottle and the phrase's actual first recorded use makes the connection almost certainly folk etymology invented after the fact.",
    source: "Oxford English Dictionary, entry for 'codswallop,' earliest citations from the 1950s-60s; no documented link to Hiram Codd's 1872 bottle patent."
  },
  {
    id: "mad-as-a-hatter",
    phrase: "Mad as a hatter",
    meaning: "Completely crazy or eccentric.",
    category: "Health & Medicine",
    verdict: "well-documented",
    verdictLabel: "Well Documented",
    story: `This one has a genuinely grim, well-documented medical
    explanation. From the 18th through the 19th centuries, hat makers used
    mercury nitrate to treat felt in the "carroting" process, working with
    the toxic compound in poorly ventilated workshops for years on end.
    Chronic mercury exposure causes real neurological damage: tremors,
    slurred speech, and irritability, symptoms so associated with the
    trade that "mad as a hatter" and "hatter's shakes" entered common
    usage to describe hat workers. Lewis Carroll's Mad Hatter character in
    <em>Alice in Wonderland</em> (1865) popularised the phrase well after
    it was already established, rather than inventing it.`,
    mythVsFact: null,
    source: "Documented occupational mercury poisoning among hatters, cited in medical and occupational-history literature; phrase recorded in print from the 1830s, predating Lewis Carroll's Alice in Wonderland (1865)."
  },
  {
    id: "elbow-grease",
    phrase: "Elbow grease",
    meaning: "Hard physical effort, especially manual scrubbing or polishing.",
    category: "Trade & Industry",
    verdict: "well-documented",
    verdictLabel: "Well Documented",
    story: `One of the oldest idioms in the repository. The phrase appears
    in print as early as 1672, in John Ray's collection of English
    proverbs, in the form "Elbow grease is the best cure for the rust."
    The joke is straightforward: the only "grease" that will properly
    clean or polish something is the effort of your own arm, not any
    actual lubricant. The image has stayed almost entirely unchanged in
    meaning for over 350 years.`,
    mythVsFact: null,
    source: "John Ray, A Collection of English Proverbs (1672); cited in the Oxford English Dictionary's entry for 'elbow grease.'"
  },
  {
    id: "donkeys-years",
    phrase: "Donkey's years",
    meaning: "A very long time.",
    category: "Language Itself",
    verdict: "well-documented",
    verdictLabel: "Well Documented",
    story: `This one is a pun stacked on a pun. It plays on "donkey's
    ears," which are famously long, and relies on the fact that in
    British non-rhotic pronunciation "ears" and "years" sound close
    enough to swap. It's reinforced by the folk belief that donkeys are
    unusually long-lived animals. The wordplay is recorded in print from
    the 1910s, and the spelling shifted from "ears" to "years" early on,
    cementing the pun as the phrase's permanent form.`,
    mythVsFact: null,
    source: "Earliest citations from the 1910s-20s, cited in the Oxford English Dictionary's entry for 'donkey, n.'"
  },
  {
    id: "at-a-loose-end",
    phrase: "At a loose end",
    meaning: "Having nothing to do; idle.",
    category: "Sailing & the Sea",
    verdict: "disputed",
    verdictLabel: "Likely Origin (Disputed)",
    story: `The leading theory is nautical: sailing ships were held
    together by a huge amount of rigging, and any rope end left untied or
    "loose" was both untidy and a safety hazard. Keeping crews busy
    re-splicing and whipping loose rope ends was reportedly standard
    practice for idle hands aboard ship, giving officers a ready-made task
    whenever there was nothing else to do. It's a plausible, well-fitting
    story for a language already thick with nautical idioms, though firm
    documentary proof tying the phrase's coining specifically to this
    shipboard task, rather than a more general image of a dangling,
    unfinished rope end, is thin.`,
    mythVsFact: null,
    source: "Nautical usage cited in slang and phrase dictionaries; general figurative use documented in English from the 19th century."
  },
  {
    id: "take-the-biscuit",
    phrase: "Take the biscuit",
    meaning: "To be an extreme or most remarkable example of something, usually bad behaviour.",
    category: "Food & Dining",
    verdict: "mystery",
    verdictLabel: "Still a Mystery",
    story: `This is the British sibling of the more international "take
    the cake," and like its cousin, it likely descends from the ancient
    Greek custom of awarding a cake as a prize for endurance or wit, an
    image that resurfaced in various European languages over the
    centuries. Why English speakers in Britain specifically shifted from
    "cake" to "biscuit" isn't documented anywhere; it may simply reflect
    that biscuits were the more everyday teatime item in British
    households. The phrase is recorded in British use from the late 19th
    century, without any surviving explanation of the swap.`,
    mythVsFact: null,
    source: "Recorded in British use from the late 19th century, cited in slang and phrase dictionaries; no documented explanation survives for the cake-to-biscuit substitution."
  },
  {
    id: "bog-standard",
    phrase: "Bog standard",
    meaning: "Ordinary, basic, without any special features.",
    category: "Slang & Everyday Speech",
    verdict: "mystery",
    verdictLabel: "Still a Mystery",
    story: `A genuine puzzle of British engineering slang, first recorded
    in the 1960s. The leading theory is that it's a corruption of "box
    standard," referring to the standard specification sheet kept in a
    box of technical drawings for a piece of machinery, though no
    documentary trail actually connects the two phrases. A less
    flattering rival theory suggests it simply piggybacks on "bog,"
    British slang for a toilet, implying "as basic as it gets." Neither
    theory has solid supporting evidence, and the Oxford English
    Dictionary lists the origin as unknown.`,
    mythVsFact: "The 'box standard' engineering explanation is often repeated as though confirmed, but there's no documented link between the two phrases. It's one of several guesses, not a settled origin.",
    source: "Oxford English Dictionary, entry for 'bog-standard,' origin listed as unknown; earliest citations from British engineering slang in the 1960s."
  },
  {
    id: "over-the-moon",
    phrase: "Over the moon",
    meaning: "Delighted; extremely pleased.",
    category: "Sport & Military",
    verdict: "well-documented",
    verdictLabel: "Well Documented",
    story: `The image traces back to the old English nursery rhyme "Hey
    Diddle Diddle," in which a cow famously jumps over the moon, and
    general figurative use meaning "delighted" is recorded in English
    from the 19th century, well before its most famous modern
    association. That association came from British football culture:
    from the 1970s onward, TV pundits and players used "over the moon"
    (paired with its gloomy opposite, "sick as a parrot") so relentlessly
    in post-match interviews that both phrases became a running joke
    about footballing cliche, even though neither one originated in
    football at all.`,
    mythVsFact: null,
    source: "General figurative use documented in English from the 19th century, referencing the nursery rhyme 'Hey Diddle Diddle'; football-commentary association documented from the 1970s onward in British sports journalism."
  },
  {
    id: "over-the-top",
    phrase: "Over the top",
    meaning: "Excessive, exaggerated, or overdone.",
    category: "War & Conflict",
    verdict: "well-documented",
    verdictLabel: "Well Documented",
    story: `The phrase comes directly from First World War trench
    warfare. "Going over the top" meant literally climbing up and out of
    the trenches to advance across no man's land toward enemy lines, an
    extremely dangerous manoeuvre that exposed soldiers to machine gun
    and artillery fire. By the 1930s, the literal wartime phrase had
    shifted into general use for anything reckless, extreme, or
    excessive.`,
    mythVsFact: null,
    source: "Documented in First World War military accounts from 1914 to 1918; figurative use recorded from the 1930s, cited in the Oxford English Dictionary."
  },
  {
    id: "not-cricket",
    phrase: "That's not cricket",
    meaning: "That's not fair or proper conduct.",
    category: "Sport & Military",
    verdict: "well-documented",
    verdictLabel: "Well Documented",
    story: `Cricket has long carried a reputation in England as the model
    of fair play and gentlemanly conduct, governed by an unwritten code
    of sportsmanship as much as its formal rules. By the 19th century,
    "it isn't cricket" was already being used to describe behaviour, on
    or off the pitch, that violated that sense of fairness, extending
    the game's own ethos into a general-purpose idiom for unsporting or
    underhand conduct.`,
    mythVsFact: null,
    source: "Recorded in figurative use from the mid-to-late 19th century, cited in the Oxford English Dictionary's entry for 'cricket, n.'"
  },
  {
    id: "fit-as-a-fiddle",
    phrase: "Fit as a fiddle",
    meaning: "In excellent health or condition.",
    category: "Music",
    verdict: "well-documented",
    verdictLabel: "Well Documented",
    story: `This one is older than it looks, and "fit" originally didn't
    mean healthy at all. The phrase is recorded as early as 1616 as "as
    fine as a fiddle," using "fine" and later "fit" in their older sense
    of well-suited, well-arranged, or in good working order, the same
    sense that describes a well-tuned instrument. Over the following
    centuries the phrase narrowed specifically to physical health, its
    current meaning.`,
    mythVsFact: null,
    source: "Earliest recorded form 'as fine as a fiddle' from 1616, cited in the Oxford English Dictionary's entry for 'fiddle, n.'"
  },
  {
    id: "splice-the-mainbrace",
    phrase: "Splice the mainbrace",
    meaning: "To have a drink, especially to celebrate.",
    category: "Sailing & the Sea",
    verdict: "well-documented",
    verdictLabel: "Well Documented",
    story: `A literal, physically demanding piece of Royal Navy work.
    The mainbrace was a crucial rope controlling the mainsail, and
    repairing or "splicing" it after damage in battle or bad weather was
    one of the most difficult jobs aboard a sailing warship. Crews who
    completed the repair were traditionally rewarded with an extra
    ration of rum, and the order to "splice the mainbrace" eventually
    became naval shorthand for authorising a drink, regardless of
    whether any actual rope was involved.`,
    mythVsFact: null,
    source: "Documented Royal Navy custom from at least the 18th century, cited in naval history and slang dictionaries."
  },
  {
    id: "show-a-leg",
    phrase: "Show a leg",
    meaning: "Get out of bed; get moving.",
    category: "Sailing & the Sea",
    verdict: "well-documented",
    verdictLabel: "Well Documented",
    story: `A genuine Royal Navy wake-up call. When women were permitted
    to stay aboard ship while docked in port, the boatswain's morning
    call for the crew to rise became a problem: a female visitor was
    allowed to remain in the hammock while the men had to get up and
    begin work. "Show a leg" let the watch tell at a glance whose leg
    was poking out, smooth and stockinged meant stay put, hairy and bare
    meant get moving, without an argument at dawn.`,
    mythVsFact: null,
    source: "Documented Royal Navy custom from the 18th and 19th centuries, cited in naval history and slang dictionaries."
  },
  {
    id: "cut-and-run",
    phrase: "Cut and run",
    meaning: "To leave quickly, especially to escape a difficult situation.",
    category: "Sailing & the Sea",
    verdict: "well-documented",
    verdictLabel: "Well Documented",
    story: `Another literal piece of sailing-ship practice. A ship's
    anchor was normally hauled up slowly, but in an emergency, an
    approaching enemy vessel, a sudden storm, there wasn't always time.
    Crews would simply cut the anchor cable and sail away immediately,
    sacrificing the anchor to make a fast escape. The phrase carried
    that same sense of abandoning something valuable to get away
    quickly into general English.`,
    mythVsFact: null,
    source: "Documented nautical usage from the 17th and 18th centuries, cited in the Oxford English Dictionary's entry for 'cut, v.'"
  },
  {
    id: "batten-down-the-hatches",
    phrase: "Batten down the hatches",
    meaning: "To prepare for a difficulty or crisis.",
    category: "Sailing & the Sea",
    verdict: "well-documented",
    verdictLabel: "Well Documented",
    story: `A straightforwardly literal piece of seamanship. Before a
    storm, a ship's hatches, the openings in the deck, were sealed with
    wooden strips called battens and waterproof tarpaulins to stop waves
    from flooding the compartments below. The order to "batten down the
    hatches" prepared the ship for whatever was coming, and the phrase
    carried that same brace-for-impact meaning into everyday use.`,
    mythVsFact: null,
    source: "Documented nautical usage from the 19th century, cited in the Oxford English Dictionary's entry for 'batten, v.'"
  },
  {
    id: "devil-and-the-deep-blue-sea",
    phrase: "Between the devil and the deep blue sea",
    meaning: "Stuck between two equally bad or difficult choices.",
    category: "Sailing & the Sea",
    verdict: "disputed",
    verdictLabel: "Likely Origin (Disputed)",
    story: `A popular nautical explanation claims that "the devil" was
    sailors' nickname for a particular seam in a wooden ship's hull, an
    awkward one near the waterline that was especially difficult and
    dangerous to caulk while at sea, leaving a sailor working on it
    trapped between that seam and the ocean itself. It's a vivid,
    plausible-sounding story, but there's no solid documentary evidence
    that shipbuilders or sailors actually used "the devil" as a
    technical term for any specific seam. The phrase may simply be a
    general figurative pairing of two dreaded things, without a literal
    nautical object behind it at all.`,
    mythVsFact: "The 'devil seam' explanation is widely repeated as settled maritime fact, but no period shipbuilding or nautical source has been found actually using 'the devil' as a name for a hull seam. It's treated by most etymologists as an appealing but unproven folk explanation.",
    source: "General figurative use documented from the 17th century onward; the 'devil seam' theory is discussed, and disputed, in nautical phrase histories and the Oxford English Dictionary."
  },
  {
    id: "cock-and-bull-story",
    phrase: "A cock and bull story",
    meaning: "An elaborate, implausible tale.",
    category: "Still Unsolved",
    verdict: "disputed",
    verdictLabel: "Likely Origin (Disputed)",
    story: `One theory ties this directly to Stony Stratford, an English
    coaching town on the old London-to-Holyhead road, where two rival
    coaching inns, The Cock and The Bull, were supposedly the source of
    exaggerated traveller's gossip that grew taller with every retelling
    between the two. A competing, older theory points to a general folk
    tradition of fables featuring talking animals, cocks and bulls among
    them, as a byword for fantastical nonsense long before the Stony
    Stratford inns existed. Both theories have real supporting evidence,
    and etymologists remain divided on which came first.`,
    mythVsFact: null,
    source: "Recorded in English from the early 17th century; both the Stony Stratford inn-rivalry theory and the older fable-tradition theory are discussed in phrase-history references including Brewer's Dictionary of Phrase and Fable."
  },
  {
    id: "gordon-bennett",
    phrase: "Gordon Bennett!",
    meaning: "An exclamation of surprise, frustration, or exasperation.",
    category: "Still Unsolved",
    verdict: "mystery",
    verdictLabel: "Still a Mystery",
    story: `Nobody can say for certain who, or what, this "Gordon
    Bennett" actually refers to. One theory points to James Gordon
    Bennett Jr., a real, famously flamboyant and scandal-prone American
    newspaper publisher of the late 19th century, whose outrageous
    public behaviour supposedly made his name a byword for exclaiming at
    something outrageous. Another theory treats it as simply a
    euphemistic, rhyming substitute for an oath ("gorblimey" or
    something cruder), invented to avoid actual swearing rather than
    referring to any real person at all. The exclamation is recorded
    from the early 20th century, without a documented explanation
    attached.`,
    mythVsFact: "The James Gordon Bennett Jr. story is often repeated as though confirmed, but there is no direct documentary link between the real publisher and the British exclamation. It remains one of several plausible guesses, not a settled origin.",
    source: "Earliest citations from the early-to-mid 20th century, cited in slang dictionaries including Partridge's Dictionary of Slang; no attributed origin story survives from the period."
  },
  {
    id: "chuffed-to-bits",
    phrase: "Chuffed to bits",
    meaning: "Extremely pleased or delighted.",
    category: "Still Unsolved",
    verdict: "mystery",
    verdictLabel: "Still a Mystery",
    story: `This one hides a genuinely contradictory history. In some
    regional English dialects, "chuffed" meant pleased or satisfied,
    while in others, recorded just as early, it meant precisely the
    opposite: annoyed or offended. Both senses coexisted in British
    dialect for generations before the positive meaning won out and
    became standard in the mid-20th century. Exactly why the word could
    mean two opposite things, and why the pleased sense eventually took
    over, has never been satisfactorily explained.`,
    mythVsFact: null,
    source: "Documented dual dialectal senses cited in the Oxford English Dictionary's entry for 'chuffed, adj.'; standard positive usage established by the mid-20th century."
  },
  {
    id: "argy-bargy",
    phrase: "Argy-bargy",
    meaning: "A heated argument or dispute.",
    category: "Language Itself",
    verdict: "well-documented",
    verdictLabel: "Well Documented",
    story: `A Scots dialect reduplication, a pair of rhyming or
    near-rhyming words stuck together for emphasis, in the same family
    as phrases like "hocus-pocus." The original 19th-century form was
    "argle-bargle," itself likely built from "argle," an old dialectal
    variant of "argue," paired with "bargle" purely for the rhyme. Over
    time, "argle-bargle" softened into the more familiar "argy-bargy"
    without changing its meaning.`,
    mythVsFact: null,
    source: "Recorded from Scots dialect in the 19th century as 'argle-bargle,' cited in the Oxford English Dictionary's entry for 'argy-bargy, n.'"
  },
  {
    id: "give-it-some-welly",
    phrase: "Give it some welly",
    meaning: "To put in more effort or power, especially when driving or exerting physical force.",
    category: "Slang & Everyday Speech",
    verdict: "well-documented",
    verdictLabel: "Well Documented",
    story: `British motoring slang referencing Wellington boots, named
    after the Duke of Wellington and a wardrobe staple for generations
    of British drivers and manual workers. "Giving it some welly"
    pictured a driver pressing the accelerator pedal hard with a booted
    foot, and the phrase spread from the road into general use for
    putting in extra physical effort of any kind.`,
    mythVsFact: null,
    source: "Recorded in British motoring and general slang from the mid-20th century, cited in slang dictionaries including Partridge's Dictionary of Slang."
  },
  {
    id: "not-the-full-shilling",
    phrase: "Not the full shilling",
    meaning: "Not very intelligent, or not quite right in the head.",
    category: "Slang & Everyday Speech",
    verdict: "well-documented",
    verdictLabel: "Well Documented",
    story: `A pre-decimal currency joke. Under the old system, a
    shilling was worth twelve pence, and being handed a coin, or a
    person, that came up short implied something was missing that
    should have been there. "Not the full shilling" used that everyday
    image of being short-changed to describe someone thought to be
    lacking in wits, and the phrase has outlived the coin itself by
    decades.`,
    mythVsFact: null,
    source: "Recorded in British slang from the mid-20th century, cited in slang dictionaries including Partridge's Dictionary of Slang."
  },
  {
    id: "talk-hind-legs-off-donkey",
    phrase: "Talk the hind legs off a donkey",
    meaning: "To talk incessantly or excessively.",
    category: "Still Unsolved",
    verdict: "mystery",
    verdictLabel: "Still a Mystery",
    story: `The image is vivid, someone talking so relentlessly they
    could supposedly persuade an animal to give up its own legs, but no
    one has ever pinned down exactly where or when it was first said, or
    why a donkey specifically rather than any other animal. The phrase
    is well attested in English from the 19th century onward, always
    used in more or less its current sense, with the exaggeration doing
    all the work and no documented backstory behind it.`,
    mythVsFact: null,
    source: "Recorded in English from the 19th century, cited in phrase-history references including Brewer's Dictionary of Phrase and Fable; no documented origin story survives."
  },
  {
    id: "bits-and-bobs",
    phrase: "Bits and bobs",
    meaning: "A miscellaneous collection of small items.",
    category: "Still Unsolved",
    verdict: "mystery",
    verdictLabel: "Still a Mystery",
    story: `A very ordinary-sounding British phrase with a surprisingly
    undocumented past. "Bits" plainly means small pieces or items, but
    why "bobs" specifically, rather than any other rhyming word, isn't
    explained anywhere in the historical record. One loose theory ties
    it to "bob," old slang for a shilling, implying a jumble of small
    odds and ends worth about that much, but there's no real evidence
    connecting the two senses beyond the shared word.`,
    mythVsFact: null,
    source: "Recorded in British English from the 20th century, cited in slang and phrase dictionaries; no documented origin story survives for the specific pairing."
  },
  {
    id: "chin-wag",
    phrase: "Have a chin wag",
    meaning: "To have a chat, especially a long or gossipy one.",
    category: "Slang & Everyday Speech",
    verdict: "well-documented",
    verdictLabel: "Well Documented",
    story: `A straightforwardly visual piece of slang. Your chin, and by
    extension your jaw, moves up and down as you talk, "wagging" the
    same way a dog's tail does. "Chin wag" simply names that motion and
    turns it into a noun for the conversation itself, recorded in
    British slang from the late 19th century onward with barely any
    change in meaning since.`,
    mythVsFact: null,
    source: "Recorded in British slang from the 1870s onward, cited in the Oxford English Dictionary's entry for 'chin-wag, n.'"
  },
  {
    id: "bricking-it",
    phrase: "Bricking it",
    meaning: "To be extremely frightened or nervous.",
    category: "Slang & Everyday Speech",
    verdict: "mystery",
    verdictLabel: "Still a Mystery",
    story: `A widely used piece of modern British slang for acute fear,
    but its exact origin has never been pinned down. It surfaces in
    British English from the later 20th century onward, already in its
    current form and meaning, without any documented explanation of why
    "bricks" specifically became the image for fear rather than any
    other object. Most slang dictionaries record the phrase itself
    without venturing a confident origin story.`,
    mythVsFact: null,
    source: "Recorded in British slang from the later 20th century, cited in slang dictionaries including Partridge's Dictionary of Slang; no documented origin story survives."
  },
  {
    id: "cost-a-bomb",
    phrase: "Cost a bomb",
    meaning: "To be very expensive.",
    category: "Slang & Everyday Speech",
    verdict: "mystery",
    verdictLabel: "Still a Mystery",
    story: `British slang using "a bomb" as shorthand for a large sum of
    money, in the same family as related phrases like "make a bomb."
    Exactly why an explosive became slang for a large quantity of cash
    isn't documented anywhere, though it may simply echo the sense of
    sudden, forceful impact, a bomb going off, applied figuratively to a
    price that hits hard. The phrase is well attested in British use
    from the mid-20th century, without a confirmed origin story behind
    the choice of word.`,
    mythVsFact: null,
    source: "Recorded in British slang from the mid-20th century, cited in slang dictionaries including Partridge's Dictionary of Slang; no documented origin story survives for the specific image."
  },
  {
    id: "elbow-room",
    phrase: "Elbow room",
    meaning: "Enough space to move or act freely.",
    category: "Language Itself",
    verdict: "well-documented",
    verdictLabel: "Well Documented",
    story: `A literal image turned permanent fixture of English: room
    enough to move your elbows without bumping into someone or
    something. The phrase is recorded from the 17th century, appearing
    in Shakespeare's <em>King John</em> (1595) in a closely related
    sense, and has needed no updating since; the everyday sense of
    having enough physical or figurative space to operate is exactly
    what it meant four hundred years ago.`,
    mythVsFact: null,
    source: "William Shakespeare, King John (1595); recorded usage cited in the Oxford English Dictionary's entry for 'elbow, n.'"
  },
  {
    id: "fair-clemmed",
    phrase: "Fair clemmed",
    meaning: "Very hungry.",
    category: "Regional Expressions",
    verdict: "well-documented",
    verdictLabel: "Well Documented",
    story: `"Clem" or "clemmed" is old English dialect for suffering
    from hunger, historically widespread across the north of England
    and the Midlands, and still very much alive today in places like
    St Helens and the wider Lancashire and Merseyside area, as well as
    the Black Country. It likely traces back to an old Germanic root
    related to pinching or squeezing, similar to the German "klemmen,"
    meaning to pinch or jam, evoking the physical sensation of hunger
    gripping the stomach. "Fair" here is simply the common Northern
    English intensifier meaning "really" or "very," the same one heard
    in "fair knackered," stacked onto "clemmed" for extra emphasis.`,
    mythVsFact: null,
    source: "Recorded in Joseph Wright's English Dialect Dictionary (1898-1905); documented regional use across Lancashire, Merseyside, Yorkshire, and the West Midlands (Black Country)."
  },
  {
    id: "nesh",
    phrase: "Nesh",
    meaning: "Overly sensitive to cold weather; soft or feeble.",
    category: "Regional Expressions",
    verdict: "well-documented",
    verdictLabel: "Well Documented",
    story: `One of the oldest words in this whole repository. "Nesh"
    descends directly from the Old English word "hnesce," meaning weak,
    soft, or delicate, and has survived essentially unbroken for well
    over a thousand years in the dialects of the English Midlands and
    North, Staffordshire, Derbyshire, and Yorkshire among them. Someone
    described as "nesh" is thought to feel the cold more than they
    reasonably should, unable to cope with weather everyone else shrugs
    off.`,
    mythVsFact: null,
    source: "From Old English 'hnesce'; recorded in Joseph Wright's English Dialect Dictionary and the Oxford English Dictionary's entry for 'nesh, adj.'"
  },
  {
    id: "gan-canny",
    phrase: "Gan canny",
    meaning: "Take care; go carefully.",
    category: "Regional Expressions",
    verdict: "well-documented",
    verdictLabel: "Well Documented",
    story: `A piece of Geordie (Tyneside, Newcastle-area) dialect built
    from two words with their own long histories. "Gan," meaning "go,"
    comes from Old English and Old Norse forms of the verb, reflecting
    the heavy Scandinavian influence on North East England from
    centuries of Viking settlement. "Canny" has a much broader and
    older sense in Northern English and Scots than its modern meaning
    of "shrewd" suggests, historically covering "careful," "nice,"
    "pleasant," and "good," among other senses. Put together, "gan
    canny" is simply a warm send-off telling someone to go carefully.`,
    mythVsFact: null,
    source: "Recorded in dialect dictionaries of North East England; 'canny' documented with its broader Northern English and Scots senses in the Oxford English Dictionary."
  },
  {
    id: "ey-up",
    phrase: "Ey up",
    meaning: "Hello; also used as an exclamation of surprise or to draw attention.",
    category: "Regional Expressions",
    verdict: "disputed",
    verdictLabel: "Likely Origin (Disputed)",
    story: `A staple greeting across Yorkshire and parts of the East
    Midlands, and one etymologists like to argue about. The leading
    theory ties it to Old Norse, likely "se upp," meaning "look up" or
    "watch out," a plausible root given how heavily Yorkshire was
    settled by Scandinavian Vikings during the Danelaw period, leaving
    a lasting Norse imprint on the region's dialect. It's a strong,
    well-supported theory rather than a wild guess, but a direct,
    unbroken documentary trail from Old Norse all the way to the modern
    greeting hasn't been definitively established.`,
    mythVsFact: null,
    source: "Norse-influence theory discussed in regional dialect scholarship on Yorkshire English; general use documented in 20th-century dialect dictionaries."
  },
  {
    id: "mardy",
    phrase: "Mardy",
    meaning: "Sulky, moody, or irritable.",
    category: "Regional Expressions",
    verdict: "well-documented",
    verdictLabel: "Well Documented",
    story: `A beloved piece of East Midlands dialect, especially
    associated with Nottinghamshire and Derbyshire, describing someone
    in a sulk or a strop. It likely derives from an older dialectal use
    of "mard," related to "marred," in the sense of a child spoiled or
    ruined by over-indulgent treatment, whose sulking became shorthand
    for the word itself. The word reached a much wider national
    audience via Sheffield band Arctic Monkeys' 2006 song "Mardy Bum,"
    though the dialect word long predates the song.`,
    mythVsFact: null,
    source: "Recorded in Joseph Wright's English Dialect Dictionary; East Midlands regional usage documented in dialect scholarship."
  },
  {
    id: "bostin",
    phrase: "Bostin",
    meaning: "Excellent; great.",
    category: "Regional Expressions",
    verdict: "disputed",
    verdictLabel: "Likely Origin (Disputed)",
    story: `A cornerstone of Black Country dialect (the industrial area
    around Dudley, Wolverhampton, and Walsall) used to describe
    something brilliant or first-rate. One theory connects it to
    "bursting," in the sense of something so good it's "bursting" with
    quality, while another ties it to older dialectal senses of "boss,"
    meaning superior or excellent. Both are plausible, and Black
    Country dialect enthusiasts and linguists alike don't agree on a
    single confirmed root.`,
    mythVsFact: null,
    source: "Documented in Black Country dialect glossaries and regional dialect scholarship; competing 'bursting' and 'boss' origin theories both discussed without a settled conclusion."
  },
  {
    id: "ta-ra",
    phrase: "Ta-ra",
    meaning: "Goodbye.",
    category: "Regional Expressions",
    verdict: "mystery",
    verdictLabel: "Still a Mystery",
    story: `A casual farewell heard widely across Northern England,
    especially strongly in Liverpool and the wider Merseyside area, as
    well as much of the Midlands. It's often assumed to be a simple
    doubling-up of "ta" (itself a shortened, informal "thank you," from
    "thank ye"), turned into a breezy send-off, but no dialectologist
    has ever pinned down exactly when or how "ta-ra" first came
    together in that specific form, or why the reduplication took hold
    in some regions and not others.`,
    mythVsFact: null,
    source: "Recorded in regional dialect glossaries of Northern England; no documented origin story survives for the specific coining."
  }
];

const CATEGORIES = [...new Set(IDIOMS.map((i) => i.category))].sort();
