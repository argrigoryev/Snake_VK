export default class Score {
    constructor( scoreBlock, score = 0 ) {

        this.scoreBlock = document.querySelector( scoreBlock );
        this.score = score;

        this.draw();

    }

    incScore() {
        this.score++;
        localStorage["currentScore"] = this.score;
        const bestScore = localStorage["bestScore"];
        if (!bestScore || bestScore < this.score) {
            localStorage["bestScore"] = localStorage["currentScore"];
        }
        this.draw();
    }

    draw() {
        this.scoreBlock.innerHTML = this.score;
    }
    
}