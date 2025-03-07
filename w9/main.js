import {renderTbl} from "./render.js";
import { determineHouseHoldPts, determineHouseSizePts } from "./cfp.js";

const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const cfpData = [];

function start(first, last, houseHoldMembers, houseSize) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePts = determineHouseSizePts(houseSize);
  const cfpTotal = houseHoldPTS + houseSizePts;
  cfpData.push({
    firstname: first,
    lastname: last, 
    householdmembers: houseHoldMembers,
    housesize: houseSize,
    householdpts: houseHoldPTS,
    housesizepts: houseSizePts,
    total: cfpTotal,
  });
}

FORM.addEventListener("submit", function (e) {
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const houseHoldMembers = parseInt(FORM.houseHoldMembers.value);
  const houseSize = FORM.houseSize.value;
  start(firstName, lastName, houseHoldMembers, houseSize);
  OUTPUT.innerHTML = ""
  renderTbl(cfpData);
  FORM.reset();
});