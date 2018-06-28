function stringify(list) {
    let string = "";

    while (list) {
        console.log(list.data)
        string += `${list.data} -> `;
        list = list.next;
    }

    return string + "null";
}