const quizData = [
    {
        question: "Kapan tanggal debut BLACKPINK?",
        a: "5 Agustus 2016",
        b:  "8 Agustus 2016",
        c: "14 Agustus 20165",
        correct: "a",
    },
    {
        question: "Lagu “Playing With Fire” termasuk ke single album apa?",
        a: "Square One",
        b: "square two",
        c: "square up",
        correct: "a",
    },
    {
        question: "Siapa penyanyi internasional dari daftar ini yang belum kolaborasi dengan BLACKPINK?",
        a: "Dua Lipa",
        b: "Selena Gomez",
        c: "Shawn Mendes",
        correct: "c",
    },
    {
        question: "Apa merk makeup/ skincare yang tidak diendorse member BLACKPINK?",
        a: "HERA",
        b: "YSL",
        c: "Etude",
        correct: "c"
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