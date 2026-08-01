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
  },
  {
    id: "foot-of-our-stairs",
    phrase: "Well, I'll Go to the Foot of Our Stairs",
    meaning: "An exclamation of surprise or disbelief, roughly 'well, I never!'",
    category: "Regional Expressions",
    verdict: "mystery",
    verdictLabel: "Still a Mystery",
    story: `A classic Northern English exclamation of astonishment,
    strongly associated with Yorkshire and also heard across
    Lancashire and the wider North. The earliest documented use found
    so far is from 1939, in Peter Chamberlain's short story "Shrimps,"
    where a barman exclaims: "Well, I'll go to our 'ouse! You don't
    say? Shrimps! Well, I'll go to the foot of our stairs." The phrase
    was popularised nationally soon after by Tommy Handley on the BBC
    radio comedy <em>ITMA</em> during the 1940s. Some families,
    including plenty in Yorkshire, tell a charming explanation for it:
    that the phrase comes from hearing news so exciting you'd need to
    go to the bottom of the staircase to shout it up to the rest of
    the household. It's a lovely story, and it fits the meaning
    perfectly, but no dialectologist or etymologist has ever traced it
    back to an actual incident or a documented first use that
    confirms it. Why a staircase specifically became shorthand for
    astonishment is, honestly, anyone's guess.`,
    mythVsFact: "Popular family folklore says the phrase began with someone shouting big news up the stairs to the rest of the house. It's a genuinely plausible story and matches the phrase's meaning, but it isn't attested in any dialect dictionary or etymological source. The documented history only goes back as far as a 1939 short story and Tommy Handley's radio use soon after, both of which already treat it as an established saying rather than a brand new coinage.",
    source: "Earliest identified use in Peter Chamberlain's 1939 short story 'Shrimps' (Under Thirty: An Anthology); popularised via Tommy Handley's BBC radio programme ITMA (1939-1949); documented as a Northern English exclamation in regional dialect scholarship, with the specific staircase metaphor's origin unconfirmed."
  },
  {
    id: "barking-up-the-wrong-tree",
    phrase: "Barking Up the Wrong Tree",
    meaning: "To pursue a mistaken assumption or the wrong course of action entirely.",
    category: "Slang & Everyday Speech",
    verdict: "well-documented",
    verdictLabel: "Well Documented",
    story: `A literal image from American frontier raccoon hunting. Hunting
    dogs would chase their quarry up a tree, then stand at the base barking
    to alert their owner, except raccoons are agile enough to leap between
    trees, so the dog was sometimes barking at an empty tree while the
    raccoon had already escaped through the branches overhead. The phrase
    is recorded in American English from the early 1830s and crossed into
    everyday figurative use soon after.`,
    mythVsFact: null,
    source: "Recorded in American English from the early 1830s; documented in etymological dictionaries as originating in raccoon-hunting practice."
  },
  {
    id: "spill-the-beans",
    phrase: "Spill the Beans",
    meaning: "To reveal a secret, often prematurely or accidentally.",
    category: "Popular Myths",
    verdict: "myth",
    verdictLabel: "Popular Myth (Probably)",
    story: `The story everyone repeats involves ancient Greek voting, where
    citizens supposedly dropped a white or black bean into a jar to cast a
    yes or no vote, and knocking the jar over would spill the result before
    it was meant to be revealed. It's a vivid, tidy explanation, and it gets
    repeated constantly, but the actual documented history of the English
    phrase doesn't reach back anywhere near that far. The earliest recorded
    use found so far is from 1902, in American slang connected to horse
    racing, roughly two thousand years after the Greek voting practice it's
    supposedly named for.`,
    mythVsFact: "The Greek bean-voting story is the most widely repeated explanation, but language historians who've actually checked find no evidence connecting it to the English phrase, and the huge gap between the ancient practice and the phrase's real 1902 debut makes the connection very unlikely.",
    source: "Earliest documented use traced to 1902 American horse-racing slang; Greek voting theory assessed as unsupported folk etymology by etymologists including Laurel Brinton (University of British Columbia)."
  },
  {
    id: "rule-of-thumb",
    phrase: "Rule of Thumb",
    meaning: "A broadly practical, approximate method or guideline rather than an exact, tested rule.",
    category: "Popular Myths",
    verdict: "myth",
    verdictLabel: "Popular Myth",
    story: `The genuine, documented origin is refreshingly simple: the top
    joint of an adult thumb is roughly an inch long, and tradesmen used it
    for centuries as a rough-and-ready measuring tool when no ruler was
    handy. The phrase is recorded from 1692 in exactly that practical
    sense. A much darker explanation began circulating widely in the
    1970s and 80s, claiming English common law once permitted a husband
    to beat his wife with a stick no wider than his thumb. No such law,
    and no genuine record of any judge ever ruling that, has ever been
    found.`,
    mythVsFact: "The wife-beating law story is widely believed and often stated as historical fact, but it traces back to an unverified rumour about an 18th-century judge, satirised in an unflattering 1782 cartoon, and only became attached to the phrase itself in the 1970s. No legal record supports it.",
    source: "Oxford English Dictionary (measurement sense recorded from 1692); wife-beating myth traced and debunked in legal-history research including Henry Ansgar Kelly's work for the Journal of Legal Education."
  },
  {
    id: "let-sleeping-dogs-lie",
    phrase: "Let Sleeping Dogs Lie",
    meaning: "Don't disturb a settled situation, or you may provoke new trouble.",
    category: "Literature",
    verdict: "well-documented",
    verdictLabel: "Well Documented",
    story: `One of the oldest proverbs still in everyday English use. Geoffrey
    Chaucer included an early version of it in <em>Troilus and Criseyde</em>
    in the 1380s: "it is nought good a sleeping hound to wake." The logic is
    plain enough that versions of the same warning appear across several
    old European languages, but the English wording traces cleanly back to
    Chaucer and has barely changed shape in over six hundred years.`,
    mythVsFact: null,
    source: "Geoffrey Chaucer, Troilus and Criseyde (c.1380s); cited as the earliest English form in the Oxford English Dictionary."
  },
  {
    id: "rock-and-a-hard-place",
    phrase: "Between a Rock and a Hard Place",
    meaning: "Caught in a difficult situation where every available option is bad.",
    category: "History & Empire",
    verdict: "disputed",
    verdictLabel: "Likely Origin (Disputed)",
    story: `Word researchers at the American Dialect Society traced the
    phrase's specific American coinage to 1917, in newspaper coverage of a
    bitter Arizona copper miners' dispute, where workers were described as
    stuck "between a rock and a hard place" over demands they couldn't
    accept and a company that wouldn't budge. Older idioms expressing the
    exact same no-win idea, like being caught "between the devil and the
    deep blue sea" or facing "Scylla and Charybdis," had existed for
    centuries already, so whether 1917 marks a genuine new coinage or
    simply the first written record of an older spoken pattern isn't fully
    settled.`,
    mythVsFact: null,
    source: "American Dialect Society research (Barry Popik, Fred Shapiro); 1917 Arizona copper-strike newspaper citations."
  },
  {
    id: "bakers-dozen",
    phrase: "Baker's Dozen",
    meaning: "Thirteen, one more than a standard dozen.",
    category: "Trade & Industry",
    verdict: "well-documented",
    verdictLabel: "Well Documented",
    story: `A direct result of medieval English law. The Assize of Bread
    and Ale, enacted in 1266, set strict weight standards for loaves sold
    to the public, with severe fines, or worse, for bakers caught selling
    underweight bread. Since it was hard to guarantee every loaf's exact
    weight by hand, bakers routinely threw in a thirteenth loaf, sometimes
    called the "vantage loaf," free of charge, as a buffer against being
    caught short and punished.`,
    mythVsFact: null,
    source: "Assize of Bread and Ale (1266); documented in economic and legal histories of medieval English bread regulation."
  },
  {
    id: "break-a-leg",
    phrase: "Break a Leg",
    meaning: "A traditional way to wish a performer good luck right before they go on stage.",
    category: "Theatre & Performance",
    verdict: "mystery",
    verdictLabel: "Still a Mystery",
    story: `Genuinely one of the hardest idioms to pin down. The earliest
    confirmed use in print comes from American writer Edna Ferber's 1939
    memoir, and anecdotal accounts suggest actors were already saying it
    in the 1920s and 30s, but nobody has found where it started. Leading
    theories include a superstition that wishing someone luck directly
    would jinx them, so an ironic, backwards-sounding phrase was used
    instead, and a possible echo of the German theatrical phrase "Hals-
    und Beinbruch" (neck and leg break). A popular story linking it to
    John Wilkes Booth breaking his leg after assassinating Abraham Lincoln
    on a theatre stage in 1865 is almost certainly false, since the phrase
    isn't recorded anywhere until decades later.`,
    mythVsFact: "The Lincoln assassination story is the one people love to repeat, since Booth genuinely was an actor and genuinely did break his leg leaping from the presidential box. But the phrase has no documented use until the late 1930s, over seventy years later, which makes a direct connection extremely unlikely.",
    source: "Edna Ferber, A Peculiar Treasure (1939); phrase-origin research summarised by World Wide Words and multiple etymological dictionaries, none reaching a confirmed conclusion."
  },
  {
    id: "under-the-weather",
    phrase: "Under the Weather",
    meaning: "Feeling slightly unwell or in low spirits.",
    category: "Sailing & the Sea",
    verdict: "disputed",
    verdictLabel: "Likely Origin (Disputed)",
    story: `The leading nautical theory holds that sailors who fell ill were
    sent below deck, away from the weather side of the ship where storms
    and rough conditions hit hardest, to recover out of the elements,
    literally under the weather. It's a widely repeated explanation in
    maritime phrase glossaries and fits the phrase neatly, but not every
    etymologist is convinced it's the whole story rather than a plausible
    tale attached after the fact to a simpler, more general use of "under"
    to mean oppressed or affected by something.`,
    mythVsFact: null,
    source: "Maritime phrase glossaries and naval history sources; treated as a plausible but not fully confirmed origin in major phrase-reference works."
  },
  {
    id: "loose-cannon",
    phrase: "Loose Cannon",
    meaning: "An unpredictable person prone to causing damage if left unchecked.",
    category: "Sailing & the Sea",
    verdict: "well-documented",
    verdictLabel: "Well Documented",
    story: `A real and genuinely terrifying shipboard hazard. Heavy cannons
    on wooden warships were lashed down with rope, and in rough seas a
    cannon that broke free could roll violently across the deck with
    enough force to crush crew members or smash through the hull itself.
    The figurative sense, an unpredictable person capable of real damage,
    was powerfully cemented by a dramatic early scene in Victor Hugo's
    1874 novel <em>Ninety-Three</em>, in which a loose cannon rampages
    across a ship's deck during a storm.`,
    mythVsFact: null,
    source: "Victor Hugo, Ninety-Three (1874); documented as a genuine naval hazard in maritime history sources."
  },
  {
    id: "son-of-a-gun",
    phrase: "Son of a Gun",
    meaning: "A mild, often affectionate term for a rascal or someone remarkable.",
    category: "Sailing & the Sea",
    verdict: "disputed",
    verdictLabel: "Likely Origin (Disputed)",
    story: `A vivid naval legend claims that when women were permitted
    aboard Royal Navy ships on long voyages, a child born at sea with
    disputed parentage would be entered in the ship's log as a "son of the
    gun," referring to the space between cannons on the gun deck where
    births reportedly sometimes took place. A 19th-century admiral even
    claimed it happened to him. Modern linguists are less convinced, and
    lean instead toward the phrase simply being a rhyming, softer stand-in
    for a much cruder insult. The phrase is documented from 1708, but its
    true origin remains unresolved.`,
    mythVsFact: "The gun-deck birth story is colourful and often told as settled fact, complete with a first-hand admiral's testimony, but there's little hard evidence behind it, and most linguists now consider it more likely the phrase is simply a euphemism that gained a naval legend afterward.",
    source: "Admiral William Henry Smyth, The Sailor's Word-Book (1867); linguistic analysis favouring the euphemism theory over the naval birth story."
  },
  {
    id: "cut-to-the-chase",
    phrase: "Cut to the Chase",
    meaning: "To get straight to the point, skipping unnecessary detail.",
    category: "Slang & Everyday Speech",
    verdict: "well-documented",
    verdictLabel: "Well Documented",
    story: `Born in early Hollywood. Silent films frequently built toward an
    exciting chase sequence as their climax, and when a film's earlier
    scenes dragged, screenwriters and editors were literally instructed to
    cut to the chase, skipping the slow buildup and getting to the exciting
    part. The phrase is documented in film industry trade press from the
    1920s before spreading into general use.`,
    mythVsFact: null,
    source: "Documented in 1920s American film industry trade usage; cited in major etymological dictionaries as originating in screenwriting instructions."
  },
  {
    id: "white-elephant",
    phrase: "White Elephant",
    meaning: "A possession that's costly or troublesome to maintain, disproportionate to its actual usefulness.",
    category: "History & Empire",
    verdict: "disputed",
    verdictLabel: "Likely Origin (Disputed)",
    story: `The often-repeated story holds that the kings of Siam would
    gift a rare, sacred albino elephant to a courtier who had fallen out
    of favour. The animal couldn't be worked or killed, since it was
    considered sacred, but it was ruinously expensive to feed and house,
    making it a beautiful, deliberately punishing burden disguised as an
    honour. The phrase enters documented English usage from 1851, and the
    Siamese custom is repeated across many reputable phrase histories, but
    no single verified historical instance of a king actually doing this
    has ever been pinned down.`,
    mythVsFact: null,
    source: "Documented in English usage from 1851; the Siamese royal gift custom is widely repeated in phrase-origin scholarship without a confirmed named historical instance."
  },
  {
    id: "bury-the-hatchet",
    phrase: "Bury the Hatchet",
    meaning: "To formally end a conflict and restore peace.",
    category: "History & Empire",
    verdict: "well-documented",
    verdictLabel: "Well Documented",
    story: `Rooted in genuine peacemaking traditions among northeastern
    Native American nations, including the Haudenosaunee (Iroquois)
    Confederacy, where physically burying a tomahawk or war club marked
    the formal end of hostilities between parties. Colonial-era English
    writers documented the custom directly, and the phrase entered English
    from the late 1600s as both a literal description of the ceremony and,
    increasingly, a figurative one for making peace of any kind.`,
    mythVsFact: null,
    source: "Documented in colonial American writings from the 1680s onward, including Samuel Sewall's diary; Haudenosaunee peacemaking traditions recorded by early ethnographers."
  },
  {
    id: "chip-on-your-shoulder",
    phrase: "Chip on Your Shoulder",
    meaning: "To carry a grudge or a persistent, defensive resentment, as if spoiling for a fight.",
    category: "Slang & Everyday Speech",
    verdict: "well-documented",
    verdictLabel: "Well Documented",
    story: `Traces to a genuine 19th-century American custom, especially
    recorded in New England, where a boy looking to pick a fight would
    balance a wood chip on his shoulder and dare anyone to knock it off. If
    someone did, a fight was considered fair and already agreed to. The
    literal practice faded, but the figurative sense, someone visibly
    primed for a confrontation, stuck around. It's documented in American
    newspapers from the 1830s.`,
    mythVsFact: null,
    source: "Documented in American newspaper usage from the 1830s, including the Long Island Telegraph (1830); cited in major etymological dictionaries."
  },
  {
    id: "cold-turkey",
    phrase: "Cold Turkey",
    meaning: "To stop a habit or addiction abruptly and completely, without weaning off gradually.",
    category: "Health & Medicine",
    verdict: "disputed",
    verdictLabel: "Likely Origin (Disputed)",
    story: `The popular explanation pictures withdrawal-induced goosebumps
    and pale, clammy skin resembling a plucked, refrigerated turkey. It's
    a vivid image, but it doesn't line up with the timeline. The earliest
    known uses of "cold turkey" predate its addiction-specific meaning
    entirely, and researchers now think it more likely grew from combining
    "cold," meaning blunt or unprepared, with the older expression "talk
    turkey," meaning to speak plainly. The phrase was first tied
    specifically to drug withdrawal in a Canadian newspaper in 1921.`,
    mythVsFact: "The plucked-turkey-skin theory is the one most people know, but it doesn't fit the evidence: the phrase already existed with unrelated, non-addiction meanings before it was ever applied to withdrawal.",
    source: "The Daily Colonist (Victoria, Canada), October 1921; earlier general use of 'cold' and 'talk turkey' documented from the early 1900s."
  },
  {
    id: "diehard",
    phrase: "Diehard",
    meaning: "Someone stubbornly loyal to a cause or belief, refusing to give up even against the odds.",
    category: "War & Conflict",
    verdict: "well-documented",
    verdictLabel: "Well Documented",
    story: `Coined in the most literal way possible, on the battlefield.
    At the Battle of Albuera in 1811, during the Peninsular War,
    Lieutenant-Colonel William Inglis of the 57th (West Middlesex)
    Regiment of Foot was badly wounded by canister shot but refused to
    leave the field, reportedly urging his men on with the words "Die
    hard, 57th, die hard!" The regiment held its ground despite
    devastating losses, roughly 422 of its 570 soldiers killed or wounded,
    and earned the permanent nickname "The Die-Hards."`,
    mythVsFact: null,
    source: "Regimental history of the 57th (West Middlesex) Regiment of Foot; Battle of Albuera dispatches, 1811."
  },
  {
    id: "skin-of-your-teeth",
    phrase: "By the Skin of Your Teeth",
    meaning: "To narrowly escape or achieve something, by the smallest possible margin.",
    category: "Literature",
    verdict: "well-documented",
    verdictLabel: "Well Documented",
    story: `Traces directly to the Book of Job in the Bible: "My bone
    cleaveth to my skin and to my flesh, and I am escaped with the skin of
    my teeth" (Job 19:20). It's a deliberately absurd image, since teeth
    famously have no skin at all, meant to convey having survived with
    literally nothing left to spare. The phrase entered English through
    the Geneva Bible in 1560 and was carried forward into the King James
    Version in 1611, from which it passed into everyday speech.`,
    mythVsFact: null,
    source: "Book of Job 19:20, Geneva Bible (1560) and King James Version (1611)."
  },
  {
    id: "green-eyed-monster",
    phrase: "The Green-Eyed Monster",
    meaning: "Jealousy, personified as a destructive force.",
    category: "Literature",
    verdict: "well-documented",
    verdictLabel: "Well Documented",
    story: `Coined by Shakespeare. Its most famous appearance is in
    <em>Othello</em> (c.1603), where Iago warns, "O, beware, my lord, of
    jealousy; It is the green-eyed monster which doth mock The meat it
    feeds on." Shakespeare had already used a related image, "green-eyed
    jealousy," a few years earlier in <em>The Merchant of Venice</em>
    (c.1596), suggesting he was developing the metaphor across more than
    one play before it fully crystallised.`,
    mythVsFact: null,
    source: "William Shakespeare, Othello (c.1603), Act 3 Scene 3; The Merchant of Venice (c.1596)."
  },
  {
    id: "catch-22",
    phrase: "Catch-22",
    meaning: "A no-win situation created by contradictory rules, where the only solution is blocked by the problem itself.",
    category: "Literature",
    verdict: "well-documented",
    verdictLabel: "Well Documented",
    story: `Coined outright by American novelist Joseph Heller as the title
    of his 1961 satirical war novel. In the book, a fictional military
    regulation allows a pilot to be excused from dangerous combat missions
    on grounds of insanity, but only if he requests the exemption himself,
    and wanting to avoid deadly missions is, by definition, proof of a
    perfectly sane mind. The invented rule, and the phrase describing it,
    escaped the novel entirely and became everyday shorthand for any
    such self-defeating bind.`,
    mythVsFact: null,
    source: "Joseph Heller, Catch-22 (1961)."
  },
  {
    id: "curiosity-killed-the-cat",
    phrase: "Curiosity Killed the Cat",
    meaning: "A warning that being too inquisitive can lead to trouble.",
    category: "Language Itself",
    verdict: "disputed",
    verdictLabel: "Likely Origin (Disputed)",
    story: `The proverb didn't start out about curiosity at all. Its
    earliest form was "care killed the cat," recorded in English plays
    from the 1590s, including Ben Jonson's <em>Every Man in His Humour</em>
    (1598), where "care" meant worry or sorrow rather than nosiness.
    Sometime around the turn of the 20th century, "care" was swapped for
    "curiosity," quietly changing what the proverb actually warns against,
    though nobody has identified exactly when or why the substitution
    happened.`,
    mythVsFact: null,
    source: "Ben Jonson, Every Man in His Humour (1598); 'curiosity' version documented in print from the 1870s-1900s."
  },
  {
    id: "cwtch",
    phrase: "Cwtch",
    meaning: "A hug or cuddle that carries a sense of safety and warmth, or a small cupboard.",
    category: "Regional Expressions",
    verdict: "disputed",
    verdictLabel: "Likely Origin (Disputed)",
    story: `A distinctly Welsh word, often described as impossible to
    translate cleanly into English, since "hug" or "cuddle" only capture
    part of what it means. Its second sense is a small cupboard or
    cubbyhole, often the space under the stairs. Because cwtch has no
    matching word in any other Celtic language, most linguists believe
    it's a loanword, likely from the Old French "coucher" ("to lay
    something down"), introduced following the Norman presence in Wales,
    and ultimately from the Latin "collocare" (to place together). It has
    since become something of an unofficial ambassador for Welsh
    identity, even as its own deep roots remain a "believed" theory
    rather than a settled one.`,
    mythVsFact: null,
    source: "Documented in Welsh dialect and linguistic scholarship; Old French loanword theory discussed in academic analysis of Welsh-English language contact."
  },
  {
    id: "bairn",
    phrase: "Bairn",
    meaning: "A child, especially a baby or young son or daughter.",
    category: "Regional Expressions",
    verdict: "well-documented",
    verdictLabel: "Well Documented",
    story: `Shares a common root in both Old English ("bearn") and Old
    Norse ("barn"), both descending from a shared Germanic word meaning,
    quite simply, "that which is borne," carried and brought into the
    world. The word was once used freely across the whole of England, but
    by around 1700 it had receded to become mainly a Scottish and North
    East English word, particularly strong in Geordie and Mackem dialect,
    while the rest of the country settled on "child" instead. Shakespeare
    still used it, and it remains everyday speech in Newcastle,
    Sunderland, and across Scotland today.`,
    mythVsFact: null,
    source: "Recorded in Old English from the 9th century onward; documented narrowing to Scotland and North East England from c.1700 in historical dialect scholarship."
  },
  {
    id: "radgie",
    phrase: "Radgie",
    meaning: "An aggressive, hot-tempered person, or a fit of temper itself.",
    category: "Regional Expressions",
    verdict: "well-documented",
    verdictLabel: "Well Documented",
    story: `A Geordie word, strongest in and around Newcastle, for someone
    quick to anger, "gannin' radgie" being to properly lose your temper.
    Both "radge" and "radgie" derive straightforwardly from "rage,"
    recorded in print since at least the mid-1800s, though almost
    certainly spoken locally well before that was ever written down. An
    1894 glossary of Northumberland dialect words records an older, now
    obsolete sense of the word meaning "lewd" or "wanton," showing the
    meaning has drifted over time even while the "rage" root itself
    stayed constant.`,
    mythVsFact: null,
    source: "Documented in an 1894 glossary of Northumberland Words; regional usage recorded in North East England dialect scholarship."
  },
  {
    id: "wazzock",
    phrase: "Wazzock",
    meaning: "A foolish or annoying person, said with a certain amount of affection.",
    category: "Regional Expressions",
    verdict: "mystery",
    verdictLabel: "Still a Mystery",
    story: `A firmly Yorkshire and Northern English word for an idiot, used
    the way Yorkshire specialises in, more exasperated fondness than
    genuine cruelty. Despite being a favourite of Northern comedians and
    commentators, its actual origin is genuinely unresolved. Competing
    theories include a link to "wiseacre" (an old word for a know-it-all),
    a connection to "wassock" (an obscure regional word for a lump or
    blockhead), and a colourful folk story about offal cooked in linen
    "wazz socks" in West Yorkshire and East Lancashire kitchens. The
    Oxford English Dictionary's earliest confirmed use only dates to
    1976, surprisingly recent for a word that feels far older.`,
    mythVsFact: "The 'wazz sock' offal story is a memorably specific explanation, but there's no documented evidence tying that culinary practice to the insult, and it has the hallmarks of an explanation invented after the fact rather than a traceable origin.",
    source: "Oxford English Dictionary (earliest evidence 1976); competing theories discussed in regional dialect scholarship without consensus."
  },
  {
    id: "gadgie",
    phrase: "Gadgie",
    meaning: "A man, especially an older bloke, sometimes used for any adult male.",
    category: "Regional Expressions",
    verdict: "well-documented",
    verdictLabel: "Well Documented",
    story: `Widely used across North East England, especially in Newcastle's
    Geordie dialect, to mean a man or bloke. It traces to Romani "gadje"
    (plural of "gadjo"), the word Romani people traditionally use for
    anyone outside their community, a non-Romani person. The word entered
    Northern English and Scots through centuries of contact with Romani
    and Traveller communities, and appears in numerous spelling variants,
    including gadgie, gadjee, gadgy, and gaugie, across different regional
    records.`,
    mythVsFact: null,
    source: "Recorded from Romani gaʒe/gaʒo via Traveller cant; documented among the Gipsies of Kirk Yetholm, Scotland, from the early 20th century, and in North East England dialect glossaries."
  },
  {
    id: "scran",
    phrase: "Scran",
    meaning: "Food, especially a meal.",
    category: "Regional Expressions",
    verdict: "disputed",
    verdictLabel: "Likely Origin (Disputed)",
    story: `Heard widely across Northern England and Scotland, and long
    embedded in British Army and Royal Navy slang for rations. Its
    earliest recorded sense, from the early 1700s, actually referred to a
    tavern bill or reckoning rather than food itself, and by the early
    1800s it had shifted to mean food, typically scrappy leftovers or
    odds and ends rather than a proper spread. Most etymologists trace it
    to Old Norse "skran," meaning junk or rubbish, though a competing
    theory points instead to Dutch "schranzen."`,
    mythVsFact: "A frequently repeated claim is that SCRAN is a naval acronym for 'Sultanas, Currants, Raisins And Nuts.' It isn't. There's no documentary evidence for the acronym at all, and the word was already in use, in its food sense, more than a century before anyone suggested it stood for anything.",
    source: "Documented in early 18th-century tavern-bill usage and 19th-century military slang; Old Norse 'skran' root discussed in etymological scholarship."
  },
  {
    id: "ginnel",
    phrase: "Ginnel",
    meaning: "A narrow alleyway or passage running between buildings, usually terraced houses.",
    category: "Regional Expressions",
    verdict: "disputed",
    verdictLabel: "Likely Origin (Disputed)",
    story: `An everyday word across Yorkshire and Lancashire for the tight
    passages running between rows of terraced houses (called a "snicket,"
    "twitten," or "jitty" elsewhere in England, depending entirely on
    which county you're standing in). Recorded in Northern texts as far
    back as 1613. One theory traces it to Old English "gin" (an opening
    or gap) with a diminutive ending attached; the Oxford English
    Dictionary instead floats a possible, admittedly vague, connection to
    the French "chenelle," an old form of "channel." Neither has been
    confirmed as the definite root.`,
    mythVsFact: null,
    source: "Earliest documented use traced to 1613 in Northern English texts; competing Old English and French-derived theories discussed in the Oxford English Dictionary and regional dialect scholarship."
  },
  {
    id: "nowt-and-owt",
    phrase: "Nowt and Owt",
    meaning: "\"Nowt\" means nothing and \"owt\" means anything, as in 'there's nowt so queer as folk' or 'have you got owt for us?'",
    category: "Regional Expressions",
    verdict: "well-documented",
    verdictLabel: "Well Documented",
    story: `Two of the most instantly recognisable words in Northern
    English dialect, especially across Yorkshire, both direct descendants
    of Old English. "Nowt" comes from "nāwiht," a compound of "nā" (not)
    and "wiht" (thing, or "wight"), while "owt" comes from the related
    Old English "āwiht" (anything, literally "ever a thing"). Both words
    simply wore down through centuries of everyday speech into their
    clipped modern forms, surviving in the North long after the rest of
    England smoothed them into "nothing" and "anything."`,
    mythVsFact: null,
    source: "Old English 'nāwiht' and 'āwiht' documented in historical dialect scholarship and the Middle English Dictionary."
  },
  {
    id: "jiggered",
    phrase: "Jiggered",
    meaning: "Utterly exhausted, or, as an exclamation ('well, I'll be jiggered!'), astonished.",
    category: "Regional Expressions",
    verdict: "mystery",
    verdictLabel: "Still a Mystery",
    story: `Heard widely across Northern England, used to describe being
    worn out or, shouted as an exclamation, genuine surprise. It works as
    a euphemism, standing in for a much blunter word, in the same family
    as saying "I'll be blowed!" instead of something ruder. The word
    "jigger" itself is recorded from the 1820s in a completely unrelated
    sense, referring to an illicit distillery, and nobody has convincingly
    connected that meaning to the exhausted or astonished sense of
    "jiggered," which is recorded separately from the 1830s. Its real
    origin remains unclear.`,
    mythVsFact: null,
    source: "Recorded in English regional dialect glossaries from the 1830s; unrelated 'jigger' (illicit still) sense recorded from the 1820s, with no confirmed link between the two."
  },
  {
    id: "mither",
    phrase: "Mither",
    meaning: "To pester, nag, or make an unnecessary fuss.",
    category: "Regional Expressions",
    verdict: "disputed",
    verdictLabel: "Likely Origin (Disputed)",
    story: `Closely associated with Manchester and the wider North West,
    used for someone going on and on until they've become a genuine
    nuisance ("stop mithering me"). Recorded since the 1840s, it's
    treated by the Oxford English Dictionary as a variant of the older
    word "moider," a chiefly Irish, Manx, and Northern English word
    meaning to confuse, bewilder, or wear someone out. "Moider" itself is
    of uncertain origin, possibly from Irish "modartha" (dark or murky),
    which leaves "mither" resting on an etymology that's already a guess
    one layer down.`,
    mythVsFact: null,
    source: "Oxford English Dictionary (earliest evidence 1847, James Halliwell's dictionary); 'moider' root discussed in Irish and Northern English dialect scholarship."
  },
  {
    id: "beat-around-the-bush",
    phrase: "Beat around the bush",
    meaning: "To avoid getting to the point, or to approach a difficult topic indirectly.",
    category: "Medieval Life",
    verdict: "well-documented",
    verdictLabel: "Well Documented",
    story: `A literal survival technique from medieval hunting. Hunters hired
    beaters to walk through undergrowth striking the bushes with long
    sticks, flushing birds or game out into the open where the actual
    hunters, waiting with nets or bows, could catch them. Beaters
    deliberately struck around a bush rather than into it, since going in
    directly risked disturbing something far more dangerous than the
    intended quarry, a wild boar or a nest of bees among the obvious
    hazards. The earliest written trace is the 1440 poem <em>Generydes</em>,
    using the plain phrase "beat the bush"; the "around" version followed
    by 1572, in George Gascoigne's writing. The figurative sense, circling
    a difficult subject rather than confronting it directly, grew naturally
    from that cautious, indirect approach.`,
    mythVsFact: null,
    source: "Generydes: A Romance in Seven-line Stanzas (1440); George Gascoigne, Works (1572); documented medieval hunting practice cited in phrase-history references."
  },
  {
    id: "bite-your-tongue",
    phrase: "Bite your tongue",
    meaning: "To stop yourself from saying something, especially something you might regret.",
    category: "Literature",
    verdict: "well-documented",
    verdictLabel: "Well Documented",
    story: `A straightforwardly physical image turned idiom: literally
    clamping your teeth down on your own tongue to physically stop
    yourself from speaking. It's recorded from the 16th century, and
    Shakespeare clearly liked it, using versions of the phrase in three
    separate plays, including <em>Henry VI, Part 2</em> ("So York must sit
    and fret and bite his tongue") and <em>Titus Andronicus</em>. The
    meaning has stayed essentially unchanged for over four hundred years:
    holding back words, usually out of tact, restraint, or
    self-preservation, that you'd otherwise blurt out.`,
    mythVsFact: null,
    source: "William Shakespeare, Henry VI, Part 2 (c.1591), Henry VI, Part 3 (c.1591), and Titus Andronicus (c.1594); recorded usage from the 16th century cited in phrase-history references."
  },
  {
    id: "straight-from-the-horses-mouth",
    phrase: "Straight from the horse's mouth",
    meaning: "Information from the most direct, authoritative source possible.",
    category: "Sport & Military",
    verdict: "disputed",
    verdictLabel: "Likely Origin (Disputed)",
    story: `The leading theory traces this to British horse racing. Tips
    about a horse's chances came from all sorts of people, trainers,
    jockeys, stable boys, but the joke was that the only source more
    reliable than the people closest to the horse would be the horse
    itself. A competing theory points instead to the old practice of
    judging a horse's age and health by directly examining its teeth,
    since a seller's word about a horse could be flattering, but the
    animal's own mouth couldn't lie. The earliest identified citation is
    from a horse-racing publication, <em>Bell's Life in London and
    Sporting Chronicle</em>, in 1861, which lends real weight to the
    racing-tip theory, though it doesn't fully rule out the other.`,
    mythVsFact: null,
    source: "Bell's Life in London and Sporting Chronicle (22 September 1861); both racing-tip and teeth-examination theories discussed in phrase-history references including World Wide Words."
  },
  {
    id: "brass-monkey",
    phrase: "Cold Enough to Freeze the Balls Off a Brass Monkey",
    meaning: "An exaggerated way of saying it's extremely cold.",
    category: "Popular Myths",
    verdict: "myth",
    verdictLabel: "Popular Myth",
    story: `The persistent explanation claims that Royal Navy warships
    stacked cannonballs in pyramids on a brass tray called a "monkey," and
    that in freezing weather the brass would contract faster than the iron
    cannonballs, causing them to fall off, hence cold enough to "freeze the
    balls off a brass monkey." It's a wonderfully specific piece of naval
    engineering trivia. It's also almost certainly false. No such brass
    cannonball trays have ever turned up among the Royal Navy's extensively
    preserved historical equipment, contemporary records show cannonballs
    were actually stored in wooden racks called "shot garlands," and the
    real difference in how brass and iron contract in the cold isn't
    anywhere near large enough to make the story work physically. Some
    etymologists believe the "cannonball tray" explanation is a relatively
    recent invention, possibly from as late as the 1980s. Earlier versions
    of the joke about a "brass monkey" losing its tail, nose, or whiskers
    to the cold suggest the phrase was always a flexible, rhetorical
    exaggeration rather than a literal reference to any specific naval
    object.`,
    mythVsFact: "The cannonball-tray story is repeated constantly, often with real-sounding technical detail about thermal contraction, but no genuine 'monkey' cannonball rack has ever been found, period naval sources describe a completely different storage method, and the physics doesn't actually check out. Earlier variants of the joke targeting a brass monkey's tail or whiskers rather than anything more anatomically specific suggest the phrase was always just a colourful exaggeration.",
    source: "Naval Historical Society of Australia; Royal Navy shot-storage records describing wooden 'shot garlands' from at least 1769; phrase-origin analysis via World Wide Words and the Lake Champlain Maritime Museum."
  },
  {
    id: "whole-nine-yards",
    phrase: "The Whole Nine Yards",
    meaning: "Everything; the full amount, with nothing held back.",
    category: "Popular Myths",
    verdict: "myth",
    verdictLabel: "Popular Myth",
    story: `A favourite among word-detectives precisely because the
    popular explanation is so confidently wrong. The most commonly
    repeated story claims it refers to the length of a machine-gun
    ammunition belt on a World War II fighter plane, so a pilot who'd
    "given the whole nine yards" had fired everything he had. It's a
    satisfying military image, and it's also impossible: the phrase is
    documented in print as early as 1907, decades before any WWII fighter
    existed, in an entirely non-military context. An earlier form, "the
    whole six yards," was already circulating in the rural American South
    by 1912. Despite enormous effort by professional etymologists,
    comparing theories about sailing-ship yards, cement-mixer capacity, and
    tailoring fabric lengths, nobody has found a version of the story that
    actually fits the timeline. The genuine origin remains unknown.`,
    mythVsFact: "The WWII ammunition-belt story is the version almost everyone has heard, and it's completely disproven by the timeline: the phrase was already in use, in unrelated contexts, decades before the Second World War began.",
    source: "Earliest citation traced to 1907 by etymologist Fred Shapiro; 'the whole six yards' documented in the rural American South from 1912; myth debunked in research summarised by Snopes and the Oxford English Dictionary."
  },
  {
    id: "arm-and-a-leg",
    phrase: "Cost an Arm and a Leg",
    meaning: "To be extremely expensive.",
    category: "Popular Myths",
    verdict: "myth",
    verdictLabel: "Popular Myth",
    story: `A popular story claims that 18th and 19th-century portrait
    painters charged customers extra for each limb included in a painting,
    so a full-length portrait with both arms and both legs visible "cost
    an arm and a leg" more than a cheaper head-and-shoulders version.
    Painters certainly did charge more for larger, more elaborate
    portraits, but there's no actual evidence they billed by individual
    limb. The phrase itself is a much more recent American coinage, first
    appearing in print around 1949, roughly a century after the
    portrait-pricing custom it's supposedly describing had already fallen
    out of fashion. It likely grew out of two older, separate expressions:
    "I'd give my right arm" (a 17th-century way of saying something would
    cost you dearly) and later wartime slang about the devastating cost, in
    the most literal sense, of losing limbs in combat.`,
    mythVsFact: "The portrait-painter pricing story is charming and widely repeated, but nobody has found a single receipt, ledger, or contemporary account backing it up, and the phrase itself doesn't appear until the mid-20th century, long after the supposed painting custom would have ended.",
    source: "Earliest documented use from c.1949, cited in etymological dictionaries; portrait-pricing theory assessed as unsupported folklore in phrase-history research including Grammarist and Phrase Finder."
  },
  {
    id: "paint-the-town-red",
    phrase: "Paint the Town Red",
    meaning: "To go out and celebrate in a wild, unrestrained way.",
    category: "Popular Myths",
    verdict: "myth",
    verdictLabel: "Popular Myth",
    story: `A genuinely real historical event gets the credit for this
    one, even though the dates don't actually line up. On the night of 6
    April 1837, Henry Beresford, the 3rd Marquess of Waterford, went on a
    drunken rampage through Melton Mowbray with a group of aristocratic
    friends, smashing windows, assaulting a tollkeeper, and literally
    painting doors, window shutters, and a tollhouse with red paint. It's
    a wonderfully well-documented night of vandalism. The trouble is,
    "paint the town red" doesn't show up in print as an idiom until 1883,
    roughly 46 years later, and its earliest known appearance is in an
    American newspaper, not a British one. A real riotous night in Melton
    Mowbray almost certainly happened. Whether it's actually where the
    phrase comes from is much harder to prove.`,
    mythVsFact: "The Marquess of Waterford's 1837 spree of literally painting things red is a real, documented event, which makes it an unusually tempting origin story. But the nearly fifty-year gap before the phrase itself appears in print, and its first appearance being American rather than British, makes a direct link very hard to confirm.",
    source: "Contemporary accounts of the 1837 Melton Mowbray incident; earliest documented use of the idiom from 1883 in American press, cited in phrase-history research including Mental Floss and Phrase Finder."
  },
  {
    id: "burn-your-bridges",
    phrase: "Burn Your Bridges",
    meaning: "To destroy any possibility of retreating or going back to a previous situation.",
    category: "Popular Myths",
    verdict: "myth",
    verdictLabel: "Popular Myth",
    story: `Two famous historical commanders are regularly credited with
    inventing this idea: Julius Caesar, who crossed the Rubicon river into
    Italy in 49 BC in an act of open rebellion with no way back, and the
    Spanish conquistador Hernan Cortes, who supposedly burned his ships in
    1519 so his men couldn't retreat to Cuba. Both stories are dramatic,
    and both are slightly wrong in the telling. Caesar never actually
    burned a bridge; the "point of no return" was the river crossing
    itself, not any bridge-burning. Cortes, meanwhile, had his ships
    deliberately scuttled (sunk), not burned, according to the more
    reliable historical accounts. The broader military tactic of
    destroying your own retreat route to force an army forward is
    genuinely ancient and well documented, from Muslim forces in
    8th-century Spain to Chinese general Xiang Yu in 207 BC, but the
    English idiom itself only entered figurative use in the 19th century,
    long removed from any single specific incident.`,
    mythVsFact: "Caesar and Cortes are the two names people reach for first, but neither actually burned a bridge: Caesar crossed a river, and Cortes had his ships scuttled rather than set alight. The general tactic is real and very old, but pinning the English phrase to one specific historical moment doesn't hold up.",
    source: "Historical accounts of Caesar's Rubicon crossing (49 BC) and Cortes's 1519 landing in Mexico; figurative English usage documented from the 19th century, discussed in phrase-history references including Grammarist."
  },
  {
    id: "barking-mad",
    phrase: "Barking Mad",
    meaning: "Completely crazy or irrational.",
    category: "Popular Myths",
    verdict: "myth",
    verdictLabel: "Popular Myth",
    story: `A frequently repeated story claims this phrase comes from
    Barking, a town in Essex now part of East London, home to a medieval
    asylum attached to Barking Abbey where the mentally ill were supposedly
    sent, so someone acting strangely was said to be fit for "Barking."
    It's a tidy, place-name-based explanation. It's also almost certainly
    untrue: the phrase simply isn't recorded anywhere near the medieval
    period. The Oxford English Dictionary's earliest citation is from
    1933, in a novel by Christine Pakenham, Countess of Longford, a full
    six hundred years after the supposed asylum connection would have
    taken hold. The much more mundane and much better supported
    explanation is that "barking" simply describes a person acting
    deranged enough to bark like a mad dog, in the same family as the
    older, well-established phrase "mad as a March hare."`,
    mythVsFact: "The Barking, Essex asylum story is a satisfying explanation because it neatly matches the place name to the phrase, but there's a six-hundred-year gap between the supposed medieval origin and the phrase's actual first appearance in print in 1933, which makes the connection essentially impossible.",
    source: "Oxford English Dictionary (earliest citation 1933, Christine Pakenham, Mr Jiggins of Jigginstown); asylum myth investigated and dismissed by Michael Quinion, World Wide Words."
  },
  {
    id: "cat-got-your-tongue",
    phrase: "Cat Got Your Tongue?",
    meaning: "A question asked to someone who has suddenly gone quiet or is unable to speak.",
    category: "Still Unsolved",
    verdict: "mystery",
    verdictLabel: "Still a Mystery",
    story: `A phrase with more than one gruesome-sounding backstory
    attached to it, none of which actually holds up. One theory points to
    the Royal Navy's cat o' nine tails whip, the punishment supposedly
    leaving sailors too shocked to speak, but there's no solid documentary
    evidence linking the whip specifically to this phrase. A darker theory
    claims ancient Egyptians cut out the tongues of liars and fed them to
    cats, a story repeated online with total confidence and zero
    supporting archaeological or textual evidence. A third theory ties it
    to medieval witchcraft trials and cats as a witch's familiar, but the
    phrase doesn't appear in writing until 1881, in an American magazine,
    long after the European witch trials had ended. The honest answer is
    that nobody has found a convincing origin for any of it. It may be
    nothing more sinister than a simple, slightly odd question adults have
    long asked shy children.`,
    mythVsFact: null,
    source: "Earliest documented use from 1881, in Ballou's Monthly Magazine; competing whip, ancient-Egyptian, and witchcraft theories all assessed as unsupported in etymological research summarised by History.com and All That's Interesting."
  },
  {
    id: "dressed-to-the-nines",
    phrase: "Dressed to the Nines",
    meaning: "Dressed extremely smartly or elaborately, making a real effort.",
    category: "Still Unsolved",
    verdict: "mystery",
    verdictLabel: "Still a Mystery",
    story: `One of English's oldest unsolved etymological puzzles. The
    earliest known appearance is in a 1719 poem by the Scottish writer
    William Hamilton, though not yet specifically about clothing. Guesses
    about where "nine" comes from range widely: some point to the number
    of yards of fine fabric needed for an elaborate outfit, others to the
    uniform of a specific 18th-century regiment, and one 19th-century
    lexicographer speculated it might be a corruption of "to thine eyne"
    (to your eyes). None of these has ever been backed up with real
    evidence. The most likely explanation etymologists offer is also the
    least satisfying: in several old "nines" phrases, the number nine
    doesn't refer to anything specific at all, it's simply an old, vague
    way of saying "a great deal," the way modern English uses "a hundred
    percent."`,
    mythVsFact: null,
    source: "William Hamilton, Epistle to Ramsay (1719); fabric-yardage, regimental-uniform, and 'to thine eyne' theories all discussed and left unresolved in etymological research including wordhistories.net and Mental Floss."
  },
  {
    id: "bees-knees",
    phrase: "The Bee's Knees",
    meaning: "Something or someone considered excellent, the best.",
    category: "Still Unsolved",
    verdict: "mystery",
    verdictLabel: "Still a Mystery",
    story: `First recorded with its modern "excellent" meaning in a
    Buffalo, New York newspaper in February 1922, right in the middle of a
    1920s fad for nonsense animal-based slang: "the cat's pyjamas," "the
    cat's whiskers," "the monkey's eyebrows," and plenty more, most of
    which have since faded out of use. There doesn't appear to be any deep
    logical connection between bees, knees, and excellence; the appeal was
    almost certainly just the jaunty rhyme. A once-popular theory claiming
    the phrase honours 1920s dancer Bee Jackson doesn't work, since the
    phrase was already in print two years before she became famous.
    Confusingly, a much older, unrelated use of "bee's knee" from 1797
    meant something tiny and insignificant, the exact opposite of today's
    meaning, showing the phrase was recycled rather than invented from
    scratch.`,
    mythVsFact: null,
    source: "The Buffalo Times (February 1922), cited by etymonline.com; Bee Jackson theory dated and dismissed; 1920s nonsense-animal-slang pattern (cat's pyjamas, cat's whiskers) discussed in Wiktionary and Phrase Finder."
  },
  {
    id: "cut-the-mustard",
    phrase: "Cut the Mustard",
    meaning: "To succeed, or to meet the required standard.",
    category: "Still Unsolved",
    verdict: "mystery",
    verdictLabel: "Still a Mystery",
    story: `Recorded from the early 20th century, with an early confirmed
    use by the American writer O. Henry in 1907: "I looked around and
    found a proposition that exactly cut the mustard." Where the specific
    wording comes from is genuinely unresolved. One theory suggests it's a
    corrupted form of the military phrase "cut the muster," but nobody has
    ever found an actual example of "cut the muster" being used, which
    rather undermines the theory. Another points to mustard's older
    figurative use as a symbol of sharpness, zest, and enthusiasm, as in
    the much older phrase "keen as mustard," recorded from the late
    1600s. A literal theory involving harvesting mustard plants has also
    been floated, again without supporting evidence. All of it remains
    guesswork.`,
    mythVsFact: null,
    source: "O. Henry, Heart of the West (1907); 'cut the muster' theory assessed as unsupported by World Wide Words; 'keen as mustard' figurative usage documented from the late 17th century."
  },
  {
    id: "know-your-onions",
    phrase: "Know Your Onions",
    meaning: "To be knowledgeable and experienced about a subject.",
    category: "Still Unsolved",
    verdict: "mystery",
    verdictLabel: "Still a Mystery",
    story: `A tempting but false theory credits this to C. T. Onions, a
    genuinely respected lexicographer who worked on the Oxford English
    Dictionary and later edited the Oxford Dictionary of English
    Etymology. The timing lines up just well enough to make the story
    attractive, but it's pure coincidence: there's no actual link between
    the real Mr Onions and the phrase. "Know your onions" is American in
    origin, first appearing in the early 20th century as just one of a
    whole grocery aisle's worth of similar expressions from the same era,
    including "know your oats," "know your apples," and "know your
    beans." Nearly all of them have vanished from use; "know your onions"
    is simply the one that happened to stick.`,
    mythVsFact: "C. T. Onions was a real, distinguished Oxford English Dictionary lexicographer active at roughly the right time, which makes the connection feel almost too perfect. Etymologists are clear that it's coincidence rather than causation; there's no documented link between the man and the phrase.",
    source: "Documented American origin in the early 20th century; C. T. Onions theory investigated and dismissed by Michael Quinion, World Wide Words; sibling phrases ('know your oats,' 'know your apples') discussed in wordhistories.net."
  },
  {
    id: "cheesed-off",
    phrase: "Cheesed Off",
    meaning: "Annoyed, fed up, or irritated.",
    category: "Still Unsolved",
    verdict: "mystery",
    verdictLabel: "Still a Mystery",
    story: `British military slang, first recorded in 1942 during the
    Second World War, alongside its close cousin "browned off," meaning
    much the same thing. Exactly why "cheese" became attached to
    irritation isn't documented anywhere. One loose theory connects it to
    the older slang phrase "cheese it," meaning to stop or clear off;
    another ties it to "hard cheese," an old expression for bad luck. The
    Oxford English Dictionary is honest about it: the origin is simply
    listed as uncertain, and no wartime source explains why servicemen
    settled on cheese specifically, rather than any other food, as their
    image for fed-up frustration.`,
    mythVsFact: null,
    source: "Oxford English Dictionary (earliest evidence 1942); 'cheese it' and 'hard cheese' theories discussed without resolution in phrase-history references including Culture: The Word on Cheese."
  },
  {
    id: "dogs-breakfast",
    phrase: "A Dog's Breakfast",
    meaning: "A complete mess or muddle.",
    category: "Still Unsolved",
    verdict: "mystery",
    verdictLabel: "Still a Mystery",
    story: `Recorded in British slang since at least the 1930s, first
    written down in Eric Partridge's landmark 1937 Dictionary of Slang and
    Unconventional English. The obvious logic is that dogs will eat
    whatever chaotic mixture of scraps they're given, making a "dog's
    breakfast" of leftovers a natural symbol for any messy jumble. Beyond
    that reasonable guess, though, nobody recorded exactly why this
    particular meal, rather than any other, became the go-to image for a
    muddle. A closely related but distinct phrase, "dog's dinner," emerged
    around the same period but took on an almost opposite meaning,
    describing someone dressed in an ostentatiously showy way ("done up
    like a dog's dinner"), which only adds to the puzzle of how the two
    near-identical phrases ended up pointing in such different
    directions.`,
    mythVsFact: null,
    source: "Eric Partridge, Dictionary of Slang and Unconventional English (1937); 'dog's dinner' divergence in meaning discussed in wordhistories.net."
  },
  {
    id: "cock-a-hoop",
    phrase: "Cock-a-Hoop",
    meaning: "Extremely and openly pleased, especially about a success.",
    category: "Still Unsolved",
    verdict: "mystery",
    verdictLabel: "Still a Mystery",
    story: `Recorded since the mid-1500s, and widely regarded by
    etymologists as one of the most tangled word histories in English. The
    Oxford English Dictionary traces it to an older phrase, "to set cock a
    hoop," of genuinely unknown meaning, possibly describing the action of
    opening a tap to let drink flow freely at a celebration. A
    17th-century writer guessed that "cock" referred to a barrel's
    spigot; others have suggested "hoop" comes from the French word for a
    cockerel's crest, tying the phrase to a triumphantly crowing rooster
    instead. A later spelling, "cock-a-whoop," muddied the waters further
    by suggesting the rooster theory even more strongly, without actually
    proving it. After several centuries of effort, etymologists have
    simply never landed on one satisfying answer.`,
    mythVsFact: null,
    source: "Oxford English Dictionary (earliest evidence 1560s); competing spigot and cockerel-crest theories, along with the 'cock-a-whoop' spelling variant, discussed in World Wide Words."
  },
  {
    id: "elephant-in-the-room",
    phrase: "The Elephant in the Room",
    meaning: "An obvious problem or difficult topic that everyone is avoiding discussing.",
    category: "Still Unsolved",
    verdict: "mystery",
    verdictLabel: "Still a Mystery",
    story: `The image of something impossible to miss that everyone
    somehow ignores has a genuinely old literary ancestor: an 1814 Russian
    fable by Ivan Krylov, "The Inquisitive Man," about a museum visitor
    who notices every tiny curiosity on display while completely failing
    to notice the elephant. The fable became proverbial in Russian, and
    Dostoevsky even referenced it directly in his novel Demons. Whether
    that fable is actually where the English idiom comes from is a
    separate question nobody has answered. The English phrase itself is
    American, and its precise origin is unclear; the earliest confirmed
    print use in something close to its current sense is from 1959 in the
    New York Times, though a strikingly similar phrase turns up decades
    earlier, in 1915, in a British education journal, without any obvious
    connection between the two.`,
    mythVsFact: null,
    source: "Ivan Krylov, 'The Inquisitive Man' (1814); earliest confirmed close-sense citation in The New York Times (20 June 1959); earlier 1915 British Journal of Education citation discussed in Phrase Finder without a confirmed link."
  },
  {
    id: "cloud-nine",
    phrase: "On Cloud Nine",
    meaning: "Extremely happy; euphoric.",
    category: "Still Unsolved",
    verdict: "mystery",
    verdictLabel: "Still a Mystery",
    story: `A phrase with a specific, satisfying-sounding explanation that
    turns out not to hold up well. The most repeated theory ties it to the
    1896 International Cloud Atlas, which classified ten types of cloud,
    with cloud number nine (cumulonimbus) being the tallest and puffiest.
    It's a nice image, but there's no documented evidence anyone was
    actually calling it "cloud nine" in that meteorological context before
    the idiom appeared. The earliest real trail instead leads through
    1930s American slang, where "cloud eight" meant being drunk, later
    apparently drifting upward, numerically and figuratively, into "cloud
    nine" for blissful happiness by the 1950s, possibly popularised by
    jazz musicians describing a feeling of being pleasantly "high." A
    separate theory linking it to Buddhist stages of enlightenment has
    even less supporting evidence behind it.`,
    mythVsFact: "The weather-classification story, that cloud nine specifically refers to the tallest cloud type in an 1896 atlas, is the version most commonly repeated, but no one has found actual period slang using the phrase that way. The trail through 1930s drunkenness slang is much better documented, even if the reasoning behind the specific number nine is still unclear.",
    source: "Albin Pollock, The Underworld Speaks (1935), earliest documented related use ('cloud eight'); International Cloud Atlas theory assessed as unsupported by etymonline.com and World Wide Words."
  },
  {
    id: "pull-your-leg",
    phrase: "Pull Your Leg",
    meaning: "To tease someone, especially by telling them something untrue as a joke.",
    category: "Still Unsolved",
    verdict: "mystery",
    verdictLabel: "Still a Mystery",
    story: `The genuine origin of this one has simply never been found,
    despite the phrase feeling old and folksy. The earliest reliable
    printed record is from 1883, and no version from before roughly 1821
    has ever turned up. Two competing theories get repeated constantly:
    that London thieves would literally pull at a victim's leg to trip
    them before robbing them once they were down, or that it relates
    somehow to public hangings at Tyburn, where an executioner or
    bystander pulling on a hanged person's legs supposedly hastened their
    death. Both stories are colourful. Neither has any real supporting
    evidence, the details shift depending on who's telling it, and no
    historian has managed to connect either practice convincingly to this
    specific, much gentler phrase about teasing.`,
    mythVsFact: "The thief-tripping and Tyburn-hanging theories both get repeated with great confidence, right down to specific dates and locations, but neither is backed by genuine documentary evidence, and the story tends to change in the retelling, a classic sign of invented rather than traceable folklore.",
    source: "Earliest reliable citation from 1883; thief and hangman theories both assessed as unsupported speculation in etymological research including wordhistories.net and Today I Found Out."
  },
  {
    id: "whole-shebang",
    phrase: "The Whole Shebang",
    meaning: "Everything; the entire thing, with all its parts included.",
    category: "Still Unsolved",
    verdict: "mystery",
    verdictLabel: "Still a Mystery",
    story: `Both the Oxford English Dictionary and Merriam-Webster openly
    describe this one's origin as obscure. "Shebang" first shows up in
    American English during the Civil War era, including in Walt
    Whitman's own diary entries, where it seems to have meant a crude hut
    or shelter. By the 1860s it had broadened out on the American
    frontier to mean almost any kind of establishment, a store, a house, a
    shop, even a type of vehicle, as Mark Twain used it in Roughing It
    (1872). The specific phrase "the whole shebang" is recorded from
    1869, but exactly how a word for a rough shelter or a cart came to
    mean "everything" isn't explained anywhere in the record. It may
    simply be that "shebang" had already been stretched to cover so many
    different things that "the whole" of it naturally came to mean
    absolutely everything.`,
    mythVsFact: null,
    source: "Walt Whitman's Civil War-era diary entries; Mark Twain, Roughing It (1872); earliest use of 'the whole shebang' from 1869, origin listed as unknown by the Oxford English Dictionary and Merriam-Webster."
  },
  {
    id: "tickled-pink",
    phrase: "Tickled Pink",
    meaning: "Extremely pleased or delighted.",
    category: "Slang & Everyday Speech",
    verdict: "disputed",
    verdictLabel: "Likely Origin (Disputed)",
    story: `Builds on the much older use of "tickled" to mean delighted,
    which Shakespeare himself used in Coriolanus ("tickled with good
    success"). The "pink" half is newer, dating to the late 19th or early
    20th century, and the leading theory holds that it pictures someone's
    face flushing a happy shade of pink from laughing or blushing with
    pleasure, similar to the older phrase "in the pink," meaning in good
    health. It's a well-supported, plausible theory rather than a wild
    guess, but the exact link between "pink" and happiness specifically,
    rather than just health or good condition generally, isn't fully
    nailed down by any single documented source.`,
    mythVsFact: null,
    source: "Early citation from The Daily Review (Illinois, 1910); figurative 'tickled' usage traced to Shakespeare's Coriolanus (c.1608); pink-flush theory discussed in Grammarist and Idiom Origins."
  },
  {
    id: "at-loggerheads",
    phrase: "At Loggerheads",
    meaning: "In serious dispute or conflict with someone.",
    category: "Trade & Industry",
    verdict: "disputed",
    verdictLabel: "Likely Origin (Disputed)",
    story: `Recorded from the 1670s, and built from an older word,
    "loggerhead," which by Shakespeare's time already meant a blockhead or
    fool (he used it that way in Love's Labour's Lost and The Taming of
    the Shrew). One theory says the phrase simply grew from that
    "quarrelling idiot" sense. A second, more specific theory points to
    an actual 17th-century tool: a "loggerhead" was an iron ball on a long
    wooden handle, heated and used to melt pitch and tar for shipbuilding,
    which could also double as an improvised weapon when tempers flared
    between workers or sailors. Both explanations are genuinely plausible
    and both have real supporting evidence from the period; etymologists
    haven't settled definitively on which one, if either alone, is the
    true root.`,
    mythVsFact: null,
    source: "William Shakespeare, Love's Labour's Lost (c.1598) and The Taming of the Shrew (c.1592), 'loggerhead' as blockhead; tool-based theory documented in etymonline.com and the Oxford English Dictionary, entry for 'loggerhead.'"
  },
  {
    id: "at-the-drop-of-a-hat",
    phrase: "At the Drop of a Hat",
    meaning: "Immediately, without any hesitation or need for persuasion.",
    category: "Sport & Military",
    verdict: "disputed",
    verdictLabel: "Likely Origin (Disputed)",
    story: `American in origin, with a documented use as early as 1837,
    well before the phrase became common in everyday speech. The leading
    theory ties it to 19th-century sporting customs, particularly in
    Ireland and the American frontier, where dropping a hat was a simple,
    visible way to signal the instant start of a horse race or a foot race
    to competitors who might be spread out and unable to hear a shout. A
    closely related theory points to fairground boxing booths, where a
    challenger would throw his own hat into the ring as a signal that he
    wanted to fight the resident champion. Both theories point to the
    same basic idea, a hat as a quick, unmistakable starting signal, and
    both have reasonable period support, without one being definitively
    proven over the other.`,
    mythVsFact: null,
    source: "Earliest citation from 1837 (US Congressional record); racing-signal and fairground-boxing theories both discussed in World Wide Words and Grammarist."
  },
  {
    id: "real-mccoy",
    phrase: "The Real McCoy",
    meaning: "The genuine, authentic thing, not an imitation.",
    category: "Slang & Everyday Speech",
    verdict: "disputed",
    verdictLabel: "Likely Origin (Disputed)",
    story: `The most widely accepted theory traces this back to Scotland,
    as a corruption of an earlier phrase, "the real MacKay," first
    recorded in an 1856 Glasgow poem. A Glasgow whisky company, A. & M.
    Mackay, used "the real MacKay" as an advertising slogan from 1870
    onward, and the phrase became especially popular in North America
    during Prohibition as a way of distinguishing genuine imported whisky
    from bootleg imitations. A much more famous rival story credits
    American boxer "Kid McCoy," supposedly proving his identity to a
    barroom doubter by knocking him out, but this tale is almost certainly
    invented after the fact, since it postdates the phrase's earliest
    documented use. The Scottish whisky theory has the strongest
    supporting evidence, though even that connection isn't considered
    fully proven.`,
    mythVsFact: "The boxer 'Kid McCoy' story is the one told most often and with the most colourful detail, but it's chronologically impossible: the phrase was already circulating before Kid McCoy's supposed barroom incident could have happened. The whisky-brand theory has real 19th-century advertising evidence behind it, though it's still short of definitive proof.",
    source: "'The real MacKay' recorded in a Glasgow poem (1856); A. & M. Mackay whisky advertising slogan documented from 1870; Kid McCoy theory dated and dismissed in research summarised by Snopes and World Wide Words."
  },
  {
    id: "mad-as-a-march-hare",
    phrase: "Mad as a March Hare",
    meaning: "Completely wild, crazy, or eccentric.",
    category: "Language Itself",
    verdict: "well-documented",
    verdictLabel: "Well Documented",
    story: `A genuinely observed piece of natural history turned into
    idiom. Hares are usually shy, solitary animals, but during their
    spring breeding season, roughly centred on March, they engage in
    dramatic "boxing" matches, leaping, chasing, and striking each other
    with their front paws, most often females fending off overeager
    males. To anyone watching without knowing why, it looks exactly like
    sudden madness. The comparison is recorded from around 1500, in the
    poem Blowbol's Test, and was already established enough to be
    included in John Heywood's collection of English proverbs in 1546.
    Lewis Carroll's March Hare character in Alice in Wonderland (1865)
    drew directly on this already-centuries-old phrase.`,
    mythVsFact: null,
    source: "Blowbol's Test (c.1500); John Heywood, A Dialogue Conteinyng the Nomber in Effect of All the Prouerbes in the Englishe Tongue (1546); Lewis Carroll, Alice in Wonderland (1865)."
  },
  {
    id: "eat-humble-pie",
    phrase: "Eat Humble Pie",
    meaning: "To be forced to admit you were wrong and apologise, often humiliatingly.",
    category: "Food & Dining",
    verdict: "well-documented",
    verdictLabel: "Well Documented",
    story: `A genuine piece of medieval cooking hiding behind a pun. The
    original dish was "umble pie," made from the "umbles," the edible
    innards, particularly of deer, that were considered low-status food
    fit mainly for servants and huntsmen, while the lord of the manor ate
    the prized venison meat itself. "Umble" comes from the Old French
    "nombles," meaning deer's innards. Because the "h" in "humble" wasn't
    originally pronounced, "umble pie" and "humble pie" sounded identical,
    and English speakers gradually merged the two, since eating the
    servants' offal pie while your betters ate well already carried an
    obvious sting of social humiliation. "Umble pie" is recorded from the
    1640s; the modern "humble pie" spelling and its figurative sense of
    forced apology followed by 1830.`,
    mythVsFact: null,
    source: "Middle French 'nombles' (deer's innards); 'umble pie' recorded from the 1640s; figurative 'humble pie' from 1830, cited in etymonline.com and the Oxford English Dictionary."
  },
  {
    id: "flash-in-the-pan",
    phrase: "A Flash in the Pan",
    meaning: "Something that shows early promise but quickly fails or fizzles out.",
    category: "War & Conflict",
    verdict: "well-documented",
    verdictLabel: "Well Documented",
    story: `A literal mechanical failure from the age of flintlock
    firearms. A flintlock musket ignited its main charge by first
    sparking a small amount of gunpowder held in a metal "pan" beside the
    barrel; that spark was meant to travel through a small touch-hole and
    set off the main charge, firing the shot. Sometimes the priming
    powder in the pan would flare up in a bright flash without ever
    igniting the main charge, producing a dramatic burst of light, smoke,
    and noise but no actual shot fired, all promise and no result. The
    phrase is recorded in this literal sense from the 1680s, with
    figurative use for disappointing false starts following by the early
    1800s.`,
    mythVsFact: null,
    source: "Elkanah Settle, Reflections on Several of Mr. Dryden's Plays (1687); figurative use documented from the early 19th century, cited in Merriam-Webster and Mental Floss."
  },
  {
    id: "world-is-your-oyster",
    phrase: "The World Is Your Oyster",
    meaning: "You have complete freedom and opportunity to make of life whatever you want.",
    category: "Literature",
    verdict: "well-documented",
    verdictLabel: "Well Documented",
    story: `Coined by Shakespeare in The Merry Wives of Windsor (c.1602).
    When Falstaff refuses to lend him money, the character Pistol
    replies, "Why then the world's mine oyster, which I with sword will
    open," meaning he's prepared to use force, cracking the world open
    the way you'd prise open an oyster shell, to get what he's owed,
    likely a pearl of real value hidden inside. The line's original
    meaning is considerably more violent and mercenary than its modern
    use. Over the centuries the sword dropped out of the phrase entirely,
    and "the world is your oyster" softened into today's much gentler
    sense of boundless opportunity.`,
    mythVsFact: null,
    source: "William Shakespeare, The Merry Wives of Windsor (c.1602), Act II Scene II."
  },
  {
    id: "run-the-gauntlet",
    phrase: "Run the Gauntlet",
    meaning: "To face a barrage of criticism, danger, or difficulty from multiple directions at once.",
    category: "War & Conflict",
    verdict: "well-documented",
    verdictLabel: "Well Documented",
    story: `A real, brutal military punishment, not a metaphor to begin
    with. Soldiers found guilty of an offence were forced to run between
    two facing rows of their fellow troops, who struck them with sticks
    or knotted ropes as they passed. The word itself comes from the
    Swedish "gatlopp" (from "gata," lane, and "lopp," a running course),
    borrowed into English in the 17th century, likely through English
    soldiers fighting alongside Swedish forces during the Thirty Years'
    War. The English spelling gradually shifted from the original
    "gantlope" or "gantelope" toward "gauntlet," confused with the
    unrelated word for an armoured glove, even though the two words share
    no real connection.`,
    mythVsFact: null,
    source: "Swedish 'gatlopp,' borrowed into English via 17th-century Thirty Years' War military contact; spelling evolution documented in etymonline.com and Wikipedia's history of the punishment."
  },
  {
    id: "writing-on-the-wall",
    phrase: "The Writing on the Wall",
    meaning: "A clear sign that something bad or disastrous is about to happen.",
    category: "Literature",
    verdict: "well-documented",
    verdictLabel: "Well Documented",
    story: `Traces directly to the Book of Daniel in the Bible. At a
    lavish feast, the Babylonian king Belshazzar drinks from sacred
    goblets looted from Jerusalem's Temple, and a disembodied hand
    suddenly appears and writes a mysterious message on the palace wall.
    The prophet Daniel is brought in to interpret the words, "Mene, mene,
    tekel, upharsin," explaining that Belshazzar has been weighed and
    found wanting, and that his kingdom is about to be divided between
    the Medes and Persians. Belshazzar is killed that same night. The
    story is specific and vivid enough that "the writing on the wall"
    passed straight into English as a byword for any unmistakable sign of
    impending doom.`,
    mythVsFact: null,
    source: "Book of Daniel, chapter 5 (Belshazzar's Feast)."
  },
  {
    id: "proof-of-the-pudding",
    phrase: "The Proof of the Pudding Is in the Eating",
    meaning: "The real value or success of something can only be judged by trying it or seeing the results.",
    category: "Language Itself",
    verdict: "well-documented",
    verdictLabel: "Well Documented",
    story: `An old proverb, with maxims expressing a similar idea traced
    back as far as the 1300s and the full phrase itself documented from
    antiquarian William Camden's 1623 book Remains Concerning Britain. In
    medieval English, "pudding" didn't mean a sweet dessert; it referred
    to a dense savoury dish of meat, grains, fat, and spices, often
    stuffed into an animal's intestine, and "proof" meant a test rather
    than evidence. The only real way to judge whether a pudding had been
    made well was to actually eat it. Over time the proverb got clipped
    down in everyday speech to the shorter, much less logical "the proof
    is in the pudding," a phrase that, taken literally, doesn't really
    mean anything at all, since proof obviously isn't found inside a
    pudding. The original, longer version is the one that actually makes
    sense.`,
    mythVsFact: null,
    source: "William Camden, Remains Concerning Britain (1623); earlier related maxims traced to the 1300s; modern misquote discussed in Merriam-Webster and Mental Floss."
  },
  {
    id: "close-but-no-cigar",
    phrase: "Close, But No Cigar",
    meaning: "A near success that still falls short of actually winning or succeeding.",
    category: "Slang & Everyday Speech",
    verdict: "well-documented",
    verdictLabel: "Well Documented",
    story: `Rooted in the real prize structure of American carnivals and
    fairgrounds in the early 20th century, where cigars, rather than
    stuffed toys, were a common prize for games of skill like the "high
    striker," where a player swings a mallet to send a weight up a tower
    to ring a bell. A stallholder watching a player narrowly miss the
    target would call out "close, but no cigar" to explain the near-miss
    without a prize. The earliest confirmed print citation is a 1929
    newspaper headline in the Long Island Daily Press, though the
    carnival-floor phrase was very likely already in casual, unrecorded
    use before that.`,
    mythVsFact: null,
    source: "Long Island Daily Press, 'Close; But No Cigar' (18 May 1929); carnival prize-game custom documented in Today I Found Out and Cigar Country."
  },
  {
    id: "know-the-ropes",
    phrase: "Know the Ropes",
    meaning: "To understand how something works, especially through experience.",
    category: "Sailing & the Sea",
    verdict: "well-documented",
    verdictLabel: "Well Documented",
    story: `A straightforward piece of nautical training turned idiom.
    Sailing ships were controlled by an enormous, complicated web of
    rigging, and one of the very first things a new sailor had to master
    was which rope did what, and how to tie, splice, and handle each one
    correctly. A crew member who genuinely understood the rigging "knew
    the ropes"; one who didn't was a liability. The phrase appears in a
    literal, nautical sense in Richard Henry Dana's sailing memoir Two
    Years Before the Mast (1840), and had already shifted into general,
    non-nautical figurative use by the late 19th century, describing
    anyone who'd learned the practical details of a job.`,
    mythVsFact: null,
    source: "Richard Henry Dana Jr., Two Years Before the Mast (1840); figurative usage documented from the late 19th century, cited in Grammarphobia and Harbour Guides."
  }
];

const CATEGORIES = [...new Set(IDIOMS.map((i) => i.category))].sort();
