let headerSize = document.querySelector(".download h1").clientHeight+18;
let listSize = document.querySelector(".download ul").clientHeight+20;
document.querySelector(".download").style.height = headerSize+listSize*0.82+"px";
console.log(headerSize+listSize*0.82+"px");