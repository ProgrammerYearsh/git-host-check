import React, { useState } from 'react';

const RepaymentDetails = ({ loanAmount, interestRate, loanTerm }) => {

  const monthlyRate = interestRate / 100 / 12;
  const totalMonths = loanTerm * 12;

  const calculateMonthlyPayment = () => {
    if (monthlyRate === 0) return loanAmount / totalMonths;
    return (
      loanAmount *
      (monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1)
    );
  };

  const calculateTotalPayment = () => {
    return calculateMonthlyPayment() * totalMonths;
  };

  const calculateTotalInterest = () => {
    return calculateTotalPayment() - loanAmount;
  };

  return (
    <div>
      <h2>Repayment Details</h2>
      <p>Total Payment (Principal + Interest): {calculateTotalPayment().toFixed(2)}</p>
      <p>Total Interest Paid: {calculateTotalInterest().toFixed(2)}</p>
      <p>Monthly Payment: {calculateMonthlyPayment().toFixed(2)}</p>
      <p>Total Months for Re-Payment: {totalMonths}</p>
      <p>Monthly Interest Rate : {monthlyRate.toFixed(5)}</p>
    </div>
  );
};

export default RepaymentDetails;