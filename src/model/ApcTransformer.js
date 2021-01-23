
const apcStatus = {
    READY_FOR_DOWNLOAD: 'Por validar y firmar',
    WAITING_FOR_APPROVAL: 'Esperando firmas',
    PENDING_MANUAL_SIGNATURE: 'Pendiente de firma manual',
    FINISHED: 'Firmado',
    REJECTED: 'Rechazado',
    WIP: 'Borrador',
};

function getStatusLabel (status) {
    return apcStatus[status];
}

module.exports = { getStatusLabel };
