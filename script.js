const messages = [
    "It has always been you 💓",
    "You make me laugh more than anyone could 😊",
    "You are my sunshine ☀️",
    "I adore your eyes when you look at me like a Golden Retriever 🐶"
];

function showMessage(index) {
    let messageElement = document.getElementById("message");
    messageElement.textContent = messages[index];
    messageElement.classList.remove("hidden");
}

document.querySelector('.open-letter-btn').addEventListener('click', function() {
    const envelope = document.getElementById('envelope');
    envelope.style.transition = "transform 0.8s";
    envelope.style.transform = "rotateX(180deg)";

    setTimeout(() => {
        document.querySelector('.letter-container').style.display = 'block';
        const fullMessage = "ถึง เจ้าหมาเด่ก,\n\n สวัสดี สุขสันต์(?)วันวาเลนไทน์นะ จริงๆ เขียนมาเป็นอาทิตย์แล้ว แต่ก็ต้องมาปรับใหม่หมด เพราะปากที่ไม่ดีของเค้ามันทำให้เธอเสียใจ เค้าขอโทษนะ เค้าลืมไปว่านี่แฟนหมาเด่กของเค้านะ ไม่ใช่แค่รุ่นน้องแพทย์ที่ไหนก็ไม่รู้ เค้าขอโทษนะคับที่ทำให้เธอร้องไห้ เค้าจะระวังคำพูดเค้าให้มากกว่านี้ เค้าจะเป็นคนใหม่ที่พูดแต่สิ่งดี ๆ สิ่งที่เธอต้องการคือกำลังใจและซัพพอร์ต มันเป็นเค้าเองที่ผิดพลาด เค้าลืมไปเองว่าเคยพูดไว้ 'เธออยากจะไปเรียนอะไรก็ไปเรียน' เค้าไม่ได้มีหน้าที่มาคัดค้าน แต่มีหน้าที่ซัพพอร์ตเธอ เค้าจะต่อสู้กับแม่เธอเอง(ไม่ใช่สู้กับเธอ) ให้อภัยเค้านะ ยังอยากไปเมลเบิร์นในฐานะแฟนอยู่ ขอโทษด้วยที่เธอสุ่มได้ตัวซีเคร็ท เค้าเป็น 0.0088% ของประชากรประเทศไทย เค้าสัญญาว่าจะใจดีกับเธอให้มากกว่านี้และจะพยายามเข้าใจเธอมากขึ้นด้วย\n รักมากกกกกกก,\n หมาอ้วน";
        let index = 0;
        const speed = 80

        function typeWriter() {
            if (index < fullMessage.length) {
                document.getElementById('typed-message').innerHTML += fullMessage.charAt(index);
                index++;
                setTimeout(typeWriter, speed);
            } else {
                document.querySelector('.close-letter-btn').style.display = "block";
            }
        }
        typeWriter();
    }, 800);
});

document.querySelector('.close-letter-btn').addEventListener('click', function() {
    document.getElementById('spotify-section').style.display = "block";
});
