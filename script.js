const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");

const questionBox = document.getElementById("question");
const answerBox = document.getElementById("answer");

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.continuous = true;

startBtn.onclick = () => recognition.start();
stopBtn.onclick = () => recognition.stop();

recognition.onresult = async (event) => {
  const text = event.results[event.results.length - 1][0].transcript;

  questionBox.value = text;

  // TEMP: fake answer so you can test UI
  answerBox.value = "AI answer will appear here (backend not connected yet)";
};
