import { loadHomePage } from "./modules/home.js";
import { loadMenuPage} from "./modules/menu.js";
import {loadContactUsPage} from "./modules/contact-us.js";


// handles header loading and removal
const header = (function() {
    const container = document.querySelector("div#content");

    // clears container element
    const _clearPage = function() {
        document.querySelector("div#content > :not(header)").remove();
    };

    const _onClickOfHome = function(e) {
      _clearPage();
      loadHomePage();
    
    };
    const _onClickOfMenu = function(e) {
        _clearPage();
        loadMenuPage();

    };
    const _onClickOfContactUs = function(e) {
        _clearPage();
        loadContactUsPage();
    };

        // appends the header to the container
        const load = function() {
            const header = document.createElement("header");
    
            const logo = document.createElement("p");
            logo.classList.add("logo");
            logo.textContent = "RAMEN-YA";
            header.appendChild(logo);
        
            const nav = document.createElement("nav");
            
            const navUl = document.createElement("ul");
            const home = document.createElement("li");
            home.classList.add("nav-home");
            home.textContent = "HOME";
            const menu = document.createElement("li");
            menu.classList.add("nav-menu");
            menu.textContent = "MENU";
            const contact = document.createElement("li");
            contact.classList.add("nav-contact");
            contact.textContent = "CONTACT";
            navUl.appendChild(home);
            navUl.appendChild(menu);
            navUl.appendChild(contact);
            nav.appendChild(navUl);
        
            header.appendChild(nav);
        
            container.appendChild(header);
    
            // set up event listeners

            home.addEventListener("click", _onClickOfHome);
            menu.addEventListener("click", _onClickOfMenu);
            contact.addEventListener("click",_onClickOfContactUs);
        };
    return {
        load,
    }
})();

// sets up header and loads home page
(function initialize() {
    // set up focus outline to appear only on tab
    document.body.addEventListener("click", ()=> document.body.classList.add("using-mouse"));
    document.body.addEventListener("keydown", (e) => {
        if(e.key === "Tab") {
            document.body.classList.remove("using-mouse");
        }
    });
  
    header.load();
    loadHomePage();
})();


