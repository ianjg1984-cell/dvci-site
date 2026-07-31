/* D.V.C.I. Idiom Quiz engine. Standalone (doesn't depend on script.js):
   reads IDIOMS from assets/data.js and QUIZ_QUESTIONS from
   assets/quiz-data.js, and renders one question at a time with an
   immediate right/wrong response followed by the real idiom card pulled
   straight from the repository data. */

(function () {
  const quizRoot = document.getElementById("quiz-root");
  if (!quizRoot) return;

  function verdictClass(verdict) {
    return { "well-documented": "well-documented", "disputed": "disputed", "mystery": "mystery", "myth": "myth" }[verdict] || "disputed";
  }

  // Fisher-Yates, so replays don't always run in the same order.
  function shuffled(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  // Randomises which option is "A", "B", "C" too, so the same question
  // doesn't always show its answer in the same slot round to round.
  function withShuffledOptions(q) {
    const order = shuffled(q.options.map((_, i) => i));
    return {
      ...q,
      options: order.map((i) => q.options[i]),
      correctIndex: order.indexOf(q.correctIndex)
    };
  }

  function newRound() {
    return shuffled(QUIZ_QUESTIONS).map(withShuffledOptions);
  }

  let questions = newRound();
  let currentIndex = 0;
  let score = 0;
  let answered = false;

  const LETTERS = ["A", "B", "C", "D"];
  const CORRECT_MESSAGES = ["Spot on!", "Nailed it!", "Exactly right!"];
  const INCORRECT_MESSAGES = ["Not quite.", "A good guess, but no.", "Close, but that's not it."];

  function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function idiomCardHTML(entry) {
    return `
      <div class="quiz-reveal-card">
        <span class="badge ${verdictClass(entry.verdict)}">${entry.verdictLabel}</span>
        <h3>${entry.phrase}</h3>
        <p class="meaning">"${entry.meaning}"</p>
        <div class="story"><p>${entry.story}</p></div>
        ${entry.mythVsFact ? `<div class="myth-box"><strong>Myth vs. Fact</strong>${entry.mythVsFact}</div>` : ""}
        <div class="source-line"><strong>Sources:</strong> ${entry.source}</div>
        <a class="quiz-full-entry-link" href="idioms/${entry.id}.html">See the full entry &rarr;</a>
      </div>
    `;
  }

  function renderQuestion() {
    answered = false;
    const q = questions[currentIndex];
    const isLast = currentIndex === questions.length - 1;

    quizRoot.innerHTML = `
      <div class="quiz-progress">
        <span>Question ${currentIndex + 1} of ${questions.length}</span>
        <span class="quiz-score">Score: ${score}</span>
      </div>
      <div class="quiz-question-card">
        <h2 class="quiz-question">${q.question}</h2>
        <div class="quiz-options">
          ${q.options
            .map(
              (opt, i) => `
            <button class="quiz-option" data-index="${i}" type="button">
              <span class="quiz-option-letter">${LETTERS[i]}</span>
              <span class="quiz-option-text">${opt}</span>
            </button>`
            )
            .join("")}
        </div>
        <div class="quiz-feedback-slot"></div>
        <div class="quiz-reveal-slot"></div>
        <div class="quiz-next-slot"></div>
      </div>
    `;

    quizRoot.querySelectorAll(".quiz-option").forEach((btn) => {
      btn.addEventListener("click", () => handleAnswer(parseInt(btn.dataset.index, 10)));
    });
  }

  function handleAnswer(chosenIndex) {
    if (answered) return;
    answered = true;

    const q = questions[currentIndex];
    const entry = IDIOMS.find((e) => e.id === q.idiomId);
    const correct = chosenIndex === q.correctIndex;
    if (correct) score++;

    quizRoot.querySelectorAll(".quiz-option").forEach((btn) => {
      const i = parseInt(btn.dataset.index, 10);
      btn.disabled = true;
      if (i === q.correctIndex) btn.classList.add("correct");
      else if (i === chosenIndex) btn.classList.add("incorrect");
    });

    quizRoot.querySelector(".quiz-score").textContent = `Score: ${score}`;

    const feedbackSlot = quizRoot.querySelector(".quiz-feedback-slot");
    feedbackSlot.innerHTML = `
      <div class="quiz-feedback ${correct ? "correct" : "incorrect"}">
        ${correct ? pick(CORRECT_MESSAGES) : pick(INCORRECT_MESSAGES)}
      </div>
    `;

    if (entry) {
      quizRoot.querySelector(".quiz-reveal-slot").innerHTML = idiomCardHTML(entry);
    }

    const isLast = currentIndex === questions.length - 1;
    quizRoot.querySelector(".quiz-next-slot").innerHTML = `
      <button class="quiz-next-btn" type="button">${isLast ? "See Your Score" : "Next Question"}</button>
    `;
    quizRoot.querySelector(".quiz-next-btn").addEventListener("click", () => {
      if (isLast) renderEnd();
      else {
        currentIndex++;
        renderQuestion();
      }
    });
  }

  function scoreMessage() {
    const pct = score / questions.length;
    if (pct === 1) return "Perfect score. You know your onions.";
    if (pct >= 0.7) return "Well documented knowledge right there.";
    if (pct >= 0.4) return "A solid, honest attempt.";
    return "Plenty more curious idioms to discover.";
  }

  function renderEnd() {
    quizRoot.innerHTML = `
      <div class="quiz-end-card">
        <h2>Quiz Complete</h2>
        <p class="quiz-end-score">${score} / ${questions.length}</p>
        <p class="quiz-end-message">${scoreMessage()}</p>
        <div class="quiz-end-actions">
          <button class="quiz-next-btn" type="button" id="quiz-play-again">Play Again</button>
          <a class="share-btn" href="index.html#repository">Browse the Repository</a>
        </div>
      </div>
    `;
    document.getElementById("quiz-play-again").addEventListener("click", () => {
      questions = newRound();
      currentIndex = 0;
      score = 0;
      renderQuestion();
    });
  }

  renderQuestion();
})();
