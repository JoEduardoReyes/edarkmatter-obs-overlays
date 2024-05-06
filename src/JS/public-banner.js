// Selecciona todos los elementos con la clase "aff-item"
const AFF_ITEMS = Array.from(document.querySelectorAll(".aff-item"));

// Establece contadores a 0
let currentAffSpoCounter = 0;
let currentItemCount = 0;

// Cambia de afiliados o sponsors
function changeAffSpo() {
	const currentAffSpo = AFF_SPON[currentAffSpoCounter];
	const { type, logo, description, offer, link } = currentAffSpo;

	AFF_ITEMS[0].innerText = type; // Actualiza el texto del título
	AFF_ITEMS[1].querySelector("img").src = logo; // Actualiza la fuente de la imagen del logo
	AFF_ITEMS[2].innerText = description; // Actualiza el texto de la descripción
	AFF_ITEMS[3].innerText = offer; // Actualiza el texto de la oferta
	AFF_ITEMS[4].innerText = link; // Actualiza el texto del enlace

	if (currentAffSpoCounter === AFF_SPON.length - 1) {
		currentAffSpoCounter = 0;
	} else {
		currentAffSpoCounter++;
	}

	return `El afiliado es ${currentAffSpo.link}`; // Devuelve un mensaje indicando el afiliado actual
}

// Oculta todos los elementos excepto el elemento en la posición "currentItemCount"
function changeText() {
	// Cambia el texto inicial (opcional si ya se muestra un afiliado)
	if (currentItemCount === 0) {
		changeAffSpo();
	}

	// Oculta todos los elementos
	AFF_ITEMS.forEach(
		(item, index) => item.classList.toggle("hidden", index !== currentItemCount) // Muestra/oculta según la posición actual
	);

	AFF_ITEMS[currentItemCount].classList.add("animate__backInUp"); // Añade animación de entrada al elemento actual

	// Guarda el valor anterior de "currentItemCount"
	const previousCount = currentItemCount;

	// Incrementa "currentItemCount" y vuelve a 0 si llega al final de la lista
	currentItemCount =
		currentItemCount === AFF_ITEMS.length - 1 ? 0 : currentItemCount + 1;

	// Devuelve un mensaje indicando el texto que se muestra actualmente
	return `El texto ha cambiado a ${AFF_ITEMS[previousCount].innerText}`;
}

// Cambia el texto inicial
changeText();

// Ejecuta la función "changeText" cada 2 segundos para rotar los afiliados
setInterval(changeText, 6000);
