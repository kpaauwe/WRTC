function printPrime() {
    var n= prompt("Find prime numbers up to: ");
    primeNumbers = [];
    primeNumbers.push(2);
    primeNumbers.push(3);
    primeNumbers.push(5);
    primeNumbers.push(7);
    for (let i =2; i <= n;  i++) {
        if (!(i%2==0 || i%3==0 || i%5==0 || i%7==0)) {
            primeNumbers.push(i);
        }
    }
    const iterator = primeNumbers.values();
    for (let value of iterator) {
        document.getElementById("primeNum").innerHTML += value + " ";
    }
    document.getElementById("primeNum").innerHTML += "<br>Number of Prime Numbers up to " + n + ": " + primeNumbers.length + "<br>";
}