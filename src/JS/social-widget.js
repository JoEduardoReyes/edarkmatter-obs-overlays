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

function changeSocial() {
	const { name, icon, class: socialClass } = socialProfiles[currentProfile];
	socialNameElement.innerText = name;
	socialIconElement.className = `fa-brands ${icon} ${socialClass}`;
	if (currentProfile === socialProfiles.length - 1) {
		currentProfile = 0;
	} else {
		currentProfile++;
	}
	return name;
}

function entranceAnimation() {
	changeSocial();
	socialWidgetElement.classList.remove("animate__bounceOutUp");
	socialWidgetElement.classList.add("animate__bounceInDown");
	setTimeout(() => {
		socialWidgetElement.classList.remove("animate__bounceInDown");
	}, 2000);
}

function attentionAnimation() {
	socialWidgetElement.classList.add("animate__bounce");
	setTimeout(() => {
		socialWidgetElement.classList.remove("animate__bounce");
	}, 2000);
}

function exitAnimation() {
	socialWidgetElement.classList.add("animate__bounceOutUp");
}

function socialRotation() {
	entranceAnimation();
	setTimeout(attentionAnimation, 10000);
	setTimeout(exitAnimation, 18000);
}

socialRotation();
setInterval(socialRotation, 20000);
