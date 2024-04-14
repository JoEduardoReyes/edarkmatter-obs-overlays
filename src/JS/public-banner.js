// Selecciona todos los elementos con la clase "aff-item"
const AFF_ITEMS = Array.from(document.querySelectorAll(".aff-item"));

// Inicializa el contador de elementos
let currentItemCount = 0;

// Oculta todos los elementos excepto el elemento en la posición "currentItemCount"
function displayIt() {
	// Oculta todos los elementos
	AFF_ITEMS.forEach((item) => {
		item.classList.add("hidden");
	});

	// Muestra el elemento actual
	AFF_ITEMS[currentItemCount].classList.remove("hidden");
	AFF_ITEMS[currentItemCount].classList.add("animate__backInUp");

	// Guarda el valor anterior de "currentItemCount"
	let PreviousCount = currentItemCount;

	// Incrementa "currentItemCount" y vuelve a 0 si llega al final de la lista
	if (currentItemCount === AFF_ITEMS.length - 1) {
		currentItemCount = 0;
	} else {
		currentItemCount++;
	}

	// Devuelve una cadena que indica que el texto ha cambiado a la cadena de texto del elemento en la posición "PreviousCount"
	return `El texto ha cambiado a ${AFF_ITEMS[PreviousCount].innerText}`;
}

displayIt();
setInterval(displayIt, 4000);
