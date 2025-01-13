import React, { useState } from 'react'
import LoanDetails from './LoanDetail'
import RepaymentDetails from './RepaymentDetail'
import PaymentSchedule from './PaymentSchedule';

function MortageCalculatorSample() {

    const [loanAmount, setLoanAmount] = useState(0);
    const [interestRate, setInterestRate] = useState(0);
    const [loanTerm, setLoanTerm] = useState(0);

  return (
    <div className='text-black'>
        <label>
        Loan Amount (Principal):
        <input
        className='bg-red-300 placeholder:text-black text-black'
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(Number(e.target.value))}
        />
      </label>
      <label>
        Interest Rate (APR):
        <input
        className='bg-red-300 placeholder:text-black text-black'
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(Number(e.target.value))}
        />
      </label>
      <label>
        Loan Term (Years):
        <input
        className='bg-red-300 placeholder:text-black text-black'
          type="number"
          value={loanTerm}
          onChange={(e) => setLoanTerm(Number(e.target.value))}
        />
      </label>


        <LoanDetails 
        loanAmount={loanAmount}
        interestRate={interestRate}
        loanTerm={loanTerm}
         />
        <RepaymentDetails
        loanAmount={loanAmount}
        interestRate={interestRate}
        loanTerm={loanTerm}
        />
        <PaymentSchedule
        loanAmount={loanAmount}
        interestRate={interestRate}
        loanTerm={loanTerm}
        />
    </div>
  )
}

export default MortageCalculatorSample