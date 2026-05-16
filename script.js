const passwordScreen = document.getElementById("passwordScreen");
const mainContent = document.getElementById("mainContent");
const passwordInput = document.getElementById("passwordInput");


/* الأصوات */
const bgMusic = document.getElementById("bgMusic");
const bgLaugh = document.getElementById("bgLaugh");
const voiceNote = document.getElementById("voiceNote");


/* مستوى الصوت */
bgMusic.volume = 0.10;
bgLaugh.volume = 0.04;
voiceNote.volume = 0.95;


/* الباسورد */
function checkPassword(){

    if(passwordInput.value === "1952007"){

        passwordScreen.style.display = "none";
        mainContent.style.display = "block";

        bgMusic.play();
        bgLaugh.play();

        launchConfetti();

    }

    else{
        alert("الباسورد غلط 😭");
    }
}


/* تشغيل الفويس */
function playVoice(){

    bgMusic.volume = 0.03;
    bgLaugh.volume = 0.01;

    voiceNote.play();
}


/* بعد انتهاء الفويس */
voiceNote.addEventListener("ended", () => {

    bgMusic.volume = 0.10;
    bgLaugh.volume = 0.04;

});


/* الكلام المتغير */
const texts = [
    "ضحكتك ✨",
    "طريقتك 💕",
    "الأمان معاكي 🥹",
    "عيونك ❤️",
    "طفولتك 🎀",
    "وجودك في حياتي 🌸"
];

let index = 0;

setInterval(() => {

    index++;

    if(index >= texts.length){
        index = 0;
    }

    document.getElementById("changingText").innerText = texts[index];

}, 2500);


/* الكونفيتي */
function launchConfetti(){

    for(let i = 0; i < 70; i++){

        const heart = document.createElement("div");

        heart.innerHTML = "💖";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "-20px";
        heart.style.fontSize = Math.random() * 20 + 20 + "px";
        heart.style.zIndex = "9999";
        heart.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}


const style = document.createElement('style');
style.innerHTML = `
@keyframes fall {
    to {
        transform: translateY(110vh) rotate(360deg);
        opacity: 0;
    }
}
`;
document.head.appendChild(style);