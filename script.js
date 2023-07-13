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

    // Store the message
    storeMessage(messageObj);

    // Clear the form
    contactForm.reset();
});


