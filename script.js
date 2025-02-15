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
        const fullMessage = "ถึง เจ้าหมาเด่ก 🐶,\n\nสวัสดี สุขสันต์วันวาเลนไทน์คับ เค้าขอโทษนะที่ปากไม่ดีทำให้เธอเสียใจและร้องไห้ เค้าจะระวังคำพูดเค้าให้มากกว่านี้ เค้าจะเป็นคนใหม่ที่พูดแต่สิ่งดี ๆ สิ่งที่เธอต้องการคือกำลังใจและซัพพอร์ต มันเป็นเค้าเองที่ผิดพลาด เค้าลืมไปเองว่าเคยพูดไว้ เธออยากจะไปเรียนอะไรก็ไปเรียน เค้าไม่ได้มีหน้าที่มาคัดค้าน แต่มีหน้าที่ซัพพอร์ตเธอ ให้อภัยเค้านะคะ ยังอยากไปเที่ยวเมลเบิร์นในฐานะแฟนอยู่ ขอโทษด้วยที่เธอสุ่มได้ตัวซีเคร็ท เค้าเป็น 0.0088% ของประชากรประเทศไทย เค้าสัญญาว่าจะใจดีกับเธอให้มากกว่านี้และจะพยายามเข้าใจเธอมากขึ้นด้วย 
\n\nรักมากกกกกกก,\n หมาอ้วน 🐻";
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
