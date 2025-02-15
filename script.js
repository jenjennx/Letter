document.addEventListener("DOMContentLoaded", function () {
    const openLetterBtn = document.querySelector('.open-letter-btn');
    const closeLetterBtn = document.querySelector('.close-letter-btn');
    const envelope = document.getElementById('envelope');
    const openEnvelope = document.getElementById('open-envelope');
    const letterPaper = document.getElementById('letter-paper');
    const spotifySection = document.getElementById('spotify-section');

    openLetterBtn.addEventListener('click', function () {
        // Hide closed envelope, show open envelope
        envelope.style.display = "none";
        openEnvelope.style.display = "block";

        // Show letter (paper) after a slight delay
        setTimeout(() => {
            letterPaper.style.display = "block";
            typeWriter();
        }, 1000);
    });

    closeLetterBtn.addEventListener('click', function () {
        spotifySection.style.display = "block"; // Show playlist after closing letter
    });

    function typeWriter() {
        const fullMessage = "Dear เจ้าหมาเด่ก 🐶,\n\nใครบางคนเคยบอกว่า 'ความรักที่แท้จริงไม่ใช่แค่การมองตากัน แต่คือการมองไปข้างหน้าด้วยกัน'...\n\nรักมากกกกกกก จาก หมาอ้วน 🐻";
        let index = 0;
        const speed = 80;
        let audio = new Audio('typing-sound.mp3');
        audio.play();

        function write() {
            if (index < fullMessage.length) {
                document.getElementById('typed-message').innerHTML += fullMessage.charAt(index);
                index++;
                setTimeout(write, speed);
            } else {
                audio.pause();
                closeLetterBtn.style.display = "block"; // Show close button
            }
        }
        write();
    }
});
