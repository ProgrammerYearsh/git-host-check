import React from 'react'

function RepaymentInstallements({
year, 
interest, 
principal, 
remaining
}) {

  return (
    <div className="text-base text-mattBlack dark:text-white font-normal border-b-2 pb-3 text-left border-slate-300 border-solid border-1 font-open-sans gap-10 flex-row flex justify-between items-start w-full min-w-[500px] ">

  <div className='flex flex-row gap-5 '>
  <div class="border flex relative *:relative *:size-1 *:m-auto size-5 rounded-[calc(var(--card-border-radius)/2)] before:rounded-[calc((var(--card-border-radius)/2)-1px)] before:absolute before:inset-0 before:border-t bg-gradient-to-b from-white via-leadGrey to-slate-300  focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800"></div>
  <span  className='min-w-[50px] '>{year}</span>
  </div>
  <span  className='min-w-[100px] '>{interest}</span>
  <span  className='min-w-[100px] '>{principal}</span>
  <span  className='min-w-[100px] font-bold'>{remaining}</span>
  </div>
  )
}

export default RepaymentInstallements