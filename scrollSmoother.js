const contentWrapper = document.querySelector('.smooth-content');
let currentY = window.scrollY;
let targetY = window.scrollY;
let ease = 0.065;

window.addEventListener('scroll', () => {
    targetY = window.scrollY;
})

function lerp(a, b, t) {
    return a * (1 - t) + b * t;
}

function scrollSmoother() {
    currentY = lerp(currentY, targetY, ease);
    let newPositionY = parseFloat(currentY.toFixed(3));

    contentWrapper.style.transform = `translateY(-${newPositionY}px)`;

    requestAnimationFrame(scrollSmoother);
}
scrollSmoother();