var useTimer = false;
var startTime;
var endTime;

var timer = function() {
    return { 
        timerStart: function() {
            startTime = Date.now();
        },
        timerStop: function() {
           endTime = Date.now();
        },
        timerToggle: function() {
            useTimer = (useTimer === false) ? true : false;
            document.getElementById('timerData').innerHTML = "Timer Set to: " + useTimer + "<br>";
        },
        timerPrint: function() {
            const timeTaken = endTime - startTime;
            document.getElementById("timerData").innerHTML += "Time Taken: " + timeTaken + "<br>";
        }
    }
};

/* Stub function with timer implementation

function funcName() {
    input = prompt("Prompt");
    if (useTimer) timer().timerStart();
    
    //Function Logic

    document.getElementById("id").innerHTML = what to write out;
    if (useTimer) {
        timer().timerStop();
        timer().timerPrint();
    }
}

*/

function printPrime() {
    var n = 0;
    while (n < 1) {
        n = prompt("Find prime numbers up to: (Enter positive integer)");
    }
    if (useTimer) timer().timerStart();
    const primeNumbers = [];
    var num = 2;
    while (num < n) {
        let isPrime = true;
        for (let i =2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false; 
                break;
            }
        }
        if (isPrime) {
            primeNumbers.push(num);
        }
        num++;
    }
    document.getElementById("primeNum").innerHTML = primeNumbers.join(" ") +  "<br>Number of Prime Numbers up to " + n + ": " + primeNumbers.length + "<br>";
    if (useTimer) {
        timer().timerStop();
        timer().timerPrint();
    }
}

function reverseString(){
    const inOrder = prompt("Enter a string to be reversed: ");
    if (useTimer) timer().timerStart();
    var reversed = [];
    for (let i=0; i < inOrder.length; i++) {
        reversed.push(inOrder[inOrder.length - i - 1]);
    }
    document.getElementById("reverseString").innerHTML = "<br>Reversed String " + inOrder + " = " + reversed.join("") + "<br>";
    if (useTimer) {
        timer().timerStop();
        timer().timerPrint();
    }
}

function calculateFactorial(){
    const num = prompt("Find the factorial of: (Enter Positive Integer)");
    if (useTimer) timer().timerStart();
    let factorial =1;
    for (let i =1; i <= num; i++){
        factorial *= i;
        if (factorial === Infinity) break; //170 is highest i before infinity is reached
    }
    document.getElementById("factorial").innerHTML = "<br>The Factorial of "+ num + " is:" + factorial + "<br>";
    if (useTimer) {
        timer().timerStop();
        timer().timerPrint();
    }
}

function calculateFibonacci(numOne,numTwo,i,input) {
    if (i === 0) {
        var input = prompt("Find Fibonacci number at index: (Enter Zero-based Positive Integer)");
        if (useTimer) timer().timerStart();
    }
    if (i < input && numTwo !== Infinity) {
        let numThree = numOne + numTwo;
        i++;
        calculateFibonacci(numTwo, numThree, i,input);
    } else {
        document.getElementById("fibonacci").innerHTML = "<br>The " + input + "th Fibonnaci Number is: " + numOne + "<br>";
        if (useTimer) {
            timer().timerStop();
            timer().timerPrint();
        }
    }
}
