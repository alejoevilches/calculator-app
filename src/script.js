/* Declaración de constantes (los botones) */
const numbers=document.querySelectorAll(".number");
const operations=document.querySelectorAll(".operation");
const del=document.getElementById("del");
const reset=document.getElementById("reset");
const equal=document.getElementById("equal");
const dot=document.getElementById("dot");
const calcScreen=document.querySelector(".calc_screen");

/* Declaración de variables */
let screenNumbers
let newNumber

/* Función para hacer que los números y las operaciones aparezcan en la pantalla */
function showNumbers(){
numbers.forEach(number => {
    number.addEventListener("click", ()=>{
        if (screenNumbers==undefined){
            screenNumbers=number.innerText;
        } else {
            screenNumbers+=number.innerText;
        }
        calcScreen.innerText=screenNumbers;
        console.log(screenNumbers)
    })
})

operations.forEach(operation =>{
    operation.addEventListener("click",()=>{
        if (screenNumbers==undefined){
            alert("Primero debes ingresar un número");
        } else {
            screenNumbers+=operation.innerText;
            console.log(operation.innerText)
        }
    })
})
};

function calculate(){
    equal.addEventListener("click", ()=>{
        screenNumbers=eval(screenNumbers);
        calcScreen.innerText=screenNumbers;
    })
}

function deleteNumbers(){
    del.addEventListener("click", ()=>{
        newNumber = calcScreen.innerText.slice(0,-1);
        calcScreen.innerText=newNumber;
        screenNumbers=newNumber;
    })
}


function calc(){
    showNumbers();
    calculate();
    deleteNumbers();
}

calc();