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
    if (firstNum = true){
        console.log("One");
        output.value = (output.value + "1");
    }
    else {
        output.value = (output.value + "1");
    }

});

add.addEventListener("click", function() {
    firstNum = false;
    a = a;
    output.value = (output.value + "+");
})

function clearResult (){
    output.value = "";
    a = null;
    b = null;
    firstNum = true;
}