// Task 1 - Employee Salary Calculation

function calculateSalary (baseSalary, bonus, taxRate) { // creates function that calculates the total salary
    return netSalary = (baseSalary + bonus) - (baseSalary * taxRate)
};

console.log (`Net Salary: $${calculateSalary (5000, 500, .1).toFixed(2)}`) // logs the function to the console - Output: Net Salary: $5000.00
console.log (`Net Salary: $${calculateSalary (7000, 1000, .15).toFixed(2)}`) // logs the function to the console - Output: Net Salary: $6950.00