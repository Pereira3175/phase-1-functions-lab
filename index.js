// Code your solution in this file!
const hq = 42
const block = 264


function distanceFromHqInBlocks (number) {
    if (number > hq) {
        return number - hq
    } else if (number < hq) {
        return hq - number
    }

}

function distanceTravelledInFeet (number, number2) {
    if (number < number2) {
        return (number2 - number) * block
    } else if (number > number2) {
        return (number - number2) * block 
    }
}

function distanceFromHqInFeet (number) {
    if (number > hq) {
        return (number - hq) * block
    } else if (number < hq) {
        return (hq - number) * 264
    }
}

function calculatesFarePrice (number, number2) {
    let totalDistance = distanceTravelledInFeet (number, number2)
  if (totalDistance < 400) {
    return 0 
} else if (totalDistance > 400 && totalDistance < 2000) {
    return (totalDistance - 400) * .02
} else if (totalDistance > 2000 && totalDistance < 2500) {
    return 25
} else if (totalDistance > 2500) {
    return 'cannot travel that far'
}
}