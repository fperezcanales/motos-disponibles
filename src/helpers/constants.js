const Frequencies = {
    WEEKLY: { description: 'Semanal', name: 'WEEKLY', number: 7 },
    BIWEEKLY: { description: 'Quincenal', name: 'BIWEEKLY', number: 15 }
};

const Days = {
    NONE: { name: 'NONE', value: 0 },
    MONDAY: { name: 'MONDAY', value: 5 },
    TUESDAY: { name: 'TUESDAY', value: 6 },
    WEDNESDAY: { name: 'WEDNESDAY', value: 7 },
    THURSDAY: { name: 'THURSDAY', value: 1 },
    FRIDAY: { name: 'FRIDAY', value: 2 }
};


module.exports = {
    Frequencies,
    Days
};