import React, { useState } from 'react';

const LoanDetails = ( { loanAmount, interestRate, loanTerm } ) => {

  const calculateMonthlyInterestRate = () => {
    return interestRate / 100 / 12;
  };

  const calculateTotalMonths = () => {
    return loanTerm * 12;
  };

  // Monthly Payment (as in Repayment Details)
  const calculateMonthlyPayment = () => {
    const monthlyRate = calculateMonthlyInterestRate();
    const totalMonths = calculateTotalMonths();

    if (monthlyRate === 0) return loanAmount / totalMonths;  // If the interest rate is 0
    return (
      loanAmount *
      (monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1)
    );
  };

  // Total Payment (Principal + Interest)
  const calculateTotalPayment = () => {
    return calculateMonthlyPayment() * calculateTotalMonths();
  };

  // Total Interest Paid
  const calculateTotalInterest = () => {
    return calculateTotalPayment() - loanAmount;
  };

  // Extra Payment (Interest)
  const calculateExtraPayment = () => {
    return calculateTotalInterest();
  };

// First month pricipal payment 
  const calculatePrincipalPaymentFirstMonth = () => {
    const monthlyPayment = calculateMonthlyPayment();
    const monthlyRate = calculateMonthlyInterestRate();
    const interestPaymentFirstMonth = loanAmount * monthlyRate;
    return (monthlyPayment - interestPaymentFirstMonth).toFixed(2);  // Principal paid in first month
  };

//   First month interest Paid 
  const calculateMonthlyInterestPaid = () =>{
    return calculateMonthlyPayment()  - calculatePrincipalPaymentFirstMonth()  
}


  return (
    <div>
      <h2>Loan Details</h2>
  
      <p>Load Amount: {loanAmount}</p>
      <p>Interest Rate: {interestRate}</p>
      <p>Load Term: {loanTerm}</p>
      {/* <p>Total Interest Paid: {calculateTotalInterest().toFixed(2)}</p> */}
      {/* <p>Monthly Payment: {calculateMonthlyPayment().toFixed(2)}</p> */}
      {/* <p>Monthly Principal Payment: {calculatePrincipalPaymentFirstMonth()}</p> */}
      {/* <p>Monthly Principal Payment: {calculatePrincipalPayment().toFixed(2)}</p> */}
      {/* <p>Monthly Interest Payment: {calculateMonthlyInterestPaid().toFixed(2)}</p> */}
      {/* <p>Monthly Interest Rate : {calculateMonthlyInterestRate().toFixed(4)}</p> */}
      {/* <p>Total Months : {calculateTotalMonths()}</p> */}
    </div>
  );
};

export default LoanDetails;
