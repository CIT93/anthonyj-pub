const cfpData = [];

function determineHouseSizePts(size) {
    let houseSizePoints = 0;
    if(size === "large") {
      houseSizePoints = 10;
    } else if(size === "medium") {
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
    }
     return houseHoldPoints;
  }
  
  function start(houseHoldMembers, houseSize) {
    const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
    const houseSizePts = determineHouseSizePts(houseSize);
    const total = houseHoldPTS + houseSizePts;
    cfpData.push({    
        houseHoldMembers: houseHoldMembers,
        houseSize: houseSize,
        houseHoldPTS: houseHoldPTS,
        houseSizePts: houseSizePts,
        total: total
    });

  }
  
    //cfpData.push([houseHoldMembers, houseSize, houseHoldPTS, houseSizePts, total]);
    function displayOut(carbonObj) {
      const total = document.createElement("p");
      const houseHold = document.createElement("p");
      const size = document.createElement("p");
      const members = document.createElement("p");
      const house = document.createElement("p");
      total.textContent = `the total carbon foot print is: ${carbonObj.total}`;
    houseHold.textContent = `Household Points: ${carbonObj.houseHoldPTS}`;
    size.textContent = `House Size Points: ${carbonObj.houseSizePts}`;
    members.textContent = `Household Members: ${carbonObj.houseHoldMembers}`;
    house.textContent = `House Size: ${carbonObj.houseSize}`;
      const output = document.getElementById("output")
      output.appendChild(total);
      output.appendChild(houseHold);
      output.appendChild(size);
      output.appendChild(members);
      output.appendChild(house);
      }
  
  
  
  
  function displayOutput() {
    for(obj of cfpData) {
      console.log(obj)
      const output = document.getElementById("output");
      const newH2 = document.createElement("h2");
      newH2.textContent = `Carbon Footprint ${obj.total}`
      output.appendChild(newH2)
      /*console.log(i)
      const output = document.getElementById("output");
      const newP = document.createElement("p");
      const newH2 = document.createElement("h2")
      newH2.textContent = `Carbon Footprint ${cfpData [i] [4]}`
      const newH3 = document.createElement("h3")
      newH3.textContent = 'Based on Number in Household and Size of Home'
      newP.textContent = `This number is based on the number of members of the household of ${cfpData [i] [0]} (score: ${cfpData [i] [3]})`;
      newP.textContent += `and a ${cfpData [i] [1]} size of home (score: ${cfpData [i] [2]})`
      output.appendChild(newH2);
      output.appendChild(newH3);
      output.appendChild(newP); */
    }
  }
  
  start(1, "apt");
  start(2, "apt");
  start(3, "apt");
  start(4, "apt");
  start(5, "apt");
  start(6, "apt");
  start(7, "apt");
  start(1, "small");
  start(2, "small");
  start(3, "small");
  start(4, "small");
  start(5, "small");
  start(6, "small");
  start(7, "small");
  start(1, "medium");
  start(2, "medium");
  start(3, "medium");
  start(4, "medium");
  start(5, "medium");
  start(6, "medium");
  start(7, "medium");
  start(1, "large");
  start(2, "large");
  start(3, "large");
  start(4, "large");
  start(5, "large");
  start(6, "large");
  start(7, "large"); 
  
 displayOutput()