// Check if employee is Present or Absent
const IS_ABSENT = 0;
function checkEmpPrestOrAbsent(empCheck, day) {
    if (empCheck == IS_ABSENT) {
        console.log("On  " + day + " Employee is ABSENT");
    }
    else {
        console.log("On  " + day + " Employee is PRESENT");
    }
}

// Calculate Daily Wage

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;
const MAX_WORKING_DAYS = 20;

function getEmpWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}
function calculateDailyWage(empHrs){
    return empHrs*WAGE_PER_HOUR;
}
// Calculate wages till condition met
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let arrayDailyWage = new Array();
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < MAX_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    checkEmpPrestOrAbsent(empCheck, totalWorkingDays);
    let empHrs = getEmpWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    arrayDailyWage.push(calculateDailyWage(empHrs));
}
let empWage = calculateDailyWage(totalEmpHrs);
console.log("Total Days: " + totalWorkingDays + " Total Hours: " + totalEmpHrs + " Total Wage: " + empWage);
for(dailyWage of arrayDailyWage){
    console.log(dailyWage);
}
