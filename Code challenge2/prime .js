function findPrimesInRange(start, end) {

    function isPrime(num) {

        if (num <= 1) return false;

        for (let i = 2; i <= Math.sqrt(num); i++) {

            if (num % i === 0) return false;

        }

        return true;

    }

    let primes = [];

    for (let i = start; i <= end; i++) {

        if (isPrime(i)) {

            primes.push(i);

        }

    }

    return primes;

}

const start = 10;

const end = 20;

const primeNumbers = findPrimesInRange(start, end);

console.log(`${primeNumbers.join(', ')}`);

