// appends the home page to the div#content element
function loadHomePage() {
    const container = document.querySelector("div#content");
    const homeContainer = document.createElement("div");
    homeContainer.classList.add("home-container");

    const homepageBackground = document.createElement("div");
    homepageBackground.classList.add("homepage-background");
    const homepageBackgroundShader = document.createElement("div");
    homepageBackgroundShader.classList.add("homepage-background-shader"); 

    const headline = document.createElement("p");
    headline.classList.add("headline");
    headline.textContent = "AUTHENTIC JAPANESE FLAVOR";
    homepageBackgroundShader.appendChild(headline);

    const description = document.createElement("p");
    description.classList.add("description");
    description.textContent = "Established in 1995, Corporis quos voluptas illum tenetur culpa tempore" +
            "facilis at debitis doloribus, ducimus laudantium praesentium et aut rem ea labore maxime" +
            "molestiae ipsum repellendus ullam! Similique, ut quo.";
    homepageBackgroundShader.appendChild(description);

    homepageBackground.appendChild(homepageBackgroundShader);

    homeContainer.appendChild(homepageBackground);
    container.appendChild(homeContainer);
}

export {loadHomePage};