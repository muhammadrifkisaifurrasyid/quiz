const quizData = [
    {
        question: "Kapankah debut resmi TWICE?",
        a: "19 Oktober 2015",
        b: "20 Oktober 2015",
        c: "21 Oktober 2015",
        correct: "b",
    },
    {
        question: "Siapa member pilihan JYP yang sebelumnya tereliminasi di Sixteen lalu bisa debut bersama TWICE?",
        a: "Jihyo",
        b: "chaeyoung",
        c: "momo",
        correct: "c",
    },
    {
        question: "Lagu TWICE yang mana yang pertama kali dapatkan trofi di acara musik?",
        a: "Cheer Up",
        b: "like ooh-ahh",
        c: "signal",
        correct: "a",
    },
    {
        question: "Manakah yang merupakan album Jepang TWICE?",
        a: "Eyes wide open",
        b: "BDZ",
        c: "formula of love O+T=<3",
        correct: "b"
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
// const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    // d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>skor kamu ${score}/${quizData.length}</h2>

                <button onclick=window.location.href="../index.html">selesai</button>
            `
        }
    }
})