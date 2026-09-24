/* D.V.C.I.: Old Wives' Tales
   A separate collection from the main idiom repository, same standard of
   honesty applied to a different kind of claim: not "where does this
   phrase come from" but "is this actually true, and where did people
   start believing it." Verdicts here are about the claim itself:
   confirmed (it holds up), partly-true (real kernel, oversold), busted
   (confidently debunked), or folklore (a superstition that was never a
   testable claim to begin with). Kept deliberately separate from the
   idiom repository and the quiz. */

const OLD_WIVES_TALES = [
  {
    id: "feed-a-cold-starve-a-fever",
    phrase: "Feed a Cold, Starve a Fever",
    meaning: "The old advice to eat well if you have a cold, but cut back on food if you have a fever.",
    category: "Old Wives' Tales",
    verdict: "partly-true",
    verdictLabel: "Partly True",
    story: `The idea traces to Hippocratic-era medical theory, when fever
    itself was thought to be the disease rather than a symptom of one,
    meaning starving the sick person would starve the fever out. John
    Withals's 1574 dictionary records exactly this logic: "fasting is a
    great remedy of fever." Modern medicine disagrees with both halves.
    Doctors now agree that proper nutrition and fluids matter whether
    you have a cold or a fever, and that deliberately eating too little
    during either can weaken your immune response rather than help it.`,
    mythVsFact: "Neither half of the advice holds up medically. Starving yourself during a fever isn't recommended, and 'starving' was never good advice to begin with, it just reflected a genuinely different, outdated theory of how fevers worked.",
    source: "John Withals's dictionary (1574); modern medical consensus per Cleveland Clinic and Johns Hopkins Medicine."
  },
  {
    id: "apple-a-day-keeps-doctor-away",
    phrase: "An Apple a Day Keeps the Doctor Away",
    meaning: "The old promise that eating an apple daily will keep you healthy and out of the doctor's care.",
    category: "Old Wives' Tales",
    verdict: "partly-true",
    verdictLabel: "Partly True",
    story: `Welsh in origin. The earliest recorded version is a
    Pembrokeshire saying from 1866: "Eat an apple on going to bed, and
    you'll keep the doctor from earning his bread." It drifted through a
    few variations, "an apple a day, no doctor to pay," "an apple a day
    sends the doctor away," before settling into today's phrasing by the
    1880s-90s. Apples were a genuinely reliable, storable food through
    the colder months when fresh produce was scarce, real nutritional
    value behind the saying, just oversold as literal medical
    prevention.`,
    mythVsFact: "No clinical trial has shown a literal apple a day prevents doctor visits, but apples are a genuinely healthy, fibre-rich food. The saying overstates specificity, not the underlying idea.",
    source: "Pembrokeshire saying recorded 1866; modern phrasing documented in print by 1887."
  },
  {
    id: "carrots-see-in-the-dark",
    phrase: "Carrots Help You See in the Dark",
    meaning: "The claim that eating lots of carrots significantly improves your night vision.",
    category: "Old Wives' Tales",
    verdict: "busted",
    verdictLabel: "Busted",
    story: `Not folk wisdom, deliberate wartime propaganda. In 1939 the
    RAF began using Airborne Interception radar, letting pilots find
    enemy bombers in total darkness, a secret Britain badly wanted to
    protect. Britain's Air Ministry fed the press a cover story instead:
    night-fighter ace John "Cat's Eyes" Cunningham owed his kills to
    eating carrots. Posters followed, "Carrots keep you healthy and help
    you see in the blackout," genuinely useful home-front messaging
    doubling as cover for the radar secret. The myth outlived the war by
    decades.`,
    mythVsFact: "Carrots contain vitamin A, which supports normal eye function, but no amount of carrot-eating gives meaningfully enhanced night vision. The myth was a deliberate cover story, not a folk misunderstanding.",
    source: "British Air Ministry WWII press campaign; documented via Smithsonian Magazine and BBC Science Focus."
  },
  {
    id: "wet-hair-gives-you-a-cold",
    phrase: "Going Out With Wet Hair Gives You a Cold",
    meaning: "The warning that leaving the house with wet hair, especially in cold weather, will make you sick.",
    category: "Old Wives' Tales",
    verdict: "busted",
    verdictLabel: "Busted",
    story: `Colds are caused by viruses, not temperature or dampness, so
    exposure alone can't cause one. Early 1900s studies on soldiers and
    Canadian Arctic mounties seemed to support a chill-illness link, but
    later controlled experiments split volunteers into freezing rooms,
    some wet and thinly dressed, others bundled and dry, and found both
    groups caught colds at about the same rate. One real nuance: if a
    cold virus is already in your system, getting chilled may help
    symptoms appear sooner, though the chill itself never causes the
    infection.`,
    mythVsFact: "Being cold and wet doesn't give you a virus. If you already have one circulating in your body, a chill might nudge symptoms into showing themselves faster.",
    source: "Early 1900s military and Arctic studies; modern controlled research discussed via Mayo Clinic."
  },
  {
    id: "cracking-knuckles-causes-arthritis",
    phrase: "Cracking Your Knuckles Causes Arthritis",
    meaning: "The warning that habitually cracking your knuckles will give you arthritis later in life.",
    category: "Old Wives' Tales",
    verdict: "busted",
    verdictLabel: "Busted",
    story: `Debunked by one man's decades-long grudge. Dr. Donald Unger
    cracked the knuckles on his left hand at least twice a day for fifty
    years, over 36,500 times, deliberately leaving his right hand
    uncracked as a control, specifically to spite relatives who'd warned
    him it would cause arthritis. In 1998 he published the results as a
    letter to the journal <em>Arthritis and Rheumatism</em>: no arthritis
    in either hand, no measurable difference between them. It won him an
    Ig Nobel Prize. A larger study of 215 people since has backed up his
    finding.`,
    mythVsFact: null,
    source: "Donald Unger, letter to Arthritis and Rheumatism (1998); Journal of the American Board of Family Medicine study of 215 people."
  },
  {
    id: "shaving-makes-hair-grow-thicker",
    phrase: "Shaving Makes Hair Grow Back Thicker",
    meaning: "The belief that shaving causes hair to regrow darker, coarser, and thicker than before.",
    category: "Old Wives' Tales",
    verdict: "busted",
    verdictLabel: "Busted",
    story: `A visual illusion, not biology. A foundational 1928 study,
    reaffirmed decades later in the <em>Journal of Investigative
    Dermatology</em>, found no measurable difference in regrowth after
    shaving. What people actually notice: shaved hair is cut bluntly at
    the skin's surface, giving it a blunt, rigid tip, unlike an unshaved
    hair's naturally tapered end, so it looks and feels coarser at
    first. Coincidence reinforces the myth too, a teenage boy's first
    shave often overlaps with puberty, when hair is thickening anyway
    for unrelated hormonal reasons.`,
    mythVsFact: "Shaving changes how a hair's cut tip looks and feels at first, not how thick or fast it actually grows.",
    source: "Anatomical Record (1928); reaffirmed in Journal of Investigative Dermatology."
  },
  {
    id: "reading-dim-light-ruins-eyesight",
    phrase: "Reading in Dim Light Ruins Your Eyesight",
    meaning: "The warning that reading in poor light will permanently damage your eyes.",
    category: "Old Wives' Tales",
    verdict: "busted",
    verdictLabel: "Busted",
    story: `No study has found dim light causes lasting eye damage,
    confirmed repeatedly since a 2007 <em>British Medical Journal</em>
    study on the subject. What dim light does cause is real eye strain:
    pupils dilate and the eye's focusing muscles work harder to keep
    text sharp, bringing on tired eyes, headaches, and dryness from
    blinking less. All of it resolves once you stop and rest your eyes.
    The advice to use better lighting was genuinely sound for comfort,
    it just got mistaken for medical necessity somewhere along the
    way.`,
    mythVsFact: "Dim light tires your eyes out. It doesn't damage them.",
    source: "British Medical Journal (2007), reaffirmed by subsequent ophthalmological research."
  },
  {
    id: "lose-body-heat-through-head",
    phrase: "You Lose Most of Your Body Heat Through Your Head",
    meaning: "The belief that a large share, often cited as 40-45%, of your body's heat escapes through an uncovered head.",
    category: "Old Wives' Tales",
    verdict: "busted",
    verdictLabel: "Busted",
    story: `Traced to a 1970 US Army survival manual, which reported that
    40-45% of body heat is lost through the head. The figure came from a
    flawed experiment: soldiers were dressed in full arctic survival
    suits covering everything except their heads, so almost all the
    measurable heat loss naturally showed up there, since it was the
    only skin left exposed. A 2008 <em>British Medical Journal</em>
    review corrected the record: the head makes up roughly 7-10% of the
    body's surface area, and loses heat in rough proportion to that, no
    more special than any other uncovered patch of skin.`,
    mythVsFact: "The original number came from a badly designed experiment, not new science. Heat escapes wherever skin is exposed, not disproportionately from the head.",
    source: "US Army survival manual (1970); corrected in British Medical Journal (2008)."
  },
  {
    id: "swallowed-gum-seven-years",
    phrase: "Swallowed Gum Stays in Your Stomach for Seven Years",
    meaning: "The warning that swallowed chewing gum takes seven years to pass through your digestive system.",
    category: "Old Wives' Tales",
    verdict: "busted",
    verdictLabel: "Busted",
    story: `No medical literature supports the specific figure of seven
    years; it reads as a parental deterrent passed down by word of
    mouth rather than any published study. In reality, swallowed gum
    typically exits the body within two to five days, much like most
    other things you eat. The myth likely grew from a real fact, gum
    base genuinely resists the stomach's chemical digestion, wrongly
    stretched into the assumption that it must therefore get stuck
    rather than simply pass through by ordinary muscular movement.`,
    mythVsFact: "Gum base really does resist digestion chemically, but it still moves through your system on the normal schedule. It doesn't sit there for years.",
    source: "Multiple medical sources including Scientific American and Mayo Clinic; no documented origin found for the specific 'seven years' figure."
  },
  {
    id: "red-sky-at-night-shepherds-delight",
    phrase: "Red Sky at Night, Shepherd's Delight",
    meaning: "A red sky at sunset predicts fine weather the next day; a red sky at sunrise warns of bad weather coming.",
    category: "Old Wives' Tales",
    verdict: "confirmed",
    verdictLabel: "Actually True",
    story: `The one that isn't folklore at all. It's Biblical, appearing
    in the Gospel of Matthew via the 1395 Wyclif translation, and
    Shakespeare used a version of it in <em>Venus and Adonis</em>
    (1593), but it also holds up meteorologically. A red sunset happens
    when sunlight passes through dust trapped in stable, high-pressure
    air to the west, meaning fine weather is on its way. A red sunrise
    means that same high-pressure system has already moved through,
    with lower pressure, often rain, now arriving from the west. It
    holds specifically in regions like the UK, where weather systems
    travel west to east.`,
    mythVsFact: "This is the rare entry on this list that's genuinely, scientifically true, not just an old belief that happens to sound plausible.",
    source: "Wyclif Bible, Matthew XVI (1395); Shakespeare, Venus and Adonis (1593); UK Met Office."
  },
  {
    id: "step-on-a-crack-break-mothers-back",
    phrase: "Step on a Crack, Break Your Mother's Back",
    meaning: "The childhood superstition and sidewalk game that stepping on a pavement crack will bring your mother harm.",
    category: "Old Wives' Tales",
    verdict: "folklore",
    verdictLabel: "Unprovable Folklore",
    story: `The familiar rhyme has a considerably darker documented
    ancestor. In the late 19th and early 20th century United States, an
    earlier version of this superstition circulated with explicitly
    racist wording, warning white children that stepping on a crack, or
    a line, would somehow result in a Black child or a mixed-race
    marriage, a product of the deep racial prejudice of the period. Over
    the 20th century, as that context faded from common memory, the
    rhyme was reworked into the racially neutral "break your mother's
    back" version now used purely as a children's sidewalk game, with
    little awareness among most people using it today of where it came
    from.`,
    mythVsFact: "The core fact, that a version of this superstition once carried explicitly racist wording, is documented, not invented. But it's worth being upfront that this lives mostly in oral history and folklore-archive accounts rather than a single dated print citation, so the exact original wording and how widespread it was is less precisely pinned down than most other entries here.",
    source: "Oral-history and folklore-collection accounts, including USC's Digital Folklore Archive; exact original phrasing varies by regional account."
  },
  {
    id: "ears-burning-someone-talking-about-you",
    phrase: "If Your Ears Are Burning, Someone's Talking About You",
    meaning: "A sudden burning or tingling sensation in your ear means someone, somewhere, is talking about you.",
    category: "Old Wives' Tales",
    verdict: "folklore",
    verdictLabel: "Unprovable Folklore",
    story: `Genuinely ancient, not a modern invention. Pliny the Elder
    records the belief in his <em>Naturalis Historia</em> in the 1st
    century AD: a burning right ear meant someone was praising you, a
    burning left ear meant the opposite. Chaucer references the same
    idea in <em>Troilus and Criseyde</em> in the 1380s, and a 16th
    century poem, "Of the Burning of the Eares" by James Yates, deals
    with it directly. There's no mechanism connecting a stray physical
    sensation to what someone else happens to be saying elsewhere, so
    this isn't really "busted" so much as it was never a testable claim
    in the first place, just two thousand years of continuous
    superstition.`,
    mythVsFact: null,
    source: "Pliny the Elder, Naturalis Historia (1st century AD); Geoffrey Chaucer, Troilus and Criseyde (1380s)."
  },
  {
    id: "goosebumps-walking-over-your-grave",
    phrase: "Goosebumps Mean Someone's Walking Over Your Grave",
    meaning: "A sudden, unexplained shiver or goosebumps means someone is walking over the spot where you'll eventually be buried.",
    category: "Old Wives' Tales",
    verdict: "folklore",
    verdictLabel: "Unprovable Folklore",
    story: `Rooted in medieval English belief that a person's final
    resting place was already predetermined, and that the living and
    dead stayed in quiet, constant contact. The earliest recorded
    version of the saying, "There's somebody walking over my grave!",
    appears in Jonathan Swift's 1738 book <em>A Complete Collection of
    Genteel and Ingenious Conversation</em>. An American variant swaps
    in a goose, occasionally a rabbit, walking over the grave instead of
    a person. Science has its own, much less eerie explanation for the
    physical sensation itself: an involuntary release of adrenaline.`,
    mythVsFact: "The shiver is real, an adrenaline response, but the grave-related explanation for it is medieval folklore, not a documented cause.",
    source: "Jonathan Swift, A Complete Collection of Genteel and Ingenious Conversation (1738)."
  },
  {
    id: "swimming-after-eating-causes-cramp",
    phrase: "Swimming After Eating Causes Cramp and Drowning",
    meaning: "The warning to wait roughly an hour after eating before swimming, or risk a cramp severe enough to cause you to drown.",
    category: "Old Wives' Tales",
    verdict: "busted",
    verdictLabel: "Busted",
    story: `Traceable to early Boy Scout manuals: a 1908 edition warned
    scouts against swimming in deep water right after a meal, and the
    1911 Boy Scouts of America manual repeated the claim directly. The
    theory was that digestion redirects blood flow to the gut, starving
    the muscles and causing a cramp severe enough to incapacitate a
    swimmer. The American Red Cross has since reviewed the evidence
    directly and concluded there's no documented drowning death ever
    attributed to swimming within an hour of eating, and studies going
    back to the 1960s found no measurable effect on swimming performance
    either.`,
    mythVsFact: "There isn't a single documented case of this actually happening. The concern traces to early-1900s scouting manuals, not medical evidence.",
    source: "Boy Scouts of America manual (1911); American Red Cross review of available evidence."
  },
  {
    id: "bulls-enraged-by-red",
    phrase: "Bulls Are Enraged by the Colour Red",
    meaning: "The belief that bulls become aggressive specifically because they see the colour red, as in a bullfighter's cape.",
    category: "Old Wives' Tales",
    verdict: "busted",
    verdictLabel: "Busted",
    story: `Cattle are red-green colourblind, so a bull can't physically
    single out red the way the myth assumes. What actually provokes
    them is movement. In controlled tests, a matador's traditional
    muleta was replaced with capes of different colours, and bulls
    charged whichever cape was being waved, ignoring stationary red
    cloth entirely. Red was chosen for the muleta for a much more
    practical reason: it disguises the bull's blood during the fight,
    keeping the spectacle visually palatable for the crowd, nothing to
    do with provoking the animal.`,
    mythVsFact: "The bull is reacting to the cape's movement, not its colour, which it most likely can't even perceive the way people assume.",
    source: "Temple Grandin, Improving Animal Welfare; controlled bullfighting-cape tests documented via Snopes and academic sources."
  },
  {
    id: "touching-a-toad-gives-you-warts",
    phrase: "Touching a Toad Gives You Warts",
    meaning: "The warning that handling a toad or frog will cause warts to grow on your skin.",
    category: "Old Wives' Tales",
    verdict: "busted",
    verdictLabel: "Busted",
    story: `Warts are caused by human papillomavirus, a human-specific
    virus with nothing to do with amphibians. The myth likely comes from
    simple appearance: toads have bumpy, glandular skin, and people
    assumed those bumps were a contagious growth much like a wart. They
    aren't warts at all, they're glands, some of which genuinely secrete
    mild toxins, a real, if different, reason to wash your hands after
    handling one.`,
    mythVsFact: "The bumps on a toad's skin aren't warts, and human warts can't be caught from an amphibian.",
    source: "Multiple herpetological and dermatological sources, including Smithsonian Magazine and Burke Museum."
  },
  {
    id: "poinsettias-are-poisonous",
    phrase: "Poinsettias Are Poisonous",
    meaning: "The belief that poinsettia plants are dangerously toxic if eaten, especially by children or pets.",
    category: "Old Wives' Tales",
    verdict: "busted",
    verdictLabel: "Busted",
    story: `Traces to a single 1919 incident in Hawaii, where a two-year
    old child died and poinsettia leaves were blamed without any real
    medical investigation at the time. The claim was then repeated as
    fact in a 1944 book, <em>Poisonous Plants of Hawaii</em>. When a
    Cornell University floriculture professor actually looked into the
    original case in 1972, he found no real connection between the
    plant and the child's death at all. There's never been a documented
    poinsettia death since, and toxicology estimates suggest a
    50-pound child would need to eat over 500 poinsettia leaves before
    reaching a genuinely toxic dose.`,
    mythVsFact: "The entire myth traces back to one unverified 1919 case that, on later investigation, had no real evidence behind it at all.",
    source: "Harry L. Arnold, Poisonous Plants of Hawaii (1944); Cornell University investigation (1972); Poisindex Information Service."
  },
  {
    id: "lightning-never-strikes-twice",
    phrase: "Lightning Never Strikes the Same Place Twice",
    meaning: "The reassurance that once lightning has struck somewhere, that spot is now safe from being hit again.",
    category: "Old Wives' Tales",
    verdict: "busted",
    verdictLabel: "Busted",
    story: `The opposite is closer to the truth. Lightning takes the
    path of least resistance to the ground, which means tall, isolated
    structures get struck again and again, not just once. The Empire
    State Building is the textbook example: it's hit by lightning
    roughly 25 times a year on average, and was once struck eight times
    in a single 24-minute storm. There's no mechanism by which a
    location becomes "used up" after a single strike.`,
    mythVsFact: "Height and isolation, not history, determine where lightning strikes. The same spot getting hit repeatedly is completely normal.",
    source: "Documented Empire State Building lightning-strike frequency, per NOAA and multiple meteorological sources."
  },
  {
    id: "never-wake-a-sleepwalker",
    phrase: "Never Wake a Sleepwalker",
    meaning: "The warning that waking someone mid-sleepwalk can cause them serious harm, even a heart attack.",
    category: "Old Wives' Tales",
    verdict: "busted",
    verdictLabel: "Busted",
    story: `Major medical bodies, including the Mayo Clinic and the
    American Academy of Sleep Medicine, are direct on this: waking a
    sleepwalker doesn't cause heart attacks, brain damage, or any
    comparable medical harm. The belief has genuinely old roots,
    though, tracing to 12th and 13th century ideas that a person's soul
    temporarily left their body during sleep, so waking them abruptly
    was thought to risk trapping it outside. The real, far more
    mundane reason people still avoid it: a woken sleepwalker is often
    confused and disoriented, which can occasionally lead to a minor
    accidental injury, nothing supernatural about it.`,
    mythVsFact: "There's no medical danger in waking a sleepwalker. The real risk is brief confusion, not bodily harm.",
    source: "Mayo Clinic and American Academy of Sleep Medicine guidance; medieval 'soul departure' belief documented in sleep-history literature."
  },
  {
    id: "see-a-penny-pick-it-up",
    phrase: "See a Penny, Pick It Up, All Day Long You'll Have Good Luck",
    meaning: "The belief that finding and picking up a stray penny brings good luck for the rest of the day.",
    category: "Old Wives' Tales",
    verdict: "folklore",
    verdictLabel: "Unprovable Folklore",
    story: `A relatively modern American twist on a much older
    superstition. The original version wasn't about pennies at all, it
    was "see a pin and pick it up," tied to a pagan belief that metal
    was a protective gift from the gods, and a stray pin might have been
    used in a good-luck spell. As coins became the everyday
    precious-metal object people actually encountered, the rhyme drifted
    from pins to pennies, carrying the same underlying "found metal
    equals luck" logic along with it.`,
    mythVsFact: null,
    source: "'See a pin' pagan good-luck tradition, documented via USC's Digital Folklore Archive and related folklore references."
  },
  {
    id: "willow-bark-for-pain-and-fever",
    phrase: "Willow Bark Relieves Pain and Fever",
    meaning: "The old folk remedy of chewing or brewing willow bark to ease pain and bring down a fever.",
    category: "Old Wives' Tales",
    verdict: "confirmed",
    verdictLabel: "Actually True",
    story: `Sumerian clay tablets from around 4,000 years ago already
    link willow with pain relief, and the Egyptian Ebers Papyrus (c.
    1500 BC) documents its use for pain and inflammation. Willow bark
    contains salicin, the natural compound that is chemically the
    direct ancestor of aspirin, once absorbed by the body it converts
    into salicylic acid, the same pathway modern aspirin works through.
    The line to modern medicine runs through the English vicar Edward
    Stone, who spent five years in the 1750s-60s treating fevers with
    dried, powdered willow bark, and on to Italian and German chemists
    who isolated and named salicin in the 1820s. One popular detail
    doesn't hold up, though: the widely repeated claim that Hippocrates
    specifically recommended chewing willow bark for pain. The one
    surviving reference to willow in the works attributed to him
    describes burning willow leaves as smoke for an entirely different
    purpose.`,
    mythVsFact: "The willow-to-aspirin lineage is genuinely real and well documented. The specific 'Hippocrates recommended it for pain' detail often tacked onto the story isn't, his only surviving reference to willow describes something else entirely.",
    source: "Ebers Papyrus (c. 1500 BC); Edward Stone's willow bark trials (1750s-60s); salicin isolated and named by Italian and German chemists (1826-28)."
  },
  {
    id: "moldy-bread-on-wounds",
    phrase: "Moldy Bread Heals Wounds",
    meaning: "The old folk practice of pressing mould-covered bread onto a cut or wound to help it heal.",
    category: "Old Wives' Tales",
    verdict: "confirmed",
    verdictLabel: "Actually True",
    story: `Documented as far back as the Egyptian Ebers Papyrus (c.
    1550 BC), which records moldy bread being applied directly to
    infected wounds, and the same basic practice shows up independently
    in ancient Serbian, Chinese, and Greek folk medicine. The tradition
    survived for millennia, well into the modern era, some European
    households kept a loaf of deliberately moulded bread in the kitchen
    specifically for treating cuts. The mould involved is very often a
    Penicillium species, the exact genus that produces real
    antibacterial compounds, meaning the folk practice was, unknowingly,
    applying crude penicillin centuries before Alexander Fleming
    formally identified and isolated it in 1928.`,
    mythVsFact: null,
    source: "Ebers Papyrus (c. 1550 BC); documented parallel traditions in ancient Serbian, Chinese, and Greek medicine; Alexander Fleming's identification of penicillin (1928)."
  },
  {
    id: "honey-soothes-a-cough",
    phrase: "Honey Soothes a Cough and Sore Throat",
    meaning: "The old remedy of taking a spoonful of honey, often in warm water or tea, to ease a cough or sore throat.",
    category: "Old Wives' Tales",
    verdict: "confirmed",
    verdictLabel: "Actually True",
    story: `One of the better-evidenced entries on this whole list. A
    Cochrane systematic review, medicine's highest standard for weighing
    evidence, found honey probably reduces cough symptoms more than
    both placebo and no treatment at all, and even outperforms some
    over-the-counter cough medicines for short-term relief, including
    improving children's sleep during a cough. The effect is thought to
    come from honey's soothing, coating texture plus its mild
    antimicrobial properties. It comes with one serious, separate safety
    caveat: honey should never be given to children under 12 months
    old, due to a real risk of infant botulism, entirely unrelated to
    whether it works as a cough remedy.`,
    mythVsFact: null,
    source: "Cochrane systematic review, 'Honey for acute cough in children'; supporting meta-analysis published in BMJ."
  },
  {
    id: "fish-is-brain-food",
    phrase: "Fish Is Brain Food",
    meaning: "The old claim that eating fish makes you smarter or improves brain function.",
    category: "Old Wives' Tales",
    verdict: "confirmed",
    verdictLabel: "Actually True",
    story: `Backed by real, substantial nutrition science. DHA, an
    omega-3 fatty acid found in fish, is a major structural component
    of brain cell membranes, and the brain's ability to communicate
    between cells depends on it. Children of mothers who ate more fish
    during pregnancy show measurable improvements in verbal
    intelligence and motor skills, and in older adults, higher omega-3
    levels are linked to larger brain volume and up to a 50% lower risk
    of developing dementia. One honest caveat: while fish itself shows
    real benefit, taking fish oil supplements instead hasn't
    consistently shown the same protective effect in clinical trials,
    suggesting it isn't simply about the isolated compound.`,
    mythVsFact: null,
    source: "Multiple peer-reviewed nutrition and neurology studies, including research cited by the NIH Office of Dietary Supplements and the Alzheimer's Drug Discovery Foundation."
  },
  {
    id: "stress-turns-your-hair-grey",
    phrase: "Stress Turns Your Hair Grey",
    meaning: "The old belief that a period of intense stress can cause your hair to turn grey, sometimes seemingly overnight.",
    category: "Old Wives' Tales",
    verdict: "confirmed",
    verdictLabel: "Actually True",
    story: `Confirmed by Harvard researchers in a 2020 study published
    in <em>Nature</em>. Stress activates the body's fight-or-flight
    nervous system, which releases a chemical called norepinephrine
    near hair follicles. This causes the follicle's pigment-producing
    stem cells to burn through their reserves far faster than normal,
    and once those stem cells are depleted, the hair they produce grows
    in without colour, permanently. The mechanism was demonstrated
    directly in mice, and researchers separately documented a real
    human case: a 30-year-old woman developed grey patches in her hair
    that lined up exactly with the most stressful period of her year, a
    marital separation, and the colour partially returned once the
    stress passed.`,
    mythVsFact: null,
    source: "Ya-Chieh Hsu et al., Harvard University and Harvard Stem Cell Institute, published in Nature (2020)."
  },
  {
    id: "chicken-soup-helps-a-cold",
    phrase: "Chicken Soup Helps a Cold",
    meaning: "The old remedy of eating chicken soup to help you recover from a cold.",
    category: "Old Wives' Tales",
    verdict: "confirmed",
    verdictLabel: "Actually True",
    story: `Taken seriously enough that a real pulmonologist decided to
    test it properly. Dr. Stephen Rennard at the University of Nebraska
    Medical Center studied chicken soup's effect in the lab, publishing
    his findings in 1993 and again in 2000. He found that chicken soup
    measurably inhibits the movement of neutrophils, immune cells that,
    in excess, drive the inflammation responsible for many cold
    symptoms. It's likely the combination of ingredients rather than
    any single one doing the work. The honest caveat is that this was a
    laboratory study of the soup's effect on cells, not a full clinical
    trial tracking real patients' recovery, so "chicken soup measurably
    calms inflammation" is well supported, even if "chicken soup cures
    your cold faster" hasn't been directly proven in patients.`,
    mythVsFact: "The anti-inflammatory effect is real and was measured directly in the lab. What hasn't been separately proven in a full patient trial is that this translates into recovering from a cold noticeably faster.",
    source: "Stephen Rennard et al., University of Nebraska Medical Center, published 1993 and 2000."
  },
  {
    id: "spiderwebs-stop-bleeding",
    phrase: "Spiderwebs Stop Bleeding",
    meaning: "The old practice of pressing a spider's web against a cut to stop the bleeding and help it heal.",
    category: "Old Wives' Tales",
    verdict: "partly-true",
    verdictLabel: "Partly True",
    story: `Extraordinarily well documented historically. Ancient Greek
    soldiers used cobweb pads soaked in olive oil to staunch
    battlefield wounds, Shakespeare references the remedy in <em>A
    Midsummer Night's Dream</em>, a 1415 Gaelic medical manuscript
    describes it directly, and English soldiers reportedly carried
    small boxes of cobwebs into the Battle of Agincourt for exactly
    this purpose. It remained standard practice in both folk and
    professional medicine into the 18th century. The mechanical part
    holds up reasonably well: a web's dense, tangled fibres can
    genuinely help absorb blood and encourage clotting, simply by
    giving it a structure to cling to. The specific claim that spider
    silk has real antibacterial, infection-fighting properties, though,
    is not well supported, and recent research has pushed back directly
    on that part of the folklore.`,
    mythVsFact: "The historical use is completely real, not exaggerated. But the leap from 'the web helps blood clot mechanically' to 'spider silk fights infection' is the part modern research hasn't been able to back up, and some recent studies argue against it directly.",
    source: "Documented use from the 1st century AD onward, including a 1415 manuscript by Gaelic physician Tadhg Ó Cuinn; recent evaluation reported via ScienceDaily (2021)."
  },
  {
    id: "spicy-food-clears-a-stuffy-nose",
    phrase: "Spicy Food Clears a Stuffy Nose",
    meaning: "The old belief that eating something spicy will unblock your nose and clear your sinuses.",
    category: "Old Wives' Tales",
    verdict: "partly-true",
    verdictLabel: "Partly True",
    story: `There's a real, direct mechanism behind this one. Capsaicin,
    the compound that makes chilli peppers hot, activates a receptor in
    the nasal lining that triggers mucus to thin and flow, genuinely
    clearing a blocked nose, which is exactly why capsaicin nasal
    sprays are used in real clinical treatments for some sinus
    conditions. The catch is that a stuffy nose is usually caused by
    swollen, inflamed tissue from a virus or allergy, not simply by
    thick mucus, and capsaicin doesn't treat that inflammation at all.
    So the relief from a spicy meal is real, but temporary and
    cosmetic, your nose feels clearer for a while, then goes right back
    to being blocked once the effect wears off.`,
    mythVsFact: "The nose-clearing sensation is a real physiological effect, not a placebo. It just doesn't fix what's actually causing the congestion, so it wears off fast.",
    source: "Clinical research on capsaicin/TRPV1 nasal receptor response; capsaicin nasal spray clinical trials, e.g. ClinicalTrials.gov NCT03952845."
  },
  {
    id: "sugar-makes-children-hyperactive",
    phrase: "Sugar Makes Children Hyperactive",
    meaning: "The common belief that eating sugary food or drinks causes children to become wild, restless, or unable to concentrate.",
    category: "Old Wives' Tales",
    verdict: "busted",
    verdictLabel: "Busted",
    story: `The link between sugar and hyperactive behaviour has been
    tested directly and repeatedly, and it doesn't hold up. A 1995
    meta-analysis in the Journal of the American Medical Association
    combined 23 separate double-blind, placebo-controlled experiments
    and found that sugar had no measurable effect on children's
    behaviour or cognitive performance. A second major review that same
    year, in the New England Journal of Medicine, reached the same
    conclusion using 23 randomised controlled trials covering over
    1,400 children. What actually seems to drive the belief is
    expectation rather than sugar itself: in one study, mothers who
    were simply told their child had been given sugar (when none
    actually had) rated their child as noticeably more hyperactive than
    mothers who were told the truth.`,
    mythVsFact: "The behaviour doesn't come from the sugar. It comes from what the adults in the room already expect to see once sugar is mentioned.",
    source: "Journal of the American Medical Association meta-analysis (1995); New England Journal of Medicine meta-analysis of 23 randomised controlled trials (1995)."
  },
  {
    id: "full-moon-causes-strange-behavior",
    phrase: "The Full Moon Causes Strange Behaviour",
    meaning: "The belief that a full moon leads to a measurable rise in crime, accidents, hospital visits, or erratic behaviour.",
    category: "Old Wives' Tales",
    verdict: "busted",
    verdictLabel: "Busted",
    story: `Decades of research have looked for a real connection
    between the full moon and crime rates, psychiatric admissions,
    emergency room visits, births, and more, and the pattern
    essentially isn't there. Meta-analyses combining results across
    many individual studies have found full moons to be statistically
    unrelated to the events people most often blame on them; one
    dataset even showed a slight dip in homicides during a full moon
    rather than a rise. There is one small, genuine effect: a 2013
    study found people sleep somewhat less deeply around the full moon,
    roughly 20 minutes less sleep and about 30% less deep sleep, though
    the effect size is modest. The belief itself persists largely
    through confirmation bias: an unusual incident on a full-moon night
    gets remembered and retold, while an ordinary night, full moon or
    not, doesn't.`,
    mythVsFact: "The one real, measurable effect is a small dip in sleep quality, nothing close to the crime waves and chaos the myth usually claims.",
    source: "Meta-analyses of crime, psychiatric, and hospital data discussed in Scientific American and Wikipedia's 'Lunar effect' entry; 2013 sleep study cited via Healthline."
  },
  {
    id: "swallow-spiders-in-sleep",
    phrase: "You Swallow Eight Spiders a Year in Your Sleep",
    meaning: "The claim that the average person unknowingly swallows several live spiders annually while sleeping.",
    category: "Old Wives' Tales",
    verdict: "busted",
    verdictLabel: "Busted",
    story: `There's no research behind this one at all, and the exact
    number, eight, has no traceable scientific source. The claim seems
    to have spread through 1990s trivia culture, including an
    appearance as a "Real Fact" on a Snapple bottle cap, and a widely
    reprinted 1993 magazine article that stated it as fact without
    citing any actual study. Once repeated enough times in classrooms,
    trivia games, and articles, it hardened into something that sounds
    like established science. It also runs against basic biology in
    both directions: spiders generally avoid the vibration, warmth, and
    breathing of a sleeping person rather than seeking it out, and
    there's no medical record of anyone regularly swallowing spiders in
    their sleep going back to check.`,
    mythVsFact: "Nobody has ever traced this statistic to an actual study, because there isn't one. It's often cited today specifically as an example of how easily a fake number can become 'common knowledge' once repeated enough times.",
    source: "Traced to 1990s trivia culture, including a Snapple bottle-cap 'Real Fact' and a 1993 magazine article with no cited research, per Scientific American and Discover Magazine."
  },
  {
    id: "breaking-a-mirror-seven-years-bad-luck",
    phrase: "Breaking a Mirror Brings Seven Years of Bad Luck",
    meaning: "The superstition that shattering a mirror curses the person responsible with seven years of misfortune.",
    category: "Old Wives' Tales",
    verdict: "folklore",
    verdictLabel: "Unprovable Folklore",
    story: `Traces to ancient Rome, where mirrors weren't thought to
    simply reflect a face, they were believed to capture a piece of the
    soul itself. Breaking one meant damaging that soul-image, and
    Romans also believed the body and soul underwent a complete renewal
    every seven years, giving the exact length of the supposed bad
    luck. There's a more practical layer too: mirrors were extremely
    expensive for most of history, and breaking one could genuinely
    cost close to seven years' worth of an ordinary person's wages,
    which may have reinforced the superstition long after anyone
    remembered the original Roman soul-belief. The superstition spread
    far more widely once mirrors became mass-produced and affordable in
    the late 1800s, putting them into ordinary households for the first
    time.`,
    mythVsFact: null,
    source: "Ancient Roman mirror and soul-renewal beliefs, documented via FolkloreThursday and multiple mirror-history sources; mass production of mirrors from the late 19th century."
  },
  {
    id: "umbrella-indoors-bad-luck",
    phrase: "Opening an Umbrella Indoors Is Bad Luck",
    meaning: "The superstition that opening an umbrella inside a building will bring misfortune.",
    category: "Old Wives' Tales",
    verdict: "folklore",
    verdictLabel: "Unprovable Folklore",
    story: `Two very different explanations compete for this one. The
    older points to ancient Egypt, around 1200 BC, where early
    umbrellas made from feathers and papyrus were used by priests and
    royalty specifically to block the sun, meaning opening one indoors,
    away from the sun, could be seen as an insult to the sun god Ra, or
    to the sky goddess Nut, whose protective shade the umbrella was
    meant to represent. The more practical theory points to the
    Victorian era, when Samuel Fox's steel-ribbed umbrella design
    became popular. A rigid, spring-loaded umbrella suddenly opening in
    a cramped room was a genuine way to injure someone or break
    something, which may have hardened an older superstition into a
    very sensible household rule.`,
    mythVsFact: null,
    source: "Ancient Egyptian umbrella use documented via HowStuffWorks and Mental Floss; Samuel Fox's Paragon steel-ribbed umbrella frame (Victorian era)."
  },
  {
    id: "garlic-fights-infection",
    phrase: "Garlic Fights Off Infection",
    meaning: "The old remedy of eating raw or crushed garlic to help ward off or fight infections.",
    category: "Old Wives' Tales",
    verdict: "confirmed",
    verdictLabel: "Actually True",
    story: `Garlic has been used as a folk remedy across many different
    cultures for thousands of years, and modern chemistry has actually
    found a real mechanism behind it. Crushing or chewing raw garlic
    releases a compound called allicin, first identified in 1944, which
    has been shown in laboratory studies to have genuine antibacterial,
    antifungal, and antiviral activity, including against some
    antibiotic-resistant bacterial strains. Allicin works by reacting
    with and disabling key enzymes that bacteria and fungi need to
    survive. One important practical catch: allicin is unstable and
    breaks down quickly once heated above about 80°C, so cooked garlic
    loses most of this specific antimicrobial effect that raw garlic
    has.`,
    mythVsFact: null,
    source: "Allicin identified by Cavallito (1944); antimicrobial activity documented in multiple peer-reviewed studies including PLOS ONE and Scientific Reports."
  },
  {
    id: "turkey-tryptophan-sleepy",
    phrase: "Turkey Makes You Sleepy",
    meaning: "The belief that eating turkey causes drowsiness because of its tryptophan content, especially associated with big Thanksgiving dinners.",
    category: "Old Wives' Tales",
    verdict: "busted",
    verdictLabel: "Busted",
    story: `Turkey does contain tryptophan, an amino acid the body uses
    to help make serotonin, but there's nothing special about turkey
    specifically: chicken, beef, and even cheddar cheese all contain
    comparable or higher amounts of it. There's also a biological catch
    that undercuts the whole theory: tryptophan has to compete with
    several other, more abundant amino acids to cross into the brain,
    and eating a protein-heavy meal like turkey actually makes that
    competition harder, not easier, meaning a turkey dinner shouldn't
    meaningfully raise brain tryptophan levels at all. The much simpler
    explanation for the post-dinner slump is the sheer size of the meal
    itself, plus the carbohydrate-heavy sides and any alcohol, a
    combination well known to cause drowsiness regardless of what
    protein is on the plate.`,
    mythVsFact: "Turkey isn't unique in its tryptophan content, and the biology of a big meal actually works against tryptophan reaching the brain in any meaningful extra amount. The nap is from the meal's size, not the bird itself.",
    source: "USDA tryptophan comparisons and amino-acid competition mechanism, documented via CNN and multiple nutrition-science sources."
  },
  {
    id: "vitamin-c-prevents-colds",
    phrase: "Vitamin C Prevents Colds",
    meaning: "The popular belief that taking vitamin C, especially at the first sign of a cold, will stop you from getting sick.",
    category: "Old Wives' Tales",
    verdict: "partly-true",
    verdictLabel: "Partly True",
    story: `This one owes its fame to the Nobel laureate Linus Pauling,
    who became a vocal advocate for high-dose vitamin C in the 1970s.
    Large-scale reviews since, including a Cochrane review covering
    nearly 30 trials and over 11,000 participants, found that regular
    vitamin C makes no real difference to how often an ordinary person
    catches a cold. There is a real, if narrower, effect: regular
    supplementation modestly shortens how long a cold lasts once you
    have one, and in people under intense short-term physical stress,
    marathon runners and skiers in the studied trials, it roughly
    halved the risk of catching a cold at all. Taking vitamin C only
    after symptoms have already started, the way most people actually
    use it, showed no consistent benefit in the trials.`,
    mythVsFact: "Pauling's confidence ran well ahead of the evidence for ordinary cold prevention. The real, replicated benefits are narrower: a shorter cold once you have one, and real prevention specifically under extreme physical stress.",
    source: "Cochrane systematic review, 'Vitamin C for preventing and treating the common cold'; Linus Pauling's original 1971 meta-analysis, discussed via McGill University's Office for Science and Society."
  },
  {
    id: "eight-glasses-of-water-a-day",
    phrase: "You Need to Drink Eight Glasses of Water a Day",
    meaning: "The widely repeated health rule that everyone should drink eight 8-ounce glasses of water daily.",
    category: "Old Wives' Tales",
    verdict: "busted",
    verdictLabel: "Busted",
    story: `The number traces to a 1945 recommendation from the US Food
    and Nutrition Board, which suggested about 2.5 litres of water
    intake a day, roughly eight glasses. Crucially, the same
    recommendation explicitly noted that most of that amount is already
    contained in ordinary food, a detail that appears to have been
    dropped as the advice got passed along, leaving only "drink eight
    glasses" behind. No actual research produced the specific 8x8
    figure in the first place, and a review of 18 separate trials on
    the subject found a genuinely mixed picture, with about half
    showing a benefit and half showing none, and most studies too small
    or short to be conclusive either way.`,
    mythVsFact: "The famous number comes from a 1945 recommendation that already counted food as part of your water intake. Later retellings just quietly dropped that part.",
    source: "1945 US Food and Nutrition Board recommendation, documented via Harvard Health and the American Journal of Physiology."
  },
  {
    id: "toilet-water-coriolis-effect",
    phrase: "Toilets Flush in Opposite Directions in Each Hemisphere",
    meaning: "The claim that the Coriolis effect makes water swirl clockwise down drains in the Southern Hemisphere and counterclockwise in the Northern Hemisphere.",
    category: "Old Wives' Tales",
    verdict: "busted",
    verdictLabel: "Busted",
    story: `The Coriolis effect is real, and it genuinely does shape
    the rotation of huge systems like hurricanes, spinning them
    counterclockwise north of the equator and clockwise south of it.
    The problem is scale: a toilet bowl or bathroom sink is far too
    small, and the water drains far too quickly, for a force that weak
    to have any measurable influence on which way it swirls. In
    reality, the direction water spins down a drain is almost entirely
    determined by the shape of the basin and the angle at which water
    is jetted into it when it's flushed or filled, not which hemisphere
    it's in. Both clockwise and counterclockwise drains can be found in
    either hemisphere, and the "proof" demonstrations sometimes staged
    for tourists at the equator are rigged rather than genuine.`,
    mythVsFact: "The Coriolis effect is real science, misapplied to something far too small and fast-draining for it to matter. Bowl shape and the angle of the water jets decide the direction, not geography.",
    source: "Coriolis-effect scale analysis discussed via Scientific American, Snopes, and the Library of Congress's 'Everyday Mysteries' series."
  },
  {
    id: "dog-mouth-cleaner-than-human",
    phrase: "A Dog's Mouth Is Cleaner Than a Human's",
    meaning: "The belief that a dog's mouth carries fewer or less harmful germs than a human's, often used to justify letting a dog lick a wound or your face.",
    category: "Old Wives' Tales",
    verdict: "busted",
    verdictLabel: "Busted",
    story: `Dogs' mouths carry roughly as many bacterial species as
    human mouths do, somewhere around 600 in dogs compared with over
    600 documented in humans, so "cleaner" in the sense of having fewer
    germs simply isn't accurate. The real difference is that most of a
    dog's oral bacteria are specifically adapted to live in dogs and
    don't easily colonise humans, which is probably where the "cleaner"
    reputation comes from: cross-species infection from casual contact
    is genuinely uncommon. That's different from harmless, though. A
    dog bite that breaks the skin carries a real risk of infection from
    bacteria dogs do host, and the old observation that dogs heal well
    after licking their own wounds isn't unique to dogs either, saliva
    from most mammals, humans included, shows some of the same mild
    wound-healing properties.`,
    mythVsFact: "Similar germ counts, different germs. The apparent safety comes from most dog bacteria not being well suited to infecting humans, not from a dog's mouth actually being germ-free.",
    source: "Comparative oral bacteria research discussed via PetMD, AKC, and a 2024 genetic analysis of canine dental plaque bacteria."
  },
  {
    id: "left-handed-people-die-younger",
    phrase: "Left-Handed People Die Younger",
    meaning: "The claim, based on a widely reported 1991 study, that left-handed people have significantly shorter average lifespans than right-handed people.",
    category: "Old Wives' Tales",
    verdict: "busted",
    verdictLabel: "Busted",
    story: `The claim comes from a real 1991 study by Halpern and
    Coren, which found that left-handed people in their sample had
    died, on average, nine years younger than right-handed people, a
    result that got picked up widely in both popular media and serious
    scientific journals. The problem turned out to be the study's
    method, not its data: because social pressure to write with the
    right hand was strong for most of the 20th century, many people
    alive earlier in the century who were naturally left-handed had
    been forced to switch, meaning genuinely left-handed people were
    undercounted among older, longer-lived generations in the sample.
    That created the statistical illusion of left-handers dying young,
    when really there were just fewer of them left to count among the
    elderly. Later, better-designed studies, including one tracking
    twin pairs of opposite handedness, found no real difference in
    lifespan tied to handedness at all.`,
    mythVsFact: "The original 1991 finding was a real result from real data, but the data itself was skewed by decades of forced hand-switching, not by any actual health difference tied to left-handedness.",
    source: "Halpern and Coren (1991); statistical correction discussed in Significance journal and a 2023 study in Archives of Public Health."
  },
  {
    id: "wait-24-hours-to-report-missing-person",
    phrase: "You Have to Wait 24 Hours to Report Someone Missing",
    meaning: "The widely believed rule that police won't accept a missing person report until the person has been gone for a full day.",
    category: "Old Wives' Tales",
    verdict: "busted",
    verdictLabel: "Busted",
    story: `There has never been a law anywhere in the United States
    requiring a 24-hour wait before filing a missing person report, for
    a child or an adult. Police departments and missing-persons
    organisations are consistent and direct on this point. The myth
    appears to have spread largely through television and film,
    particularly crime procedurals, where a "24-hour rule" is a
    convenient plot device, repeated so often on screen that it
    hardened into something audiences assumed was real police
    procedure. The belief isn't just harmless misinformation either:
    because the first hours after someone goes missing are often the
    most important for locating them safely, the myth has genuinely
    delayed real investigations, which is why some places, including
    Illinois from 2026, have passed laws explicitly requiring police to
    accept and act on missing person reports immediately.`,
    mythVsFact: "This isn't just an incorrect but harmless belief. Acting on it has genuinely delayed real missing-persons investigations, which is exactly why several police departments and news outlets have pushed hard to correct it.",
    source: "Documented lack of any 24-hour legal waiting period, per Police Magazine and multiple missing-persons advocacy organisations; Illinois's 2026 immediate-report law."
  },
  {
    id: "bats-are-blind",
    phrase: "Bats Are Blind",
    meaning: "The belief, reflected in the phrase 'blind as a bat,' that bats cannot see and rely entirely on hearing to get around.",
    category: "Old Wives' Tales",
    verdict: "busted",
    verdictLabel: "Busted",
    story: `Every bat species studied has fully functional eyes,
    complete with a working retina, lens, and optic nerve, and many
    bats are believed to see more sharply in low light than humans do.
    The confusion comes from echolocation, the genuinely remarkable
    biological sonar many bats use to track fast-moving prey in
    complete darkness, which is so effective that people assumed it
    must be compensating for blindness rather than working alongside
    functioning eyes. In practice, the two senses divide the labour:
    vision tends to handle long-range navigation, spotting the horizon,
    and watching for predators, while echolocation takes over for the
    fine, split-second work of chasing insects in the dark.`,
    mythVsFact: null,
    source: "Comparative bat vision and echolocation research discussed via Britannica and peer-reviewed studies in Frontiers in Ecology and Evolution."
  },
  {
    id: "salt-water-gargle-sore-throat",
    phrase: "Gargling Salt Water Soothes a Sore Throat",
    meaning: "The old home remedy of gargling warm water mixed with salt to relieve a sore throat.",
    category: "Old Wives' Tales",
    verdict: "confirmed",
    verdictLabel: "Actually True",
    story: `This one holds up well in actual clinical trials. A
    randomised trial comparing a 3% salt solution against a standard
    treatment found statistically significant improvements in pain,
    swallowing difficulty, and throat swelling in the salt-water group.
    Separate research has found that regular gargling, including plain
    salt water, is associated with fewer upper respiratory infections
    generally, and patients who gargled with warm saline after certain
    throat procedures reported measurably less soreness afterward. The
    recommended mix, roughly a teaspoon of salt in a cup of warm water,
    is inexpensive, has no meaningful side effects, and is specifically
    recommended by health bodies including the CDC as a genuine,
    evidence-backed way to ease a sore throat.`,
    mythVsFact: null,
    source: "Randomised clinical trials on saline gargling for pharyngitis; CDC recommendation for salt-water gargling; Satomura et al. gargling study (2005)."
  },
  {
    id: "daddy-long-legs-most-venomous-spider",
    phrase: "Daddy Long Legs Are the World's Most Venomous Spiders, but Their Fangs Can't Bite You",
    meaning: "The claim that daddy long legs have the deadliest venom of any spider, but are harmless to humans because their fangs are too small or weak to pierce skin.",
    category: "Old Wives' Tales",
    verdict: "busted",
    verdictLabel: "Busted",
    story: `This one is wrong on several levels at once. "Daddy long
    legs" is actually a common name loosely applied to at least three
    completely different creatures: harvestmen, which aren't even true
    spiders and have no fangs or venom glands at all; crane flies,
    which are insects, and many species can't bite anything because
    they have no mouthparts; and cellar spiders, the one actual spider
    among the three. Even for cellar spiders, the specific creature the
    myth most often means, their venom is far less potent than a black
    widow's, not more, and while their fangs are genuinely small, a
    2019 study confirmed they can and occasionally do bite people,
    producing nothing worse than a mild, brief sting.`,
    mythVsFact: "The myth is confused about which animal it's even describing, wrong about the venom being unusually dangerous, and wrong that the fangs can't physically bite at all. All three parts of the claim fall apart independently.",
    source: "Species identification and venom-potency research documented via the Burke Museum, UC Riverside Department of Entomology, and a 2019 Frontiers in Ecology and Evolution study."
  },
  {
    id: "knock-on-wood-for-luck",
    phrase: "Knock on Wood for Good Luck",
    meaning: "The superstition of touching or knocking on a wooden surface to avoid bad luck, especially after mentioning good fortune out loud.",
    category: "Old Wives' Tales",
    verdict: "folklore",
    verdictLabel: "Unprovable Folklore",
    story: `The most commonly repeated explanation traces the habit to
    ancient pagan Europe, where various cultures, including the Celts,
    believed spirits or gods lived inside certain sacred trees, oak,
    ash, hazel, hawthorn, and willow among them. Knocking was thought
    to either summon a protective spirit's attention or, in a related
    theory, to make enough noise to drive away evil spirits who might
    otherwise overhear someone tempting fate by boasting about good
    fortune. Christian tradition later gave the same physical gesture a
    new meaning, touching wood as a stand-in for touching the wood of
    the cross, seeking God's protection instead of a tree-spirit's. No
    solid documentary evidence actually confirms either the pagan or
    Christian version as the true origin, and the practice may simply
    be older and more diffuse than any single explanation captures.`,
    mythVsFact: "Every origin story for this one, pagan tree-worship or Christian cross symbolism, is repeated with total confidence and neither is actually backed by solid historical evidence. Nobody really knows for certain.",
    source: "Pagan tree-spirit and Christian cross theories both discussed via History.com and The Conversation; no documentary evidence confirmed for either."
  },
  {
    id: "friday-the-13th-unlucky",
    phrase: "Friday the 13th Is an Unlucky Day",
    meaning: "The superstition that Friday the 13th specifically is a day prone to bad luck or misfortune.",
    category: "Old Wives' Tales",
    verdict: "folklore",
    verdictLabel: "Unprovable Folklore",
    story: `Bad luck attached to the number 13 and to Fridays both have
    long, separate folklore histories, well before they were ever
    combined into a single unlucky date. Norse mythology tells of the
    trickster god Loki crashing a banquet of twelve gods as an
    uninvited thirteenth guest, setting off a chain of events that gets
    one of the other gods killed. Christian tradition points to the
    Last Supper, where Judas, whose betrayal led directly to the
    crucifixion the next day, a Friday, is remembered as the thirteenth
    person at the table. The specific combination of Friday and the
    13th as one unlucky date, rather than two separate superstitions,
    seems to be a more modern invention, commonly linked to the 1907
    American novel <em>Friday, the Thirteenth</em>, which helped cement
    the pairing in popular culture.`,
    mythVsFact: null,
    source: "Norse and Christian folklore sources discussed via History.com and National Geographic; Thomas W. Lawson's novel Friday, the Thirteenth (1907)."
  },
  {
    id: "marry-in-may-rue-the-day",
    phrase: "Marry in May and You'll Rue the Day",
    meaning: "The old wedding superstition that getting married in the month of May brings bad luck to the marriage.",
    category: "Old Wives' Tales",
    verdict: "folklore",
    verdictLabel: "Unprovable Folklore",
    story: `Traces to ancient Rome, where the month of May was
    dedicated to Lemuria, a solemn festival for honouring and appeasing
    the restless dead. Weddings, a celebration of new life and joy,
    were considered inappropriate and unlucky to hold during a month
    set aside for mourning and warding off spirits, a clash of moods
    that made a May wedding feel like tempting fate. The superstition
    long outlived the Roman festival that inspired it and spread across
    Europe as part of a wider tradition of wedding-month rhymes, "Marry
    in May, rue the day," being the most famous line from a longer folk
    poem ranking every month's marital luck.`,
    mythVsFact: null,
    source: "Roman Lemuria festival tradition, documented via Refinery29 and multiple wedding-folklore sources; the longer traditional wedding-month rhyme."
  },
  {
    id: "cold-showers-boost-immune-system",
    phrase: "Cold Showers Boost Your Immune System",
    meaning: "The belief that regularly finishing your shower with cold water strengthens your immune system and helps you avoid getting sick.",
    category: "Old Wives' Tales",
    verdict: "partly-true",
    verdictLabel: "Partly True",
    story: `The best evidence on this comes from a large Dutch
    randomised controlled trial with over 3,000 participants, who were
    assigned to finish their normal shower with 30, 60, or 90 seconds
    of cold water, or to a no-cold-water control group. The result was
    a genuine, fairly striking finding: people in the cold-shower
    groups took 29% fewer sick days from work than the control group.
    The important catch is what didn't change: the cold-shower groups
    didn't actually get sick less often or recover faster once they
    did, their illness rates and durations were statistically the same
    as everyone else's. The most likely explanation isn't a stronger
    immune system at all, but something closer to resilience:
    cold-shower takers seemed more willing to push through mild
    symptoms and go to work anyway.`,
    mythVsFact: "The sick-day reduction is real and was measured in a genuinely large trial. What isn't supported is the specific claim that it comes from a stronger immune system, since actual illness rates didn't budge at all.",
    source: "Buijze et al., 'The Effect of Cold Showering on Health and Work: A Randomized Controlled Trial,' PLOS ONE (2016)."
  }
];
