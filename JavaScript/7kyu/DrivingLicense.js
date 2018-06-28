function driver([firstName, middleName, surname, dateOfBirth, gender]) {

    let surnameOutput = `${`${surname.slice(0, 5)}99999`.slice(0, 5)}`.toUpperCase();
    let decadeDigit = dateOfBirth[dateOfBirth.length - 2];
    let monthOfBirth = `0${new Date(dateOfBirth).getMonth() + 1 + (gender === 'F' ? 50 : 0)}`.slice(-2);
    let yearOfBirth = dateOfBirth[dateOfBirth.length - 1], date = dateOfBirth.slice(0, 2);
    let initialsFirstMiddleName = `${firstName[0] || ''}${middleName[0] || ''}99`.slice(0, 2);
    let arbitraryDigit = '9';
    let checkDigits = 'AA';

    return `${surnameOutput}${decadeDigit}${monthOfBirth}${date}${yearOfBirth}${initialsFirstMiddleName}${arbitraryDigit}${checkDigits}`;
}