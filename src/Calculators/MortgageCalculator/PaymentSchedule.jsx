import React from 'react';

const PaymentSchedule = ({ loanAmount, interestRate, loanTerm }) => {
  const monthlyRate = interestRate / 100 / 12;
  const totalMonths = loanTerm * 12;
  const schedule = [];
  const annualSchedule = []

// Monthly Calculation
  let remainingBalance = loanAmount;
  let annualInterstPayment = 0;
  let annualPricipalPayment = 0; 

  const monthlyPayment =
    monthlyRate === 0 ? loanAmount / totalMonths
      : (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, totalMonths))) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1);

  for (let i = 1; i <= totalMonths; i++) {
    const interestPayment = remainingBalance * monthlyRate;
    const principalPayment = monthlyPayment - interestPayment;
    remainingBalance -= principalPayment;

    schedule.push({
      month: i,
      principalPayment: principalPayment.toFixed(2),
      interestPayment: interestPayment.toFixed(2),
      remainingBalance: remainingBalance.toFixed(2),
    });

    annualInterstPayment += interestPayment; 
    annualPricipalPayment += principalPayment; 
    

    if (i % 12 === 0) {
        annualSchedule.push({
            Year: i/12,
            annualPrincipalPayment: annualPricipalPayment.toFixed(2),
            annualInterstPayment: annualInterstPayment.toFixed(2),
            remainingBalance: remainingBalance.toFixed(2),
        });
        annualInterstPayment=0; 
        annualPricipalPayment=0; 

    }
  }


  return (
    <div style={{background:""}}>
         <h2>Payment Schedule Yearly</h2>
      <table style={{ width: '100%' }}>
        <thead>
          <tr style={{ color: "red" }}>
            <th>Month</th>
            <th>Principal Payment</th>
            <th>Interest Payment</th>
            <th>Remaining Balance</th>
          </tr>
        </thead>
        <tbody>
          {annualSchedule.map((row) => (
            <tr key={row.Year}>
              <td>{row.Year}</td>
              <td>{row.annualPrincipalPayment}</td>
              <td>{row.annualInterstPayment}</td>
              <td>{row.remainingBalance}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Payment Schedule Monthly </h2>
      <table  style={{width: '100%'}}>
        <thead style={{marginRight: 20}}>
          <tr style={{color: "red"}}>
            <th>Month</th>
            {/* <th>Monthly interest Rate </th> */}
            <th>Principal Payment</th>
            <th>Interest Payment</th>
            <th>Remaining Balance</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((row) => (
            <tr key={row.month}>
              <td>{row.month}</td>
              <td>{row.principalPayment}</td>
              <td>{row.interestPayment}</td>
              <td>{row.remainingBalance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentSchedule;
