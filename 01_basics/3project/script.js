const btn = document.getElementById('btn');
const colorText = document.getElementById('color');

btn.addEventListener('click', function () {
    const hex = getRandomHexColor();
    document.body.style.backgroundColor = hex;
    colorText.textContent = hex;
})

function getRandomHexColor(){
    const hexChars = "0123456789ABCDEF";
    let hex = '#';
    for(let i=0;i<6;i++){
        hex += hexChars[Math.floor(Math.random() * 16)]
    }
    return hex;
}