const socialProfiles = [
	{ name: "EDarkMatter", icon: "fa-youtube", class: "youtube" },
	{ name: "EDarkMatter", icon: "fa-facebook", class: "facebook" },
	{ name: "EDarkMatter", icon: "fa-twitch", class: "twitch" },
	{ name: "EDarkMatter", icon: "fa-tiktok", class: "tiktok" },
];

let currentProfile = 0;

// Selecciona los elementos
const socialNameElement = document.getElementById("social-name");
const socialIconElement = document.getElementById("social-icon");

// Función para ocultar el widget
function hideSocialWidget() {
	socialIconElement.classList.add("animate__zoomOutUp");
	socialNameElement.classList.add("animate__zoomOutUp");

	// Después de la animación de salida, oculta los elementos
	setTimeout(() => {
		socialIconElement.classList.remove("visible");
		socialNameElement.classList.remove("visible");
		socialIconElement.classList.add("hidden");
		socialNameElement.classList.add("hidden");
	}, 1000); // Tiempo de la animación "zoomOutUp"
}

// Función para mostrar el widget con la animación de entrada
function showSocialWidget() {
	const { name, icon, class: socialClass } = socialProfiles[currentProfile];

	// Cambia el contenido
	socialNameElement.innerText = name;
	socialIconElement.className = `fa-brands ${icon} ${socialClass}`;

	// Hace visibles los elementos y aplica la animación de entrada
	socialIconElement.classList.remove("hidden");
	socialNameElement.classList.remove("hidden");
	socialIconElement.classList.add("visible", "animate__zoomInDown");
	socialNameElement.classList.add("visible", "animate__zoomInDown");

	// Elimina la animación de entrada una vez completada
	setTimeout(() => {
		socialIconElement.classList.remove("animate__zoomInDown");
		socialNameElement.classList.remove("animate__zoomInDown");
	}, 1000); // Tiempo de la animación "zoomInDown"
}

// Función para animación de atención (tada)
function attentionSocialWidget() {
	socialIconElement.classList.add("animate__tada");
	socialNameElement.classList.add("animate__tada");

	// Elimina la animación después de que termine
	setTimeout(() => {
		socialIconElement.classList.remove("animate__tada");
		socialNameElement.classList.remove("animate__tada");
	}, 1000); // Tiempo de la animación "tada"
}

// Función principal para controlar el flujo de animaciones
function changeSocialProfile() {
	// Muestra el widget con la animación de entrada
	showSocialWidget();

	// Después de un minuto, aplica la animación de atención
	setTimeout(() => {
		attentionSocialWidget();
	}, 60000); // 1 minuto

	// Después de dos minutos, oculta el widget y pasa al siguiente perfil
	setTimeout(() => {
		hideSocialWidget();

		// Cambia el perfil actual
		currentProfile = (currentProfile + 1) % socialProfiles.length;

		// Espera 1 segundo antes de mostrar el siguiente perfil
		setTimeout(changeSocialProfile, 1000);
	}, 120000); // 2 minutos
}

// Iniciar la rotación de perfiles
changeSocialProfile();
