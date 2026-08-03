/* D.V.C.I. Idiom Quiz: question data. Each question references an idiom's
   id in IDIOMS (assets/data.js) so the reveal card can pull the real story,
   badge, and sources straight from the single source of truth rather than
   duplicating them here. Every question names the idiom being asked about
   directly, and options are kept to roughly matched length and detail so
   the correct answer doesn't stand out just from how it reads; the extra
   explanatory detail lives in the reveal card, not the options. */

const QUIZ_QUESTIONS = [
  {
    idiomId: "curry-favour",
    question: "What does the idiom \"curry favour\" actually relate to?",
    options: [
      "A medieval horse",
      "A plate of food served in the Houses of Parliament",
      "An old wives' tale about a cleaning method"
    ],
    correctIndex: 0
  },
  {
    idiomId: "riot-act",
    question: "\"Reading someone the riot act\" isn't just a figure of speech. What was it originally?",
    options: [
      "A punishment where offenders read court transcripts aloud in public",
      "A real law that had to be read aloud to a crowd",
      "A badly-received play so notorious it caused actual riots"
    ],
    correctIndex: 1
  },
  {
    idiomId: "hook-or-crook",
    question: "The leading theory behind \"by hook or by crook\" involves which medieval practice?",
    options: [
      "Blacksmiths testing the purity of metal with two tools",
      "Fishermen dividing a catch fairly using two tools",
      "Peasants gathering deadwood from common land using two specific tools"
    ],
    correctIndex: 2
  },
  {
    idiomId: "bakers-dozen",
    question: "Where does \"baker's dozen\" (13, not 12) most likely come from?",
    options: [
      "A 13th-century law that punished bakers for underweight loaves",
      "A guild tradition of lighting 13 candles for luck",
      "A superstition that the number 12 was unlucky for bread"
    ],
    correctIndex: 0
  },
  {
    idiomId: "diehard",
    question: "The word \"diehard\" was coined on a real battlefield in 1811. By which regiment?",
    options: [
      "The Coldstream Guards",
      "The 57th (West Middlesex) Regiment of Foot",
      "The Royal Horse Artillery"
    ],
    correctIndex: 1
  },
  {
    idiomId: "catch-22",
    question: "Where does \"Catch-22\" actually come from?",
    options: [
      "Official U.S. Air Force paperwork jargon",
      "A mistranslation of a WWI French military phrase",
      "Novelist Joseph Heller invented it for his 1961 book"
    ],
    correctIndex: 2
  },
  {
    idiomId: "mad-as-a-hatter",
    question: "What's the real, documented explanation behind \"mad as a hatter\"?",
    options: [
      "Chronic mercury poisoning from a chemical used in hat-making",
      "A hat-making guild's strange initiation ritual",
      "Lewis Carroll invented the phrase for Alice in Wonderland"
    ],
    correctIndex: 0
  },
  {
    idiomId: "gordon-bennett",
    question: "Honestly, what do etymologists actually know for certain about who \"Gordon Bennett\" refers to?",
    options: [
      "It definitely refers to a scandal-prone American newspaper publisher",
      "It's definitely just rhyming slang with no real person behind it",
      "Nobody actually knows for certain, it's still unresolved"
    ],
    correctIndex: 2
  },
  {
    idiomId: "cwtch",
    question: "Besides \"hug,\" what's the second meaning of the Welsh word \"cwtch\"?",
    options: [
      "A traditional Welsh folk dance",
      "A small cupboard or cubbyhole",
      "A type of Welsh pastry"
    ],
    correctIndex: 1
  },
  {
    idiomId: "spill-the-beans",
    question: "What's the actual earliest documented use of \"spill the beans\" (from 1902)?",
    options: [
      "A record of an ancient Greek jury vote",
      "A line from a Victorian cookbook",
      "American horse-racing slang"
    ],
    correctIndex: 2
  },
  {
    idiomId: "white-elephant",
    question: "What's the popular, though never actually confirmed, story behind calling something a \"white elephant\"?",
    options: [
      "Siamese kings gifted sacred white elephants to courtiers as a ruinous \"honour\"",
      "A circus elephant escaped after being painted white for a Victorian show",
      "The phrase is named after a real London pub called The White Elephant"
    ],
    correctIndex: 0
  },
  {
    idiomId: "bury-the-hatchet",
    question: "\"Bury the hatchet\" comes from a genuine historical peacemaking custom. Whose custom?",
    options: [
      "Viking raiding parties, marking a truce before shared feasting",
      "Native American nations, including the Haudenosaunee Confederacy",
      "Medieval English trade guilds, settling disputes between rival crafts"
    ],
    correctIndex: 1
  },
  {
    idiomId: "loose-cannon",
    question: "What made a \"loose cannon\" such a vivid, literal danger on old warships?",
    options: [
      "A cannon breaking its lashings and rolling loose across the deck",
      "Captains nicknamed after their ship's most temperamental gun",
      "Damp gunpowder occasionally igniting without warning below deck"
    ],
    correctIndex: 0
  },
  {
    idiomId: "son-of-a-gun",
    question: "A colourful, if shaky, naval legend claims \"son of a gun\" comes from what?",
    options: [
      "Gunners who fired their cannon without waiting for orders",
      "Sailors nicknamed after their cannon's calibre",
      "Children reportedly born on a ship's gun deck"
    ],
    correctIndex: 2
  },
  {
    idiomId: "break-a-leg",
    question: "Which popular story about \"break a leg\" is almost certainly false, since the phrase isn't recorded until decades later?",
    options: [
      "That it comes from ballet dancers bowing so low a knee cracked",
      "That it comes from John Wilkes Booth breaking his leg after assassinating Lincoln on a theatre stage",
      "That it comes from Shakespearean-era stagehands"
    ],
    correctIndex: 1
  },
  {
    idiomId: "rule-of-thumb",
    question: "The wife-beating law myth attached to \"rule of thumb\" traces back to what?",
    options: [
      "A genuine clause in a 19th-century act of Parliament",
      "A misquote from a Charles Dickens novel",
      "An unverified rumour about an 18th-century judge"
    ],
    correctIndex: 2
  },
  {
    idiomId: "wazzock",
    question: "How recent is the earliest confirmed written use of \"wazzock,\" according to the Oxford English Dictionary?",
    options: [
      "1976",
      "1876",
      "1576"
    ],
    correctIndex: 0
  },
  {
    idiomId: "scran",
    question: "A popular claim says \"scran\" is a naval acronym for \"Sultanas, Currants, Raisins And Nuts.\" What's the truth?",
    options: [
      "Confirmed in Royal Navy supply ledgers",
      "Coined specifically during WWII rationing",
      "Unproven; far older than the acronym claims"
    ],
    correctIndex: 2
  },
  {
    idiomId: "ginnel",
    question: "What does a \"ginnel\" mean in Yorkshire and Lancashire dialect?",
    options: [
      "A narrow alleyway between terraced houses",
      "A cup of strong tea",
      "A telling-off from a parent"
    ],
    correctIndex: 0
  },
  {
    idiomId: "bairn",
    question: "\"Bairn\" (meaning child) survives mainly in which regions today?",
    options: [
      "Cornwall and Devon",
      "East Anglia",
      "Scotland and North East England"
    ],
    correctIndex: 2
  },
  {
    idiomId: "mither",
    question: "What does \"mither\" mean in Manchester dialect?",
    options: [
      "To pester or make a fuss",
      "To celebrate loudly",
      "To feel very cold"
    ],
    correctIndex: 0
  },
  {
    idiomId: "gadgie",
    question: "The Geordie word \"gadgie\" (meaning a bloke) traces back to which language?",
    options: [
      "Old Norse",
      "Romani",
      "Latin"
    ],
    correctIndex: 1
  },
  {
    idiomId: "under-the-weather",
    question: "The leading nautical theory for \"under the weather\" involves what?",
    options: [
      "Ships delayed in port by storms",
      "Sick sailors sent below deck",
      "Sailors paid less during winter voyages"
    ],
    correctIndex: 1
  },
  {
    idiomId: "curiosity-killed-the-cat",
    question: "The proverb \"curiosity killed the cat\" didn't start out about curiosity at all. What was the original version?",
    options: [
      "\"Mischief killed the cat\"",
      "\"Pride killed the cat\"",
      "\"Care killed the cat\""
    ],
    correctIndex: 2
  },
  {
    idiomId: "green-eyed-monster",
    question: "Who coined \"the green-eyed monster\" to mean jealousy?",
    options: [
      "Charles Dickens",
      "Shakespeare, in Othello",
      "Geoffrey Chaucer"
    ],
    correctIndex: 1
  },
  {
    idiomId: "skin-of-your-teeth",
    question: "\"By the skin of your teeth\" comes from where?",
    options: [
      "A medieval dentistry manual",
      "An old sailors' proverb",
      "The Book of Job in the Bible"
    ],
    correctIndex: 2
  },
  {
    idiomId: "chip-on-your-shoulder",
    question: "The literal 19th-century American custom behind \"chip on your shoulder\" involved what?",
    options: [
      "Carrying a chipped coin as a sign of unpaid debt",
      "Balancing a wood chip on your shoulder as a fighting dare",
      "Wearing a splinter of ship's timber as a badge of honour"
    ],
    correctIndex: 1
  },
  {
    idiomId: "cold-turkey",
    question: "The popular \"plucked turkey skin\" theory for \"cold turkey\" doesn't hold up. Why not?",
    options: [
      "Turkeys weren't farmed in Britain until the 20th century",
      "The phrase was actually coined by a poultry company",
      "It already existed with unrelated meanings before drug use borrowed it"
    ],
    correctIndex: 2
  },
  {
    idiomId: "sent-to-coventry",
    question: "\"Sent to Coventry\" likely originates from which historical conflict?",
    options: [
      "The Wars of the Roses",
      "The English Civil War",
      "The Jacobite Rising of 1745"
    ],
    correctIndex: 1
  },
  {
    idiomId: "cold-shoulder",
    question: "What's the popular, though unproven, explanation for \"the cold shoulder\"?",
    options: [
      "Turning your literal shoulder away from an unwanted guest at a dance",
      "Serving an unwelcome guest a cold, cheap cut of mutton",
      "Dousing an unwelcome guest with a bucket of cold water"
    ],
    correctIndex: 1
  },
  {
    idiomId: "red-handed",
    question: "\"Caught red-handed\" comes from which legal tradition?",
    options: [
      "Roman law",
      "Maritime prize law",
      "Scots law"
    ],
    correctIndex: 2
  },
  {
    idiomId: "pull-out-stops",
    question: "\"Pull out all the stops\" has a literal mechanical origin. Where?",
    options: [
      "A pipe organ",
      "A steam locomotive's brake system",
      "A weaving loom"
    ],
    correctIndex: 0
  },
  {
    idiomId: "beyond-the-pale",
    question: "What does \"pale\" actually mean in \"beyond the pale\"?",
    options: [
      "A pale colour associated with cowardice",
      "An old word for a prison cell",
      "A boundary fence made of wooden stakes"
    ],
    correctIndex: 2
  },
  {
    idiomId: "bite-the-bullet",
    question: "The vivid story that \"bite the bullet\" comes from battlefield surgeons giving soldiers a bullet to bite during amputations is:",
    options: [
      "Well documented in period surgical records",
      "Unsupported; real accounts describe leather straps or wooden gags instead",
      "True, but only in the Royal Navy"
    ],
    correctIndex: 1
  },
  {
    idiomId: "ps-and-qs",
    question: "Which explanation for \"mind your Ps and Qs\" is actually confirmed, rather than just a guess?",
    options: [
      "The pub landlord's tally-slate theory",
      "The apprentice typesetter theory",
      "None of them, it's a genuine unsolved mystery"
    ],
    correctIndex: 2
  },
  {
    idiomId: "raining-cats-and-dogs",
    question: "The \"dead animals washed through flooded streets\" story for \"raining cats and dogs\" actually comes from where?",
    options: [
      "A confirmed 17th-century sanitation report",
      "A separate piece of Jonathan Swift's writing",
      "An old Norse saga"
    ],
    correctIndex: 1
  },
  {
    idiomId: "turn-a-blind-eye",
    question: "The Admiral Nelson \"blind eye to the telescope\" story is often told as the origin of \"turn a blind eye.\" What's the problem with it?",
    options: [
      "Nelson was never actually blind in one eye",
      "The general phrase isn't recorded in use until decades after Nelson's death",
      "The story actually took place at Trafalgar, not Copenhagen"
    ],
    correctIndex: 1
  },
  {
    idiomId: "cat-out-of-the-bag",
    question: "The earliest recorded use of \"let the cat out of the bag,\" from 1760, was:",
    options: [
      "A vivid tale about market traders swapping cats for piglets",
      "A description of a naval whip being revealed",
      "A book review complaining an ending had been given away"
    ],
    correctIndex: 2
  },
  {
    idiomId: "swing-a-cat",
    question: "One theory for \"no room to swing a cat\" involves the Royal Navy's cat o' nine tails whip. What's the issue with it?",
    options: [
      "No source directly ties the phrase to that specific object",
      "The cat o' nine tails was actually swung on land, not at sea",
      "It's confirmed as the definite origin by naval records"
    ],
    correctIndex: 0
  },
  {
    idiomId: "toe-the-line",
    question: "Which explanation for \"toe the line\" is the shakiest, despite being the most repeated?",
    options: [
      "Runners lining up with toes at a starting line",
      "Soldiers on parade drilled to align their toes on a mark",
      "MPs kept two sword-lengths apart by lines on the Commons floor"
    ],
    correctIndex: 2
  },
  {
    idiomId: "skeleton-in-the-cupboard",
    question: "One theory behind \"a skeleton in the cupboard\" ties it to which 19th-century profession?",
    options: [
      "Undertakers quietly storing spare coffins",
      "Doctors hiding an actual teaching skeleton",
      "Lawyers hiding incriminating evidence"
    ],
    correctIndex: 1
  },
  {
    idiomId: "sleep-tight",
    question: "The charming story that \"sleep tight\" comes from tightening rope-strung beds is:",
    options: [
      "Confirmed by 19th-century furniture records",
      "Unsupported; \"tight\" likely just meant \"soundly\"",
      "True, but only for beds in America"
    ],
    correctIndex: 1
  },
  {
    idiomId: "in-a-pickle",
    question: "\"In a pickle,\" used by Shakespeare in The Tempest, comes from which language's idiom?",
    options: [
      "French",
      "Dutch",
      "Latin"
    ],
    correctIndex: 1
  },
  {
    idiomId: "coals-to-newcastle",
    question: "Why was \"taking coals to Newcastle\" the definition of a pointless errand?",
    options: [
      "Newcastle banned coal imports by law",
      "Newcastle was already a major coal-exporting centre",
      "Newcastle's coal was considered poor quality"
    ],
    correctIndex: 1
  },
  {
    idiomId: "true-colours",
    question: "In \"show your true colours,\" what does \"colours\" originally refer to?",
    options: [
      "A ship's national flag",
      "A soldier's regimental badge",
      "A merchant's trade guild emblem"
    ],
    correctIndex: 0
  },
  {
    idiomId: "three-sheets-to-the-wind",
    question: "In \"three sheets to the wind,\" what is a ship's \"sheet\" actually?",
    options: [
      "A sail itself",
      "A rope controlling a sail's angle",
      "A type of anchor"
    ],
    correctIndex: 1
  },
  {
    idiomId: "cut-of-your-jib",
    question: "In \"I don't like the cut of your jib,\" what is a ship's \"jib,\" and why did its \"cut\" matter?",
    options: [
      "The captain's uniform, which signalled rank",
      "A carved wooden figurehead",
      "A front sail whose shape revealed a ship's nationality"
    ],
    correctIndex: 2
  },
  {
    idiomId: "push-the-boat-out",
    question: "\"Push the boat out\" is thought to come from what communal custom?",
    options: [
      "Fishermen sharing their catch equally",
      "Everyone helping launch a boat, then the owner buying a round",
      "Sailors pooling money for a leaving party"
    ],
    correctIndex: 1
  },
  {
    idiomId: "break-the-ice",
    question: "Before icebreaker ships existed, what were small reinforced boats sent ahead to do, giving us \"break the ice\"?",
    options: [
      "Break a path through frozen harbours",
      "Rescue sailors from shipwrecks",
      "Deliver urgent mail in winter"
    ],
    correctIndex: 0
  },
  {
    idiomId: "full-monty",
    question: "What's actually true about the origin of \"the full Monty\"?",
    options: [
      "It's definitively traced to Montague Burton's tailoring chain",
      "The Oxford English Dictionary lists the origin as unknown",
      "It's definitively traced to Field Marshal Montgomery"
    ],
    correctIndex: 1
  },
  {
    idiomId: "bobs-your-uncle",
    question: "The story that \"Bob's your uncle\" comes from PM Robert Cecil appointing his nephew Arthur Balfour is popular, but:",
    options: [
      "It's confirmed by Robert Cecil's own diaries",
      "The phrase isn't recorded until the 1930s, decades later",
      "Arthur Balfour himself denied any connection"
    ],
    correctIndex: 1
  },
  {
    idiomId: "gone-for-a-burton",
    question: "\"Gone for a Burton\" was RAF slang in WWII. What's genuinely unresolved about it?",
    options: [
      "Whether \"Burton\" means a beer brand or a menswear chain",
      "Whether the phrase started in the RAF or the Navy",
      "The exact date it was first used"
    ],
    correctIndex: 0
  },
  {
    idiomId: "sixes-and-sevens",
    question: "A real 1484 London guild dispute fits \"at sixes and sevens\" perfectly. What was it about?",
    options: [
      "A tax dispute over sixpence and sevenpence",
      "Two guilds arguing over sixth and seventh place in precedence",
      "Six versus seven days in a working week"
    ],
    correctIndex: 1
  },
  {
    idiomId: "kick-the-bucket",
    question: "A theory favoured by Brewer's Dictionary links \"kick the bucket\" to what?",
    options: [
      "An old East Anglian word for a slaughter beam",
      "A specific bucket used in public executions",
      "A children's game involving buckets"
    ],
    correctIndex: 0
  },
  {
    idiomId: "on-the-fiddle",
    question: "One nautical theory for \"on the fiddle\" involves what shipboard object?",
    options: [
      "A stringed instrument played to distract guards",
      "A raised rail stopping plates sliding off a mess-table",
      "A ship's compass"
    ],
    correctIndex: 1
  },
  {
    idiomId: "taking-the-mickey",
    question: "\"Taking the mickey\" is generally believed to be a softened version of what, via Cockney rhyming slang?",
    options: [
      "\"Taking the piss,\" via the rhyme \"Mickey Bliss\"",
      "An old Irish folk insult",
      "A reference to a cartoon mouse"
    ],
    correctIndex: 0
  },
  {
    idiomId: "codswallop",
    question: "The Hiram Codd fizzy-bottle story for \"codswallop\" doesn't hold up. Why?",
    options: [
      "Codd never actually invented a bottle",
      "\"Wallop\" never meant beer",
      "The word isn't recorded until the 1950s-60s, decades later"
    ],
    correctIndex: 2
  },
  {
    idiomId: "elbow-grease",
    question: "\"Elbow grease,\" recorded as early as 1672, plays on which idea?",
    options: [
      "The only real \"grease\" for cleaning is your own effort",
      "Elbows produce natural oils useful for polishing",
      "A specific brand of Victorian furniture polish"
    ],
    correctIndex: 0
  },
  {
    idiomId: "donkeys-years",
    question: "\"Donkey's years\" is a pun built on what?",
    options: [
      "A donkey's actual average lifespan",
      "\"Donkey's ears,\" since \"ears\" and \"years\" sound alike",
      "An old unit of farm labour time"
    ],
    correctIndex: 1
  },
  {
    idiomId: "at-a-loose-end",
    question: "The leading nautical theory for \"at a loose end\" involves what shipboard task?",
    options: [
      "Re-splicing loose rope ends when there was nothing else to do",
      "Waiting for a loose sail to be repaired",
      "Untying a ship from harbour"
    ],
    correctIndex: 0
  },
  {
    idiomId: "take-the-biscuit",
    question: "\"Take the biscuit\" is the British version of which more international phrase?",
    options: [
      "\"Take the crown\"",
      "\"Take the cake\"",
      "\"Take the trophy\""
    ],
    correctIndex: 1
  },
  {
    idiomId: "bog-standard",
    question: "The leading, though unconfirmed, theory for \"bog standard\" is that it's a corruption of what?",
    options: [
      "\"Box standard,\" a technical specification sheet",
      "\"Bog Irish,\" an old ethnic slur",
      "\"Log standard,\" a timber measurement"
    ],
    correctIndex: 0
  },
  {
    idiomId: "over-the-moon",
    question: "\"Over the moon\" (meaning delighted) actually predates its famous association with what?",
    options: [
      "Royal weddings",
      "British football post-match interviews",
      "The Apollo moon landings"
    ],
    correctIndex: 1
  },
  {
    idiomId: "over-the-top",
    question: "\"Over the top,\" meaning excessive, comes directly from what?",
    options: [
      "Circus acrobatics",
      "Victorian theatre criticism",
      "First World War trench warfare"
    ],
    correctIndex: 2
  },
  {
    idiomId: "not-cricket",
    question: "\"That's not cricket\" extends the sport's reputation for what into general use?",
    options: [
      "Fair play and gentlemanly conduct",
      "Slow, tedious pacing",
      "Strict punctuality"
    ],
    correctIndex: 0
  },
  {
    idiomId: "fit-as-a-fiddle",
    question: "In \"fit as a fiddle\" (recorded from 1616), what did \"fit\" originally mean?",
    options: [
      "Physically healthy, same as today",
      "Well-suited or in good working order",
      "Full of energy"
    ],
    correctIndex: 1
  },
  {
    idiomId: "splice-the-mainbrace",
    question: "\"Splice the mainbrace\" became naval shorthand for authorising a drink because of what?",
    options: [
      "Crews were rewarded with extra rum after this tough repair",
      "The mainbrace was made from fermented hemp fibres",
      "It rhymed with an old drinking toast"
    ],
    correctIndex: 0
  },
  {
    idiomId: "show-a-leg",
    question: "The Royal Navy custom behind \"show a leg\" solved what specific problem?",
    options: [
      "Telling which sailors were too seasick to work",
      "Letting the watch see whose leg poked from a hammock",
      "Checking sailors for injuries before duty"
    ],
    correctIndex: 1
  },
  {
    idiomId: "cut-and-run",
    question: "\"Cut and run\" comes from a real emergency sailing practice. What did crews cut?",
    options: [
      "The anchor cable, to make a fast escape",
      "The mainsail, to slow the ship down",
      "The ship's flag, to avoid identification"
    ],
    correctIndex: 0
  },
  {
    idiomId: "batten-down-the-hatches",
    question: "\"Batten down the hatches\" describes sealing a ship's deck openings with what, before a storm?",
    options: [
      "Iron chains and padlocks",
      "Wooden strips and waterproof tarpaulins",
      "Tar and rope netting"
    ],
    correctIndex: 1
  },
  {
    idiomId: "devil-and-the-deep-blue-sea",
    question: "A popular nautical story claims that in \"between the devil and the deep blue sea,\" \"the devil\" was sailors' nickname for what?",
    options: [
      "A ship's captain",
      "A dangerous hull seam near the waterline",
      "A storm cloud formation"
    ],
    correctIndex: 1
  },
  {
    idiomId: "cock-and-bull-story",
    question: "One theory for \"a cock and bull story\" points to which English town?",
    options: [
      "Coventry",
      "Canterbury",
      "Stony Stratford"
    ],
    correctIndex: 2
  },
  {
    idiomId: "chuffed-to-bits",
    question: "What's genuinely strange about the dialect history behind \"chuffed,\" as in \"chuffed to bits\"?",
    options: [
      "It's always meant \"pleased,\" without exception",
      "It once meant both \"pleased\" and its opposite, \"annoyed\"",
      "It was originally a naval insult"
    ],
    correctIndex: 1
  },
  {
    idiomId: "argy-bargy",
    question: "\"Argy-bargy\" is a softened version of which older Scots dialect phrase?",
    options: [
      "\"Argle-bargle\"",
      "\"Angry-barmy\"",
      "\"Argue-barter\""
    ],
    correctIndex: 0
  },
  {
    idiomId: "give-it-some-welly",
    question: "\"Give it some welly\" pictures a driver doing what?",
    options: [
      "Revving the engine while parked",
      "Pressing the accelerator hard with a booted foot",
      "Honking the horn repeatedly"
    ],
    correctIndex: 1
  },
  {
    idiomId: "not-the-full-shilling",
    question: "\"Not the full shilling\" uses which everyday image?",
    options: [
      "Being handed a coin short of its proper value",
      "A tailor cutting fabric too short",
      "A clock losing time"
    ],
    correctIndex: 0
  },
  {
    idiomId: "talk-hind-legs-off-donkey",
    question: "What's genuinely undocumented about \"talk the hind legs off a donkey\"?",
    options: [
      "Whether it means talking too much or too little",
      "Exactly why it became a donkey and not another animal",
      "Which country it originated in"
    ],
    correctIndex: 1
  },
  {
    idiomId: "bits-and-bobs",
    question: "In \"bits and bobs,\" what's never actually been explained?",
    options: [
      "Why \"bits\" was chosen over \"pieces\"",
      "Why \"bobs\" specifically, rather than any other rhyming word",
      "Why the phrase is always used in the plural"
    ],
    correctIndex: 1
  },
  {
    idiomId: "chin-wag",
    question: "\"Chin wag\" gets its name from what visual comparison?",
    options: [
      "A chin moving up and down, like a dog's tail wagging",
      "An old wig style called a \"wag\"",
      "A puppet show technique"
    ],
    correctIndex: 0
  },
  {
    idiomId: "bricking-it",
    question: "What do etymologists actually know about why \"bricks\" became slang for fear in \"bricking it\"?",
    options: [
      "It references a specific 1970s building-site accident",
      "Nothing definite, no documented origin story survives",
      "It comes from a WWII bomb-shelter phrase"
    ],
    correctIndex: 1
  },
  {
    idiomId: "cost-a-bomb",
    question: "\"Cost a bomb,\" meaning very expensive, is:",
    options: [
      "Confirmed to come from wartime rationing prices",
      "Undocumented; it may just echo a sense of sudden impact",
      "Traced to a specific 1960s advertising campaign"
    ],
    correctIndex: 1
  },
  {
    idiomId: "elbow-room",
    question: "\"Elbow room\" appears in print in which Shakespeare play?",
    options: [
      "King John (1595)",
      "Hamlet",
      "Macbeth"
    ],
    correctIndex: 0
  },
  {
    idiomId: "fair-clemmed",
    question: "\"Clem\" or \"clemmed,\" meaning hungry, likely shares a root with which foreign word?",
    options: [
      "French \"clément,\" meaning mild",
      "German \"klemmen,\" meaning to pinch or jam",
      "Dutch \"klem,\" meaning a trap"
    ],
    correctIndex: 1
  },
  {
    idiomId: "nesh",
    question: "\"Nesh\" descends directly from which Old English word?",
    options: [
      "\"Nesc,\" meaning cold",
      "\"Hnesce,\" meaning weak or delicate",
      "\"Neosian,\" meaning to seek"
    ],
    correctIndex: 1
  },
  {
    idiomId: "gan-canny",
    question: "In Geordie \"gan canny,\" where does \"gan\" (meaning \"go\") come from?",
    options: [
      "A shortening of \"gang,\" a group of workers",
      "Old English and Old Norse forms of \"to go\"",
      "French \"gagner\""
    ],
    correctIndex: 1
  },
  {
    idiomId: "ey-up",
    question: "The leading theory for \"ey up\" ties it to which language?",
    options: [
      "Old French",
      "Latin",
      "Old Norse"
    ],
    correctIndex: 2
  },
  {
    idiomId: "mardy",
    question: "\"Mardy\" likely derives from an older dialectal use of which word?",
    options: [
      "\"Mard,\" describing an over-indulged, spoiled child",
      "\"Mardi,\" French for Tuesday",
      "\"Marred,\" meaning physically injured"
    ],
    correctIndex: 0
  },
  {
    idiomId: "bostin",
    question: "\"Bostin,\" Black Country slang for excellent, has two competing theories. What are they?",
    options: [
      "\"Boston\" (the city) and \"bustling\"",
      "\"Bursting\" (with quality) and \"boss\" (meaning superior)",
      "\"Boasting\" and \"bossing\""
    ],
    correctIndex: 1
  },
  {
    idiomId: "ta-ra",
    question: "\"Ta-ra\" is widely assumed to be a doubling-up of which word?",
    options: [
      "\"Ta,\" a shortened, informal \"thank you\"",
      "\"Tara,\" an Irish place name",
      "\"Toodle,\" from \"toodle-oo\""
    ],
    correctIndex: 0
  },
  {
    idiomId: "foot-of-our-stairs",
    question: "The family folk story that \"foot of our stairs\" comes from shouting exciting news up a staircase is:",
    options: [
      "Confirmed by a dialect dictionary",
      "A charming story with no documented backing",
      "Traced to a specific Yorkshire family in the 1800s"
    ],
    correctIndex: 1
  },
  {
    idiomId: "steal-thunder",
    question: "\"Steal someone's thunder\" comes from a real incident in 18th-century theatre. What was stolen?",
    options: [
      "A famous actor's costume",
      "A sound-effect device for simulating thunder",
      "A dramatic monologue script"
    ],
    correctIndex: 1
  },
  {
    idiomId: "barking-up-the-wrong-tree",
    question: "\"Barking up the wrong tree\" comes from which real American practice?",
    options: [
      "Raccoon hunting",
      "Sheepdog training",
      "Fox hunting on horseback"
    ],
    correctIndex: 0
  },
  {
    idiomId: "let-sleeping-dogs-lie",
    question: "The earliest English version of \"let sleeping dogs lie\" appears in the writing of which author?",
    options: [
      "William Shakespeare",
      "Geoffrey Chaucer",
      "Jonathan Swift"
    ],
    correctIndex: 1
  },
  {
    idiomId: "rock-and-a-hard-place",
    question: "The American Dialect Society traced \"between a rock and a hard place\" to a specific 1917 labour dispute. Where?",
    options: [
      "An Arizona copper miners' strike",
      "A Pennsylvania coal strike",
      "A Welsh slate quarry dispute"
    ],
    correctIndex: 0
  },
  {
    idiomId: "cut-to-the-chase",
    question: "\"Cut to the chase\" was born in early Hollywood. What instruction did it originally describe?",
    options: [
      "Editing out an actor's mistakes",
      "Skipping a film's slow build-up to reach the action",
      "Speeding up the film reel during action scenes"
    ],
    correctIndex: 1
  },
  {
    idiomId: "radgie",
    question: "Geordie \"radgie,\" meaning hot-tempered, derives straightforwardly from which word?",
    options: [
      "\"Rage\"",
      "\"Ridge\"",
      "\"Raid\""
    ],
    correctIndex: 0
  },
  {
    idiomId: "nowt-and-owt",
    question: "\"Nowt\" (nothing) and \"owt\" (anything) both descend from which language?",
    options: [
      "Old French",
      "Middle Dutch",
      "Old English"
    ],
    correctIndex: 2
  },
  {
    idiomId: "jiggered",
    question: "\"Jiggered,\" as in \"well, I'll be jiggered,\" works as a euphemism for what kind of word?",
    options: [
      "A much blunter, cruder exclamation",
      "A formal legal term",
      "An old nautical rank"
    ],
    correctIndex: 0
  },
  {
    idiomId: "brass-monkey",
    question: "The popular story behind \"cold enough to freeze the balls off a brass monkey\" involves a naval cannonball tray. What's the problem with it?",
    options: [
      "No such brass tray has ever been found among the Navy's preserved equipment",
      "It's actually confirmed by 18th-century Royal Navy inventories",
      "The tray was real, but never actually used at sea"
    ],
    correctIndex: 0
  },
  {
    idiomId: "whole-nine-yards",
    question: "The popular WWII fighter-plane ammunition-belt story for \"the whole nine yards\" is disproven by what?",
    options: [
      "Fighter planes never carried exactly nine yards of ammunition",
      "The phrase is documented in print decades before WWII, in 1907",
      "The phrase was actually coined by the US Navy, not the Air Force"
    ],
    correctIndex: 1
  },
  {
    idiomId: "arm-and-a-leg",
    question: "The popular story that \"cost an arm and a leg\" comes from portrait painters charging by limb is:",
    options: [
      "Confirmed by surviving 18th-century painters' price lists",
      "Unsupported; the phrase itself dates only from around 1949",
      "True, but only for Royal portrait commissions"
    ],
    correctIndex: 1
  },
  {
    idiomId: "paint-the-town-red",
    question: "A real 1837 vandalism spree by the Marquess of Waterford is often credited as the source of \"paint the town red.\" What's the issue?",
    options: [
      "The phrase itself isn't recorded in print until 1883, decades later",
      "The Marquess actually used blue paint, not red",
      "The incident took place in Scotland, not England"
    ],
    correctIndex: 0
  },
  {
    idiomId: "burn-your-bridges",
    question: "Julius Caesar and Hernan Cortes are both credited with inspiring \"burn your bridges.\" What did they actually do?",
    options: [
      "Caesar crossed a river and Cortes had his ships scuttled, neither burned a bridge",
      "Both men literally burned bridges after crossing them",
      "Neither Caesar nor Cortes is connected to the phrase at all"
    ],
    correctIndex: 0
  },
  {
    idiomId: "barking-mad",
    question: "The theory that \"barking mad\" comes from a medieval asylum in Barking, Essex fails for what reason?",
    options: [
      "There was never any asylum associated with Barking Abbey",
      "The phrase isn't recorded until 1933, centuries after any medieval asylum",
      "The phrase is actually much older, dating to the 1500s"
    ],
    correctIndex: 1
  },
  {
    idiomId: "cat-got-your-tongue",
    question: "Which theory about \"cat got your tongue?\" actually has real historical evidence behind it?",
    options: [
      "The Royal Navy's cat o' nine tails whip",
      "None of them; the real origin remains unknown",
      "Ancient Egyptians feeding cats the tongues of liars"
    ],
    correctIndex: 1
  },
  {
    idiomId: "dressed-to-the-nines",
    question: "Which theory for \"dressed to the nines\" actually has documentary evidence behind it?",
    options: [
      "None of them; the number nine doesn't seem to refer to anything specific",
      "A specific regiment's elaborate dress uniform",
      "The exact yardage of fabric needed for a fine outfit"
    ],
    correctIndex: 0
  },
  {
    idiomId: "bees-knees",
    question: "\"The bee's knees\" emerged in the 1920s alongside which other nonsense slang?",
    options: [
      "\"The cat's pyjamas\" and \"the cat's whiskers\"",
      "\"The dog's dinner\" and \"the fox's socks\"",
      "\"The bird's word\" and \"the fish's wish\""
    ],
    correctIndex: 0
  },
  {
    idiomId: "cut-the-mustard",
    question: "One theory for \"cut the mustard\" claims it's a corruption of a military phrase, \"cut the muster.\" What's the problem?",
    options: [
      "\"Cut the muster\" has never actually been found in use anywhere",
      "\"Cut the muster\" is confirmed but means something different",
      "The military never used the word \"muster\""
    ],
    correctIndex: 0
  },
  {
    idiomId: "know-your-onions",
    question: "The theory that \"know your onions\" honours lexicographer C. T. Onions is:",
    options: [
      "Confirmed; Onions himself claimed credit for the phrase",
      "Coincidence; there's no real link between the man and the phrase",
      "Confirmed by his own Oxford English Dictionary entry"
    ],
    correctIndex: 1
  },
  {
    idiomId: "cheesed-off",
    question: "What does the Oxford English Dictionary say about the origin of \"cheesed off\"?",
    options: [
      "It's listed as uncertain",
      "It's confirmed to come from \"cheese it,\" meaning to stop",
      "It's confirmed to come from rationed cheese in WWII"
    ],
    correctIndex: 0
  },
  {
    idiomId: "dogs-breakfast",
    question: "\"A dog's breakfast,\" meaning a complete mess, was first written down in which reference work?",
    options: [
      "Samuel Johnson's 1755 Dictionary of the English Language",
      "Eric Partridge's 1937 Dictionary of Slang and Unconventional English",
      "The 1928 first edition of the Oxford English Dictionary"
    ],
    correctIndex: 1
  },
  {
    idiomId: "cock-a-hoop",
    question: "Etymologists describe \"cock-a-hoop\" as having one of the most tangled histories in English. What's the earliest documented form?",
    options: [
      "\"To set cock a hoop,\" of genuinely unknown meaning",
      "\"To crow like a cockerel,\" a straightforward rooster metaphor",
      "\"To hoop and holler,\" an old fairground cheer"
    ],
    correctIndex: 0
  },
  {
    idiomId: "elephant-in-the-room",
    question: "An 1814 Russian fable about a man who fails to notice an elephant in a museum is often linked to \"the elephant in the room.\" What's true about that connection?",
    options: [
      "It's confirmed; the fable was translated into English specifically to create the idiom",
      "Whether it's actually connected to the English idiom has never been established",
      "It's disproven; the fable doesn't mention an elephant at all"
    ],
    correctIndex: 1
  },
  {
    idiomId: "cloud-nine",
    question: "The popular theory that \"cloud nine\" refers to an 1896 cloud classification system has what problem?",
    options: [
      "The 1896 cloud atlas didn't actually include a ninth category",
      "No evidence anyone used \"cloud nine\" that way before the idiom appeared",
      "The atlas was published in 1996, not 1896"
    ],
    correctIndex: 1
  },
  {
    idiomId: "pull-your-leg",
    question: "The theory that \"pull your leg\" comes from 19th-century thieves tripping victims before robbing them is:",
    options: [
      "Confirmed by London police records from the 1880s",
      "Colourful, but unsupported, and the details shift with every telling",
      "Confirmed, but the practice was actually in Victorian Liverpool, not London"
    ],
    correctIndex: 1
  },
  {
    idiomId: "whole-shebang",
    question: "\"Shebang\" first appeared in American English during which period, in Walt Whitman's own diary?",
    options: [
      "The Civil War era",
      "The California Gold Rush",
      "The First World War"
    ],
    correctIndex: 0
  },
  {
    idiomId: "tickled-pink",
    question: "The leading theory for \"tickled pink\" pictures what?",
    options: [
      "A face flushing pink with laughter or pleasure",
      "A pink ribbon awarded to happy children",
      "The colour of a blush described in an old medical text"
    ],
    correctIndex: 0
  },
  {
    idiomId: "at-loggerheads",
    question: "\"At loggerheads\" has two competing, both plausible, theories. What are they?",
    options: [
      "An old word for a fool, and a heated iron tool used in disputes",
      "A card game term, and a specific 1670s court case",
      "A type of turtle, and a naval knot"
    ],
    correctIndex: 0
  },
  {
    idiomId: "at-the-drop-of-a-hat",
    question: "The leading theories for \"at the drop of a hat\" both involve what?",
    options: [
      "A hat used as a starting signal",
      "A hat passed around to collect money quickly",
      "A magician's trick involving a disappearing hat"
    ],
    correctIndex: 0
  },
  {
    idiomId: "real-mccoy",
    question: "The most credible theory for \"the real McCoy\" traces it to what?",
    options: [
      "A Scottish whisky brand, \"the real MacKay\"",
      "An American boxer nicknamed \"Kid McCoy\"",
      "A Canadian inventor's patented lubricator"
    ],
    correctIndex: 0
  },
  {
    idiomId: "mad-as-a-march-hare",
    question: "\"Mad as a March hare\" is based on a real, observable behaviour. What is it?",
    options: [
      "Hares boxing and chasing each other during their spring breeding season",
      "Hares supposedly howling at the full moon in March",
      "Hares changing colour unpredictably in early spring"
    ],
    correctIndex: 0
  },
  {
    idiomId: "eat-humble-pie",
    question: "\"Eat humble pie\" comes from a pun on which older dish?",
    options: [
      "\"Umble pie,\" made from deer's edible innards",
      "\"Rumble pie,\" a rustic peasant stew",
      "\"Trouble pie,\" served to disgraced servants"
    ],
    correctIndex: 0
  },
  {
    idiomId: "flash-in-the-pan",
    question: "\"A flash in the pan\" describes a real mechanical failure. What was it?",
    options: [
      "A flintlock musket's priming powder flaring up without firing the shot",
      "A blacksmith's forge flaring unexpectedly during casting",
      "A cook's pan catching fire before the meal was ready"
    ],
    correctIndex: 0
  },
  {
    idiomId: "world-is-your-oyster",
    question: "\"The world is your oyster\" was coined by Shakespeare. What did the line originally mean?",
    options: [
      "A willingness to use force to get paid",
      "Boundless, gentle opportunity, same as today",
      "A warning against greed and ambition"
    ],
    correctIndex: 0
  },
  {
    idiomId: "run-the-gauntlet",
    question: "\"Run the gauntlet\" describes a real military punishment. What did it involve?",
    options: [
      "Running between two rows of soldiers who struck you as you passed",
      "Wearing an iron glove as a mark of disgrace",
      "Running laps of a fort as a disciplinary drill"
    ],
    correctIndex: 0
  },
  {
    idiomId: "writing-on-the-wall",
    question: "\"The writing on the wall\" comes from the Bible. What happens in the original story?",
    options: [
      "A disembodied hand writes a doom-laden message at a king's feast",
      "A prophet carves a warning into a temple wall",
      "An angel writes a message in the sand outside a city gate"
    ],
    correctIndex: 0
  },
  {
    idiomId: "proof-of-the-pudding",
    question: "\"The proof is in the pudding\" is actually a shortened, less logical version of what original saying?",
    options: [
      "\"The proof of the pudding is in the eating\"",
      "\"The proof of the pudding is in the making\"",
      "\"The pudding proves itself in the tasting\""
    ],
    correctIndex: 0
  },
  {
    idiomId: "close-but-no-cigar",
    question: "\"Close, but no cigar\" comes from a real prize custom. Where?",
    options: [
      "American carnival and fairground games of skill",
      "Victorian music hall talent competitions",
      "English pub darts tournaments"
    ],
    correctIndex: 0
  },
  {
    idiomId: "know-the-ropes",
    question: "\"Know the ropes\" comes from a sailor needing to master what?",
    options: [
      "A ship's rigging",
      "Knot-tying for cargo nets",
      "Signal flags for communicating between ships"
    ],
    correctIndex: 0
  },
  {
    idiomId: "beat-around-the-bush",
    question: "\"Beat around the bush\" comes from a real medieval hunting practice. Why did beaters strike around a bush rather than into it?",
    options: [
      "Going in directly risked disturbing something dangerous, like a boar or a wasp nest",
      "It was considered bad luck to touch the bush itself",
      "The bushes were often too thorny to strike directly"
    ],
    correctIndex: 0
  },
  {
    idiomId: "bite-your-tongue",
    question: "\"Bite your tongue\" was a favourite of which playwright, who used it in three separate plays?",
    options: [
      "Christopher Marlowe",
      "William Shakespeare",
      "Ben Jonson"
    ],
    correctIndex: 1
  },
  {
    idiomId: "straight-from-the-horses-mouth",
    question: "The leading theory for \"straight from the horse's mouth\" traces it to which world?",
    options: [
      "British horse racing, where tips from those closest to the horse were most trusted",
      "Veterinary medicine, where a horse's mouth reveals its true health",
      "Farming, where a horse's appetite signalled the quality of its feed"
    ],
    correctIndex: 0
  },
  {
    idiomId: "go-the-extra-mile",
    question: "\"Go the extra mile\" comes from a real Roman law mentioned in the Bible. What did that law allow?",
    options: [
      "A Roman soldier could compel a civilian to carry his pack for one mile",
      "A Roman soldier could demand a civilian walk beside him for protection",
      "A Roman tax collector could demand an extra mile of travel as payment"
    ],
    correctIndex: 0
  },
  {
    idiomId: "keep-an-eye-on",
    question: "What do etymologists actually know about the specific origin of \"keep an eye on\"?",
    options: [
      "It's a specific coinage credited to a named 19th-century writer",
      "Nothing definite; no specific coining moment has ever been identified",
      "It comes from a specific naval lookout order"
    ],
    correctIndex: 1
  },
  {
    idiomId: "hold-your-horses",
    question: "The leading theory for \"hold your horses\" ties it to which specific 19th-century American setting?",
    options: [
      "Cattle drives on the Chisholm Trail",
      "Horse-drawn barge teams on the Erie Canal towpath",
      "Stagecoach relay stations in the Wild West"
    ],
    correctIndex: 1
  },
  {
    idiomId: "burn-the-midnight-oil",
    question: "The phrase \"midnight oil\" was coined by which 17th-century poet?",
    options: [
      "Francis Quarles",
      "John Milton",
      "Andrew Marvell"
    ],
    correctIndex: 0
  },
  {
    idiomId: "on-the-ball",
    question: "\"On the ball\" almost certainly comes from which sport?",
    options: [
      "Cricket",
      "Baseball",
      "Golf"
    ],
    correctIndex: 1
  },
  {
    idiomId: "as-right-as-rain",
    question: "What's genuinely unresolved about \"as right as rain\"?",
    options: [
      "Why rain joined an older \"right as ___\" pattern",
      "Whether the phrase is British or American",
      "Whether it originally meant healthy or wealthy"
    ],
    correctIndex: 0
  },
  {
    idiomId: "walking-on-eggshells",
    question: "\"Walking on eggshells\" likely draws on which older tradition?",
    options: [
      "The \"Egg Dance,\" hopping around scattered eggs without breaking any",
      "An Easter custom of rolling eggs down a hill",
      "A medieval trial by ordeal involving hot eggs"
    ],
    correctIndex: 0
  },
  {
    idiomId: "cut-corners",
    question: "One leading theory for \"cut corners\" involves literally doing what?",
    options: [
      "Taking a diagonal shortcut across a corner instead of the proper route",
      "Trimming the corners off a printed document to save paper",
      "Cutting corner posts from a fence to save wood"
    ],
    correctIndex: 0
  },
  {
    idiomId: "sit-on-the-fence",
    question: "\"Sit on the fence\" got a real boost from which 1884 American political episode?",
    options: [
      "The \"Mugwumps,\" Republicans who backed the opposing candidate",
      "A Senate filibuster over a fence-building budget",
      "A presidential veto of a land-fencing law"
    ],
    correctIndex: 0
  },
  {
    idiomId: "miss-the-boat",
    question: "What's genuinely unclear about the history of \"miss the boat\"?",
    options: [
      "Whether it's British or Australian in origin",
      "Exactly when the literal sense shifted into a figurative one for missed opportunity",
      "Whether it originally referred to trains rather than boats"
    ],
    correctIndex: 1
  },
  {
    idiomId: "make-a-long-story-short",
    question: "The English phrase \"make a long story short\" has a much older parallel used by which ancient writer?",
    options: [
      "Pacuvius, a Roman playwright",
      "Homer, in the Odyssey",
      "Aesop, in his fables"
    ],
    correctIndex: 0
  },
  {
    idiomId: "no-pain-no-gain",
    question: "The modern catchy rhyme \"no pain, no gain\" owes its huge popularity to whom?",
    options: [
      "Jane Fonda's 1982 aerobics videos",
      "A 1980s Nike advertising campaign",
      "Arnold Schwarzenegger's bodybuilding memoirs"
    ],
    correctIndex: 0
  },
  {
    idiomId: "get-a-second-wind",
    question: "\"Second wind\" describes a real event. What is it?",
    options: [
      "The body switching from anaerobic to more efficient aerobic respiration",
      "A ship catching a fresh breeze after being becalmed",
      "A runner's heart rate briefly slowing during a race"
    ],
    correctIndex: 0
  },
  {
    idiomId: "once-in-a-blue-moon",
    question: "The earliest recorded use of \"once in a blue moon,\" from 1528, described what?",
    options: [
      "An obvious absurdity, like claiming the moon is made of cheese",
      "A rare astronomical event observed by monks",
      "A tax collected only once every several years"
    ],
    correctIndex: 0
  },
  {
    idiomId: "face-the-music",
    question: "Which theory for \"face the music\" is considered the least convincing by etymologists?",
    options: [
      "The theatre theory, facing the orchestra pit despite stage fright",
      "The military theory, disgraced soldiers drummed out to their own band",
      "The church theory, 18th-century musicians facing gallery criticism"
    ],
    correctIndex: 2
  },
  {
    idiomId: "jump-on-the-bandwagon",
    question: "The word \"bandwagon\" originally just meant what?",
    options: [
      "The wagon that carried a circus band",
      "A political rally stage on wheels",
      "A wagon used to collect campaign donations"
    ],
    correctIndex: 0
  },
  {
    idiomId: "when-pigs-fly",
    question: "An early English version of \"when pigs fly,\" from 1616, described pigs flying how?",
    options: [
      "With their tails forward",
      "Upside down",
      "In formation, like geese"
    ],
    correctIndex: 0
  },
  {
    idiomId: "ball-is-in-your-court",
    question: "\"The ball is in your court\" is a literal image borrowed from which sport?",
    options: [
      "Tennis",
      "Basketball",
      "Squash"
    ],
    correctIndex: 0
  },
  {
    idiomId: "method-to-the-madness",
    question: "\"A method to the madness\" was coined by Shakespeare. Who says the original line?",
    options: [
      "Polonius, about Hamlet",
      "Hamlet, about Polonius",
      "Ophelia, about Hamlet"
    ],
    correctIndex: 0
  },
  {
    idiomId: "head-over-heels",
    question: "What was the original word order of \"head over heels,\" used for centuries before the modern form?",
    options: [
      "\"Heels over head\"",
      "\"Head under heels\"",
      "\"Heels above head\""
    ],
    correctIndex: 0
  },
  {
    idiomId: "back-to-the-drawing-board",
    question: "\"Back to the drawing board\" comes from a specific, precisely dated source. What is it?",
    options: [
      "A 1941 New Yorker cartoon caption by Peter Arno",
      "A 1944 US Army engineering manual",
      "A wartime BBC radio broadcast"
    ],
    correctIndex: 0
  },
  {
    idiomId: "burst-your-bubble",
    question: "Which theory for \"burst your bubble\" is widely repeated online but entirely unproven?",
    options: [
      "That it comes from bubblegum or childhood soap bubbles",
      "That it comes from 17th-century financial speculation schemes",
      "That it comes from an 1810 magazine reference"
    ],
    correctIndex: 0
  },
  {
    idiomId: "go-down-in-flames",
    question: "\"Go down in flames\" is widely believed to come from which historical context?",
    options: [
      "Military aviation in WWI and WWII",
      "Great fires in 17th-century London",
      "Naval battles involving fireships"
    ],
    correctIndex: 0
  },
  {
    idiomId: "cry-over-spilled-milk",
    question: "The earliest documented form of \"cry over spilled milk\" (1659) used which word instead of \"spilled\"?",
    options: [
      "\"Shed\"",
      "\"Wasted\"",
      "\"Poured\""
    ],
    correctIndex: 0
  },
  {
    idiomId: "throw-caution-to-the-wind",
    question: "The general pattern of throwing something \"to the wind\" to mean discarding it is documented from when?",
    options: [
      "At least the 1400s",
      "The 1700s",
      "The 1900s"
    ],
    correctIndex: 0
  },
  {
    idiomId: "devils-advocate",
    question: "\"Devil's advocate\" was a genuine, formal role. Who created it?",
    options: [
      "Pope Sixtus V, in 1587",
      "The Spanish Inquisition, in 1492",
      "A medieval English ecclesiastical court"
    ],
    correctIndex: 0
  },
  {
    idiomId: "add-insult-to-injury",
    question: "The fable behind \"add insult to injury\" involves a bald man and what?",
    options: [
      "A fly landing on his head",
      "A wig blowing away in the wind",
      "A bee stinging his scalp"
    ],
    correctIndex: 0
  },
  {
    idiomId: "bend-over-backwards",
    question: "The most popular theory for \"bend over backwards\" points to which performers?",
    options: [
      "Acrobats and contortionists",
      "Ballet dancers",
      "Circus strongmen"
    ],
    correctIndex: 0
  },
  {
    idiomId: "burning-the-candle-at-both-ends",
    question: "\"Burning the candle at both ends\" was translated directly from which language?",
    options: [
      "French",
      "Latin",
      "Dutch"
    ],
    correctIndex: 0
  },
  {
    idiomId: "hit-the-nail-on-the-head",
    question: "The ancient Romans had a near-identical expression to \"hit the nail on the head.\" What did it involve?",
    options: [
      "Touching something with a needle",
      "Striking a coin perfectly true",
      "Splitting an arrow with another arrow"
    ],
    correctIndex: 0
  },
  {
    idiomId: "take-it-with-a-grain-of-salt",
    question: "The Roman writer behind \"take it with a grain of salt\" used it in a recipe for what?",
    options: [
      "A poison antidote",
      "A love potion",
      "A preserved meat dish"
    ],
    correctIndex: 0
  },
  {
    idiomId: "taste-of-your-own-medicine",
    question: "\"A taste of your own medicine\" comes from an Aesop fable about a cobbler posing as what?",
    options: [
      "A doctor",
      "A priest",
      "A judge"
    ],
    correctIndex: 0
  },
  {
    idiomId: "it-takes-two-to-tango",
    question: "The exact modern phrase \"it takes two to tango\" comes from a specific 1952 what?",
    options: [
      "A song",
      "A Supreme Court ruling",
      "A dance instruction manual"
    ],
    correctIndex: 0
  },
  {
    idiomId: "every-cloud-has-a-silver-lining",
    question: "The \"silver lining\" image was coined by which poet?",
    options: [
      "John Milton",
      "William Wordsworth",
      "Percy Bysshe Shelley"
    ],
    correctIndex: 0
  },
  {
    idiomId: "put-all-eggs-in-one-basket",
    question: "\"Don't put all your eggs in one basket\" is usually credited to which novel?",
    options: [
      "Don Quixote",
      "Robinson Crusoe",
      "Gulliver's Travels"
    ],
    correctIndex: 0
  },
  {
    idiomId: "dont-judge-a-book-by-its-cover",
    question: "The exact modern wording of \"don't judge a book by its cover\" is traced to which source?",
    options: [
      "A 1946 American mystery novel",
      "A Victorian advertising slogan",
      "A 1930s radio drama"
    ],
    correctIndex: 0
  },
  {
    idiomId: "kill-two-birds-with-one-stone",
    question: "The earliest English use of \"kill two birds with one stone\" (1656) appears in the writing of which philosopher?",
    options: [
      "Thomas Hobbes",
      "John Locke",
      "Francis Bacon"
    ],
    correctIndex: 0
  },
  {
    idiomId: "bite-off-more-than-you-can-chew",
    question: "\"Bite off more than you can chew\" is rooted in 19th-century American habits around what?",
    options: [
      "Chewing tobacco sold in solid cakes",
      "Eating competitions at country fairs",
      "Sharing meals on cattle drives"
    ],
    correctIndex: 0
  },
  {
    idiomId: "let-the-chips-fall-where-they-may",
    question: "\"Let the chips fall where they may\" comes from a real 1880 speech nominating which president?",
    options: [
      "Ulysses S. Grant",
      "Rutherford B. Hayes",
      "James Garfield"
    ],
    correctIndex: 0
  },
  {
    idiomId: "actions-speak-louder-than-words",
    question: "Which American president used the exact modern wording of \"actions speak louder than words\" in an 1856 speech?",
    options: [
      "Abraham Lincoln",
      "Andrew Jackson",
      "Theodore Roosevelt"
    ],
    correctIndex: 0
  },
  {
    idiomId: "birds-of-a-feather-flock-together",
    question: "The underlying comparison in \"birds of a feather flock together\" appears as far back as which ancient text?",
    options: [
      "The biblical Book of Sirach",
      "Homer's Iliad",
      "Aesop's Fables"
    ],
    correctIndex: 0
  },
  {
    idiomId: "hit-the-road",
    question: "Which 1961 song cemented \"hit the road\" firmly in pop culture?",
    options: [
      "Ray Charles, \"Hit the Road Jack\"",
      "Chuck Berry, \"Maybellene\"",
      "Elvis Presley, \"Follow That Dream\""
    ],
    correctIndex: 0
  },
  {
    idiomId: "piece-of-cake",
    question: "The \"cakewalk\" theory for \"piece of cake\" runs into a problem. What is it?",
    options: [
      "The earliest confirmed use is British, replacing an unrelated American phrase",
      "The cakewalk dance was never actually associated with a cake prize",
      "The phrase is recorded a century before the cakewalk existed"
    ],
    correctIndex: 0
  },
  {
    idiomId: "hit-the-sack",
    question: "Old mattresses that gave us \"hit the sack\" were literally sacking cloth stuffed with what?",
    options: [
      "Hay or straw",
      "Wool",
      "Feathers"
    ],
    correctIndex: 0
  },
  {
    idiomId: "the-last-straw",
    question: "Before the camel became standard, earlier versions of \"the last straw\" used which animal?",
    options: [
      "A horse",
      "A donkey",
      "An ox"
    ],
    correctIndex: 0
  },
  {
    idiomId: "jump-the-gun",
    question: "\"Jump the gun\" was originally worded differently. What was the earlier form?",
    options: [
      "\"Beat the gun\"",
      "\"Race the gun\"",
      "\"Cheat the gun\""
    ],
    correctIndex: 0
  },
  {
    idiomId: "call-it-a-day",
    question: "The earlier form of \"call it a day\" was \"call it half a day.\" What did that describe?",
    options: [
      "Workers leaving before a shift ended",
      "A half-day public holiday",
      "A shortened working week"
    ],
    correctIndex: 0
  },
  {
    idiomId: "throw-in-the-towel",
    question: "\"Throw in the towel\" replaced an earlier, near-identical boxing custom. What was thrown before the towel?",
    options: [
      "A sweat-soaked sponge",
      "A white flag",
      "A glove"
    ],
    correctIndex: 0
  },
  {
    idiomId: "see-eye-to-eye",
    question: "\"See eye to eye\" comes from the Book of Isaiah. What did it originally describe?",
    options: [
      "Watchmen literally seeing each other face to face",
      "Two rival kings finally reconciling",
      "A prophet's vision of the future"
    ],
    correctIndex: 0
  },
  {
    idiomId: "put-your-foot-down",
    question: "Which sense of \"put your foot down\" only developed once cars became common?",
    options: [
      "Pressing the accelerator to speed up",
      "Standing your ground in an argument",
      "Standing firm in battle"
    ],
    correctIndex: 0
  },
  {
    idiomId: "out-of-the-blue",
    question: "\"Out of the blue\" is a shortened form of which fuller phrase?",
    options: [
      "\"A bolt from the blue\"",
      "\"A storm from the blue\"",
      "\"A flash from the blue\""
    ],
    correctIndex: 0
  },
  {
    idiomId: "in-the-same-boat",
    question: "The earliest solidly documented use of \"in the same boat\" (1584) appears in an English translation of which work?",
    options: [
      "Du Bartas's Historie of Judith",
      "Homer's Odyssey",
      "A French naval memoir"
    ],
    correctIndex: 0
  },
  {
    idiomId: "keep-your-chin-up",
    question: "\"Keep your chin up\" replaced an older British phrase. What was it?",
    options: [
      "\"Keep your pecker up\"",
      "\"Keep your nose up\"",
      "\"Keep your head up\""
    ],
    correctIndex: 0
  },
  {
    idiomId: "achilles-heel",
    question: "In the myth behind \"Achilles' heel,\" what made that one spot vulnerable?",
    options: [
      "Thetis held him there while dipping him in the River Styx",
      "Zeus struck him there as punishment",
      "He was born with a birthmark in that exact spot"
    ],
    correctIndex: 0
  },
  {
    idiomId: "hoist-by-own-petard",
    question: "In \"hoist by your own petard,\" what is a petard?",
    options: [
      "A small explosive device",
      "A type of siege ladder",
      "A ceremonial sword"
    ],
    correctIndex: 0
  },
  {
    idiomId: "red-herring",
    question: "What does \"red herring\" actually come from, per the real historical record?",
    options: [
      "A method used to train hunting animals",
      "A trick used by escaping prisoners",
      "A slang term from Victorian fishmongers"
    ],
    correctIndex: 0
  },
  {
    idiomId: "sour-grapes",
    question: "Where does \"sour grapes\" come from?",
    options: [
      "One of Aesop's fables",
      "A line from Shakespeare",
      "An old French proverb"
    ],
    correctIndex: 0
  },
  {
    idiomId: "lions-share",
    question: "In the original Aesop fable, what did \"the lion's share\" actually mean?",
    options: [
      "Absolutely everything, not just the biggest part",
      "Exactly half of the total catch",
      "Whatever was left over after others took their cut"
    ],
    correctIndex: 0
  },
  {
    idiomId: "cry-wolf",
    question: "What happens in the Aesop fable behind \"cry wolf\"?",
    options: [
      "A boy's false alarms mean nobody believes him later",
      "A wolf disguises itself among sheep",
      "A shepherd loses his flock in a storm"
    ],
    correctIndex: 0
  },
  {
    idiomId: "wolf-in-sheeps-clothing",
    question: "Where does \"a wolf in sheep's clothing\" actually come from?",
    options: [
      "Jesus's Sermon on the Mount",
      "One of Aesop's fables",
      "A medieval English proverb collection"
    ],
    correctIndex: 0
  },
  {
    idiomId: "jack-of-all-trades",
    question: "When \"jack of all trades\" was first recorded in 1612, how was it meant?",
    options: [
      "As a genuine compliment, with no insult intended",
      "As a mocking put-down, same as today",
      "As a legal term for an apprentice"
    ],
    correctIndex: 0
  },
  {
    idiomId: "red-tape",
    question: "What does \"red tape\" literally refer to?",
    options: [
      "Strips of red cloth once used to bind official documents",
      "A red carpet laid out for visiting officials",
      "A red-inked stamp used to approve paperwork"
    ],
    correctIndex: 0
  },
  {
    idiomId: "pie-in-the-sky",
    question: "Who actually coined \"pie in the sky\"?",
    options: [
      "Labour organiser Joe Hill, in 1911",
      "A 1920s American radio comedian",
      "An anonymous Salvation Army hymn writer"
    ],
    correctIndex: 0
  },
  {
    idiomId: "saved-by-the-bell",
    question: "What's the real origin of \"saved by the bell\"?",
    options: [
      "Boxing slang for the bell ending a round",
      "Victorian safety coffins fitted with an alarm bell",
      "A church bell warning of approaching danger"
    ],
    correctIndex: 0
  },
  {
    idiomId: "hair-of-the-dog",
    question: "What did \"hair of the dog\" originally refer to?",
    options: [
      "A folk remedy for treating dog bites",
      "A recipe for brewing strong ale",
      "A grooming ritual for hunting dogs"
    ],
    correctIndex: 0
  },
  {
    idiomId: "off-the-cuff",
    question: "What's the popular, though disputed, story behind \"off the cuff\"?",
    options: [
      "Speakers scribbled last-minute notes on their shirt cuffs",
      "Tailors measured customers without written notes",
      "Card players hid notes in their sleeves"
    ],
    correctIndex: 0
  },
  {
    idiomId: "pot-calling-the-kettle-black",
    question: "Where does \"the pot calling the kettle black\" first appear in English?",
    options: [
      "Thomas Shelton's 1620 translation of Don Quixote",
      "A 16th-century English proverb collection",
      "A Victorian etiquette manual"
    ],
    correctIndex: 0
  },
  {
    idiomId: "rob-peter-pay-paul",
    question: "What does the evidence say about the popular Westminster Abbey story behind \"rob Peter to pay Paul\"?",
    options: [
      "The phrase predates that event by about a century",
      "It's the confirmed, documented origin",
      "It only applies to the Scottish version of the phrase"
    ],
    correctIndex: 0
  },
  {
    idiomId: "up-to-scratch",
    question: "In bare-knuckle boxing, what did \"up to scratch\" literally mean?",
    options: [
      "Being fit enough to reach a scratched line",
      "Landing a scratch that drew first blood",
      "Scratching a mark on your opponent's record"
    ],
    correctIndex: 0
  },
  {
    idiomId: "turn-over-a-new-leaf",
    question: "In \"turn over a new leaf,\" what does \"leaf\" actually mean?",
    options: [
      "A page in a book",
      "A fresh leaf of tea",
      "A leaf-shaped seal on a document"
    ],
    correctIndex: 0
  },
  {
    idiomId: "mums-the-word",
    question: "What does \"mum\" actually mean in \"mum's the word\"?",
    options: [
      "An old imitation of a sealed-lip sound",
      "A shortened form of \"mummer\"",
      "An old word for \"secret\""
    ],
    correctIndex: 0
  },
  {
    idiomId: "throw-down-the-gauntlet",
    question: "In medieval times, what did throwing down a gauntlet actually mean?",
    options: [
      "Formally challenging someone to a duel",
      "Surrendering in battle",
      "Announcing a knight's arrival at court"
    ],
    correctIndex: 0
  },
  {
    idiomId: "spick-and-span",
    question: "What does the Oxford English Dictionary say about the popular \"new ship\" origin story for \"spick and span\"?",
    options: [
      "There's no real evidence connecting it to shipbuilding",
      "It's the confirmed and accepted origin",
      "It only applies to the older \"span-new\" version"
    ],
    correctIndex: 0
  }
];
