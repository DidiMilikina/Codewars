function comparePowers(n1,n2){

    let one = Math.log(n1[0]) * n1[1];
    let two = Math.log(n2[0]) * n2[1];

    if (one > two) return -1;
    else if (one < two) return 1;
    else if (one == two) return 0;
}