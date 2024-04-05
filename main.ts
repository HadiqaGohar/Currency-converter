#! /usr/bin/env node

import inquirer from "inquirer"

import chalk from "chalk"

const currency : any = {
    USD : 1,   //Base currency
    EUR : 0.91,
    GBP : 0.76,
    INR : 74.57,
    PKR : 280
};

let userAnswer = await inquirer.prompt(
    [
        {
            name : "from",
            message : "Enter from currency",
            type : "list",
            choices : ["USD","EUR","GBP","INR","PKR"]

        },
        {
            name : "to",
            message : "Enter to currency",
            type : "list",
            choices : ["USD","EUR","GBP","INR","PKR"]

        },
        {
            name : "amount",
            message : "Enter your amount",
            type : "number"

        },
    ]
)
let userFromAmount = userAnswer.from
let userToAmount = userAnswer.to

let fromAmount = currency[userFromAmount]   //exchange rate
let toAmount = currency[userToAmount]      //exchange rate
let amount = userAnswer.amount

//Formula
//Base currency
let baseAmount = amount / fromAmount  // USD based currency       //4    PKR convert in dollar
let convertAmount = baseAmount * toAmount

console.log(chalk.yellow(fromAmount));
console.log(chalk.magenta(toAmount));
console.log(chalk.green(amount));

console.log(chalk.bgRedBright(convertAmount));