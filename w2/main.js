// How to calculate 

// 1. # Household Members
const houseMembers = 6;
// 2. Home size
const homeSize = 4;
// 3. Food choices
const foodChoices = 8;
// 4. Water Intake
const waterIntake = 2;
// 5. Household Purchases
const householdPurchases = 10;
// 6. Waste Production
const wasteProduction = 20;
// 7. Recycling Effort
const recyclingEffort = 8;
// 8. Annual Transport
const annualTransport = 6;
// 9. Totals
const totalHouseholdCalculation = houseMembers + homeSize + foodChoices + waterIntake + householdPurchases + wasteProduction + recyclingEffort + annualTransport; 

// H1
const cfpTotal = document.querySelector("h1"); 
cfpTotal.textContent = totalHouseholdCalculation;