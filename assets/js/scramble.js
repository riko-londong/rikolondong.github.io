var container = $('#glitch').get(0);
var textToWrite = 'Hi, Welcome on My Site...';
var i = 0;
var progress = 0;
var codingChars = 'こんにちは、私のサイトへ'

function animate() {
  setTimeout(function(){ 
    i++;
    var currentText = textToWrite.substr(0, i);
    currentText += getRandomChars(textToWrite.length - i);


    container.innerHTML = currentText;
    progress = i/textToWrite.length;
  
    if(progress < 1) {
      animate()
    }
  }, 70);
}

function getRandomChars(howMany) {
  var result = '';
  
  for(var i=0; i<howMany; i++) {
    if(i % 5 == 0) {
      result += ' '
    } else {
      result += codingChars.charAt(Math.floor(Math.random() * codingChars.length));
    }
  }
  return result
}

animate();