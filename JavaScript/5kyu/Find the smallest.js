function commute(s, i, j) {
    if (i === j) {
        return s;
    }
    if (j < i) {
        return s.slice(0, j) + s[i] + s.slice(j, i) + s.slice(i + 1)
    }

    return s.slice(0, i) + s.slice(i + 1, j + 1) + s[i] + s.slice(j + 1);
}

function smallest(n) {
    const s = String(n);
    let best = [n, 0, 0];
    for (let i = s.length - 1; i >= 0; i--) {
        for (let j = s.length - 1; j >= 0; j--) {
            let candidate = +commute(s, i, j);
            if (candidate > best[0]) {
                continue;
            }
            best = [candidate, i, j];
        }
    }
    return best;
}