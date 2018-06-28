function toCamelCase(str) {
    let regex = /[-_]\w/ig;
    
    return str.replace(regex, function (output) {
        return output.charAt(1).toUpperCase()
    });
}