var pagelist;
var menu;
var showingMenu = false;
var scrollWidth = null;
var extraHamburgerButton = false;

function makeHeader(){//Used to make the header of the webpage, same thing on every html file so its done through code
    let header = document.createElement("div");
    header.id = "header";
    header.classList.add("fixedsize");
    let span = document.createElement("span");
    span.id = "logo";
    span.innerHTML = "Patchwork Paintings";
    header.appendChild(span);
    pagelist = document.createElement("ul");
    pagelist.id = "pagelist";
    let pageNames = ["Home", "Downloads", "Commissions", "News", "About Us", "Contact Us"];
    let pageLinks = ["index.html", "game.html", "#wip", "news.html", "#wip", "contacts.html"];
    for(let i = 0; i < 6; i++){
        let item = document.createElement("li");
        let link = document.createElement("a");
        link.setAttribute("href", pageLinks[i]);
        link.innerHTML = pageNames[i];
        item.appendChild(link);
        pagelist.appendChild(item);
    }
    header.appendChild(pagelist);
    document.body.insertBefore(header, document.body.firstChild);
    menu = document.createElement("div");
    menu.id = "dropdown-div";
    let img = document.createElement("img");
    img.id = "menu-img";
    img.src = "menu.png";
    let div = document.createElement("div");
    div.id = "dropdown-content";
    for(let i = 0; i < 6; i++){
        let href = document.createElement("a");
        href.textContent = pageNames[i];
        href.href = pageLinks[i];
        div.appendChild(href);
    }
    let href = document.createElement("a");
    href.id = "secret-hamburger-button"
    href.textContent = "???";
    href.href = "glorb.html";
    div.appendChild(href);
    menu.appendChild(img);
    menu.appendChild(div);
}

makeHeader()

function getPagelistItemsGap(){
    let posSecond = pagelist.children[1].getBoundingClientRect().left;
    let posFirst = pagelist.children[0].getBoundingClientRect().left;
    let sizeFirst = pagelist.children[0].clientWidth;
    return posSecond-sizeFirst-posFirst;//Returns the gap between the pagelist items in pixels (all gaps are the same because of css)
}

const onWindowResize = () => {
    let header = document.querySelector("#header");
    if(scrollWidth){
        if(header.clientWidth <= scrollWidth && !showingMenu){
            showingMenu = true;
            showingMenuWidth = window.innerWidth;
            header.removeChild(pagelist);
            header.appendChild(menu);
        }
        if(showingMenu && header.clientWidth > scrollWidth){
            showingMenu = false;
            header.removeChild(menu);
            header.appendChild(pagelist);
        }
    }
    else{
        if(getPagelistItemsGap() < 20){//these 2 numbers are sort of similiar almost producing the same result
            scrollWidth = header.scrollWidth;
        }
    }
}

if(header.scrollWidth > header.clientWidth){
scrollWidth = header.scrollWidth+93.33/window.devicePixelRatio;//these 2 numbers are sort of similiar almost producing the same result
}
onWindowResize();
onWindowResize();

/*
function hamburgerCheck(e){//Checks for whether the extra hamburger button menu should be added
    if(document.querySelector("#dropdown-content").getBoundingClientRect().bottom > window.innerHeight){
        if(!extraHamburgerButton){
            extraHamburgerButton = true
            let href = document.createElement("a");
            href.id = "secret-hamburger-button"
            href.textContent = "???";
            href.href = "glorb.html";
            document.querySelector("#dropdown-content").appendChild(href);
        }
    }
    else {
        if(extraHamburgerButton && e.type == "resize"){
            extraHamburgerButton = false
            document.querySelector("#dropdown-content").removeChild(document.querySelector("#secret-hamburger-button"))
        }
    }
}

window.addEventListener("scroll", hamburgerCheck)
window.addEventListener("resize", hamburgerCheck)
*/

window.addEventListener("resize", onWindowResize)