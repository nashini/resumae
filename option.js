/*alert("THERE IS MINUS MARK IN THIS QUIZ ")
alert("WELCOME PLAYER 👍👍👍")*/


const quizData = [
    {
        question: "Grant central Terminal park Avenue, NewYork is the world's",
        a: "largest railway station",
        b: "highest railway station",
        c: "longest railway station",
        correct: "a",
    },
    {
        question: "Entamology is the science that studies about",
        a: "Behaviour of human",
        b: "Insect",
        c: "the origin and history of technical and scientific terms",
        correct: "b",
    },

    {
        question: "Erita,which became the 182 nd membe of the un in 1993 is in continent of",
        a: "Asia",
        b: "Africa",
        c: "Europe",
        correct: "b",
    },]
const Quiz = document.getElementById('quiz')
const ans = document.querySelectorAll('.answer')
const ques = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text');
const submitbutton = document.getElementById('Submit');
let currentQuiz = 0
let score = 0

loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz];
    ques.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
}
function deselectAnswers() {
    ans.forEach(ansE1 => ansE1.checked = false)
}
function getSelected() {
    let answer
    ans.forEach(ansE1 => {
        if (ansE1.checked) {
            answer = ansE1.id
        }
    })
    return answer
}

submitbutton.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }
        else {
            score--

        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        }
        else {

            Quiz.innerHTML =
                `you scored ${score} out of ${quizData.length} questions correctly


                <button class='final' onclick="location.reload()">  start again  </button>`





        }
    }
})






