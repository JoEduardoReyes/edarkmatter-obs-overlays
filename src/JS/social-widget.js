const socialWidgetElement = document.getElementById("social-widget");
const socialNameElement = document.getElementById("social-name");
const socialIconElement = document.getElementById("social-icon");

const socialProfiles = [
	{ name: "EDarkMatter", icon: "fa-youtube", class: "youtube" },
	{ name: "EDarkMatter", icon: "fa-facebook", class: "facebook" },
	{ name: "edarkgaming", icon: "fa-twitch", class: "twitch" },
	{ name: "EDarkMatter", icon: "fa-tiktok", class: "tiktok" },
];

let currentProfile = 0;

// Cambia el perfil social actual
function changeSocial() {
	const { name, icon, class: socialClass } = socialProfiles[currentProfile];
	socialNameElement.innerText = name;
	socialIconElement.className = `fa-brands ${icon} ${socialClass}`;
	currentProfile = (currentProfile + 1) % socialProfiles.length; // Lógica modular para rotar
}

// Aplica una animación a un elemento
function applyAnimation(element, animationClass, duration = 2000) {
	element.classList.add(animationClass);
	setTimeout(() => element.classList.remove(animationClass), duration);
}

// Control de animaciones de entrada, atención y salida
function socialRotation() {
	changeSocial();
	applyAnimation(socialWidgetElement, "animate__bounceInDown", 2000); // Entrada
	setTimeout(
		() => applyAnimation(socialWidgetElement, "animate__bounce", 2000),
		10000
	); // Atención
	setTimeout(
		() => applyAnimation(socialWidgetElement, "animate__bounceOutUp", 2000),
		18000
	); // Salida
}

// Inicia la rotación
socialRotation();
setInterval(socialRotation, 20000);
