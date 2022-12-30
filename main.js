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
  classifier = ml5.imageClassifier('DoodleNet');
}

function clearCanvas() {

  background("white");
}

//ALUMNO REALIZA
function draw() {

  // GROSOR DE LINEA
  strokeWeight(13);
  // COLOR NEGRO.
  stroke(0);
  // MOUSE PRESIONADO 
  if (mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY);
    //VARIABLE DE P5.JS pmouseX-pmouseY CORDENADAS ANTERIORES
    //VARIABLE DE P5.JS mouseX-mouseY CORDENADAS ACTUALES
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

  utterThis = new SpeechSynthesisUtterance(results[0].label);
  utterThis.lang = 'en-US';
  synth.speak(utterThis);
}


