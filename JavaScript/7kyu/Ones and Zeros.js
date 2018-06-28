const binaryArrayToNumber = arr => {
    return parseInt((arr + '')
        .replace(/[^01]/gi, ''), 2);
};