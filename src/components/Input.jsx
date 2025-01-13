import React from 'react'

function Input( { type , name , id , additionInputClassName , placeholder , required, handleInputChange, inputValue }) {
  return (
    <input
    value={inputValue}
    onChange={handleInputChange}
    style={{
        appearance: 'textfield', // Disables the spinner in most modern browsers
        MozAppearance: 'textfield', // Specific for Firefox
        WebkitAppearance: 'none', // Specific for WebKit browsers (like Chrome and Safari)
        outline: 'none',
      }}
    type={type}
    name={name}
    id={id}
    className={`bg-leadGrey text-mattBlack border border-grey-300 text-sm rounded-lg block w-full p-2.5 focus:border-neon focus:ring-2 focus:ring-neon ${additionInputClassName}`}
    placeholder={placeholder}
    required={required}     
  />
  )
}

export default Input