const KnowledgeBase = {

    system: {
        name: "Decision Expert System",
        version: "1.0",
        method: "Rule-Based Weighted Decision"
    },


    questions: [

        {
            id: "q1",

            category: "COMFORT",

            question:
                "เมื่ออยู่กับใครสักคน สิ่งใดสำคัญที่สุดสำหรับคุณ?",

            answers: [

                {
                    text: "รู้สึกสบายใจและเป็นตัวเองได้",
                    value: "comfort",
                    score: 20
                },

                {
                    text: "มีเรื่องให้คุยกันตลอด",
                    value: "communication",
                    score: 15
                },

                {
                    text: "อยู่ด้วยแล้วสนุก",
                    value: "fun",
                    score: 12
                },

                {
                    text: "ต่างคนต่างมีพื้นที่ของตัวเอง",
                    value: "space",
                    score: 8
                }

            ]

        },


        {
            id: "q2",

            category: "TRUST",

            question:
                "คุณให้ความสำคัญกับอะไรในการตัดสินใจเลือกคน?",

            answers: [

                {
                    text: "ความไว้ใจ",
                    value: "trust",
                    score: 20
                },

                {
                    text: "ความเข้าใจ",
                    value: "understanding",
                    score: 18
                },

                {
                    text: "ความเข้ากันได้",
                    value: "compatibility",
                    score: 15
                },

                {
                    text: "ความน่าสนใจ",
                    value: "interest",
                    score: 10
                }

            ]

        },


        {
            id: "q3",

            category: "PRIORITY",

            question:
                "ถ้าต้องเลือกคนหนึ่งคนเพื่อคุยด้วยในวันที่เหนื่อย คุณจะเลือกจากอะไร?",

            answers: [

                {
                    text: "คนที่ทำให้รู้สึกดีขึ้น",
                    value: "support",
                    score: 20
                },

                {
                    text: "คนที่เข้าใจเรา",
                    value: "understanding",
                    score: 18
                },

                {
                    text: "คนที่คุยสนุก",
                    value: "fun",
                    score: 12
                },

                {
                    text: "คนที่รู้จักกันมานาน",
                    value: "history",
                    score: 10
                }

            ]

        },


        {
            id: "q4",

            category: "CONSISTENCY",

            question:
                "คุณคิดว่าความสัมพันธ์ที่ดีควรเป็นแบบไหน?",

            answers: [

                {
                    text: "สม่ำเสมอและชัดเจน",
                    value: "consistency",
                    score: 20
                },

                {
                    text: "ค่อย ๆ เป็นค่อย ๆ ไป",
                    value: "slow",
                    score: 15
                },

                {
                    text: "ไม่ต้องกำหนดอะไรมาก",
                    value: "freedom",
                    score: 10
                },

                {
                    text: "ขึ้นอยู่กับสถานการณ์",
                    value: "flexibility",
                    score: 8
                }

            ]

        },


        {
            id: "q5",

            category: "MEMORY",

            question:
                "ถ้ามีใครบางคนที่ทำให้คุณนึกถึงเขาโดยไม่รู้ตัว คุณคิดว่าเกิดจากอะไร?",

            answers: [

                {
                    text: "เขามีความสำคัญ",
                    value: "important",
                    score: 20
                },

                {
                    text: "มีความทรงจำร่วมกัน",
                    value: "memory",
                    score: 17
                },

                {
                    text: "คุยกันบ่อย",
                    value: "frequency",
                    score: 14
                },

                {
                    text: "เป็นเรื่องบังเอิญ",
                    value: "random",
                    score: 5
                }

            ]

        },


        {
            id: "q6",

            category: "DECISION",

            question:
                "ถ้าคำตอบมีหลายทางเลือก คุณมักตัดสินใจอย่างไร?",

            answers: [

                {
                    text: "เลือกสิ่งที่รู้สึกว่าใช่ที่สุด",
                    value: "instinct",
                    score: 20
                },

                {
                    text: "วิเคราะห์ข้อดีข้อเสีย",
                    value: "analysis",
                    score: 18
                },

                {
                    text: "ถามความคิดเห็นคนอื่น",
                    value: "opinion",
                    score: 10
                },

                {
                    text: "ปล่อยให้เวลาเป็นคนตัดสิน",
                    value: "time",
                    score: 7
                }

            ]

        },


        {
            id: "q7",

            category: "FINAL",

            question:
                "ถ้าระบบบอกว่าคำตอบหนึ่งเหมาะสมที่สุด คุณจะทำอย่างไร?",

            answers: [

                {
                    text: "เชื่อผลลัพธ์",
                    value: "accept",
                    score: 20
                },

                {
                    text: "ตรวจสอบอีกครั้ง",
                    value: "verify",
                    score: 15
                },

                {
                    text: "ตัดสินใจด้วยตัวเอง",
                    value: "self",
                    score: 12
                },

                {
                    text: "ยังไม่เลือก",
                    value: "none",
                    score: 5
                }

            ]

        }

    ],


    rules: [

        {
            id: "R01",

            conditions: [
                "comfort",
                "trust"
            ],

            conclusion:
                "high_relationship_stability",

            weight: 15

        },


        {
            id: "R02",

            conditions: [
                "support",
                "understanding"
            ],

            conclusion:
                "emotional_connection",

            weight: 18

        },


        {
            id: "R03",

            conditions: [
                "consistency",
                "important"
            ],

            conclusion:
                "high_priority",

            weight: 20

        },


        {
            id: "R04",

            conditions: [
                "instinct",
                "important"
            ],

            conclusion:
                "strong_personal_preference",

            weight: 25

        },


        {
            id: "R05",

            conditions: [
                "comfort",
                "understanding",
                "consistency"
            ],

            conclusion:
                "high_compatibility",

            weight: 22

        },


        {
            id: "R06",

            conditions: [
                "memory",
                "frequency"
            ],

            conclusion:
                "persistent_connection",

            weight: 15

        }

    ]

};