let a = null;
let b = null;
let op = null;

function add (a, b){
    return a+b;
}

function subtract (a, b){
    return a-b;
}

function divide (a,b){
    return a/b;
}

function multiply (a,b){
    return a*b;
}

function operate (a,b,op){
    if (op == add){
        add(a,b);
    }
    else if (op == subtract){
        subtract(a,b);
    }
    else if (op == divide){
        divide(a,b);
    }
    else if (op == multiply){
        multiply(a,b);
    }
}

let zero = document.querySelector(".zero");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");