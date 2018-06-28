L = (n, L0, L1, add) => {
    let result = [];
    result[0] = L0;
    result[1] = L1;
    
    for (i = 2; i < n; i++) {
        result[i] = result[i - 1] + result[i - 2] + add;
    }

    return result;
};