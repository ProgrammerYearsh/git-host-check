import React, { useEffect, useState } from 'react'
import CalcInputs from './CalcInputs'
import CalcOutput from './CalcOutput'
import SelectInputs from './SelectInputs'
import CalculateBtn from './CalculateBtn'
import PhysicsUnitSelect from './PhysicsUnitSelect'
import { useSearchParams } from "react-router";
import ShareModal from './ShareModal'
import { shareLinkBase } from '../config'

function PowerConverter({}) {
    const conversionUnits = {
      'W': 1,
      'EW': 1e18,
      'PW': 1e15,
      'TW': 1e12,
      'GW': 1e9,
      'MW': 1e6,
      'kW': 1e3,
      'hW': 1e2,
      'daW': 1e1,
      'dW': 1e-1,
      'CW': 1e-2,
      'mW': 1e-3,
      'μW': 1e-6,
      'nW': 1e-9,
      'pW': 1e-12,
      'fW': 1e-15,
      'aW': 1e-18,
      'hp': 745.7,
      'hp (UK)': 745.7,
      'hp (550 ft*lbf/s)': 745.7,
      'hp (metric)': 735.5,
      'hp (boiler)': 9809.5,
      'hp (electric)': 746,
      'hp (water)': 746,
      'ps': 735.5,
      'Btu/h': 0.293071,
      'Btu/min': 17.5842,
      'Btu/s': 1055.06,
      'Btu (th)/h': 0.293071,
      'Btu (th)/min': 17.5842,
      'Btu (th)/s': 1055.06,
      'MBtu/h': 293071,
      'MBH': 293071,
      'ton (refrigeration)': 3516.85,
      'kcal/h': 1.163,
      'kcal/min': 69.78,
      'kcal/s': 4186.8,
      'cal/h': 0.001163,
      'cal/min': 0.06978,
      'cal/s': 4.1868,
      'ft*lbf/h': 0.000376616,
      'ft*lbf/min': 0.0225969,
      'ft*lbf/s': 1.35582,
      'lbf*ft/h': 0.000376616,
      'lbf*ft/min': 0.0225969,
      'lbf*ft/s': 1.35582,
      'erg/s': 1e-7,
      'kV*A': 1000,
      'V*A': 1,
      'N*m/s': 1,
      'J/s': 1,
      'EJ/s': 1e18,
      'PJ/s': 1e15,
      'TJ/s': 1e12,
      'GJ/s': 1e9,
      'MJ/s': 1e6,
      'kJ/s': 1e3,
      'hJ/s': 1e2,
      'daJ/s': 1e1,
      'dJ/s': 1e-1,
      'cJ/s': 1e-2,
      'mJ/s': 1e-3,
      'μJ/s': 1e-6,
      'nJ/s': 1e-9,
      'pJ/s': 1e-12,
      'fJ/s': 1e-15,
      'aJ/s': 1e-18,
      'J/h': 2.77778e-4,
      'J/min': 0.0166667,
      'kJ/h': 0.277778,
      'kJ/min': 16.6667,
      };
          const [searchParams] = useSearchParams(); 
          const [convertFrom, setConvertFrom] = React.useState( 'J');
          const [convertTo, setConvertTo] = React.useState(' J');
          const [enteredValue, setEnteredValue] = React.useState(null);
          const [resultValue, setResultValue] = React.useState(null);
          const [loadSharedInputs, setLoadSharedInputs]=useState(false); 
          const [shareModalDisplayStatus, setShareModalDisplayStatus]=useState(false)
          const initialShareLink ='Nothing to share, please perform some calculations to share'
          const [shareLink, setShareLink]=useState(initialShareLink); 
          // <------------------------ Handling the Inputs  ------------------------>
          const handleInputChange = (event) => {
          const selectedValue = event.target.value;
          setEnteredValue(selectedValue) 
        };
      
        const handleFromSelectChange = (event) => {
          const selectedValue = event.target.value;
          setConvertFrom(selectedValue);
        };
        const handleToSelectChange = (event) => {
          const selectedValue = event.target.value;
          setConvertTo(selectedValue);
        };
        const convertPowerFunc=(value, from, to)=>{
          let result;
        
          const valueInWatts = value * (conversionUnits[from] || 1);//   // Convert input to watts (base unit)
          result = valueInWatts / (conversionUnits[to] || 1);
          setResultValue(result.toFixed(6)); // Set output value with precision

          let formattedResult;
          if (Math.abs(result) >= 1e6 || Math.abs(result) <= 1e-6) {
            formattedResult = result.toExponential(6); // Show in scientific notation with 6 decimal places
          } else {
            formattedResult = result.toLocaleString('en-US', {
              maximumFractionDigits: 6,
            }); // Standard format
          }
        
          setResultValue(formattedResult);
        }

        const shareFunc = () =>{
          let newLink =`${shareLinkBase}/physics-unit-converter?share=${true}&type=power-converter&val=${enteredValue}&from=${convertFrom}&to=${convertTo}&calc=3`
          setShareLink(newLink)
          window.history.pushState({}, '', newLink);
          }
      
        const handleCalculateBtn = () => {
            const value = parseFloat(enteredValue);  
            if (isNaN(value)) {
              alert('Invalid input');
              return;
            }
            else{
              convertPowerFunc(value, convertFrom, convertTo)
              shareFunc()
            }
        }

        const modalDisplayFunc = () =>{
          setShareModalDisplayStatus(!shareModalDisplayStatus)
        }

        useEffect(() => {
            const share = searchParams.get('share');
            const val = searchParams.get('val');
            const from = searchParams.get('from');
            const to = searchParams.get('to');
            const type = searchParams.get('type')
            if(share && type === 'power-converter'){
              setEnteredValue(Number(val));
              setConvertFrom(from);
              setConvertTo(to);
              setLoadSharedInputs(true)
              const value = parseFloat(val);   
              convertPowerFunc(value, from, to)
            }else{
              setLoadSharedInputs(true)
            }
          }, [])

  return (
    <div
      id="crud-modal"
      tabIndex="-1"
      className=" overflow-y-auto overflow-x-hidden  justify-center items-center  w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
    <ShareModal
    shareModalDisplayStatus={shareModalDisplayStatus} 
    shareLink={shareLink} 
    modalDisplayFunc={modalDisplayFunc} 
    initialShareLink={initialShareLink}
    />
      <div className="relative p-4 pl-0 pr-0 sm:pr-2 w-full max-w-md max-h-full ">
        {/* <!-- Modal content --> */}
        <div className="relative bg-mattBlack text-leadGrey rounded-lg shadow dark:bg-gray-700">
          {/* <!-- Modal header --> */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-lg font-semibold text-leadGrey dark:text-white">
              Convert Any Power Unit
            </h3>
            <button
              onClick={modalDisplayFunc}
              type="button"
              className=" hover:bg-gray-200 hover:text-leadGrey rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="crud-modal"
            >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M246.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 109.3 192 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-210.7 73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-64z"/></svg>
              <span className="sr-only">Share Modal</span>
            </button>
          </div>
          {/* <!-- Modal body --> */}
          <form className="p-4 md:p-5 block font-open-sans">
            <div className="grid gap-4 mb-4 grid-cols-2">
              
              {/* Conversion Number  */}
              <CalcInputs
              htmlFor={'conversionUnit'} 
              additionalClasses={''} 
              label={'Enter Conversion Power Unit'} 
              inputType={'number'}
              inputName={'conversionUnit'}
              inputId={''}
              additionInputClassName={''}
              inputPlaceholder={'Enter the energy unit for conversion'}
              inputRequired={true}
              handleInputChange={handleInputChange}
              inputValue={enteredValue}
              /> 


              {/* Result */}
              <CalcOutput label={'Result'} resultValue={resultValue}/>

              {
                loadSharedInputs && (
                  <PhysicsUnitSelect 
                  label={'From'}
                  additionalClassName={'col-span-1'}
                  selectOptions={conversionUnits} 
                  handleSelectChange={handleFromSelectChange} 
                  defaultChecked={convertFrom}
                  />
                )
              }
              {/*  To  */}
              {
                loadSharedInputs && (
                  <PhysicsUnitSelect
                  additionalClassName={'col-span-1'}
                  label={'To'}
                  selectOptions={conversionUnits}  
                  handleSelectChange={handleToSelectChange} 
                  defaultChecked={convertTo}
                 />
                )
              }

           
         
            </div>
            <CalculateBtn
            btnText={'Convert'}
            handleCalculateBtn={handleCalculateBtn}
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default PowerConverter