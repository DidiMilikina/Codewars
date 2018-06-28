function rowWeights(array) {
    return [array.filter((x, i) => i % 2 === 0).reduce((a, b) => a + b, 0),
        array.filter((x, i) => i % 2 !== 0).reduce((a, b) => a + b, 0)
    ];
}