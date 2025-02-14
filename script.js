document.querySelectorAll('.heart').forEach(button => {
    button.innerHTML = "💝";
    button.addEventListener('click', function() {
        document.getElementById('heart-message').innerText = this.getAttribute('data-message');
    });
});

document.querySelector('.open-letter-btn').addEventListener('click', function() {
    document.querySelector('.letter-container').style.display = 'block';

    const opening = "ถึง เจ้าหมาเด่ก 🐶,\n\n";
    const message = "สวัสดี ถ้าเธอได้อ่านข้อความนี้ แปลว่าเค้ารักเธอ จริงๆ เขียนมาเป็นอาทิตย์แล้ว แต่ก็ต้องมาปรับใหม่หมด เพราะปากที่ไม่ดีของเค้ามันทำให้เธอเสียใจ เค้าขอโทษนะ เค้าลืมไปว่านี่แฟนหมาเด่กของเค้านะ ไม่ใช่แค่รุ่นน้องแพทย์ที่สับสนกับชีวิต เค้าขอโทษนะคับที่ทำให้เธอร้องไห้ เค้าจะระวังคำพูดเค้าให้มากกว่านี้ เค้าจะเป็นคนใหม่ที่พูดแต่สิ่งดี ๆ สิ่งที่เธอต้องการคือกำลังใจและซัพพอร์ต มันเป็นเค้าเองที่ผิดพลาด เค้าลืมไปเองว่าเคยพูดไว้ ”เธออยากจะไปเรียนอะไรก็ไปเรียน“ เค้าไม่ได้มีหน้าที่มาคัดค้าน แต่มีหน้าที่ซัพพอร์ตเธอ เค้าจะต่อสู้กับแม่เธอเอง(ไม่ใช่สู้กับเธอ) ให้อภัยเค้านะ ยังอยากไปเมลเบิร์นในฐานะแฟนอยู่ ขอโทษด้วยที่เธอสุ่มได้ตัวซีเคร็ท เค้าเป็น 0.0088% ของประชากรประเทศไทย เค้าสัญญาว่าจะใจดีกับเธอให้มากกว่านี้และจะพยายามเข้าใจเธอมากขึ้นด้วย";
    const closing = "\n\nรักมากกกกกกกกกกกกก \n หมาอ้วน 🐻";

    const fullMessage = opening + message + closing;

    let index = 0;
    const speed = 80; // Slow typing effect
    let audio = new Audio('typing-sound.mp3');
    audio.play();

    function typeWriter() {
        if (index < fullMessage.length) {
            document.getElementById('typed-message').style.display = "block";
            document.getElementById('typed-message').innerHTML += fullMessage.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        } else {
            audio.pause();
            document.querySelector('.close-letter-btn').style.display = "block";
        }
    }
    typeWriter();
});
