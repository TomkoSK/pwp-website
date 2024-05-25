function makeHeader(){//Used to make the header of the webpage, same thing on every html file so its done through code
    let header = document.createElement("div");
    header.id = "header";
    header.classList.add("fixedsize");
    let span = document.createElement("span");
    span.id = "logo";
    span.innerHTML = "Patchwork Paintings";
    header.appendChild(span);
    let list = document.createElement("ul");
    list.id = "pagelist";
    let pageNames = ["Home", "Downloads", "Commissions", "News", "About Us", "Contact Us"];
    let pageLinks = ["index.html", "downloads.html", "#wip", "#wip", "#wip", "contacts.html"];
    for(let i = 0; i < 6; i++){
        let item = document.createElement("li");
        let link = document.createElement("a");
        link.setAttribute("href", pageLinks[i]);
        link.innerHTML = pageNames[i];
        item.appendChild(link);
        list.appendChild(item);
    }
    header.appendChild(list);
    document.body.insertBefore(header, document.body.firstChild);
}

makeHeader()