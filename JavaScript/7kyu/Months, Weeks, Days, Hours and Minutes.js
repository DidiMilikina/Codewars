function displayValue(value) {
    let minutes = value % 60,
        hours = Math.floor(value / 60) % 24,
        days = Math.floor(value / 1440) % 7,
        weeks = Math.floor(value / 10080) % 4,
        months = Math.floor(value / 40320) % 28;

    let arr = [];
    if (months > 0) arr.push(months + ((months === 1) ? " month" : " months"));
    if (weeks > 0) arr.push(weeks + ((weeks === 1) ? " week" : " weeks"));
    if (days > 0) arr.push(days + ((days === 1) ? " day" : " days"));
    if (hours > 0) arr.push(hours + ((hours === 1) ? " hour" : " hours"));
    if (minutes > 0) arr.push(minutes + ((minutes === 1) ? " minute" : " minutes"));

    return arr.join(' ');
}