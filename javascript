// Efecto de typing con JavaScript para el segundo texto
const text = `FELIZ ANIVERSARIO MI AMOR

Mi amorcito hoy es un día especial para celebrar y quiero decirte que... mi mayor bendición fue encontrarte gracias por todo lo que haces por mí, por apoyarme en cada paso que doy y demostrarme que las cosas que te propones uno lo puede lograr hacer.... y sí! prometo darte todo el amor que te mereces y estar contigo en los momentos tristes y de felicidad!

Cuando te digo que yo "Te amo más" no significa que yo te ame más que tú a mí, significa que te amo más que todos los problemas que puedan venir y todo lo que vamos a superar juntos lo que siempre resalto en nosotros es que aprovechamos cada momento juntos. Me sacas la sonrisa más sincera y alegre, ambos hemos sacado la mejor versión de nosotros mismos para tener una relación sana, madura y con estabilidad emocional, con momentos de felicidad, amor, cariño, comprensión y admiración. Sin duda eres mi amor bonito.

Ahora entiendo cuando me decían "que pronto llegará una persona que te ame y te valore", se referían a ti. TE AMO CON EL ALMA MI AMOR, te elegiría una y mil veces más.`;

// Función para simular el typing
let index = 0;
const dynamicTextElement = document.getElementById('dynamicText');

function typeText() {
    if (index < text.length) {
        dynamicTextElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 50); // Cambia el tiempo para hacer más lento o rápido el efecto
    }
}

// Inicia el efecto cuando la página se carga
window.onload = typeText;
