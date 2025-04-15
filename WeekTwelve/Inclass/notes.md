# Json
store string information

example:
``` json
{
  "name": "Jane Doe",
  "age": 30,
  "isStudent": false
}
```
``` js
//Json --> Js
const jsonString = '{"name": "Jane"}';
const obj = JSON.parse(jsonString);
console.log(obj.name); // "Jane"

//Js --> Json
const obj = {name: "Jane"}
const jsonString = JSON.stringify(obj)
```

``` json
[
  {
    "name": "Hero One",
    "powers": ["Flying", "Strength"]
  },
  {
    "name": "Hero Two",
    "powers": ["Invisibility", "Speed"]
  }
]
```