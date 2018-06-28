function filterHomogenous(array) {
    return array.filter(array => array.length && array.every(x => typeof x === typeof array[0]))
}