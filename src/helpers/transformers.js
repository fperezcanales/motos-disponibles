const { format, parseISO } = require('date-fns');

function getProperty(object, property) {
    return property.split('.').reduce((accumulator, currentValue) => (accumulator || {})[currentValue], object);
}

function setProperty(object, property, value) {
    const paths = property.split('.');
    let target = object;
    for (let i = 0; i < paths.length - 1; i += 1) {
        target = (target || {})[paths[i]];
    }
    target[paths[paths.length - 1]] = value;
}

function stringToBoolean(data, fields) {
    for (let i = 0; i < fields.length; i += 1) {
        const field = fields[i];
        const value = getProperty(data, field);
        if (value !== undefined) {
            setProperty(data, field, value === 'true');
        }
    }
}

function avatarLetter(name) {
    return name.split('', 1)[0];
}

function formatRut(rut) {
    const formatedRut = rut.replace(/^(\d{1,2})(\d{3})(\d{3})(-[0-9Kk])/g, '$1.$2.$3$4');
    return formatedRut;
}

function timestampToDate(date) {
    const currentDate = new Date(date);
    const signatureDate = currentDate.toISOString().split('.', 1)[0];
    return format(parseISO(signatureDate), 'dd/MM/yyyy');
}

module.exports = { stringToBoolean, timestampToDate, formatRut, avatarLetter };
