//// SE MODIFICA  /////

function setup() {
  canvas = createCanvas(280, 280);
  canvas.position(550, 200);
  //canvas.center(); CODIGO DE CLASE
  background("white");

  //ALUMNO HACE
  canvas.mouseReleased(classifyCanvas);
  synth = window.speechSynthesis;
}

//ALUMNO REALIZA
function preload() {
  classifier =ml5.imageClassifier('DoodleNet'); 
}

function clearCanvas() {

  background("white");
}

//ALUMNO REALIZA
function draw() {
  strokeWeight(13);
  stroke(0);

  if (mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

//ALUMNO REALIZA
function classifyCanvas() {
  classifier.classify(canvas, gotResult);
}

//ALUMNO REALIZA
function gotResult(error, results) {
  if (error) {
    console.error(error);
  }
  console.log(results);
  document.getElementById('label').innerHTML = 'Etiqueta: ' + results[0].label;
  document.getElementById('confidence').innerHTML = 'Confianza: ' + Math.round(results[0].confidence * 100) + '%';
  utterThis = new SeechSynthesisUtterance(results[0].label);
  utterThis.lang = 'en-US';
  synth.speak(utterTHis);
}


