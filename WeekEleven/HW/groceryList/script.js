const groceryList = ["toilet paper", "instant noodles", "chopsticks", "snacks","drinks"]
var main = document.getElementById("main")
let trans = false
let images = ["image/1.jpg","image/2.jpg","image/3.jpg","image/4.jpg","image/5.jpg"]
let image = document.getElementById("image")

for (i=0;i<groceryList.length;i++){
    let item = document.createElement('span')
    item.innerHTML = groceryList[i]
    item.id = `span${i}`
    item.className = "items"
    main.appendChild(item)
}

let spans = document.getElementsByClassName("items")
for (i=0;i<groceryList.length;i++){
    spans[i].addEventListener("mouseover",textTrans)
    spans[i].addEventListener("mouseleave",deTrans)
}

function deTrans(){
    for (i=0;i<groceryList.length;i++){
            spans[i].style.fontSize="18px"
            spans[i].style.color="black"
    }
}

function textTrans(){
    this.style.color="rgb(249, 0, 125)"
    this.style.fontSize="35px"
    index = groceryList.indexOf(this.innerHTML)+1
    image.src = `image/${index}.jpg`
    for (i=0;i<groceryList.length;i++){
        if(spans[i] !== this){
            spans[i].style.fontSize="15px"
            spans[i].style.color="grey"
        }
    }
}

let span1 = document.getElementById("span1")
span1.style.color=""

