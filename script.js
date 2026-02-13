const mic = document.getElementById("mic");
const output = document.getElementById("output");

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

mic.onclick = () => {
  recognition.start();
};

recognition.onresult = (e) => {
  output.innerText = e.results[0][0].transcript;
};
