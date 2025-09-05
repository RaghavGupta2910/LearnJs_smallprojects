let value1 = document.getElementById("value1");
let value2 = document.getElementById("value2");
let value3 = document.getElementById("value3");
let inSpeed = document.getElementById("inpspeed");

let values = [
    "😍", "💕", "😭", "😂", "😘", "😩", "😉"
];

function getRandom(){
    return values[Math.floor(Math.random() * 7)];
}

let animationId;
function updateAnimation(newSpeed){
    if (animationId) clearInterval(animationId);

    animationId = setInterval(() => {
        
        value1.innerText = getRandom();
        value2.innerText = getRandom();
        value3.innerText = getRandom();

    }, 1000 / newSpeed);
}

inSpeed.onchange = (ev) => {
    const speed = ev.target.value || 1;
    document.documentElement.style.setProperty('--speed', speed)

    updateAnimation(speed);
}
