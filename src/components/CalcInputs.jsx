import React from 'react'
import Input from './Input'

function CalcInputs({ htmlFor,  additionalclassNamees , label , inputType , inputName , inputId , additionInputclassName , inputPlaceholder , inputRequired,  handleInputChange, inputValue}) {
  return (
    <div className="col-span-2">
    <label
      htmlFor={htmlFor}
      className="block mb-2 text-sm font-medium text-leadGrey dark:text-white "
    >
     {label}
    </label>
    <Input 
    type={inputType}
    name={inputName}
    inputValue={inputValue}
    id={inputId}
    additionInputclassName={additionInputclassName}
    placeholder={inputPlaceholder}
    required={inputRequired}
    handleInputChange={handleInputChange}
    />
  </div>
  )
}

export default CalcInputs