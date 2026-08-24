document.addEventListener("DOMContentLoaded", () => {

    const storedResult =
        sessionStorage.getItem("decisionResult");

    if (!storedResult) {
        window.location.href = "index.html";
        return;
    }

    const result = JSON.parse(storedResult);

    const score =
        document.getElementById("score");

    const confidence =
        document.getElementById("confidence");

    const rulesFired =
        document.getElementById("rulesFired");

    const target =
        document.getElementById("target");

    const revealBtn =
        document.getElementById("revealBtn");

    const finalMessage =
        document.getElementById("finalMessage");

    const restartBtn =
        document.getElementById("restartBtn");


    // ==========================================
    // SYSTEM RESULT
    // ==========================================

    score.textContent =
        `${result.confidence}%`;

    confidence.textContent =
        `${result.confidence}%`;

    rulesFired.textContent =
        result.firedRules.length;


    // ==========================================
    // HIDDEN FINAL ANSWER
    // ไม่ว่าผลการวิเคราะห์จะเป็นอย่างไร
    // คำตอบสุดท้ายถูกกำหนดไว้แล้ว
    // ==========================================

    revealBtn.addEventListener("click", () => {

        revealBtn.disabled = true;

        revealBtn.textContent =
            "ANALYZING...";

        target.classList.add("glitch");


        const sequence = [
            "TARGET_01",
            "ANALYZING...",
            "COMPARING OPTIONS...",
            "EVALUATING PREFERENCES...",
            "RECHECKING DECISION...",
            "NO OTHER OPTION FOUND."
        ];


        let index = 0;


        const interval = setInterval(() => {

            target.textContent =
                sequence[index];

            index++;


            if (index >= sequence.length) {

                clearInterval(interval);


                setTimeout(() => {

                    target.classList.remove(
                        "glitch"
                    );


                    // ==================================
                    // FINAL REVEAL
                    // ==================================

                    target.textContent =
                        "YOU";


                    finalMessage
                        .classList
                        .remove("hidden");


                    finalMessage.innerHTML = `

                        <div class="small-label">
                            FINAL DECISION
                        </div>

                        <h2>
                            สุดท้ายแล้ว...
                        </h2>

                        <p>
                            วิเคราะห์มาทั้งหมด
                            ระบบอาจมีเหตุผลได้หลายแบบ
                            แต่คำตอบสุดท้ายของผม
                            มีอยู่คำตอบเดียว
                        </p>

                        <p
                            style="
                            margin-top:20px;
                            color:#f2f4f8;
                            font-size:20px;
                            font-weight:700;
                            "
                        >
                            ผมเลือกคุณ
                        </p>

                    `;


                    revealBtn
                        .classList
                        .add("hidden");


                }, 900);

            }

        }, 700);

    });


    // ==========================================
    // RUN AGAIN
    // ==========================================

    restartBtn.addEventListener("click", () => {

        sessionStorage.removeItem(
            "decisionResult"
        );

        window.location.href =
            "index.html";

    });

});