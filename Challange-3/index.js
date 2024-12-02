function calculateTax(grossInCome) {
    let taxAmount = 0;
    if (grossInCome <= 24000) {
        taxAmount = grossInCome * 0.10; 
    } else if (grossIncome <= 40000) {
        taxAmount = (grossInCome - 24000) * 0.15 + 2400;
    } else if (grossIncome <= 60000) {
        taxAmount = (grossInCome - 40000) * 0.20 + 4800;
    } else {
        taxAmount = (grossInCome - 60000) * 0.30 + 8800;
    }

    return taxAmount;
}
function calculateNHIFDeduction(grossInCome) {
    let nHIFAmount = 0;

    if (grossInCome <= 5999) {
        nHIFAmount = 400;
    } else if (grossIncome <= 19999) {
        nHIFAmount = 500;
    } else if (grossIncome <= 29999) {
        nHIFAmount = 600;
    } else {
        nHIFAmount = 750;
    }

    return nHIFAmount;
}

function calculateNSSFContribution(basicSalary) {
    const nssfAmount = basicSalary * 0.06;
    return Math.min(nssfAmount, 1080);
}

function calculateNetIncome(basicSalary, additionalBenefits = 0) {
    const totalIncome = basicSalary + additionalBenefits;
    const tax = calculateTax(totalIncome);
    const nHIFDeduction = calculateNHIFDeduction(totalIncome);
    const nssfContribution = calculateNSSFContribution(basicSalary);

    const totalDeductions = tax + nHIFDeduction + nssfContribution;
    const netIncome = totalIncome - totalDeductions;

    return {
        totalIncome: totalIncome,
        tax: tax,
        nHIFDeduction: nhifDeduction,
        nssfContribution: nssfContribution,
        netIncome: netIncome
    };
}

const basicSalary = 50000;
const additionalBenefits = 10000;
const salaryDetails = calculateNetIncome(basicSalary, additionalBenefits);

console.log("Total Income: KSh " + salaryDetails.totalIncome.toFixed(2));
console.log("Tax Deduction (PAYE): KSh " + salaryDetails.tax.toFixed(2));
console.log("NHIF Deduction: KSh " + salaryDetails.nHIFDeduction.toFixed(2));
console.log("NSSF Contribution: KSh " + salaryDetails.nssfContribution.toFixed(2));
console.log("Net Income: KSh " + salaryDetails.netIncome.toFixed(2));
