function waitingTime(waitingTimes, serialNumber) {
    if(!Array.isArray(waitingTimes) || typeof serialNumber !== 'number'){
        return 'Invalid Input';
    }

    let sum = 0;
    for (let time of waitingTimes) {
        sum = sum + time;
    }

    let avgTime = Math.round (sum / waitingTimes.length);
    let serial = serialNumber - 1;
    let remainingSerial = serial - waitingTimes.length;
    let finalTime = avgTime * remainingSerial;
    return finalTime;
}

console.log(waitingTime([3, 5, 7, 11, 6], 10));
console.log(waitingTime([13, 2], 6));
console.log(waitingTime([13, 2, 6, 7, 10], 6));
console.log(waitingTime([6], 4));
console.log(waitingTime(7 , 10));
console.log(waitingTime("[6,2]", 9));
console.log(waitingTime([7, 8, 3, 4, 5], "9"));