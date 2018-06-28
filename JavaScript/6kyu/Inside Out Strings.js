function insideOut(x) {

    let result = [];
    for (let item of x.split(' ')) {
        let length = item.length;

        if (length > 3) {
            let middle = Math.floor(length / 2);

            if (length % 2 == 0) {
                item = item.substring(0, middle).split('').reverse().join('').concat(item.substring(middle, length).split('').reverse('').join(''));
            } else {
                item = item.substring(0, middle).split('').reverse().join('').concat(item.substring(middle, middle + 1)).concat(item.substring(middle + 1, length).split('').reverse('').join(''));
            }
        }

        result.push(item);
    }
    return result.join(' ');
}