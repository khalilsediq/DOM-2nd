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


const q15Btn = document.querySelector("#q15-btn")
const para = document.querySelector("#para")
const agree = document.querySelector("#agree")
agree.addEventListener('click', ()=>{
    if (agree.checked) {
        para.innerHTML =  "Agreed"
        
    }else{
        para.innerHTML = "Not Agreed"
    }
})
/////////////////////////////////


const options = document.querySelector("#options")
const selectedValue = document.querySelector("#selectedValue")
options.addEventListener('change', ()=>{
    const selectedVal = options.value
    
    selectedValue.textContent = selectedVal
    
})    
///////////////////////////////////

const bt17 = document.querySelector("#btNo-17")
const dateTime = document.querySelector("#dateTime")
bt17.addEventListener('click', ()=>{
    const date = Date();
    dateTime.innerHTML = date
    console.log(date);
    dateTime.style.border = '1px solid black'
    dateTime.style.padding = '20px'
    dateTime.style.margin = '10px'
    dateTime.style.borderRadius = '10px'
    dateTime.style.color = 'red'
})
//////////////////////////////

const bt18 = document.querySelector("#bt18")
const togglePara = document.querySelector("#togglePara")
if (bt18) {
    bt18.addEventListener('click', ()=>{
        if (togglePara.style.display === 'block') {
            togglePara.style.display = 'none'           
        }else{
            togglePara.style.display = 'block'
        }
    })
}
////////////////////////////////////

const bt19 = document.querySelector("#bt19")
const age = document.querySelector('#age')
const ageResult = document.querySelector("#ageResult")
bt19.addEventListener("click", ()=>{
    if (age.value >= 18) {
        // alert('Eligible')  
        ageResult.innerHTML = "Eligible"
        age.value = ''
    }
    else{
        // alert("Not Eligible")
        ageResult.innerHTML= "Not Eligible"
        age.value = ''
    }
})
////////////////////////////////////////

const bt20 = document.querySelector("#bt20")
const searchBox = document.querySelector("#searchBox")
bt20.addEventListener("click", ()=> {
    searchBox.value = ''
})