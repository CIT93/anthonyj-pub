import {renderTbl, TBL} from "./render.js";
import {determineHouseSizePts, determineHouseHoldPts, start} from "./cfp.js";
const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");


const cfpData = [];




FORM.addEventListener("submit", function (e) {
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const houseHoldMembers = parseInt(FORM.houseHoldMembers.value);
  const houseSize = FORM.houseSize.value;
  start(houseHoldMembers, houseSize);
  OUTPUT.innerHTML = ""
  TBL.innerHTML = ""
  //displayOutput();
  renderTbl(cfpData);
  FORM.reset();
});



