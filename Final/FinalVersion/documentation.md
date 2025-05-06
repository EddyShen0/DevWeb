# Final Project Documentation
 
## Summary
This website performs simple tarot reading by integrating AI chatbots (llama3-70b-8192) via groq API

- Users will type in the question they seek to ask and then be asked to pull 4 cards from a deck of 22 major arcana tarot cards randomly ordered. Depending on the cards pulled, the chat bot would generate a reading for each card and an overview analysis which the viewers would be able to view by interacting with the site.

## Image Demonstration
![Alt text](/Final/FinalVersion/image/demonstration.png)


## Code Snippet
``` javascript
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
                             provide imaginary situations as examples to further explain when necessary, and give a straightforward
                             un-ambiguous solution or outcome predicted by the cards, may it be undesired and discouraging if necessary.
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
                        if(!dataContent.endsWith(`"`)){
                            dataContent += '"}]'
                        }else{
                        dataContent += "}]"
                        }
                    }else{
                        dataContent += "]"
                    }
                    console.log(dataContent)
                }
    
                return JSON.parse(dataContent);
            } else {
                console.error(await response.json());
            }
        }
```
I learned how to integrate AI chat bot in JS through API. This code basically takes the question inputted by the user and send it to the AI. The AI then take the question and answer it according to the guideline I set based on the tarot input. Eventually, the output would be formatted into JSON form. However, because sometimes the AI would output invalid JSONs, most commonly the missing of brackets add the end, so I added a simple automatic adjustment code that would add the brackets if missing. But this code only deals with brackets missing at the end of the JSON, so errors will still occur if the missing happens at the middle.

## Notes
#### Struggles
The part that took most of my time was the animation and interaction part. They don't involve much new technical stuff, but require a lot of logical computations and minor adjustments. The AI portion was fairly easy which I was able to get it work at the very first day of the project. 

#### Proud
I am proud of my animation effects, and I think it works very well overall. I am also pretty satisfied with the tarot card designs. Though I didn't get a chance to draw them myself, but atleast the color pallette worked well.

#### Future
I would consider adding sound effects to further the interactivity and experience. I would also consider get the rest of the deck done (whole Tarot deck). In addition, I could also add a time lock, where users have to wait for a certain amount of time before they could perform tarot reading again, encouraging users to treat each reading more seriously. 