function decomp(n) {
    let primes = {};

    for (let i = n; i > 0; i--) {
        let number = i;

        for (let j = 2; number > 1; j++) {

            while (number % j === 0) {
                number /= j;
                primes[j] = j in primes ? primes[j] + 1 : 1;
            }
        }
    }

    let output = [];

    for (const prime in primes) {
        output.push(primes[prime] ? prime + (primes[prime] > 1 ? '^' + primes[prime] : '') : '');
    }

    return output.join ` * `;
}