function inAscOrder(arr) {
    let copiedArr = arr.join(', ');

    let isDescending = true;
    let isAscending = true;

    for (let i = 0, l = arr.length - 1; i < l; i++) {
        isDescending = isDescending && (arr[i] > arr[i + 1]);

        isAscending = isAscending && (arr[i] < arr[i + 1]);
    }

    if (isAscending) {
        return true;
    }
    else if (isDescending) {
        return false;
    }
    else{
        return false;
    }
}