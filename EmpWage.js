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
function calculateDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}
// Calculate wages till condition met
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let arrayDailyWage = new Array();
let empDailyHrsAndWageObj = new Array();
let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < MAX_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    checkEmpPrestOrAbsent(empCheck, totalWorkingDays);
    let empHrs = getEmpWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    arrayDailyWage.push(calculateDailyWage(empHrs));
    empDailyWageMap.set(totalWorkingDays, calculateDailyWage(empHrs));
    empDailyHrsMap.set(totalWorkingDays, empHrs);
    empDailyHrsAndWageObj.push(
        {
            dailyNum: totalWorkingDays,
            dailyHours: empHrs,
            dailyWage: calculateDailyWage(empHrs),
            toString() {
                return '\nDay' + this.dailyNum + '=> Working hours is ' + this.dailyHours + ' And Wage Earned = ' + this.dailyWage
            },
        });
}
let empWage = calculateDailyWage(totalEmpHrs);
console.log("Total Days: " + totalWorkingDays + " Total Hours: " + totalEmpHrs + " Total Wage: " + empWage);
console.log("Array Daily Wage " + arrayDailyWage);
console.log("Map Daily Hrs " + empDailyHrsMap);
console.log("Map Daily Wage " + empDailyWageMap);

//Total empWage using forEach
let totalEmpWage = 0;
function sum(dailyWage) {
    totalEmpWage += dailyWage;
}
arrayDailyWage.forEach(sum);
console.log("Using forEach");
console.log("Total Days: " + totalWorkingDays + " Total Hours: " + totalEmpHrs + " Total Wage: " + totalEmpWage);

//Total empWage using reduce
function totalWages(dailyWage, totalWage) {
    return dailyWage + totalWage;
}
console.log("Using reduce");
console.log(arrayDailyWage.reduce(totalWages, 0));
console.log(Array.from(empDailyWageMap.values()).reduce(totalWages, 0));

// Day with daily wage map
let day = 0;
function mapDayWithWage(dailyWage) {
    day++;
    return day + " = " + dailyWage;
}
let mapDayWithWageArr = arrayDailyWage.map(mapDayWithWage);
console.log("Map day with wage: " + mapDayWithWageArr);

// Show days when 160 was earned as wage
function fullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);
console.log("Full time wage earned days: " + fullDayWageArr);

// First time occurence of full time wage
console.log("First time full wage: " + mapDayWithWageArr.find(fullTimeWage));

// Is every full time wage holding 160
console.log("Check all elements have full time wage: " + fullDayWageArr.every(fullTimeWage));

// Check for any part time wage
function partTimeWage(dailyWage) {
    return dailyWage.includes("80");
}
console.log("Check if any part time wage: " + mapDayWithWageArr.some(partTimeWage));

// Number of days employee worked
function totalDaysWorked(numOfDays, dailyWage) {
    if (dailyWage > 0)
        return numOfDays + 1;
    return numOfDays;
}
console.log("Number of days worked: " + arrayDailyWage.reduce(totalDaysWorked, 0));

// Arrow functions
const findTotal = (totalVal, dailyVal) => {
    return totalVal + dailyVal;
}
let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal, 0);
let totalWage = arrayDailyWage.filter(dailyWage => dailyWage > 0)
    .reduce(findTotal, 0);
console.log("Arrow functions: ");
console.log("Total hours: " + totalHours + " Total Wage: " + totalWage);

// Full working days, part working days and no working days

let fullWorkingDays = new Array();
let partWorkingDays = new Array();
let noWorkingDays = new Array();
empDailyHrsMap.forEach((value, key) => {
    if (value == 8) fullWorkingDays.push(key);
    else if (value == 4) partWorkingDays.push(key);
    else noWorkingDays.push(key);
});
console.log("Full working days: " + fullWorkingDays);
console.log("Part working days: " + partWorkingDays);
console.log("No working days: " + noWorkingDays);

// Display Object 
console.log("Object created: " + empDailyHrsAndWageObj);