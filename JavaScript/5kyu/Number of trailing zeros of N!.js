function zeros(n) {
    let numOfZeros = 0;

    while (n > 0) {
        n = Math.floor(n / 5);
        numOfZeros += n
    }

    return numOfZeros;
}