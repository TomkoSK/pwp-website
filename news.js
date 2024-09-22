var img = document.querySelector("#amogus-image")
img.style.position = "absolute"
//this keeps the image in the center even when zooming out despite being absolutely positioned
img.style.left = "calc(50vw - 385px)"
var exampleTop = document.querySelector("#example-amogus").getBoundingClientRect().top
img.style.top = exampleTop+"px"

img.addEventListener("click", (e)=>{
    img.classList.add("invisible")
    setTimeout(()=>{img.style.display = "none"}, 2000)
})