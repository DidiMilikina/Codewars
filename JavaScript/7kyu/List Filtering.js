function filter_list(l) {
    return l.reduce(function (a, b) {
        if (typeof b === 'number') a.push(b);
        return a;
    }, []);
}