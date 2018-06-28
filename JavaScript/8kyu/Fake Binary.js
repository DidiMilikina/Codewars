function fakeBin(x) {
    let binString = '';

    for (let i = 0; i < x.length; i++) {
        let parseNum = parseInt(x[i]);

        if (parseNum < 5) {
            binString = binString + '0';
        } else if (parseNum >= 5) {
            binString = binString + '1';
        }
    }

    return binString;
}