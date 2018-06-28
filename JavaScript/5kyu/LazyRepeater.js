function makeLooper(str) {
    let counter = 0;
    
    return function output() {
        if (counter === str.length) {
            counter = 0;
        }

        return str.charAt(counter++);
    };
}