function calculateBill(billAmount){
    
    if (isNaN(billAmount)) {
        return 'Enter Number';
    }
    else {
    amountToPay = parseFloat(billAmount) + 3 + (parseFloat(billAmount*0.001));
    return amountToPay;
    }
}

module.exports = calculateBill;