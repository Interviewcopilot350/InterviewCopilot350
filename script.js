const chat = document.getElementById("chat");
const micBtn = document.getElementById("micBtn");

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.continuous = false;

function addMessage(text, type) {
  const div = document.createElement("div");
  div.className = "msg " + type;
  div.innerText = text;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

micBtn.onclick = () => {
  recognition.start();
  micBtn.innerText = "🔴";
};

recognition.onresult = (event) => {
  const text = event.results[0][0].transcript;

  addMessage(text, "user");

  // temp answer (backend later)
  addMessage("Thinking...", "bot");

  micBtn.innerText = "🎤";
};
