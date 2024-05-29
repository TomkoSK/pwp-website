class Popup {
    constructor(){
        this.bgDiv = document.createElement("div");
        this.bgDiv.classList.add("popup-background");
        this.bgDiv.addEventListener("click", this.onDivClick);
        document.body.appendChild(this.bgDiv);
        this.box = document.createElement("div");
        this.box.classList.add("popup-box");
        this.bgDiv.appendChild(this.box);
        this.input = document.createElement("input");
        this.input.type = "text";
        this.input.classList.add("popup-input");
        this.input.addEventListener("input", this.onInputType);
        this.input.addEventListener("keydown", this.onInputKeydown);
        this.box.appendChild(this.input);
        this.button = document.createElement("button");
        this.button.textContent = "OK";
        this.button.classList.add("popup-button");
        this.button.addEventListener("click", this.onButtonClick)
        this.box.appendChild(this.button);
        this.resolved = false;
        this.rejected = false;
        this.input.focus();//focuses at the end because the other elements being added grab focus away (I think)
    }

    destroy = () => {
        document.body.removeChild(this.bgDiv);
    }

    onDivClick = (e) => {
        if(e.target == this.bgDiv){
            this.destroy();
            this.rejected = true;
        }
    }

    onButtonClick = () => {
        this.destroy();
        this.resolved = true;
    }

    onInputType = (e) => {
    }

    onInputKeydown = (e) => {
        if(e.key == "Enter"){
            this.onButtonClick();//Pressing enter in the textbox has the same effect as just pressing the OK button
        }
        if(e.key == "Escape"){
            this.destroy();
            this.rejected = true;//Pressing escape ends the textbox as if the user clicked on the bg div
        }
    }

    getAnswer = new Promise((resolve, reject) =>{
        const check = () => {
            if(this.resolved) {resolve(this.input.value); return}
            if(this.rejected) {reject(); return}
            setTimeout(check, 200);
        }
        check();
    })

}

function fixSizes(){
    let nodes = document.querySelectorAll(".fixedsize")
    nodes.forEach((node) => {node.style.width = node.clientWidth+"px"; node.style.height = node.clientHeight+"px";});
    //nodes.forEach((node) => {node.style.marginTop = node.style.marginTop+"px"; console.log(node.style.marginTop);});
}

function onResize(){
    //password button
    document.querySelector("#passwordbutton").style.marginLeft = window.innerWidth/2-3120+400+"px";
    document.querySelector("#passwordbutton").style.marginRight = 3120-940+"px";//for putting the box in the middle
    //flower button
    document.querySelector("#flowerbutton").style.marginLeft = 150+"px";
}

window.addEventListener("resize", onResize);
onResize();

function onPassButtonClick(){
    let popup = new Popup();
    popup.getAnswer.then((inputValue) => {
        if(inputValue == "amogus"){
            window.location.href = "glorb.html";
        }
    })
    .catch(() => {
    });
}

document.querySelector("#passwordbutton").addEventListener("click", onPassButtonClick);

function flowerButtonClick(){
    window.open("website0.png");
}

document.querySelector("#flowerbutton").addEventListener("click", flowerButtonClick);