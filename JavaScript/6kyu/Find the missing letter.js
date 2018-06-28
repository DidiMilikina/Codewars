function findMissingLetter(array) {
    let str = "abcdefghijklmnopqrstuvwxyz";

    let str2arr = array.join("");
    for (let i = 0; i < str2arr.length; i++) {
        if (str2arr.charCodeAt(i + 1) - str2arr.charCodeAt(i) != 1) {
            return String.fromCharCode(str2arr.charCodeAt(i) + 1);
        }
    }
}