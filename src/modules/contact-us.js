// appends the contact us page to the div#content element
function loadContactUsPage() {
    const container = document.querySelector("div#content");
    const contactUsContainer = document.createElement("div");

    const contactBanner = document.createElement("img");
    contactBanner.setAttribute("alt","");
    contactBanner.setAttribute("src","images/ramen-lanterns.png");
    contactBanner.classList.add("contact-banner");
    contactUsContainer.appendChild(contactBanner);

    const contactTitle = document.createElement("h1");
    contactTitle.classList.add("contact-title");
    contactTitle.textContent = "Get In Touch";
    contactUsContainer.appendChild(contactTitle);

    const phone = document.createElement("p");
    phone.classList.add("phone")
    phone.textContent = "Phone: (219) 153-4157";
    contactUsContainer.appendChild(phone);

    const email = document.createElement("p");
    email.classList.add("email");
    email.textContent = "Email: contactus@ramenya.com";
    contactUsContainer.appendChild(email);

    container.appendChild(contactUsContainer);
}

export {loadContactUsPage};