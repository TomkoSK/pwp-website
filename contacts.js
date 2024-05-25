var element = document.createElement("p")
element.style.fontSize = "200%";
element.style.marginTop = "auto";
element.innerText = "No secrets here :)"
var shown = false

window.addEventListener("resize", onResize);

function onResize(){
    if(window.devicePixelRatio <= 0.4 && !shown){
        document.querySelector("#content").appendChild(element);
        shown = true
    }
    if(window.devicePixelRatio > 0.4 && shown){
        document.querySelector("#content").removeChild(element);
        shown = false
    }
}