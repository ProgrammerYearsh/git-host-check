import React from 'react'

function LoanAmountInfo( {  title , amount, titleWeight}) {
  return (
    <div className="text-sm sm:text-base text-mattBlack dark:text-white font-normal border-b-2 pb-3 text-left border-slate-300 border-solid border-1 font-open-sans md:gap-10 gap-0 flex-row flex justify-between items-start">

    <div className='flex flex-row gap-5'>
    <div className="border flex relative *:relative *:size-1 *:m-auto size-5 rounded-[calc(var(--card-border-radius)/2)] before:rounded-[calc((var(--card-border-radius)/2)-1px)] before:absolute before:inset-0 before:border-t bg-gradient-to-b from-lime-200 via-lime-400 to-lime-500  focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800"></div>
    <span style={{fontWeight : titleWeight}} className='md:mr-10 lg:mr-24 mr-5 font-bold'>{title}</span>
    </div>

      <span className='font-bold'>{amount === null ? '0.00' : amount} </span>
      </div>
  
  )
}

export default LoanAmountInfo