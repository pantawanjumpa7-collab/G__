const engine =
    new InferenceEngine(
        KnowledgeBase
    );


let currentQuestion = 0;

let answers =
    new Array(
        KnowledgeBase.questions.length
    ).fill(null);


const startBtn =
    document.getElementById(
        "startBtn"
    );


const questionSection =
    document.getElementById(
        "questionSection"
    );


const processingSection =
    document.getElementById(
        "processingSection"
    );


const hero =
    document.querySelector(
        ".hero"
    );


const questionText =
    document.getElementById(
        "questionText"
    );


const questionCategory =
    document.getElementById(
        "questionCategory"
    );


const answerContainer =
    document.getElementById(
        "answerContainer"
    );


const questionNumber =
    document.getElementById(
        "questionNumber"
    );


const totalQuestions =
    document.getElementById(
        "totalQuestions"
    );


const progressBar =
    document.getElementById(
        "progressBar"
    );


const nextBtn =
    document.getElementById(
        "nextBtn"
    );


const backBtn =
    document.getElementById(
        "backBtn"
    );


const processingText =
    document.getElementById(
        "processingText"
    );


totalQuestions.textContent =
    `/ ${String(
        KnowledgeBase.questions.length
    ).padStart(2, "0")}`;



startBtn.addEventListener(
    "click",
    startSystem
);



function startSystem() {

    hero.classList.add(
        "hidden"
    );

    questionSection.classList.remove(
        "hidden"
    );

    renderQuestion();

}



function renderQuestion() {

    const question =
        KnowledgeBase.questions[
            currentQuestion
        ];


    questionNumber.textContent =
        String(
            currentQuestion + 1
        ).padStart(2, "0");


    questionCategory.textContent =
        question.category;


    questionText.textContent =
        question.question;


    const progress =
        ((currentQuestion) /
            KnowledgeBase.questions.length) *
        100;


    progressBar.style.width =
        `${progress}%`;


    answerContainer.innerHTML =
        "";


    question.answers.forEach(
        (answer, index) => {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "answer";


            button.textContent =
                answer.text;


            if (
                answers[
                    currentQuestion
                ]?.value ===
                answer.value
            ) {

                button.classList.add(
                    "selected"
                );

            }


            button.addEventListener(
                "click",
                () => {

                    selectAnswer(
                        answer,
                        button
                    );

                }
            );


            answerContainer.appendChild(
                button
            );

        }
    );


    nextBtn.disabled =
        !answers[currentQuestion];


    if (currentQuestion === 0) {

        backBtn.style.visibility =
            "hidden";

    } else {

        backBtn.style.visibility =
            "visible";

    }


    nextBtn.textContent =
        currentQuestion ===
        KnowledgeBase.questions.length - 1
            ? "ANALYZE"
            : "NEXT";

}



function selectAnswer(
    answer,
    button
) {

    answers[currentQuestion] =
        answer;


    document
        .querySelectorAll(".answer")
        .forEach(
            element =>
                element.classList.remove(
                    "selected"
                )
        );


    button.classList.add(
        "selected"
    );


    nextBtn.disabled =
        false;

}



nextBtn.addEventListener(
    "click",
    nextQuestion
);



function nextQuestion() {

    if (
        !answers[currentQuestion]
    ) {

        return;

    }


    if (
        currentQuestion <
        KnowledgeBase.questions.length - 1
    ) {

        currentQuestion++;

        renderQuestion();

        return;

    }


    startAnalysis();

}



backBtn.addEventListener(
    "click",
    previousQuestion
);



function previousQuestion() {

    if (
        currentQuestion <= 0
    ) {

        return;

    }


    currentQuestion--;

    renderQuestion();

}



function startAnalysis() {

    questionSection.classList.add(
        "hidden"
    );

    processingSection.classList.remove(
        "hidden"
    );


    const messages = [

        "Loading Knowledge Base...",

        "Extracting facts...",

        "Evaluating decision rules...",

        "Running inference engine...",

        "Calculating weighted score...",

        "Calculating confidence...",

        "Generating recommendation..."

    ];


    let index = 0;


    const interval =
        setInterval(() => {

            processingText.textContent =
                messages[index];


            index++;


            if (
                index >=
                messages.length
            ) {

                clearInterval(interval);

                finishAnalysis();

            }

        }, 650);

}



function finishAnalysis() {

    const result =
        engine.run(
            answers
        );


    sessionStorage.setItem(

        "decisionResult",

        JSON.stringify(
            result
        )

    );


    setTimeout(() => {

        window.location.href =
            "result.html";

    }, 500);

}