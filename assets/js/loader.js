//======================================================
// GLOBALS
//======================================================
var textToDisplay = "[PLEASE WAIT]";
var onscreenString = "";
var glitchTimePerLetter = .05;
var timeSinceLastLetterGlitchStart = 0.0;
var currentLetterIndex = 0;
var lastUpdateTime = getCurrentTime();
var textElement= document.getElementsByClassName("glitch")[0];

//======================================================
// HELPERS
//======================================================
function getCurrentTime() {
	return (new Date()).getTime();
}

function getDeltaTime() {
	var currentTime = getCurrentTime();
	var dt = (currentTime - lastUpdateTime) / 2000.0;
	lastUpdateTime = currentTime;	
	return dt;
}

function randomChar() {
	// cap A to lower z, including symbols
	var char = randomRange(0, 57);	
	return String.fromCharCode(65 + char);
}

function randomRange(min, max) {
	return min + Math.floor(Math.random() * (max - min + 1));
}

//======================================================
// LOGIC
//======================================================
setTimeout(function update(){

	var dt = getDeltaTime();	
	timeSinceLastLetterGlitchStart += dt;
		
	if(timeSinceLastLetterGlitchStart > glitchTimePerLetter) {
		++currentLetterIndex;
		timeSinceLastLetterGlitchStart = 0;
	}	
	
	if(currentLetterIndex < textToDisplay.length) {
		onscreenString = textToDisplay.substr(0, currentLetterIndex) + randomChar();
		var newString = onscreenString;
		requestAnimationFrame(update);
	}
	else
		onscreenString = textToDisplay;
		
	textElement.innerHTML = onscreenString;

}, 1000);

requestAnimationFrame(update);

function refresh(e) {
	currentLetterIndex = 0;
	timeSinceLastLetterGlitchStart = 0.0;
	requestAnimationFrame(update);
}


var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 4000);
}

function showPage() {
  document.getElementById("loader1").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
  location.replace("site/home")
}