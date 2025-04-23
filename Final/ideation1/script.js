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

function pullCards(){
    let deckT = [...deck]
    for (i=0;i<4;i++){
        let cardNum = Math.floor(Math.random()*(22-i))
        let directionNum = Math.floor(Math.random()*4)
        pullResult.push([deckT[cardNum], direction[directionNum]])
        result +=  ` card${i+1} name: ${deckT[cardNum]} direction: ${direction[directionNum]}.`
        deckT.splice(cardNum,1)
    }
    console.log(result)
}

pullCards()


//This function took reference from https://stackoverflow.com/questions/78391185/how-do-i-avoid-sdk-and-use-raw-fetch-with-groq-api
//Thanks to GroqCloud for providing free chat bot api
    async function callGroq() {
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
                                Please return your response solely as a valid JSON array with one object per card and absolutely no other text. 
                                Each object should have this structure: 
                                {"cardName": "string", "direction": "string", "meaning": "string", "implication": "string", "advice": "string"} 
                                and nothing else. Make sure the advice is about a paragraph long.`
                        },
                        {
                            role: 'user',
                            content: `Prompt: Academic career. Tarot Deck: ${result}`
                        }
                    ],
                    model: 'llama3-8b-8192',
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
        let reading = await callGroq()
        console.log(reading[0])
        }