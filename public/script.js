var buttonVisible = false;
var button = document.createElement("button");
button.style.flexGrow = 0.1;
button.style.height = "70%";
var header = document.querySelector("#header");


function resizeButton(event){
    console.log(window.innerWidth, window.innerHeight);
    if(window.devicePixelRatio <= 0.3 && !buttonVisible){
        header.appendChild(button);
        buttonVisible = true;
    }
    else if (window.devicePixelRatio > 0.3 && buttonVisible){
        header.removeChild(button)
        buttonVisible = false;
    }
}

window.addEventListener("resize", resizeButton);