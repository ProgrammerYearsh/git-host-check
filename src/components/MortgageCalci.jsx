import React, { useState } from 'react'
import Input from './Input';
import CalcInputs from './CalcInputs';
import SelectInputs from './SelectInputs';
import CalculateBtn from './CalculateBtn';

function MortgageCalci( {handleSelectChange , handleInputChange , handleCalculateBtn , customYearDisplayStatus, modalDisplayFunc, initailValue, loadSharedInputs}) {
  // console.log(/^\d+(\.\d+)?$/.test(mortgageInputs['downPayment']));
  const selectOptions = [   
    1, 
    2, 
    3, 
    5, 
    7, 
    9, 
    10, 
    12, 
    15, 
    20, 
    25, 
    30, 
    'Enter Custom']
  
  return (
    <div
    id="crud-modal"
    tabIndex="-1"
    className=" overflow-y-auto overflow-x-hidden  justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div className="relative py-4 sm:pr-2 pr-0   w-full max-w-md max-h-full ">
      {/* <!-- Modal content --> */}
      <div className="relative bg-mattBlack text-leadGrey rounded-lg shadow dark:bg-gray-700">
        {/* <!-- Modal header --> */}
        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
          <h3 className="text-lg font-semibold text-leadGrey dark:text-white">
            Calculate Mortgage
          </h3>
          <button
          onClick={modalDisplayFunc}
            type="button"
            className="hover:bg-gray-200 hover:text-leadGrey rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-toggle="crud-modal"
          >
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M246.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 109.3 192 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-210.7 73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-64z"/></svg>
            <span className="sr-only">Share Modal</span>
          </button>
        </div>

        {/* <!-- Modal body --> */}
        <form className="p-4 md:p-5 block font-open-sans">
          <div className="grid gap-4 mb-4 grid-cols-2">

            {/* Load Amount  */}
            <CalcInputs 
              htmlFor={'loanAmount'} 
              additionalClasses={''} 
              label={'Loan Amount'} 
              inputType={'number'}
              inputName={'loanAmount'}
              inputId={''}
              additionInputClassName={''}
              inputPlaceholder={'Enter the Loan Amount'}
              inputRequired={true}
              handleInputChange={handleInputChange}
              inputValue={initailValue['loanAmount']}
              /> 
              
            {/* Down Payment */}
            <CalcInputs 
              htmlFor={'downPayment'} 
              additionalClasses={''} 
              label={'Down Payment'} 
              inputType={'number'}
              inputName={'downPayment'}
              inputId={''}
              additionInputClassName={''}
              inputPlaceholder={'Enter the down payment made'}
              inputRequired={true}
              handleInputChange={handleInputChange}
              inputValue={initailValue['downPayment']}
              /> 
            {/* Loan Term  */}
            {/* <div className={` min-w-full flex-col col-span-2`}>
              <label
                className="block mb-2 text-sm font-medium text-leadGrey dark:text-white "
              >
                Loan Term
              </label>
              <select
                onChange={handleSelectChange}
                id="category"
                className={`bg-leadGrey border border-gray-300 text-mattBlack text-sm rounded-lg focus:ring-mattBlack focus:border-mattBlack flex w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 `} 
              >
                <option value="NaN">Select Year</option>
                <option value="1">1 Year</option>
                <option value="2">2 Years</option>
                <option value="3">3 Years</option>
                <option value="5">5 Years</option>
                <option value="7">7 Years</option>
                <option value="9">9 Years</option>
                <option value="10">10 Years</option>
                <option value="12">12 Years</option>
                <option value="15">15 Years</option>
                <option value="20">20 Years</option>
                <option value="25">25 Years</option>
                <option value="30">30 Years</option>
                <option value="custom">Enter Custom Year</option>
              </select>
              {customYearDisplayStatus && (
              <Input 
              type={'number'}
              name={'loanTerm'}
              additionInputClassName='mt-4 animate-fade-in-translate'
              placeholder={'Enter the year'}
              required={false}
              handleInputChange={handleInputChange}
              />
              )}
            </div> */}
            {
              loadSharedInputs && (
                <>
                <SelectInputs 
                selectOptions={selectOptions} 
                handleSelectChange={handleSelectChange}
                additionalClassName={'col-span-2'}
                additionalOptionText={'Year'}
                defaultChecked={initailValue['loanTerm']}
                />
                 {customYearDisplayStatus && (
                  <Input 
                  type={'number'}
                  name={'loanTerm'}
                  additionInputClassName='min-w-full animate-fade-in-translate'
                  placeholder={'Enter the year'}
                  required={false}
                  handleInputChange={handleInputChange}
                  />
                  )}
                  </>
              )
            }
          

             {/* Interst Rate */}   
            <CalcInputs 
              htmlFor={'interestRate'} 
              additionalClasses={''} 
              label={'Interest Rate'} 
              inputType={'number'}
              inputName={'interestRate'}
              inputId={''}
              additionInputClassName={''}
              inputPlaceholder={'Enter the interest rate for the loan'}
              inputRequired={true}
              handleInputChange={handleInputChange}
              inputValue={initailValue['interestRate']}
              /> 

         
       
          </div>
          {/* Calculate Button */}
          <CalculateBtn
          handleCalculateBtn={handleCalculateBtn}
          btnText={'Calculate'}
          />
        </form>
      </div>
    </div>
  </div>
  )
}

export default MortgageCalci


     {/* <div className="col-span-2">
              <label
                for="name"
                className="block mb-2 text-sm font-medium text-leadGrey dark:text-white "
              >
                Down Payment
              </label>
                    <Input type={'number'} name={'downPayment'} id={''} className={''} placeholder={'Enter the Down Payment Made'} required={true}/>
            </div> */}


          //   <div className="col-span-2">
          //   <label
          //     for="name"
          //     className="block mb-2 text-sm font-medium text-leadGrey dark:text-white "
          //   >
          //    Interst Rate
          //   </label>
          //   <Input type={'number'} name={'interestRate'} id={''} className={''} placeholder={'Enter the Interest Rate for the Loan'} required={true}/>
          // </div>