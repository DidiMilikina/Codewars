function partConst(n, k, num) {
    return partition(n, k, n).filter(part => part.indexOf(num) < 0).length;

    function partition(n, k, p) {
        if (n <= 0) return [];
        if (k === 1) return n <= p ? [[n]] : [];
        let output = [];

        for (let i = Math.min(p, n); i >= 1; i--) {
            let s = partition(n - i, k - 1, i).map(v => [i].concat(v));
            output = output.concat(s)
        }
        return output;
    }
}