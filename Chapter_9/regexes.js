console.log('regex stuffies GO')
//
// let match = /\d+/.exec("one two 100")
// console.log(match)
//
//
//
// console.log(`Date: ${new Date}`);

function getDate(string) {
    let [_, month, day, year] =
        /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
    return new Date(year, month - 1, day);
}
console.log(getDate("1-30-2003"))