import React from 'react'

function PhysicsUnitSelect({handleSelectChange, selectOptions, additionalOptionText, label, additionalClassName, defaultChecked}) {
  return (
    <div className={`${additionalClassName} min-w-full flex-col  `}>
              <label
                className="block mb-2 text-sm font-medium text-leadGrey dark:text-white "
              >
               {label}
              </label>
              <select
                onChange={handleSelectChange}
                defaultValue={defaultChecked}
                id="category"
                className={`bg-leadGrey border border-gray-300 text-mattBlack text-sm rounded-lg focus:ring-mattBlack focus:border-mattBlack flex w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 `} 
              >
           {selectOptions && 
            Object.entries(selectOptions).map(([name, value], index) => (
                <option key={index} value={name}>
                {name}{" "}{additionalOptionText}
                </option>
            ))
            }
              </select>
            </div>
  )
}

export default PhysicsUnitSelect