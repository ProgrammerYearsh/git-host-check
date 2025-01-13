import React, { useState } from 'react'
import RepaymentInstallements from '../components/RepaymentInstallements'

function RepaymentTable({monthlyPaymentBreakdown, yearlyPaymentBreakdown, repaymentTableDisplayStatus}) {
   //  ------------------------ Adjusting Table Top  ------------------------
  const [activeBtnStatus, setActiveBtnStatus]=useState(0)
  const activeclassName='phn:text-xl text-sm text-mattBlack dark:text-white font-semibold  py-3 text-left  cursor-pointer bg-leadGrey px-1'
  const inActiveclassName='font-semibold opacity-60 phn:text-xl text-sm  cursor-pointer text-mattBlack py-3 px-1 text-left'


  return (
    <div className={`text-center mx-auto px-1 lg:px-6 md:px-3 sphn:px-2 max-w-6xl flex flex-col items-start pb-20 w-full tracking-tight ${repaymentTableDisplayStatus ? 'flex' : 'hidden'}`}>
    <div className='flex flex-row items-start justify-start w-full border-b-2 border-mattBlack border-solid border-1'>
    <h2 onClick={()=>setActiveBtnStatus(0)}  className={activeBtnStatus === 0 ? activeclassName : inActiveclassName}>Monthly Payment Breakdown</h2>
    <h2 onClick={()=>setActiveBtnStatus(1)} className={`pl-5 pr-5 ${activeBtnStatus === 1 ? activeclassName  : inActiveclassName}`}>Yearly Repayment Breakdown</h2>
    </div>

  {/* Main section */}
  <div className='flex flex-col items-start justify-start gap-10 font-open-sans w-full mt-10 overflow-x-scroll sm:overflow-hidden '>
    
  {/* Table Heading */}
  <div className="text-base text-mattBlack dark:text-white font-normal border-b-2 pb-3 text-left border-slate-300 border-solid border-1 font-open-sans gap-10 flex-row flex justify-between items-start w-full min-w-[500px]"> 

  <div className='flex flex-row gap-5 '>
  <div className="border flex relative *:relative *:size-1 *:m-auto size-5 rounded-[calc(var(--card-border-radius)/2)] before:rounded-[calc((var(--card-border-radius)/2)-1px)] before:absolute before:inset-0 before:border-t bg-gradient-to-b from-lime-200 via-lime-400 to-lime-500  focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800"></div>
  <span  className=' font-bold'>{activeBtnStatus === 0 ? 'Month' : 'Year'}</span>
  </div>

  <span  className=' font-bold'>Interest Payment</span>
  <span  className=' font-bold'>Pricinple Payment</span>
  <span  className=' font-bold'>Remaining Balance</span>
  </div>

  {/* Installment Details */}
  {activeBtnStatus === 1 && yearlyPaymentBreakdown && (
        yearlyPaymentBreakdown.map((e) => (
          <RepaymentInstallements
            key={e.year}
            year={e.year}
            interest={e.annualInterstPayment}
            principal={e.annualPrincipalPayment}
            remaining={e.remainingBalance}
          />
        ))
  )}
  {activeBtnStatus === 0 && monthlyPaymentBreakdown && (
      monthlyPaymentBreakdown.map((e)=>{
        return <RepaymentInstallements 
        key={e.month} 
        year={e.month} 
        interest={e.interestPayment} 
        principal={e.principalPayment} 
        remaining={e.remainingBalance} 
        />
        })
  )}
  {/* {
    monthlyPaymentBreakdown && activeBtnStatus ===1
    (monthlyPaymentBreakdown.map((e)=>{
    return <RepaymentInstallements key={e.month} year={e.month} interest={e.interestPayment} pricinple={e.principalPayment} remaining={e.remainingBalance} />
    }))
  } */}

  </div>

</div>
  )
}

export default RepaymentTable