/*
 * DOTS: Level Two
 *
 */
let score = 0
const ball = document.querySelectorAll('.js-ball')
const levelWinner = document.querySelector('.level-winner')
const scoreDisplay = document.querySelector('.js-score')


for (let i = 0; i < ball.length; i++) {
    ball[i].addEventListener('click', () =>{
        score += 10
        scoreDisplay.innerText = score
        if (score >= 100) {
            levelWinner.style.opacity = 1
        }
    })
}