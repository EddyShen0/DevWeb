let myArray = [ "Ryu", "Ken", "Chun-Li", "Cammy", "Guile", "Sakura", "Sagat", "Juri" ];

// Add your code here
myArray.pop()
myArray.push("Setsu","Edward")
for(i=0;i<myArray.length;i++){
    let index = myArray.indexOf(myArray[i])
    myArray[i] += ` (${index})`
}
let myString = myArray.join("-")
console.log(myArray)
// Don't edit the code below here!

section.innerHTML = ' ';

let para1 = document.createElement('p');
para1.textContent = myString;

section.appendChild(para1);
    