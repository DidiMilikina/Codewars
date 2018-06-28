function digital_root(n) {
    if (n === 0) {
        return 0;
    } else {
        return (n % 9 == 0) ? 9 : (n % 9);
    }
}