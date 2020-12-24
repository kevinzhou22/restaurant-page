// appends the menu page to the div#content element
function loadMenuPage() {
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    menuContainer.appendChild(setUpHeader());
    menuContainer.appendChild(setUpMenuItems());

    document.querySelector("div#content").appendChild(menuContainer);
}

// returns the header of the menu
function setUpHeader() {
    const menuHeader = document.createElement("div");
    menuHeader.classList.add("menu-header");

    const headerTitle = document.createElement("h1");
    headerTitle.textContent = "MENU";
    menuHeader.appendChild(headerTitle);

    const orderButton = document.createElement("button");
    orderButton.setAttribute("type","button");
    orderButton.classList.add("order");
    orderButton.textContent = "ORDER NOW";
    menuHeader.appendChild(orderButton);

    return menuHeader;
}

// returns the item categories display of the menu
function setUpMenuItems() {
    const menuItems = document.createElement("div");
    menuItems.classList.add("menu-items");

    const ramen = document.createElement("div");
    ramen.classList.add("ramen");
    const ramenImage = document.createElement("img");
    ramenImage.classList.add("food-picture");
    ramenImage.setAttribute("alt","");
    ramenImage.setAttribute("src","images/ramen2.jpg");
    ramen.appendChild(ramenImage);
    const ramenTitle = document.createElement("div");
    ramenTitle.textContent = "RAMEN";
    ramenTitle.classList.add("food-title");
    ramen.appendChild(ramenTitle);
    menuItems.appendChild(ramen);

    const sides = document.createElement("div");
    sides.classList.add("sides");
    const sidesImage = document.createElement("img");
    sidesImage.classList.add("food-picture");
    sidesImage.setAttribute("alt","");
    sidesImage.setAttribute("src","images/gyoza.jpg");
    sides.appendChild(sidesImage);
    const sidesTitle = document.createElement("div");
    sidesTitle.textContent = "SIDES";
    sidesTitle.classList.add("food-title");
    sides.appendChild(sidesTitle);
    menuItems.appendChild(sides);

    const desserts = document.createElement("div");
    desserts.classList.add("desserts");
    const dessertsImage = document.createElement("img");
    dessertsImage.classList.add("food-picture");
    dessertsImage.setAttribute("alt","");
    dessertsImage.setAttribute("src","images/daifuku.jpg");
    desserts.appendChild(dessertsImage);
    const dessertsTitle = document.createElement("div");
    dessertsTitle.textContent = "DESSERTS";
    dessertsTitle.classList.add("food-title");
    desserts.appendChild(dessertsTitle);
    menuItems.appendChild(desserts);

    const drinks = document.createElement("div");
    drinks.classList.add("drinks");
    const drinksImage = document.createElement("img");
    drinksImage.classList.add("food-picture");
    drinksImage.setAttribute("alt","");
    drinksImage.setAttribute("src","images/matcha.jpeg");
    drinks.appendChild(drinksImage);
    const drinksTitle = document.createElement("div");
    drinksTitle.textContent = "DRINKS";
    drinksTitle.classList.add("food-title");
    drinks.appendChild(drinksTitle);
    menuItems.appendChild(drinks);

    return menuItems;
}

export {loadMenuPage};