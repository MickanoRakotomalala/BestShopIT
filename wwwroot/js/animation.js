//Typing animation
let typed = new Typed(".typing", {
    strings: [
        "Best Shop of Electronics devices"
    ],
    typeSpeed: 120,
    BackSpeed: 200,
    loop: true
});

const text = document.getElementById('animatedNewProducts');
function animateText() {
    text.style.transform = 'rotate(0)';
    setTimeout(() => {
        text.style.transform = 'rotate(15deg)';
    }, 100);

    setTimeout(() => {
        text.style.transform = 'rotate(-15deg)';
    }, 300);

    setTimeout(() => {
        text.style.transform = 'translateX(0)';
    }, 500);

    //setTimeout(() => {
    //    text.style.transform = 'scale(0.5)';
    //}, 100);

    //setTimeout(() => {
    //    text.style.transform = 'scale(1)';
    //}, 300);


    //text.style.transform = 'translateY(0)';
    //setTimeout(() => {
    //    text.style.transform = 'translateY(-12px)';
    //}, 100);

    //setTimeout(() => {
    //    text.style.transform = 'translateY(12px)';
    //}, 300);

    //setTimeout(() => {
    //    text.style.transform = 'translateY(0)';
    //}, 500);
}
setInterval(animateText, 2500);
