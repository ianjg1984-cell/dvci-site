/* D.V.C.I. Idiom Quiz: question data. Each question references an idiom's
   id in IDIOMS (assets/data.js) so the reveal card can pull the real story,
   badge, and sources straight from the single source of truth rather than
   duplicating them here. This is the dry-run question set, ten questions
   covering a mix of verdicts, deliberately including one "mystery" and one
   "myth" so the honesty rating shows up in the quiz itself, not just the
   repository. */

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
      "A real law that had to be read aloud to a crowd before police could forcibly disperse it",
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
      "A small cupboard or cubbyhole, often under the stairs",
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
    question: "What's the popular (though never actually confirmed) story behind calling something a \"white elephant\"?",
    options: [
      "Siamese kings gifted rare sacred elephants to courtiers as a ruinously expensive \"honour\"",
      "A circus elephant painted white escaped and caused chaos in London",
      "It's named after a real pub called The White Elephant"
    ],
    correctIndex: 0
  },
  {
    idiomId: "bury-the-hatchet",
    question: "\"Bury the hatchet\" comes from a genuine historical peacemaking custom. Whose custom?",
    options: [
      "Viking raiding parties",
      "Native American nations, including the Haudenosaunee (Iroquois) Confederacy",
      "Medieval English trade guilds"
    ],
    correctIndex: 1
  },
  {
    idiomId: "loose-cannon",
    question: "What made a \"loose cannon\" such a vivid, literal danger on old warships?",
    options: [
      "A cannon breaking free of its lashings could roll across the deck and kill crew or smash the hull",
      "Cannons were nicknamed after unpredictable ship captains",
      "Loose gunpowder occasionally ignited on damp decks"
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
      "An unverified rumour about an 18th-century judge, with no actual legal record behind it"
    ],
    correctIndex: 2
  },
  {
    idiomId: "wazzock",
    question: "How recent is the earliest confirmed written use of \"wazzock,\" according to the Oxford English Dictionary?",
    options: [
      "1976, surprisingly recent for a word that feels far older",
      "1876",
      "1576"
    ],
    correctIndex: 0
  },
  {
    idiomId: "scran",
    question: "A popular claim says SCRAN is a naval acronym for \"Sultanas, Currants, Raisins And Nuts.\" What's the truth?",
    options: [
      "It's confirmed in Royal Navy supply records",
      "It was coined during WWII rationing",
      "There's no evidence for the acronym at all, the word predates it by over a century"
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
      "To pester, nag, or make an unnecessary fuss",
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
      "Sick sailors sent below deck, away from rough conditions topside",
      "Sailors paid less during winter voyages"
    ],
    correctIndex: 1
  },
  {
    idiomId: "curiosity-killed-the-cat",
    question: "The proverb didn't start out about curiosity at all. What was the original version?",
    options: [
      "\"Mischief killed the cat\"",
      "\"Pride killed the cat\"",
      "\"Care killed the cat,\" recorded from the 1590s"
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
      "Balancing a wood chip on your shoulder and daring someone to knock it off",
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
      "The phrase already existed with unrelated meanings before it was ever tied to withdrawal"
    ],
    correctIndex: 2
  },
  {
    idiomId: "sent-to-coventry",
    question: "\"Sent to Coventry\" likely originates from which historical conflict?",
    options: [
      "The Wars of the Roses",
      "The English Civil War, when captured Royalist soldiers held there were refused all conversation by hostile locals",
      "The Jacobite Rising of 1745"
    ],
    correctIndex: 1
  },
  {
    idiomId: "cold-shoulder",
    question: "What's the popular, though unproven, explanation for \"the cold shoulder\"?",
    options: [
      "Turning your literal shoulder away from someone at a dance",
      "Serving an unwelcome guest a cold, cheap cut of mutton instead of a hot meal",
      "A medieval punishment involving cold water"
    ],
    correctIndex: 1
  },
  {
    idiomId: "red-handed",
    question: "\"Caught red-handed\" comes from which legal tradition?",
    options: [
      "Roman law",
      "Maritime prize law",
      "Scots law, describing a criminal caught with blood literally on their hands"
    ],
    correctIndex: 2
  },
  {
    idiomId: "pull-out-stops",
    question: "\"Pull out all the stops\" has a literal mechanical origin. Where?",
    options: [
      "A pipe organ, where stops control which pipes sound",
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
      "A fence made of wooden stakes marking a controlled boundary"
    ],
    correctIndex: 2
  },
  {
    idiomId: "bite-the-bullet",
    question: "The vivid story of battlefield surgeons giving soldiers a bullet to bite during amputations is:",
    options: [
      "Well documented in period surgical records",
      "Essentially unsupported, real accounts describe leather straps or wooden gags instead",
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
      "A separate piece of Jonathan Swift's writing describing a flood's aftermath, not an explanation of the phrase",
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
      "A book review complaining an ending had been given away, with no literal cats mentioned"
    ],
    correctIndex: 2
  },
  {
    idiomId: "swing-a-cat",
    question: "One theory for \"no room to swing a cat\" involves the Royal Navy's cat o' nine tails whip. What's the issue with it?",
    options: [
      "There's no direct documentary link tying the phrase specifically to that object",
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
      "MPs kept two sword-lengths apart by lines on the House of Commons floor"
    ],
    correctIndex: 2
  },
  {
    idiomId: "skeleton-in-the-cupboard",
    question: "One theory behind \"a skeleton in the cupboard\" ties it to which 19th-century profession?",
    options: [
      "Undertakers storing spare coffins",
      "Doctors who had to hide an actual teaching skeleton, since dissection was unpopular and restricted",
      "Lawyers hiding evidence"
    ],
    correctIndex: 1
  },
  {
    idiomId: "sleep-tight",
    question: "The charming story that \"sleep tight\" comes from tightening rope-strung beds is:",
    options: [
      "Confirmed by 19th-century furniture records",
      "Unsupported; \"tight\" more likely just meant \"soundly,\" as in \"hold tight\"",
      "True, but only for beds in America"
    ],
    correctIndex: 1
  },
  {
    idiomId: "in-a-pickle",
    question: "\"In a pickle,\" used by Shakespeare in The Tempest, comes from which language's idiom?",
    options: [
      "French",
      "Dutch, \"in de pekel zitten,\" to sit in pickling brine",
      "Latin"
    ],
    correctIndex: 1
  },
  {
    idiomId: "coals-to-newcastle",
    question: "Why was \"taking coals to Newcastle\" the definition of a pointless errand?",
    options: [
      "Newcastle banned coal imports by law",
      "Newcastle was already a major coal-exporting centre from the 16th century onward",
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
    question: "On a sailing ship, what is a \"sheet\" actually?",
    options: [
      "A sail itself",
      "A rope controlling a sail's angle",
      "A type of anchor"
    ],
    correctIndex: 1
  },
  {
    idiomId: "cut-of-your-jib",
    question: "A ship's \"jib\" is what, and why did its \"cut\" matter?",
    options: [
      "The captain's uniform, which signalled rank",
      "A carved wooden figurehead",
      "A front sail whose shape varied by nation, letting sailors identify a ship from a distance"
    ],
    correctIndex: 2
  },
  {
    idiomId: "push-the-boat-out",
    question: "\"Push the boat out\" is thought to come from what communal custom?",
    options: [
      "Fishermen sharing their catch equally",
      "Everyone helping launch a beached boat, with the owner then buying a round of drinks",
      "Sailors pooling money for a leaving party"
    ],
    correctIndex: 1
  },
  {
    idiomId: "break-the-ice",
    question: "Before icebreaker ships existed, what were small reinforced boats sent ahead to do?",
    options: [
      "Break a path through frozen harbours so other vessels could pass",
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
      "The Oxford English Dictionary lists it as origin unknown, despite several popular theories",
      "It's definitively traced to Field Marshal Montgomery"
    ],
    correctIndex: 1
  },
  {
    idiomId: "bobs-your-uncle",
    question: "The story that \"Bob's your uncle\" comes from PM Robert Cecil appointing his nephew Arthur Balfour is popular, but:",
    options: [
      "It's confirmed by Cecil's own diaries",
      "The phrase isn't recorded in print until the 1930s, decades after the alleged 1887 event",
      "Balfour himself denied any connection"
    ],
    correctIndex: 1
  },
  {
    idiomId: "gone-for-a-burton",
    question: "\"Gone for a Burton\" was RAF slang in WWII. What's genuinely unresolved about it?",
    options: [
      "Whether \"Burton\" refers to a beer brand or a menswear chain, among other guesses",
      "Whether the phrase originated in the RAF or the Navy",
      "The exact date it was first used"
    ],
    correctIndex: 0
  },
  {
    idiomId: "sixes-and-sevens",
    question: "A real 1484 London guild dispute fits \"at sixes and sevens\" perfectly. What was it about?",
    options: [
      "A tax dispute over sixpence and sevenpence",
      "Two guilds arguing over which would rank sixth and which seventh in official precedence",
      "Six versus seven days in a working week"
    ],
    correctIndex: 1
  },
  {
    idiomId: "kick-the-bucket",
    question: "A theory favoured by Brewer's Dictionary links \"kick the bucket\" to what?",
    options: [
      "A regional East Anglian word for the beam pigs were hung from during slaughter",
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
      "A raised rail around a mess-table meant to stop plates sliding in rough seas",
      "A ship's compass"
    ],
    correctIndex: 1
  },
  {
    idiomId: "taking-the-mickey",
    question: "\"Taking the mickey\" is generally believed to be a softened version of what, via Cockney rhyming slang?",
    options: [
      "\"Taking the piss,\" through the rhyme \"Mickey Bliss\"",
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
      "The word isn't recorded in print until the 1950s-60s, roughly 80 years after Codd's bottle went out of fashion"
    ],
    correctIndex: 2
  },
  {
    idiomId: "elbow-grease",
    question: "\"Elbow grease,\" recorded as early as 1672, plays on which idea?",
    options: [
      "That the only real \"grease\" for cleaning something is your own physical effort",
      "That elbows produce natural oils useful for polishing",
      "A specific brand of Victorian furniture polish"
    ],
    correctIndex: 0
  },
  {
    idiomId: "donkeys-years",
    question: "\"Donkey's years\" is a pun built on what?",
    options: [
      "A donkey's actual average lifespan",
      "\"Donkey's ears\" (famously long), exploiting how \"ears\" and \"years\" sound alike in British pronunciation",
      "An old unit of farm labour time"
    ],
    correctIndex: 1
  },
  {
    idiomId: "at-a-loose-end",
    question: "The leading nautical theory for \"at a loose end\" involves what shipboard task?",
    options: [
      "Re-splicing and tidying loose rope ends when there was nothing else to do",
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
      "\"Take the cake,\" both descending from an ancient Greek prize custom",
      "\"Take the trophy\""
    ],
    correctIndex: 1
  },
  {
    idiomId: "bog-standard",
    question: "The leading, though unconfirmed, theory for \"bog standard\" is that it's a corruption of what?",
    options: [
      "\"Box standard,\" a specification sheet kept with technical drawings",
      "\"Bog Irish,\" an old ethnic slur",
      "\"Log standard,\" a measurement of timber"
    ],
    correctIndex: 0
  },
  {
    idiomId: "over-the-moon",
    question: "\"Over the moon\" (meaning delighted) actually predates its famous association with what?",
    options: [
      "Royal weddings",
      "British football post-match interviews from the 1970s onward",
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
      "First World War trench warfare, literally climbing out to advance across no man's land"
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
      "Well-suited or in good working order, like a well-tuned instrument",
      "Full of energy"
    ],
    correctIndex: 1
  },
  {
    idiomId: "splice-the-mainbrace",
    question: "\"Splice the mainbrace\" became naval shorthand for authorising a drink because of what?",
    options: [
      "Crews were traditionally rewarded with extra rum after completing this difficult rope repair",
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
      "Letting the watch see whose leg was poking from a hammock, since women visitors could stay in bed while the men had to rise",
      "Checking sailors for injuries before duty"
    ],
    correctIndex: 1
  },
  {
    idiomId: "cut-and-run",
    question: "\"Cut and run\" comes from a real emergency sailing practice. What did crews cut?",
    options: [
      "The anchor cable, sacrificing the anchor for a fast escape",
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
    question: "A popular nautical story claims \"the devil\" in this phrase was sailors' nickname for what?",
    options: [
      "A ship's captain",
      "A particularly awkward, dangerous hull seam near the waterline",
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
      "Stony Stratford, home to two rival coaching inns, The Cock and The Bull"
    ],
    correctIndex: 2
  },
  {
    idiomId: "chuffed-to-bits",
    question: "What's genuinely strange about the dialect history of \"chuffed\"?",
    options: [
      "It's always meant \"pleased,\" without exception",
      "It once meant both \"pleased\" and its near-opposite, \"annoyed,\" in different regional dialects",
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
      "Pressing the accelerator hard with a booted foot, referencing Wellington boots",
      "Honking the horn repeatedly"
    ],
    correctIndex: 1
  },
  {
    idiomId: "not-the-full-shilling",
    question: "\"Not the full shilling\" uses which everyday image?",
    options: [
      "Being handed a coin that comes up short of its proper value",
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
      "Exactly where, when, or why it specifically became a donkey rather than any other animal",
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
      "A chin moving up and down while talking, like a dog's tail wagging",
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
      "Undocumented as to why an explosive became slang for money, though it may echo a sense of sudden impact",
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
      "Old English and Old Norse forms of the verb \"to go\"",
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
      "Old Norse, possibly \"se upp,\" meaning \"look up\" or \"watch out\""
    ],
    correctIndex: 2
  },
  {
    idiomId: "mardy",
    question: "\"Mardy\" likely derives from an older dialectal use of which word?",
    options: [
      "\"Mard,\" related to \"marred,\" describing an over-indulged, spoiled child",
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
      "A charming, plausible story with no documented backing; the earliest confirmed use is a 1939 short story",
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
      "Raccoon hunting, where a dog might bark at an empty tree after its quarry leapt to another",
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
      "Geoffrey Chaucer, in the 1380s",
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
      "Skipping a film's slow build-up to reach its exciting chase scene",
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
  }
];
