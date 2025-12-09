function plus(a, b) {
    return a + b;
}
function daysBetweenDates(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = new Date(date1);
    const secondDate = new Date(date2);

    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
    return diffDays;
}
plus = function (a, b) {
    return a + b + 1;
}
const a = plus(13, 24); // 3