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
    if (firstNum == true){
        if (firstNumber == null){
            firstNumber = 0;
            console.log(firstNumber);
            output.value = (output.value + "0");
        }
        else{
                
                firstNumber = firstNumber + "0";
                console.log(firstNumber);
                output.value = (output.value + "0");
            }
    }
    else {
        if (secondNumber == null){
            secondNumber = 0;
            console.log(secondNumber);
            output.value = (output.value + "0");
        }
        else{
            secondNumber = secondNumber + "0";
            console.log(secondNumber);
            output.value = (output.value + "0");
        }
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

two.addEventListener("click", function() {
    if (firstNum == true){
        if (firstNumber == null){
            firstNumber = 2;
            console.log(firstNumber);
            output.value = (output.value + "2");
        }
        else{
                
                firstNumber = firstNumber + "2";
                console.log(firstNumber);
                output.value = (output.value + "2");
            }
    }
    else {
        if (secondNumber == null){
            secondNumber = 2;
            console.log(secondNumber);
            output.value = (output.value + "2");
        }
        else{
            secondNumber = secondNumber + "2";
            console.log(secondNumber);
            output.value = (output.value + "2");
        }
    }

});

three.addEventListener("click", function() {
    if (firstNum == true){
        if (firstNumber == null){
            firstNumber = 3;
            console.log(firstNumber);
            output.value = (output.value + "3");
        }
        else{
                
                firstNumber = firstNumber + "3";
                console.log(firstNumber);
                output.value = (output.value + "3");
            }
    }
    else {
        if (secondNumber == null){
            secondNumber = 3;
            console.log(secondNumber);
            output.value = (output.value + "3");
        }
        else{
            secondNumber = secondNumber + "3";
            console.log(secondNumber);
            output.value = (output.value + "3");
        }
    }

});

four.addEventListener("click", function() {
    if (firstNum == true){
        if (firstNumber == null){
            firstNumber = 4;
            console.log(firstNumber);
            output.value = (output.value + "4");
        }
        else{
                
                firstNumber = firstNumber + "4";
                console.log(firstNumber);
                output.value = (output.value + "4");
            }
    }
    else {
        if (secondNumber == null){
            secondNumber = 4;
            console.log(secondNumber);
            output.value = (output.value + "4");
        }
        else{
            secondNumber = secondNumber + "4";
            console.log(secondNumber);
            output.value = (output.value + "4");
        }
    }

});

five.addEventListener("click", function() {
    if (firstNum == true){
        if (firstNumber == null){
            firstNumber = 5;
            console.log(firstNumber);
            output.value = (output.value + "5");
        }
        else{
                
                firstNumber = firstNumber + "5";
                console.log(firstNumber);
                output.value = (output.value + "5");
            }
    }
    else {
        if (secondNumber == null){
            secondNumber = 5;
            console.log(secondNumber);
            output.value = (output.value + "5");
        }
        else{
            secondNumber = secondNumber + "5";
            console.log(secondNumber);
            output.value = (output.value + "5");
        }
    }

});

six.addEventListener("click", function() {
    if (firstNum == true){
        if (firstNumber == null){
            firstNumber = 6;
            console.log(firstNumber);
            output.value = (output.value + "6");
        }
        else{
                
                firstNumber = firstNumber + "6";
                console.log(firstNumber);
                output.value = (output.value + "6");
            }
    }
    else {
        if (secondNumber == null){
            secondNumber = 6;
            console.log(secondNumber);
            output.value = (output.value + "6");
        }
        else{
            secondNumber = secondNumber + "6";
            console.log(secondNumber);
            output.value = (output.value + "6");
        }
    }

});

seven.addEventListener("click", function() {
    if (firstNum == true){
        if (firstNumber == null){
            firstNumber = 7;
            console.log(firstNumber);
            output.value = (output.value + "7");
        }
        else{
                
                firstNumber = firstNumber + "7";
                console.log(firstNumber);
                output.value = (output.value + "7");
            }
    }
    else {
        if (secondNumber == null){
            secondNumber = 7;
            console.log(secondNumber);
            output.value = (output.value + "7");
        }
        else{
            secondNumber = secondNumber + "7";
            console.log(secondNumber);
            output.value = (output.value + "7");
        }
    }

});

eight.addEventListener("click", function() {
    if (firstNum == true){
        if (firstNumber == null){
            firstNumber = 8;
            console.log(firstNumber);
            output.value = (output.value + "8");
        }
        else{
                
                firstNumber = firstNumber + "8";
                console.log(firstNumber);
                output.value = (output.value + "8");
            }
    }
    else {
        if (secondNumber == null){
            secondNumber = 8;
            console.log(secondNumber);
            output.value = (output.value + "8");
        }
        else{
            secondNumber = secondNumber + "8";
            console.log(secondNumber);
            output.value = (output.value + "8");
        }
    }

});

nine.addEventListener("click", function() {
    if (firstNum == true){
        if (firstNumber == null){
            firstNumber = 9;
            console.log(firstNumber);
            output.value = (output.value + "9");
        }
        else{
                
                firstNumber = firstNumber + "9";
                console.log(firstNumber);
                output.value = (output.value + "9");
            }
    }
    else {
        if (secondNumber == null){
            secondNumber = 9;
            console.log(secondNumber);
            output.value = (output.value + "9");
        }
        else{
            secondNumber = secondNumber + "9";
            console.log(secondNumber);
            output.value = (output.value + "9");
        }
    }

});

add.addEventListener("click", function() {
    if (operation != undefined){
        alert("Please only do one operation at time");
    }
    else {
    firstNum = false;
    output.value = (output.value + "+");
    operation = "+";
    }
})

minus.addEventListener("click", function() {
    if (operation != undefined){
        alert("Please only do one operation at time");
    }
    else {
    firstNum = false;
    output.value = (output.value + "-");
    operation = "-";
    }
})

times.addEventListener("click", function() {
    if (operation != undefined){
        alert("Please only do one operation at time");
    }
    else {
    firstNum = false;
    output.value = (output.value + "*");
    operation = "*";
    }
})

divide.addEventListener("click", function() {
    if (operation != undefined){
        alert("Please only do one operation at time");
    }
    else {
    firstNum = false;
    output.value = (output.value + "/");
    operation = "/";
    }
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

    else if (operation == "*"){
        total = parseInt(firstNumber) * parseInt(secondNumber);
        output.value = (output.value + "=" + total);
    }
    else if (operation == "/"){
        if (parseInt(secondNumber) == 0){
            alert("Cannot divide by zero!");
        }
        else{
        total = parseInt(firstNumber) / parseInt(secondNumber);
        output.value = (output.value + "=" + total);
        }
    }

})

function clearResult (){
    output.value = "";
    firstNumber = null;
    secondNumber = null;
    firstNum = true;
}