function whoWouldWin(mon1, mon2) {
    let move1 = true;

    let allHealth1 = mon1.hitpoints * mon1.number;
    let allHealth2 = mon2.hitpoints * mon2.number;

    while (allHealth1 > 0 && allHealth2 > 0) {
        if (move1)
            allHealth2 -= (Math.ceil(allHealth1 / mon1.hitpoints)) * mon1.damage;
        else
            allHealth1 -= (Math.ceil(allHealth2 / mon2.hitpoints)) * mon2.damage;

        move1 = !move1;
    }

    const winner = allHealth1 > 0 ? mon1 : mon2;
    const number = allHealth1 > 0 ? Math.ceil(allHealth1 / mon1.hitpoints) : Math.ceil(allHealth2 / mon2.hitpoints);

    return `${number} ${winner.type}(s) won`;
}