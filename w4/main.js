const cfpData = [];

function determineHouseSizePts(size) {
    let houseSizePoints = 0;
    if (size === "large") {
        houseSizePoints = 10;
    } else if (size === "medium") {
        houseSizePoints = 7;
    } else if (size === "small") {
        houseSizePoints = 4;
    } else if (size === "apt") {
        houseSizePoints = 2;
    }
return houseSizePoints;
}

function determineHouseHoldPts(numberInHousehold) {
    let houseHoldPoints = 0;
    if (numberInHousehold === 1) {
        houseHoldPoints = 14;
    } else if (numberInHousehold === 2) {
        houseHoldPoints = 12;
    } else if (numberInHousehold === 3) {
        houseHoldPoints = 10;
    } else if (numberInHousehold === 4) {
        houseHoldPoints = 8;
    } else if (numberInHousehold === 5) {
        houseHoldPoints = 6;
    } else if (numberInHousehold === 6) {
        houseHoldPoints = 4;
    } else if (numberInHousehold > 6) {
        houseHoldPoints = 2;
    } else {
    }
return houseHoldPoints;
}

function start(houseHoldMembers, houseSize) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePTS;
  cfpData.push([houseHoldMembers, houseSize, houseHoldPTS, houseSizePTS, total]);
}

function displayOutput() {
    for (arr of cfpData) {
      console.log(arr);
      const output = document.getElementById("output");
      const newP = document.createElement("p");
      newP.textContent = `Having a household with ${arr[0]} individuals will give ${arr[2]} carbon points. Living in a ${arr[1]}-sized home gives ${arr[3]} carbon points. This shows a total carbon footprint of ${arr[4]}.`;
      output.appendChild(newP);
    }
  }

start(5, "apt");
start(4, "large");
start(3, "medium");
start(1, "large");
start(2, "medium");
start(3, "small");
start(4, "apt");
start(5, "large");
start(6, "medium");
start(7, "small");


displayOutput()

