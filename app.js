const qNoBtn = document.querySelector("#q1-btn")
const message = document.querySelector("#message")
qNoBtn.addEventListener('click',  () =>{
    message.innerHTML = 'Welcome!'
} )
////////////////////////////////

const qNo2Btn = document.querySelector("#q2-btn")
const nameInput = document.querySelector("#nameInput")
const result = document.querySelector("#result")
qNo2Btn.addEventListener('click', ()=>{
    result.innerHTML += nameInput.value
    nameInput.value = ""
})
/////////////////////////////////

const qNo3Btn = document.querySelector("#q3-btn")
const container = document.querySelector("#container")
container.style.border = '2px solid black'
container.style.padding = '10px'
container.style.margin = '20px'
container.style.borderRadius = '10px'
qNo3Btn.addEventListener("click", ()=>{
   container.style.backgroundColor = 'lightblue'
})
////////////////////////////////////////

const q4Btn = document.querySelector("#q4-btn")
const mainTitle = document.querySelector("#mainTitle")
q4Btn.addEventListener("click", ()=> {
    mainTitle.style.color = 'red';
})
/////////////////////////////////////////

const q5Btn = document.querySelector("#q5-btn")
const output = document.querySelector("#output")
const num1 = document.querySelector("#num1")
q5Btn.addEventListener("click", ()=>{
    output.innerHTML += num1.value
    num1.value = ""
})
///////////////////////////////////////
const q7Btn = document.querySelector("#q7-Btn")
const first = document.querySelector("#first")
const second = document.querySelector("#second")
const sum = document.querySelector("#sum")
q7Btn.addEventListener("click", ()=> {
    
    
    
    const resultNum = +first.value + +second.value
    if (resultNum === 0) {
        alert("inputs Empty")
    } else{
        sum.innerHTML = resultNum
        first.value = ""
        second.value = ""
    }
})
/////////////////////////////////////
