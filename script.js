var buttonVisible = false;
var button = document.createElement("button");
button.classList.add("testbutton");
var div = document.querySelector("#content");

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
    let pageNames = ["Home", "Gallery", "Prices", "Commissions", "TOS", "About Us"];
    let pageLinks = ["index.html", "gallery.html", "prices.html", "commissions.html", "tos.html", "aboutus.html"];
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
}//NO LONGER USED JUST KEPT HERE

function fixSizes(){
    let nodes = document.querySelectorAll(".fixedsize")
    nodes.forEach((node) => {node.style.width = node.clientWidth+"px"; node.style.height = node.clientHeight+"px";});
    //nodes.forEach((node) => {node.style.marginTop = node.style.marginTop+"px"; console.log(node.style.marginTop);});
}

function onResize(){
    if(window.devicePixelRatio < 0.3 && !buttonVisible){
        div.style.justifyContent = "flex-start";
        div.insertBefore(button, div.firstChild);
        buttonVisible = true;
    }
    else if (window.devicePixelRatio >= 0.3 && buttonVisible){
        div.style.justifyContent = "center";
        div.removeChild(button);
        buttonVisible = false;
    }
    if(buttonVisible){//I have no idea about this math I am sorry if you are reading this later on
        button.style.marginLeft = window.innerWidth/2-3120+"px";
        button.style.marginRight = 3120-600+"px";
    }
}
window.addEventListener("resize", onResize);

async function onButtonClick(){
    const { value: password } = await Swal.fire({
    customClass: {
        popup: "swalpopup",
        confirmButton : "swalbutton",
        input : "swalinput",
        inputLabel : "swalinputlabel"
        },
    input : "password", 
    inputLabel : "https://www.youtube.com/watch?v=dQw4w9WgXcQ",//HIDDEN TEXT
    confirmButtonColor : "#bb0000",
    background: "#111111",
    animation: false
    })
    if(password == "amogus"){
        window.location.href = "glorb.html";
    }
}
button.addEventListener("click", onButtonClick);