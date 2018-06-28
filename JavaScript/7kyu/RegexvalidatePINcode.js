function validatePIN (pin) {
    let regex = /^[0-9]*$/;

    if (Number.isInteger(pin) >= 0 && pin.match(regex) && (pin.length === 4 || pin.length === 6)) {
        return true
    } else {
        return false;
    }
}