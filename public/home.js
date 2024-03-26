var smol = false;
hiddenButton = document.createElement("button");
hiddenButton.style.width = "10%";
hiddenButton.style.height = "60px";

function penis() {
    if(document.getElementById("header").offsetWidth - document.getElementById("pagelist").offsetWidth < 320 && smol == false)
    {
        let logo = document.getElementById("logo");
        logo.src = "smolseago.png";
        logo.style.width = "65px";
        document.getElementById("header").appendChild(hiddenButton)
        smol = true;
    }
    else if(smol && document.getElementById("header").offsetWidth - document.getElementById("pagelist").offsetWidth > 320)
    {
        let logo = document.getElementById("logo");
        logo.src = "seago.png";
        logo.style.width = "300px";
        smol = false;
        document.getElementById("header").removeChild(hiddenButton)
    }
}

setInterval(penis, 100)