var basicSalary = Number(prompt("Enter Basic Salary:"));


var houseAllowance = basicSalary * 20 / 100;

var medicalAllowance = basicSalary * 10 / 100;

var taxDeduction = basicSalary * 5 / 100;


var grossSalary = basicSalary + houseAllowance + medicalAllowance;

var netSalary = grossSalary - taxDeduction;


console.log("Basic Salary: Rs. " + basicSalary);

console.log("House Allowance: Rs. " + houseAllowance);

console.log("Medical Allowance: Rs. " + medicalAllowance);

console.log("Gross Salary: Rs. " + grossSalary);

console.log("Tax Deduction: Rs. " + taxDeduction);

console.log("Net Salary: Rs. " + netSalary);
