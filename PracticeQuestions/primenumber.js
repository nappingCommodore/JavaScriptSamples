// Code for checking a number is prime or not

function isPrime(number) {
    if(number <= 1) {
        return false;
    }

    for(var i = 2; i < Math.floor(Math.sqrt(number)); i++) {
        if(number % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(1112));