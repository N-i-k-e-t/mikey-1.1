const startButton = document.getElementById('startButton');
const message = document.getElementById('message');
let listening = false;

startButton.addEventListener('click', () => {
    listening = true; 
    startButton.disabled = true; // Disable the button once listening
    message.textContent = 'Listening...';

    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript.toLowerCase(); 
        message.textContent = ''; // Clear listening message

        if (transcript.includes('hello')) {
            message.textContent = "Hello! I'm Mikey Nikets' assistant.";
            speak("Hello! I'm Mikey Nikets' assistant."); 
        } else {
            message.textContent = "Didn't quite catch that. Please try again.";
        }
    }

    recognition.start();  
});

// Simple Text-to-Speech (add this to the bottom script.js)
function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
} 
