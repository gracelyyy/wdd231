const spotlightContainer =
document.querySelector("#spotlight-container");

async function loadSpotlights() {
    try {
        const response =
            await fetch("data/members.json");

        const members =
            await response.json();

        const qualifiedMembers =
            members.filter(member =>
                member.membership === "Gold" ||
                member.membership === "Silver"
            );

        qualifiedMembers.sort(() =>
            Math.random() - 0.5
        );

        const selected =
            qualifiedMembers.slice(0, 3);

        selected.forEach(member => {

            const card =
                document.createElement("section");

            card.classList.add("spotlight-card");

            card.innerHTML = `
                <h3>${member.name}</h3>
                <img src="${member.image}" alt="${member.name}">
                <p>${member.phone}</p>
                <p>${member.address}</p>
                <p>${member.membership} Member</p>
                <a href="${member.website}" target="_blank">
                    Visit Website
                </a>
            `;

            spotlightContainer.appendChild(card);
        });

    } catch (error) {
        console.error("Spotlight Error:", error);
    }
}

loadSpotlights();
