function u1(n) {
    var memu = [1, 1];
    var i = 2;
    while (i < n) {
        memu.push(memu[i - memu[i - 1]] + memu[i - memu[i - 2]]);
        i++;
    }
    return memu;
}

function lengthSupUK(n, k) {
    return u1(n).filter(function (x) { return (x >= k); }).length;
}

function comp(n) {
    var memu = u1(n);
    var prev = 1, cnt = 0, i = 1;
    while (i < n) {
        var cur = memu[i];
        if (cur < prev)
            cnt++;
        prev = cur;
        i++;
    }
    return cnt;
}
