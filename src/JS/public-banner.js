// Selecciona todos los elementos con la clase "aff-item"
const AFF_ITEMS = Array.from(document.querySelectorAll(".aff-item"));

// Seteandop contadores en 0
let currentAffSpoCounter = 0;
let currentItemCount = 0;

// Cambiar de afiliados o sponsorship

function changeAffSpo() {
	let currentAffSpo = AFF_SPON[currentAffSpoCounter];
	AFF_ITEMS[0].innerText = currentAffSpo.type;
	AFF_ITEMS[1].querySelector("img").src = currentAffSpo.logo =
		currentAffSpo.logo;
	AFF_ITEMS[2].innerText = currentAffSpo.descrtion;
	AFF_ITEMS[3].innerText = currentAffSpo.offer;
	AFF_ITEMS[4].innerText = currentAffSpo.link;
	if (currentAffSpoCounter === AFF_SPON.length - 1) {
		currentAffSpoCounter = 0;
	} else {
		currentAffSpoCounter++;
	}
	return `El affiliado es ${currentAffSpo.link}`;
}

// Oculta todos los elementos excepto el elemento en la posición "currentItemCount"
function changeText() {
	if (currentItemCount === 0) {
		changeAffSpo();
	}
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

changeText();

// Cambiar el Affiliado o Sponsor
