    let deck = [
        "The Fool", 
        "The Magician",
        "The High Priestess",
        "The Empress",
        "The Emperor",
        "The Hierophant",
        "The Lovers",
        "The Chariot",
        "Strength",
        "The Hermit",
        "Wheel of Fortune",
        "Justice",
        "The Hanged Man",
        "Death",
        "Temperance",
        "The Devil",
        "The Tower",
        "The Star",
        "The Moon",
        "The Sun",
        "Judgement",
        "The World"
        ]
    let direction = [
        "Upright",
        "Upright",
        "Upright",
        "Reversed"
    ]

let pullResult = []
let result = ``
let input = document.getElementById("input")
let main = document.getElementById("main")
let startPage = document.getElementById('start')
input.placeholder = "What do you want to ask?"

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }

//This function took reference from https://stackoverflow.com/questions/78391185/how-do-i-avoid-sdk-and-use-raw-fetch-with-groq-api
//Thanks to GroqCloud for providing free chat bot api
    async function callGroq() {

        let question = input.value
        if (input.value !== ""){
            question = input.value
        } else {
            question = "Tarot reading in general"
        }
        console.log(question)

        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    //Got warned by github for exposed key, but since short-term and free use I think its fine
                    //to expose it. I have no idea how to hide it anywys
                    Authorization: `Bearer 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`
                },
                body: JSON.stringify({
                    messages: [
                        {
                            role: 'system',
                            content:
                            `
                            Please return your response solely as a valid 5 object JSON array with one object per card 
                            and a object at the end a long comprehensive analysis of all cards altogether.
                            Follow the following spread: 
                            card 1 = what you need to know card 2 = what you need to embrace card 3 = what you need to release card 4 = whats next?
                            Each card object should have this structure: 
                            {"cardName": "string", "direction": "string", "meaning": "string", "implication": "string", "advice": "string"} 
                            and the analysis object should have this:
                            {"analysis": "string"}
                            and no other text other than the JSON array.
                             Make sure the advice is about a paragraph long,
                             get as specific as possible, consider the cards as a whole as see how they interact with each other
                             provide imaginary situations as examples to further explain when necessary,
                             and its okay to offer negative analysis if necessary`
                        },
                        {
                            role: 'user',
                            content: `Prompt: ${question}. Tarot Deck: ${result}`
                        }
                    ],
                    model: 'llama3-70b-8192',
                    temperature: 1,
                    top_p: 1,
                    stream: false,
                    stop: null
                })
            });
    
            if (response.ok) {
                const data = await response.json();
                let dataContent = data.choices[0].message?.content
                console.log(dataContent);
    //Adjustment code to fix the ending of the JSON output of AI
    //Some how the outputs often lack either "] or "}]" at the end
                if(!dataContent.endsWith("]")){
                    if(!dataContent.endsWith("}")){
                        dataContent += "}]"
                    }else{
                        dataContent += "]"
                    }
                    console.log(dataContent)
                }
    
                return JSON.parse(dataContent);
            } else {
                console.error(await response.json());
                console.log("omg")
            }
        }
        async function start(){
    let deckT = [...deck]
    result = ""
    for (i=0;i<4;i++){
        let cardNum = Math.floor(Math.random()*(22-i))
        let directionNum = Math.floor(Math.random()*4)
        pullResult.push([deckT[cardNum], direction[directionNum]])
        result +=  ` card${i+1} name: ${deckT[cardNum]} direction: ${direction[directionNum]}.`
        deckT.splice(cardNum,1)
    }
    console.log(result)
        let reading = await callGroq()
        
        console.log(reading[0])


        main.innerHTML = ""

for(let i=0;i<4;i++){
    let card = document.createElement("ul")
    let name = document.createElement("li")
    let direction = document.createElement("li")
    let meaning = document.createElement("li")
    let implication = document.createElement("li")
    let advice = document.createElement("li")
    name.innerHTML = "<strong>"+ reading[i].cardName+"</strong>"
    direction.innerHTML = reading[i].direction
    meaning.innerHTML = reading[i].meaning
    implication.innerHTML = reading[i].implication
    advice.innerHTML = reading[i].advice
    card.append(name,direction,meaning,implication,advice)
    main.appendChild(card)
}
    let general = document.createElement("p1")
    general.innerHTML = reading[4].analysis
    main.appendChild(general)
    }

//TAROT CARD FUNCTION
let card = document.getElementById("card")
function tarotCard(targetBody){
    let effect = document.createElement("div")
    effect.className = "eff"
    targetBody.append(effect)
    setInterval(() => draw(effect), 80)
}
tarotCard(card)


    let reverse = true
    let covers = document.getElementsByClassName("coverColor")        
    let height = 0
    // function coverAnimation(){
    //  height += 0.7
    //  if(height >= 150){
    //     height = 0
    // }

    // if(reverse === true){
    // for(i=0;i<covers.length;i++){
    //     let cover = covers[i];
    //     cover.style.height = `${height}px`
    //     }
    // effect.style.transform = `translate(0px,${height}px)`
    // }
    // }   
    // setInterval(coverAnimation,10)

function draw(targetBody){
    targetBody.innerHTML = ""
        for(i=0;i<85;i++){
            let size = 100/21
           let num1 = getRandom(-0.5,0.5)
            let num2 = getRandom(-1.6,1.6)
            let color = Math.floor(Math.random()*360)
            let square = document.createElement("div")
            square.style.backgroundColor = `hsl(${color},100%,50%)`
            square.style.position = "absolute"
            square.style.width = `${size}px`
            square.style.height = `${size}px`
            square.style.transform = `translate(${Math.floor(Math.pow(num1,3)*105)*size}px,${Math.floor(1.5+num2)*size}px)`
            targetBody.append(square)
            
        }
        console.log(Math.floor(Math.pow(0.5,3)*105))
    }

