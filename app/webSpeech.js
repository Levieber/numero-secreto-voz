const elementTry = document.getElementById("try");

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = "pt-Br";

recognition.start();

recognition.addEventListener("result", onSpeak);

function onSpeak(event) {
  const tryValue = event.results[0][0].transcript;
  showTry(tryValue);
  validValue(tryValue);
}

function showTry(number) {
  elementTry.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${number}</span>
  `;
}

recognition.addEventListener("end", () => recognition.start());
