function michaelPays(costs) {
    let p = costs < 5 ? costs : costs * 2 / 3;
    return Math.round(Math.max(p, costs - 10) * 100) / 100;
}