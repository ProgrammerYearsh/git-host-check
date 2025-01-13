import React from 'react'

function CalcOutput({label, textAreaPlaceholder, resultValue}) {
  return (
    <div className="col-span-2">
    <label
      for="description"
      className="block mb-2 text-sm font-medium text-leadGrey dark:text-white"
    >
      {label}
    </label>
    <textarea
      value={resultValue}
      id="description"
      rows="3"
      className="block p-2.5 w-full text-lg font-semibold text-mattBlack  bg-leadGrey rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder={textAreaPlaceholder}
    ></textarea>
  </div>
  )
}

export default CalcOutput