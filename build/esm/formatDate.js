export var formatDate = function (date, format) {
    var d = new Date(date);
    var year = d.getFullYear();
    var month = (d.getMonth() + 1).toString().padStart(2, '0');
    var day = d.getDate().toString().padStart(2, '0');
    switch (format) {
        case 'YYYY-MM-DD':
            return "".concat(year, "-").concat(month, "-").concat(day);
        case 'DD/MM/YYYY':
            return "".concat(day, "/").concat(month, "/").concat(year);
        case 'MM-DD-YYYY':
            return "".concat(month, "-").concat(day, "-").concat(year);
        default:
            throw new Error("Unknown format: ".concat(format));
    }
};
