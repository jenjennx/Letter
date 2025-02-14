// Heart Messages
const messages = [
    "It has always been you 💝",
    "You're my sunshine ☀️",
    "You make me laugh more than anyone could 😊",
    "I adore your eyes when you're looking at me like a cute Golden Retriever 🐶",
    "Your happiness is my priority ✌️"
];

function showMessage(index) {
    document.getElementById("message").innerText = messages[index];
    document.getElementById("message").classList.remove("hidden");
}

// Envelope Animation
document.querySelector('.open-letter-btn').addEventListener('click', function() {
    const envelope = document.getElementById('envelope');
    const openEnvelope = document.getElementById('open-envelope');
    const letterPaper = document.getElementById('letter-paper');

    envelope.style.transform = "rotateX(180deg)";
    setTimeout(() => {
        envelope.style.opacity = "0";
        openEnvelope.style.display = "block";
    }, 800);

    setTimeout(() => {
        letterPaper.style.display = "block";
        document.querySelector('.close-letter-btn').style.display = "block";
    }, 1200);
});

document.querySelector('.close-letter-btn').addEventListener('click', function() {
    document.getElementById('spotify-section').style.display = "block";
});
        
