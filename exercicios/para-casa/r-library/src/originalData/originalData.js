const txtFile = require ('./Original Data')
const firstTreatment = txtFile.split(`\n`)

const ArrayTreatment = (arr) => {
    const arrayMapped = []
    arr.map( gameInfo => {
        arrayMapped.push(gameInfo.split('+'))
    })
    return arrayMapped
}

const treated = ArrayTreatment (firstTreatment)

const toArray = (stringList) => {
    const arr = stringList.split(',')
    return arr
}

const formated = []
treated.forEach( gameInfo => {
    const newGame = {
        "title": gameInfo[0],
        "launchYear": Number(gameInfo[1]),
        "steamAvailability": Boolean(gameInfo[2]),
        "price": Number(gameInfo[3]),
        "genre": toArray(gameInfo[4]),
        "developer": gameInfo[5]
    }
    formated.push(newGame)
});

console.table (formated)

module.exports = formated