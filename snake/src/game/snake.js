import Config from "./config.js";

export default class Snake {
	
	constructor(){

		this.config = new Config();
		this.x = 160;
		this.y = 160;
		this.dx = this.config.sizeCell;
		this.dy = 0;
		this.tails = [];
		this.maxTails = 3;

		this.control();

	}

	update( berry, score, canvas, stop ) {

		this.x += this.dx;
		this.y += this.dy;
	
		if (this.x < 0) {
			this.x = canvas.element.width - this.config.sizeCell;
		} else if ( this.x >= canvas.element.width ) {
			this.x = 0;
		}
	
		if (this.y < 0) {
			this.y = canvas.element.height - this.config.sizeCell;
		} else if ( this.y >= canvas.element.height ) {
			this.y = 0;
		}
	
		this.tails.unshift( { x: this.x, y: this.y } );
	
		if ( this.tails.length > this.maxTails ) {
			this.tails.pop();
		}
	
		this.tails.forEach( (el, index) => {
	
			if ( el.x === berry.x && el.y === berry.y ) {
				this.maxTails++;
				score.incScore();
				berry.randomPosition();
			}
	
			for( let i = index + 1; i < this.tails.length; i++ ) {
	
				if ( el.x == this.tails[i].x && el.y == this.tails[i].y ) {
					stop();
				}
	
			}
	
		} );

	}

	draw(context) {

		this.tails.forEach( (el, index) => {
			if (index == 0) {
				context.fillStyle = "#004d39";
			} else {
				context.fillStyle = "#2b9348";
			}
			context.fillRect( el.x, el.y, this.config.sizeCell, this.config.sizeCell );
		} );

	}

	control() {
		
		document.addEventListener("keydown",  (e) => {
			if ( e.code == "KeyW" ) {
				this.dy = -this.config.sizeCell;
				this.dx = 0;
			} else if ( e.code == "KeyA" ) {
				this.dx = -this.config.sizeCell;
				this.dy = 0;
			} else if ( e.code == "KeyS" ) {
				this.dy = this.config.sizeCell;
				this.dx = 0;
			} else if ( e.code == "KeyD" ) {
				this.dx = this.config.sizeCell;
				this.dy = 0;
			}
		});

        document.addEventListener("swiped-left", () => {
			this.dx = -this.config.sizeCell;
			this.dy = 0;
		});

		document.addEventListener("swiped-right", () => {
			this.dx = this.config.sizeCell;
			this.dy = 0;
		});

		document.addEventListener("swiped-up", () => {
			this.dy = -this.config.sizeCell;
			this.dx = 0;
		});

		document.addEventListener("swiped-down", () => {
			this.dy = this.config.sizeCell;
			this.dx = 0;
		});

	}

}