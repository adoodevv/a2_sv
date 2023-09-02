// Get chatbot elements
const chatbot = document.getElementById('chatbot');
const conversation = document.getElementById('conversation');
const inputForm = document.getElementById('input-form');
const inputField = document.getElementById('input-field');

// Add event listener to input form
inputForm.addEventListener('submit', function(event) {
  // Prevent form submission
  event.preventDefault();

  // Get user input
  const input = inputField.value;

  if (input !== "") {
    // Clear input field
    inputField.value = '';
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" });

    // Add user input to conversation
    let message = document.createElement('div');
    message.classList.add('chatbot-message', 'user-message');
    message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${input}</p>`;
    conversation.appendChild(message);

    // Generate chatbot response
    const response = generateResponse(input);

    // Add chatbot response to conversation
    message = document.createElement('div');
    message.classList.add('chatbot-message','chatbot');
    message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${response}</p>`;
    conversation.appendChild(message);
    message.scrollIntoView({behavior: "smooth"});
  }
});

// Generate chatbot response function
function generateResponse(input) {
    // Add chatbot logic here
    const responses = [
      "Hello, how can I help you today? 😊",
      "I'm sorry, I didn't understand your question. Could you please rephrase it? 😕",
      "I'm here to assist you with any questions or concerns you may have. 📩",
      "I'm sorry, I'm not able to browse the internet or access external information. Is there anything else I can help with? 💻",
      "What would you like to know? 🤔",
      "I'm sorry, I'm not programmed to handle offensive or inappropriate language. Please refrain from using such language in our conversation. 🚫",
      "I'm here to assist you with any questions or problems you may have. How can I help you today? 🚀",
      "Is there anything specific you'd like to talk about? 💬",
      "I'm happy to help with any questions or concerns you may have. Just let me know how I can assist you. 😊",
      "I'm here to assist you with any questions or problems you may have. What can I help you with today? 🤗",
      "Is there anything specific you'd like to ask or talk about? I'm here to help with any questions or concerns you may have. 💬",
      "I'm here to assist you with any questions or problems you may have. How can I help you today? 💡",
    ];
    
    // Return a random response
    return responses[Math.floor(Math.random() * responses.length)];
  }
  
// Dropdown menu
const dropdownContent = document.getElementById("dropdown-content");
const menuIcon = document.getElementById("menu");

// Function to toggle the dropdown menu
function toggleDropdown() {
    dropdownContent.classList.toggle("show");
}

// Event listener to toggle the dropdown menu when the menu icon is clicked
menuIcon.addEventListener("click", toggleDropdown);

// Event listener to hide the dropdown menu when clicking outside of it
document.addEventListener("click", function (event) {
    if (!menuIcon.contains(event.target) && !dropdownContent.contains(event.target)) {
        dropdownContent.classList.remove("show");
    }
});

function clearChat() {
    document.getElementById("conversation").innerHTML = "";
}

function saveChat() {
    const chatContent = document.getElementById("conversation").innerHTML;
    const chatTitle = prompt("Enter a title for this chat:");
    if (chatTitle) {
        const savedChats = document.querySelector(".saved-chats");
        const chatEntry = document.createElement("div");
        chatEntry.classList.add("chat-entry");
        chatEntry.innerHTML = `<h5>${chatTitle}</h5>${chatContent}`;
        savedChats.appendChild(chatEntry);
    }
}

// Event listeners for "Clear Chat" and "Save Chat"
document.getElementById("clear-chat").addEventListener("click", clearChat);
dropdownContent.classList.remove("show");

document.getElementById("save-chat").addEventListener("click", saveChat);
dropdownContent.classList.remove("show");

// Function to create and animate random icons
function createRandomIcon() {
    const icon = document.createElement("i");
    const iconsContainer = document.getElementById("background-icons");
    
    const iconClasses = ["fa-book-open", "fa-square-root-variable", "fa-microscope", "fa-wave-square", "fa-robot"];
    const randomIconClass = iconClasses[Math.floor(Math.random() * iconClasses.length)];

    icon.className = "fas " + randomIconClass;
    iconsContainer.appendChild(icon);

    // Randomize icon position, size, rotation, and animation
    const posX = Math.random() * window.innerWidth;
    const posY = Math.random() * window.innerHeight;
    const size = 16 + Math.random() * 24 + "px"; // Random icon size
    const rotation = Math.random() * 360 + "deg"; // Random rotation
    const animationDuration = 5 + Math.random() * 10 + "s"; // Random animation duration

    icon.style.position = "absolute";
    icon.style.left = posX + "px";
    icon.style.top = posY + "px";
    icon.style.fontSize = size;
    icon.style.color = "#333";
    icon.style.transform = "rotate(" + rotation + ")";
    icon.style.animation = "moveIcon " + animationDuration + " linear infinite";

}

// Create initial random icons
for (let i = 0; i < 20; i++) {
    createRandomIcon();
}




