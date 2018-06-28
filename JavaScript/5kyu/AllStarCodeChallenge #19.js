function sloganMaker(array) {
    let uniques = new Set(array);

    return output(Array.from(uniques));
}

function output(array) {
    if (array.length < 2){
        return array;
    }
    let permutations = [];

    for (let i = 0; i < array.length; i++) {
        let currentWord = array[i];
        let remaining = array.slice(0,i).concat(array.slice(i + 1));

        output(remaining).forEach((el) => permutations.push(currentWord + ' ' + el));
    }

    return permutations;
}