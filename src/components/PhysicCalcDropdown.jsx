import React, { useState } from 'react'

function PhysicCalcDropdown({setActiveBtnStatus, activeBtnStatus}) {
    const [calcOptionsDisplayStatus, setCalcOptionsDisplayStatus]=useState(false)
  return (
  <div className='w-full items-start juystify-start flex flex-col sm:hidden'>
<button
onClick={()=>setCalcOptionsDisplayStatus(!calcOptionsDisplayStatus)}
id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-mattBlack  text-lg px-5 py-2.5 text-left inline-flex items-center w-full" type="button">{activeBtnStatus === 0 ? 'Force Unit Converter' : activeBtnStatus === 1 ? 'Energy Unit Converter' : activeBtnStatus === 2 ? 'Speed Unit Converter' : activeBtnStatus === 3 ? 'Power Unit Converter' : null}<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg>
</button>


<div id="dropdown" className={`z-10  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 ${calcOptionsDisplayStatus ? 'block' : 'hidden'}`}>
    <ul className="py-2 text-base text-left text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li onClick={()=>{setActiveBtnStatus(0); setCalcOptionsDisplayStatus(false)}}>
        <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Force</a>
      </li>
      <li onClick={()=>{setActiveBtnStatus(1); setCalcOptionsDisplayStatus(false)}}>
        <a  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Energy</a>
      </li>
      <li onClick={()=>{setActiveBtnStatus(2); setCalcOptionsDisplayStatus(false)}}>
        <a  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Speed</a>
      </li>
      <li onClick={()=>{setActiveBtnStatus(3); setCalcOptionsDisplayStatus(false)}}>
        <a  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Power</a>
      </li>
    </ul>
</div>
</div>

  )
}

export default PhysicCalcDropdown