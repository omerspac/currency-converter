#! /usr/bin/env node

import inquirer from "inquirer";

// an object where currency values are stored.

const currency: any = {
    USD: "1", // BASE CURRENCY
    EUR: "0.91",
    SAR: "3.75",
    INR: "83.30",
    PKR: "277.54",
    GBP: "0.79"
}

console.log("\n Welcome to Currency Converter Program \n\n");

let userAnswer: any = await inquirer.prompt(
    [
        {
            message: "Enter From Currency: ",
            type: "list",
            choices: ["USD", "EUR", "SAR", "INR", "PKR", "GBP"],
            name: "from"
        },
        {
            message: "Enter To Currency: ",
            type: "list",
            choices: ["USD", "EUR", "SAR", "INR", "PKR", "GBP"],
            name: "to"
        },
        {
            message: "Enter Your Amount: ",
            type: "number", 
            name: "userAmount"
        },
    ]
)

let fromCurrency = currency[userAnswer.from]; // exchange rate
let toCurrency = currency[userAnswer.to]; // exchange rate
let enteredAmount = userAnswer.userAmount;
let baseCurrency = enteredAmount / fromCurrency;
let convertedAmount = baseCurrency * toCurrency; // base amount multiplied with to exchange rate

console.log(`Your amount from ${userAnswer.from} to ${userAnswer.to} is ${convertedAmount}`);