function converterToUpperCase(value) {
    if (typeof value === 'number') return String(value).toUpperCase();
    if (value === undefined) return '';
    if (String(value).trim() === '') return '';

    return value.split(' ').filter(n => n != '').join(' ').toUpperCase();

}

function converterToLowerCase(value) {

    if (typeof value === 'number') return String(value).toLowerCase();
    if (value === undefined) return '';
    if (String(value).trim() === '') return '';

    return value.split(' ').filter(n => n != '').join(' ').toLowerCase();
}

console.log(converterToUpperCase('ção'));
console.log(converterToLowerCase('      '));