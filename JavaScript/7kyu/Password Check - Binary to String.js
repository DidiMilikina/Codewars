function decodePass(passArr, bin) {
    let pass = bin.split(' ').reduce((str, bin) => str + String.fromCharCode(parseInt(bin, 2)), "");
    return passArr.includes(pass) ? pass : false;
}