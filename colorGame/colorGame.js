var numberOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll( ".square" );
var RGBdisplay = document.querySelector( "#RGBdisplay" );
var messageDisplay = document.querySelector( "#message" );
var h1 = document.querySelector( "h1" );
var resetButton = document.querySelector( "#reset" );
var modes = document.querySelectorAll( ".mode" );

init();

function init() {
	setSquareListeners();
	setModeListeners();
	resetButton.addEventListener( "click", function() { reset(); });
	reset();
}

function setModeListeners() {
	for( var i = 0; i < modes.length; i++ ) {
		modes[i].addEventListener( "click", function() {
			modes[0].classList.remove( "selected" );
			modes[1].classList.remove( "selected" );
			this.classList.add( "selected" );

			if( this.textContent === "Easy" ) {
				numberOfSquares = 3;
			}
			else {
				numberOfSquares = 6;
			}
			reset();
		});
	}
}

function setSquareListeners() {
	for( var i = 0; i < squares.length; i++ ) {
		squares[ i ].addEventListener( "click", function() {
			var clickedColor = this.style.backgroundColor;

			if( clickedColor === pickedColor ) {
				messageDisplay.textContent = "Correct!"
				resetButton.textContent = "Play Again?";
				changeColors( clickedColor );
				h1.style.backgroundColor = clickedColor;
			}
			else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}

function reset() {
	colors = generateRandomColors( numberOfSquares );
	pickedColor = pickColor();
	RGBdisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";

	for( var i = 0; i < squares.length; i++ ) {
		if( i < numberOfSquares ) {
			squares[ i ].style.display = "block";
			squares[ i ].style.backgroundColor = colors[ i ];
		}
		else {
			squares[ i ].style.display = "none";
		}
	}
}

function changeColors( color ) {
	for( var i = 0; i < squares.length; i++ )
		squares[ i ].style.backgroundColor = color;
}

function pickColor() {
	return colors[ Math.floor(Math.random() * colors.length) ];
}

function generateRandomColors( num ) {
	var arr = [];

	for( var i = 0; i < num; i++ ) {
		arr[ i ] = randomColor();
	}

	return arr;
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}