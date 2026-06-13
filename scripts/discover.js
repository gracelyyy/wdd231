import { places } from "../data/places.mjs";

const container = document.querySelector("#discover-grid");

places.forEach((place, index) => {

const card = document.createElement("article");

card.classList.add(`card${index + 1}`);

card.innerHTML = `
<h2>${place.title}</h2>

<figure>
<img src="${place.image}"
alt="${place.title}"
loading="lazy"
width="300"
height="200">
</figure>

<address>${place.address}</address>

<p>${place.description}</p>

<button>Learn More</button>
`;

container.appendChild(card);

});


// Last Visit Message

const visitMessage = document.querySelector("#visit-message");

const lastVisit = localStorage.getItem("lastVisit");

const currentVisit = Date.now();

if (!lastVisit) {

visitMessage.textContent =
"Welcome! Let us know if you have any questions.";

} else {

const daysBetween =
Math.floor(
(currentVisit - Number(lastVisit))
/ (1000 * 60 * 60 * 24)
);

if (daysBetween < 1) {

visitMessage.textContent =
"Back so soon! Awesome!";

} else if (daysBetween === 1) {

visitMessage.textContent =
"You last visited 1 day ago.";

} else {

visitMessage.textContent =
`You last visited ${daysBetween} days ago.`;

}

}

localStorage.setItem("lastVisit", currentVisit);
