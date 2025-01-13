import React from 'react'
import LoanAmountInfo from '../components/LoanAmountInfo'
import PieChart from '../components/PieChart'

function LoanPaymentBreakDown({repaymentDetails, rePaymentBreakdownRef , renderChartStatus}) {
  return (
    <div ref={rePaymentBreakdownRef} className="text-center mx-auto px-1 lg:px-6 md:px-3 sphn:px-2 max-w-6xl flex flex-col items-start pb-20 w-full pt-20 ">
    <h2 className="text-2xl text-mattBlack dark:text-white font-semibold border-b-2 pb-3 w-full text-left border-mattBlack border-solid border-1">Loan Repayment Breakdown</h2>

  {/* Main section */}
  <div className='flex flex-col-reverse sm:flex-row items-start justify-start md:gap-10 gap-5  font-open-sans w-full mt-10 '>
  <div className='sm:w-96 sphn:w-80  w-72  sm:h-96 sphn:h-80  h-72 ml-0  flex'>
    <PieChart repaymentDetails={repaymentDetails} renderChartStatus={renderChartStatus}  />
  </div>
  
  <div className='flex flex-col gap-5 sm:mt-20 mt-0 w-full '>
  <LoanAmountInfo title={"Total Repayment Amount (Excludes Down Payment)"} amount={repaymentDetails['totalRepaymentAmount']} titleWeight={700} />
  <LoanAmountInfo title={"Principal Amount to Re-pay"} amount={repaymentDetails['principalAmount']} titleWeight={500} />
  <LoanAmountInfo title={"Total Interest Paid"} amount={repaymentDetails['totalInterestPaid']} titleWeight={500} />
  <LoanAmountInfo title={"Monthly Re-Payment"} amount={repaymentDetails['monthlyPayment']} titleWeight={500} />
  <LoanAmountInfo title={"Total Months"} amount={repaymentDetails['totalMonths']} titleWeight={500} />
  </div>
</div>

</div>
  )
}

export default LoanPaymentBreakDown