const chatHistory = document.getElementById('chat-history');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

sendBtn.addEventListener('click', () => {
    const message = userInput.value;
    displayMessage('You', message);

    //API call and AI response handling
    //...

    userInput.value = '';
});

function displayMessage(sender, message) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.textContent = `${sender}: ${message}`;
    chatHistory.appendChild(messageDiv);

    chatHistory.scrollTop = chatHistory.scrollHeight;
}