    
//Challenge 4
const birds = [ "Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets" ];

// Add your code here
var section = document.getElementById("section")
const eBirds = []
var index = birds.indexOf("Eagles")
birds.splice(index,1)
var index = birds.indexOf("Eagle")
for (var bird of birds){
    if(bird.startsWith("E")===true){
        eBirds.push(bird)
    }
}

// Don't edit the code below here!

section.innerHTML = ' ';

const para1 = document.createElement('p');
para1.textContent = eBirds;

section.appendChild(para1);