// Add event listeners for the "Send" button and the Enter key
document.getElementById("send-btn").addEventListener("click", sendMessage);
document.getElementById("user-input").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});
function sendMessage() {
  const inputField = document.getElementById("user-input");
  const userText = inputField.value.trim();
  if (userText === "") return;

  // Append the user's message to the chat body
  appendMessage(userText, "user");

  // Clear the input field
  inputField.value = "";

  // Generate and display the bot's response after a short delay
  setTimeout(() => {
    const botResponse = generateBotResponse(userText);
    appendMessage(botResponse, "bot");
  }, 500);
}

function appendMessage(message, sender) {
  const chatBody = document.getElementById("chat-body");
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message");
  if (sender === "bot") {
    messageDiv.classList.add("bot-message");
  } else {
    messageDiv.classList.add("user-message");
  }
  messageDiv.textContent = message;
  chatBody.appendChild(messageDiv);
  // Auto-scroll to the latest message
  chatBody.scrollTop = chatBody.scrollHeight;
}

function generateBotResponse(userInput) {
  const lowerInput = userInput.toLowerCase();
  if (lowerInput.includes("hello") || lowerInput.includes("hi")) {
    return "Hi there! How can I assist you today?";
  } else if (lowerInput.includes("how are you")) {
    return "I'm a bot, but I'm doing great! How about you?";
  } else if (lowerInput.includes("bye")) {
    return "Goodbye! Have a nice day!";
  } else {
    return "I'm not sure I understand. Can you please rephrase?";
  }
}
