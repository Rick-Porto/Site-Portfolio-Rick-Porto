// Function to typing in the title of the page
function typing(element) {
    const arrText = element.innerHTML.split('');
    element.innerHTML = '';
    arrText.forEach((Leter, i) => {
        setTimeout(() => {
            element.innerHTML += Leter;
        }, 75 * i);
    });
}

const titulo = document.querySelector('.letreiro');
typing(titulo);

// Function to store messages in local storage
function storeMessage(message) {
    // Retrieve existing messages from local storage
    let messages = JSON.parse(localStorage.getItem('messages')) || [];

    // Add the new message to the array
    messages.push(message);

    // Store the updated array in local storage
    localStorage.setItem('messages', JSON.stringify(messages));

    // Display the messages
    displayMessages();
}

// Function to display the messages in the listing page
function displayMessages() {
    // Retrieve messages from local storage
    let messages = JSON.parse(localStorage.getItem('messages')) || [];

    // Select the message list element
    const messageList = document.getElementById('messageList');

    // Clear the existing content
    messageList.innerHTML = '';

    // Display each message in the list
    messages.forEach((message, index) => {
        const messageItem = document.createElement('div');
        messageItem.innerHTML = `
        <h3>Mensagem de ${message.name}</h3>
        <p><strong>E-mail:</strong> ${message.email}</p>
        <p>${message.message}</p>
      `;
        messageList.appendChild(messageItem);
    });
}

// Function to clear messages from local storage
function clearMessages() {
    localStorage.removeItem('messages');
    displayMessages(); // Update the displayed messages after clearing
}

// Event listener for form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Create a message object
    const messageObj = { name, email, message };

    // Store the message and display messages
    storeMessage(messageObj);

    // Clear the form
    contactForm.reset();
});

// Event listener for clearing messages
const clearMessagesButton = document.getElementById('clearMessages');
clearMessagesButton.addEventListener('click', clearMessages);

displayMessages();