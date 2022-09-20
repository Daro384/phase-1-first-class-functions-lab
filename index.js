// Code your solution in this file!
const returnFirstTwoDrivers = (array) => {
    return [array[0], array[1]]
}

const returnLastTwoDrivers = (array) => {
    return array.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


const createFareMultiplier = multiplier => inputNumber => inputNumber * multiplier

const fareDoubler = inputNumber => createFareMultiplier(2)(inputNumber)

const fareTripler = inputNumber => createFareMultiplier(3)(inputNumber)

const selectDifferentDrivers = (names, selection) => selection(names)