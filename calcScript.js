function add() {}

function substract() {}

function multiply() {}

function divide() {}

let numbersContainer = document.getElementById("numbers")

function buttonsModel(btn) {
        btn.style.width = "25%"
        btn.style.height = "auto"}

const buttons = [["(",",",")","÷"],["1","2","3", "*"],["4","5","6", "-"], ["7","8","9", "+"],["0",".","C", "="]]

for (let i = 0; i < buttons.length; i++) {
    let charsIndex = buttons[i] 
    
    for (let j = 0; j < charsIndex.length; j++) {
        let calcButtons = document.createElement("button")
        calcButtons.textContent = charsIndex[j]
        calcButtons.style.fontSize = "25px"
        buttonsModel(calcButtons)
        
        numbersContainer.appendChild(calcButtons)
}}
