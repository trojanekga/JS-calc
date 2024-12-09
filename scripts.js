let a = null;
let b = null;
let op = null;
let firstNum = true;

function addition (a, b){
    return a+b;
}

function subtraction (a, b){
    return a-b;
}

function division (a,b){
    return a/b;
}

function multiplication (a,b){
    return a*b;
}

function operate (a,b,op){
    if (op == addition){
        add(a,b);
    }
    else if (op == subtraction){
        subtract(a,b);
    }
    else if (op == division){
        divide(a,b);
    }
    else if (op == multiplication){
        multiply(a,b);
    }
}

const zero = document.querySelector(".zero");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let times = document.querySelector(".times");
let divide = document.querySelector(".divide");
let add = document.querySelector(".add");
let clear = document.querySelector(".clear");
let minus = document.querySelector(".minus");
let equals = document.querySelector(".equals");
let output = document.querySelector(".output");
let firstNumber;
let secondNumber;
let total;
let operation;

clear.addEventListener("click", function() {
    clearResult();
});

zero.addEventListener("click", function() {
    if (firstNum = true){
        console.log("Zero");
        output.value = (output.value + "0");
    }
    else {
        output.value = (output.value + "0");
    }
});
one.addEventListener("click", function() {
    if (firstNum == true){
        if (firstNumber == null){
            firstNumber = 1;
            console.log(firstNumber);
            output.value = (output.value + "1");
        }
        else{
                
                firstNumber = firstNumber + "1";
                console.log(firstNumber);
                output.value = (output.value + "1");
            }
    }
    else {
        if (secondNumber == null){
            secondNumber = 1;
            console.log(secondNumber);
            output.value = (output.value + "1");
        }
        else{
            secondNumber = secondNumber + "1";
            console.log(secondNumber);
            output.value = (output.value + "1");
        }
    }

});

add.addEventListener("click", function() {
    firstNum = false;
    output.value = (output.value + "+");
    operation = "+";
})

minus.addEventListener("click", function() {
    firstNum = false;
    output.value = (output.value + "-");
    operation = "-";
})

equals.addEventListener("click", function(){
    if (operation == "+"){
        total = parseInt(firstNumber) + parseInt(secondNumber);
        output.value = (output.value + "=" + total);
    }

    else if (operation == "-"){
        total = parseInt(firstNumber) - parseInt(secondNumber);
        output.value = (output.value + "=" + total);
    }

})

function clearResult (){
    output.value = "";
    a = null;
    b = null;
    firstNum = true;
}