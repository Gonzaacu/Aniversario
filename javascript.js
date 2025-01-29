// Variables globales
let index = 0;
const images = document.querySelectorAll(".carousel img");
const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");
const dynamicTextElement = document.getElementById('dynamicText');

// Efecto de typing para el texto con class "typing-text"
const typingTextElement = document.querySelector('.typing-text');
const typingText = typingTextElement.textContent;
typingTextElement.textContent = ""; // Limpiar el texto inicial

let typingIndex = 0;
function typeText() {
    if (typingIndex < typingText.length) {
        typingTextElement.textContent += typingText.charAt(typingIndex);
        typingIndex++;
        setTimeout(typeText, 100); // Cambia la velocidad del typing
    }
}

// Efecto de typing para el texto con ID "dynamicText"
const dynamicText = `FELIZ ANIVERSARIO MI AMOR

Mi amorcito hoy es un día especial para celebrar y quiero decirte que... mi mayor bendición fue encontrarte gracias por todo lo que haces por mí, por apoyarme en cada paso que doy y demostrarme que las cosas que te propones uno lo puede lograr hacer.... y sí! prometo darte todo el amor que te mereces y estar contigo en los momentos tristes y de felicidad!

Cuando te digo que yo "Te amo más" no significa que yo te ame más que tú a mí, significa que te amo más que todos los problemas que puedan venir y todo lo que vamos a superar juntos lo que siempre resalto en nosotros es que aprovechamos cada momento juntos. Me sacas la sonrisa más sincera y alegre, ambos hemos sacado la mejor versión de nosotros mismos para tener una relación sana, madura y con estabilidad emocional, con momentos de felicidad, amor, cariño, comprensión y admiración. Sin duda eres mi amor bonito.

Ahora entiendo cuando me decían "que pronto llegará una persona que te ame y te valore", se referían a ti. TE AMO CON EL ALMA MI AMOR, te elegiría una y mil veces más.`;

// Función para simular el typing en el segundo texto
let dynamicTextIndex = 0;
function typeDynamicText() {
    if (dynamicTextIndex < dynamicText.length) {
        dynamicTextElement.textContent += dynamicText.charAt(dynamicTextIndex);
        dynamicTextIndex++;
        setTimeout(typeDynamicText, 50); // Cambia la velocidad del typing
    }
}

// Función para el carrusel
function moveSlide(step) {
    images[index].classList.remove("active");
    index = (index + step + images.length) % images.length;
    images[index].classList.add("active");
}

setInterval(() => moveSlide(1), 3000); // Cambia de imagen cada 3 segundos

// Función para el botón de música
function toggleMusic() {
    if (music.paused) {
        music.play();
        musicButton.textContent = "🔇"; // Cambiar el icono cuando la música está activada
    } else {
        music.pause();
        musicButton.textContent = "🎶"; // Cambiar el icono cuando la música está pausada
    }
}

window.addEventListener('click', () => {
    music.play().catch((error) => {
        console.error("Error al iniciar la música:", error);
    });
});

// Función para crear corazones flotantes
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw"; // Posición aleatoria en el eje X
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s"; // Duración aleatoria de la animación
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 8000); // Eliminar el corazón después de 8 segundos
}

setInterval(createHeart, 500); // Crear un corazón cada 500 ms

// Iniciar el efecto de typing cuando la página se carga
window.onload = () => {
    typeText(); // Para el texto con class "typing-text"
    typeDynamicText(); // Para el texto con ID "dynamicText"
};
