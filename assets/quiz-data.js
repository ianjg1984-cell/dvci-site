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
  }
];
