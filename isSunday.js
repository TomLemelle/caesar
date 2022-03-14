
/**
 * @var year {number}
 * @var date {Date}
 * @returns {string} as console.log of year var
 */

exports.isSunday = () =>  {
    for (let year = 2014; year <= 2050; year++) {
        let date = new Date(year, 0, 1);
        if (date.getDay() === 0) console.log(`Le premier janvier ${year} était un dimanche`);
    }
}
