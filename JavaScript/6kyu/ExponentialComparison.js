function compare(number1, number2) {
    let base1 = number1[0];
    let exp1 = number1[1];
    let base2 = number2[0];
    let exp2 = number2[1];

    let resultNum1 = Math.log(base1) * exp1;
    let resultNum2 = Math.log(base2) * exp2;
    if (resultNum2 > resultNum1) return number2;
    return number1;

}