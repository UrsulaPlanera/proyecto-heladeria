let turnAll = 1;

function changeImage() {
    for (let i = 1; i <= 6; i++) {
        document.getElementById(`carrousel-imagen-${i}`).style.display = 'none';
        document.getElementById(`carrousel-nav-circulo-${i}`).style.color = '#F4896B';
    }

    document.getElementById(`carrousel-imagen-${turnAll}`).style.display = 'flex';
    document.getElementById(`carrousel-nav-circulo-${turnAll}`).style.color = '#04C4D9';

    turnAll = (turnAll % 6) + 1;
}

setInterval(changeImage, 2000);
