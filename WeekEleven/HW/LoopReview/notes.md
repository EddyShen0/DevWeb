# LOOPS
-Repetitiive  Tasks

examples:
``` js
for (let i = 0; i < 100; i++){
    ctx.beginPath();
    ctx.fillStyle = "rgb(255 0 0 / 50%)"
    ctx.arc(
        random(canvas.width),
        random(canvas.height),
        random(50),
        0,
        2 * Math.PI,
    );
    ctx.fill();
}
```

Draw 100 circles at random position on the canvas with random size

``` js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal","Lion"]

for (const cat of cats){
    console.log(cat);
}
```
console.log every item in the cats array

## map()
Use map() to do something to each item in a collection create a new collection containing the changed items

example:
``` js
function to Upper(string){
    return string.toUpperCase();
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"
]
const upperCats = cats.map(toUpper);

console.log(upperCats);
```
Convert items in cats array into uppercase

## filter()
Use filter() to test each item in a collection and create a new collection contaning only items that match

example:
``` js
function lCat(cat){
    return cat.startsWith("L")
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"
];

const filtered = cats.filter(lCat);

console.log(filtered);
```
console.log only items of cats array that start with "L"

## Standard for Loop
### for loop
``` js 
for (initializer; condition; final-expression){
    //code to run
}
```
intializer: usually a variable set to a number, which is incremented to count the number of times the loop has run

condition: defines when the loop should stop looping

final-expression: Serves to increment the counter variable

## break statement
example:
``` js 
const contacts = [
  "Chris:2232322",
  "Sarah:3453456",
  "Bill:7654322",
  "Mary:9998769",
  "Dianne:9384975",
];
const para = document.querySelector("p");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const searchName = input.value.toLowerCase();
  input.value = "";
  input.focus();
  para.textContent = "";
  for (const contact of contacts) {
    const splitContact = contact.split(":");
    if (splitContact[0].toLowerCase() === searchName) {
      para.textContent = `${splitContact[0]}'s number is ${splitContact[1]}.`;
      break;
    }
  }
  if (para.textContent === "") {
    para.textContent = "Contact not found.";
  }
});
```
exit loop with break statement. In this case, exit loop when corresponding contaxt found.

## continue statement
Use contine statement to next iteration of the loop

 example:
 ``` js
 const para = document.querySelector("p");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  para.textContent = "Output: ";
  const num = input.value;
  input.value = "";
  input.focus();
  for (let i = 1; i <= num; i++) {
    let sqRoot = Math.sqrt(i);
    if (Math.floor(sqRoot) !== sqRoot) {
      continue;
    }
    para.textContent += `${i} `;
  }
});
```
Gives numbers that are square of integers until the given number

## While Loop
Form:
``` js
initializer
while (condition){
    //code to run

    final-expression
}
```
Similar to for loop, but initializer variable is set before the loop and final expression is included inside the lopp afte rthe code to run.

Example:
``` js
const cats = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "My cats are called ";

let i = 0;

while (i < cats.length) {
  if (i === cats.length - 1) {
    myFavoriteCats += `and ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }

  i++;
}

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, and Jasmine."
```

introduce all the items in cats array with varied forms according to the position of the items within the array using while loop

### do ... while loops
form:
``` js
initializer
do {
    //code to run 
    final-expression
} while (condition)
```

initializers too come before the loop starts. In comparison to While loops, do...while loop is always executed at least once.

So the code would always run once and than check condition if run again or not.

example:
``` js
const cats = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "My cats are called ";

let i = 0;

do {
  if (i === cats.length - 1) {
    myFavoriteCats += `and ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }

  i++;
} while (i < cats.length);

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, and Jasmine."
```