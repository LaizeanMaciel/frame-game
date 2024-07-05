const frames = [
    {src: './images/frame1.jpg', answer: 'o iluminado'},
    {src: './images/frame2.jpg', answer: 'sexta feira 13 parte 2'},
    {src: './images/frame3.png', answer: 'simplesmente acontece'},
    {src: './images/frame4.jpg', answer: 'hereditario'},
    {src: './images/frame5.png', answer: 'rei leão'},
    {src: './images/frame6.jpg', answer: 'dez coisas que odeio em você'},
    {src: './images/frame7.jpg', answer: 'homem aranha 2'},
    {src: './images/frame8.jpg', answer: 'avatar'},
    {src: './images/frame9.jpg', answer: 'vingadores'},
    {src: './images/frame10.jpg', answer: 'click'},
];

const movieFrame = document.querySelector('#movie_frame')
const answerInput = document.querySelector('#answer_input')
const answerButton = document.querySelector('#answer_button')
const result = document.querySelector('#result')
const nextButton = document.querySelector('#next_button')

let currentFrameIndex = 0;

function loadFrame (index) {
    movieFrame.src = frames[index].src
    answerInput.value = ''
    result.textContent = ''

}

function checkGuess () {
    const userGuess = answerInput.value.trim().toLowerCase()
    const correctAnswer = frames[currentFrameIndex].answer.toLowerCase();
    if (userGuess === '') {
        alert('erro')
    } else if (userGuess === correctAnswer) {
       result.textContent = 'Correto! ✅'
    } else {
        result.textContent = 'Incorreto! ❌'
    }
}

answerButton.addEventListener('click', checkGuess);

nextButton.addEventListener('click', function() {
    currentFrameIndex = (currentFrameIndex + 1) % frames.length
    loadFrame(currentFrameIndex)
})

loadFrame(currentFrameIndex)
    
