function iqTest(numbers) {
    const nums = numbers.split(' ').map(Number);

    let evenNumbers = countEvens(nums);
    let oddNumbers = countOdds(nums);

    if (evenNumbers > oddNumbers) {
        for (var i = 0; i < nums.length; i++) {
            let number = nums[i];
            if (isOdd(number)) {
                return i + 1;
            }
        }
    } else {
        for (var i = 0; i < nums.length; i++) {
            let number = nums[i];
            if (isEven(number)) {
                return i + 1;
            }
        }
    }
}

function countEvens(numbers) {
    return numbers.filter(e => e % 2 == 0).length;

}

function countOdds(numbers) {
    return numbers.filter(o => o % 2 != 0).length;
}

function isOdd(number) {
    return number % 2 != 0;
}

function isEven(number) {
    return number % 2 == 0;
}