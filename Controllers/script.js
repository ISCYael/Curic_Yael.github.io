// Cambiar automáticamente las imágenes de la sección animada
const images = ["proyecto1.jpg", "proyecto2.jpg", "proyecto3.jpg"];
const animatedImg = document.querySelector(".animated-img");
let index = 0;

function changeImage() {
    animatedImg.src = images[index];
    index = (index + 1) % images.length;
}

setInterval(changeImage, 3000); // Cambia cada 3 segundos
