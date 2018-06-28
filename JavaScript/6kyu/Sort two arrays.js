const sortArrays = (arr1, arr2) => [
    arr2.map((z, i) => i).sort((a, b) => arr2[a] - arr2[b] || a - b).map(x => arr1[x]),
    arr1.map((z, i) => i).sort((a, b) => arr1[a] - arr1[b] || a - b).map(x => arr2[x]),
];