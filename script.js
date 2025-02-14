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

    document.addEventListener("DOMContentLoaded", function () {
    const openLetterBtn = document.querySelector('.open-letter-btn');
    const closeLetterBtn = document.querySelector('.close-letter-btn');
    const envelope = document.getElementById('envelope');
    const openEnvelope = document.getElementById('open-envelope');
    const letterPaper = document.getElementById('letter-paper');
    const spotifySection = document.getElementById('spotify-section');

    if (!openLetterBtn) {
        console.error("Open Letter button not found!");
        return;
    }

    openLetterBtn.addEventListener('click', function () {
        console.log("Open Letter button clicked!");

        // Animate the envelope opening
        envelope.style.transition = "transform 1s ease-in-out";
        envelope.style.transform = "rotateX(180deg)";

        setTimeout(() => {
            envelope.style.opacity = "0"; // Hide closed envelope
            openEnvelope.style.display = "block"; // Show open envelope
        }, 800);

        // Show letter after animation
        setTimeout(() => {
            letterPaper.style.display = "block";
            typeWriter();
        }, 1200);
    });

    closeLetterBtn.addEventListener('click', function () {
        console.log("Close Letter button clicked!");
        spotifySection.style.display = "block"; // Show playlist after closing letter
    });

    function typeWriter() {
        const fullMessage = "Dear เจ้าหมาเด่ก 🐶,\n\nใครบางคนเคยบอกว่า 'ความรักที่แท้จริงไม่ใช่แค่การมองตากัน แต่คือการมองไปข้างหน้าด้วยกัน'...\n\nรักมากกกกกกก จาก หมาอ้วน 🐻";
        let index = 0;
        const speed = 80;

        function write() {
            if (index < fullMessage.length) {
                document.getElementById('typed-message').innerHTML += fullMessage.charAt(index);
                index++;
                setTimeout(write, speed);
            } else {
                closeLetterBtn.style.display = "block"; // Show close button
            }
        }
        write();
    }
});

document.querySelector('.close-letter-btn').addEventListener('click', function() {
    document.getElementById('spotify-section').style.display = "block";
});
        
