"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {
    let creditAmount = (amount - contribution);
    let numberMonths = (new Date(date).getFullYear() - new Date().getFullYear()) * 12 + (new Date(date).getMonth() - new Date().getMonth());
    let monthlyPayment = creditAmount * (percent / 100 + ((percent / 100) / (((1 + percent / 100) ** numberMonths) - 1)));
    let totalAmount = contribution + monthlyPayment * numberMonths;

    return totalAmount;    
}

function getGreeting(name) {
    let greeting = `Привет Мир! Меня зовут ${name}.`
    if (!name){
        greeting = `Привет Мир! Меня зовут Аноним.`;
    }
    
    return greeting;
}