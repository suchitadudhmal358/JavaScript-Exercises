// import { handleResult } from "./handlers.js";
import { colors } from "./colors.js";

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

function handleResult(event) {
  console.log(event);
}

function start() {
  if (!("SpeechRecognition" in window)) {
    console.log("Sorry your browser does not support speech recognition");
    return;
  }
  console.log("Starting");
  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.onresult = handleResult;
  recognition.start();
  //   console.log(recognition);
}

start();
