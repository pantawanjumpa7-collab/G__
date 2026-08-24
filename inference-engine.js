class InferenceEngine {

    constructor(knowledgeBase) {

        this.kb = knowledgeBase;

    }


    calculateFacts(answers) {

        const facts = [];

        answers.forEach(answer => {

            if (answer && answer.value) {

                facts.push(answer.value);

            }

        });

        return [...new Set(facts)];

    }


    evaluateRules(facts) {

        const firedRules = [];

        this.kb.rules.forEach(rule => {

            const matched =
                rule.conditions.every(
                    condition =>
                        facts.includes(condition)
                );


            if (matched) {

                firedRules.push({

                    id: rule.id,

                    conclusion:
                        rule.conclusion,

                    weight:
                        rule.weight

                });

            }

        });

        return firedRules;

    }


    calculateScore(answers, firedRules) {

        let baseScore = 0;

        answers.forEach(answer => {

            if (answer) {

                baseScore += answer.score || 0;

            }

        });


        let ruleScore = 0;

        firedRules.forEach(rule => {

            ruleScore += rule.weight;

        });


        const maxBaseScore =
            this.kb.questions.length * 20;

        const maxRuleScore =
            this.kb.rules.reduce(
                (total, rule) =>
                    total + rule.weight,
                0
            );


        const basePercentage =
            (baseScore / maxBaseScore) * 70;


        const rulePercentage =
            maxRuleScore > 0
                ? (ruleScore / maxRuleScore) * 30
                : 0;


        let score =
            basePercentage +
            rulePercentage;


        score = Math.min(
            99.9,
            Math.max(0, score)
        );


        return Number(
            score.toFixed(1)
        );

    }


    calculateConfidence(
        score,
        firedRules
    ) {

        let confidence =
            score;


        confidence +=
            firedRules.length * 2;


        confidence =
            Math.min(
                99.9,
                confidence
            );


        return Number(
            confidence.toFixed(1)
        );

    }


    run(answers) {

        const facts =
            this.calculateFacts(answers);


        const firedRules =
            this.evaluateRules(facts);


        const score =
            this.calculateScore(
                answers,
                firedRules
            );


        const confidence =
            this.calculateConfidence(
                score,
                firedRules
            );


        return {

            facts,

            firedRules,

            score,

            confidence,

            rulesFired:
                firedRules.length,

            targetName:
                "YOU"

        };

    }

}