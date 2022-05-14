const quizData = [
    {
        question: "tanggal berapa BTS debut?",
        a: "13 juni 2013",
        b:  "16 juni 2013",
        c: "16 juli 2013",
        correct: "a",
    },
    {
        question: "Lagu manakah yang menjadi lagu debut BTS?",
        a: "Boy in Luv",
        b: "square two",
        c: "No More Dream",
        correct: "c",
    },
    {
        question: "Siapa member yang terakhir bergabung dengan BTS?",
        a: "J-Hope",
        b: "jimin",
        c: "jin",
        correct: "b",
    },
    {
        question: "Siapakah nama asli dari member tertua di BTS?",
        a: "Min Yoongi",
        b: "Jung Hoseok",
        c: "Kim Seokjin",
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
            // window.location.href="../index.html"
        } else {
            quiz.innerHTML = `
                <h2>skor kamu ${score}/${quizData.length}</h2>

                <button onclick=window.location.href="../index.html">selesai</button>
            `
        }
    }
})