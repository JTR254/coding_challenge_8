// Task 1 - Employee Salary Calculation

function calculateSalary (baseSalary, bonus, taxRate) { // creates function that calculates the total salary
    return netSalary = (baseSalary + bonus) - (baseSalary * taxRate)
};

console.log (`Net Salary: $${calculateSalary (5000, 500, .1).toFixed(2)}`) // logs the function to the console - Output: Net Salary: $5000.00
console.log (`Net Salary: $${calculateSalary (7000, 1000, .15).toFixed(2)}`) // logs the function to the console - Output: Net Salary: $6950.00

// Task 2 - Product Price After Discount

let calculateDiscount = function discount (price, discountRate) { // creates a function that calculates the final price after the discount
    return finalPrice = price - (price * discountRate)
};

console.log (`Final Price: $${calculateDiscount(100, 0.2).toFixed(2)}`) // logs the function to the console - Output: Final Price: $80.00
console.log (`Final Price: $${calculateDiscount(250, 0.15).toFixed(2)}`) // logs the function to the console - Output: Final Price: $212.50

// Task 3 - Service Fee Calculation

const calculateServiceFee = (amount, serviceType) => { // creates arrow function that determines the service fee based on the service plan
    if (serviceType === "Premium") {
        return amount * .15
    } else if (serviceType === "Standard") {
        return amount * .1
    } else if (serviceType === "Basic") {
        return amount * .05
    }
};

console.log (`Service Fee: $${calculateServiceFee(200, "Premium").toFixed(2)}`) // logs the function to the console - Output: Service Fee: $30.00
console.log (`Service Fee: $${calculateServiceFee(500, "Standard").toFixed(2)}`) // logs the function to the console - Output: Discounted Price: $50.00

// Task 4 - Car Rental Cost Calculation

const calculateRentalCost = (days, carType, insurance = false) => { // creates arrow function that determines the total rental cost based on days, car type, and if they have insurance
    let cost;
     if (carType === "Economy") { // if the car type is "Economy", then multiply 40 by the number of days
         cost = 40 * days
     } else if (carType === "Standard") { // if the car type is "Standard", then multiply 60 by the number of days
         cost = 60 * days
     } else if (carType === "Luxury") { // if the car type is "Luxury", then multiply 100 by the number of days
        cost = 100 * days
     }
 
     if (insurance) { // if they have insurance, add $20 per day
         cost += 20 * days
     }
 
     return `Total Rental Cost: $${cost.toFixed(2)}`
 };
 
 console.log(calculateRentalCost(3, "Economy", true)) // logs the function to the console - Output: Total Rental Cost: $180.00
 console.log(calculateRentalCost(5, "Luxury", false)) // logs the function to the console - Output: Total Rental Cost: $500.00

 // Task 5 - Loan Payment Calculation

 function calculateLoanPayment(principal, rate, time) { // creates a function that calculates interest
    let payment;
    return payment = principal + (principal * rate * time) // the equation is principal * rate * time
};

console.log(`Total Payment: $${calculateLoanPayment(1000, .05, 2).toFixed(2)}`) // logs the function to the console - Output: Total Payment: $1100
console.log(`Total Payment: $${calculateLoanPayment(5000, .07, 3).toFixed(2)}`) // logs the function to the console - Output: Total Payment: $6050

// Task 6 - Identifying Large Transactions

let transactions = [200, 1500, 3200, 800, 2500]; // declares an array of transactions
let filterLargeTransactions = transactions.filter(amount => amount > 1000); // uses filter function to filter the transactions aboave 1000

console.log(filterLargeTransactions) // logs the function to the console

