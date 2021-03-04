// const text = `232 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, sapiente? Reiciendis saepe sit ad eius dolor officiis commodi rem eos.
// `;


const text = 121212



function converterToUpperCase(value) {

    if (typeof value === 'number') return String(value).toUpperCase()
    if (value === undefined) return ""
    if (String(value).trim() === '') return ""
    
    return value.split(' ').filter(function(n){ return n != '' }).join(' ').toUpperCase();
}

function converterToLowerCase(value) {
    return value.toLowerCase();
}

console.log(converterToUpperCase("ção"));
//console.log(converterToLowerCase(text));