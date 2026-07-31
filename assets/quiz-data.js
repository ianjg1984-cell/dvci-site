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
  }
];
