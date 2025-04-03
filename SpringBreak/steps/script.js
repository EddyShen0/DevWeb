var hidden = document.getElementById('hidden')
var shown = document.getElementById('show')
var state = "off"
hidden.addEventListener('mouseup',hiddenMessage)

function hiddenMessage(){
    if(state == "off"){
        hidden.innerHTML = "HIDE"
        hidden.style.transform='translate(0px,20px)'
        shown.style.opacity = "100%"
        shown.style.transform='translate(60vw,0px)'
        state = "on"
        
    } else {
        hidden.innerHTML = "SHOW"
        state = "off"
        hidden.style.transform='translate(0px,0px)'
        shown.style.transform='translate(0px,0px)'
        shown.style.opacity = "0%"
    }
}