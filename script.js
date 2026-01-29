const startBtn = document.getElementById("startBtn");
const intro = document.getElementById("intro");
const mainSite = document.getElementById("mainSite");
const robotSound = document.getElementById("robotSound");

startBtn.addEventListener("click", () => {
  robotSound.play();
  setTimeout(() => {
    intro.style.display = "none";
    mainSite.style.display = "block";
  }, 1200);
});

/* AI CHAT (Offline Basic Logic) */
const input = document.getElementById("userInput");
const chatlog = document.getElementById("chatlog");

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    let msg = input.value.toLowerCase();
    chatlog.innerHTML += `<p>You: ${msg}</p>`;

    let reply = "I am Saurabh's Assistant 🤖";

    if (msg.includes("hi") || msg.includes("hello")) {
      reply = "Hello 👋 How can I help you?";
    } else if (msg.includes("linkedin")) {
      reply = "You can visit Saurabh's LinkedIn from the link above.";
    } else if (msg.includes("github")) {
      reply = "Check out Saurabh's GitHub for projects.";
    }

    chatlog.innerHTML += `<p>Assistant: ${reply}</p>`;
    input.value = "";
    chatlog.scrollTop = chatlog.scrollHeight;
  }
});
