function calcHomePoints(numberInHousehold) {
    console.log("Inside the function")
    if (numberInHousehold === 1) {
        carbonPoints = carbonPoints + 14;
    } else if (numberInHousehold === 2) {
        carbonPoints = carbonPoints + 12;
    } else if (numberInHousehold === 3) {
        carbonPoints = carbonPoints + 10;
    } else if (numberInHousehold === 4) {
        carbonPoints = carbonPoints + 8;
    } else if (numberInHousehold === 5) {
        carbonPoints = carbonPoints + 6;
    } else if (numberInHousehold === 6) {
        carbonPoints = carbonPoints + 4;
    } else if (numberInHousehold > 6) {
        carbonPoints = carbonPoints + 2;
    }
    console.log(`Based on the number of members in the household of ${numberInHousehold} the points would be ${carbonPoints}. `);
}

let carbonPoints = 0;
const numberInHousehold = 3;


// global scope

calcHomePoints(3)
calcHomePoints(4)
