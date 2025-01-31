let carbonPoints = 0;
//const numberInHousehold = 3;

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

function considerHomeSize(homeSize) {
    console.log("Inside the function");
    if (homeSize === "Apt") {
        carbonPoints = carbonPoints + 2;
    } else if (homeSize === "Sml") {
        carbonPoints = carbonPoints + 4;
    } else if (homeSize === "Med") {
        carbonPoints = carbonPoints + 7;
    } else if (homeSize === "Lrg") {
        carbonPoints = carbonPoints + 10;
    }
    console.log(`Based on the ${homeSize} household size the carbon footprint would be ${carbonPoints}`)
}


// global scope

calcHomePoints(3)
considerHomeSize("Sml")