import React from 'react'

function CalcPageHeader({nav1, nav2, calcName, calcDesc}) {
  return (
    <div className="text-center mb-5">
    <div className=" text-sm sm:text-base text-mattBlack dark:text-gray-300  text-left font-open-sans hid">Home &rarr; {nav1} &rarr; {nav2} </div>
        <h2 className="md:text-7xl sm:text-5xl text-3xl mt-5  text-mattBlack dark:text-white font-semibold text-left tracking-tighter ">{calcName}</h2>
        <p className="mt-5 text-sm sm:text-base text-mattBlack dark:text-gray-300  text-left tracking-tight">{calcDesc}</p>
    </div>
  )
}

export default CalcPageHeader