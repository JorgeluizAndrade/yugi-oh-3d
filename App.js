const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mousemove', handleMove);

    card.addEventListener('mouseout', () => {
        card.style.transform = 'perspective(200px) scale(1) rotateX(0) rotateY(0)';
    });
});

function handleMove(e) {
    const el = e.currentTarget;
    const width = el.offsetWidth;
    const height = el.offsetHeight;

    const xVal = e.layerX;
    const yVal = e.layerY;

    const yRotation = 20 * ((xVal - width / 2) / width);
    const xRotation = -20 * ((yVal - height / 2) / height);

    const transformString = `perspective(500px) scale(1.1) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;

    el.style.transform = transformString;

    el.addEventListener('mousedown', function () {
        el.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)'
    });

    el.addEventListener('mouseup', function () {
        el.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)'
    })

}
