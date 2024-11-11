const { database } = require("./database.js")

const roundup = (cattleToDrive) => {
    const cattle = []
    const types = database.cattleTypes
    const size = cattleToDrive

    for (let counter = 0; counter < size; counter++) {
        const randomType = Math.floor(Math.random() * types.length)
        const animal = types[randomType]
        cattle.push(` ${animal.breed}`)
    }

    return cattle
}

module.exports = { roundup }