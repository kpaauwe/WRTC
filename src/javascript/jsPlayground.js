function printPrime() {
    var n = 0;
    while (n < 1) {
        n = prompt("Find prime numbers up to: ");
    }
    const primeNumbers = [];
    var num = 2;
    while (num < n) {
        let isPrime = true;
        for (let i =2; i <= Math.sqrt(num);  i++) {
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
    const iterator = primeNumbers.values();
    for (let value of iterator) {
        document.getElementById("primeNum").innerHTML += value + " ";
    }
    document.getElementById("primeNum").innerHTML += "<br>Number of Prime Numbers up to " + n + ": " + primeNumbers.length + "<br>";
}