function isIsogram(str) {
    if (typeof str === undefined) {
        return true;
    }
    let passing = true;

    let str2 = str.toLowerCase();
    let counts = {};

    for (i = 0; i <= str2.length; i++) {
        let letter = str2.charAt(i);

        if (counts[letter]) {
            counts[letter] = 1 + counts[letter];
        } else {
            counts[letter] = 1;
        }
        if (counts[letter] > 1) {
            return passing = false;
        }
    }

    return passing;
}