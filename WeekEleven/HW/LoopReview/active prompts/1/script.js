const output = document.querySelector('.output')
for (let i = 10; i >= 0; i --){
    const para = document.createElement('p');
    output.appendChild(para)
    let content
    if (i === 10){
        content = "Countdown 10"
    } else 
    if (i === 0){
        content = "Blast off!"
    } else {
        content = `${i}`
    }
    para.textContent = content
}

