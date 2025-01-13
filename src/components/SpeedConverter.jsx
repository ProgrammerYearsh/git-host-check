import React, { useEffect, useState } from 'react'
import CalcInputs from './CalcInputs'
import CalcOutput from './CalcOutput'
import SelectInputs from './SelectInputs'
import CalculateBtn from './CalculateBtn'
import PhysicsUnitSelect from './PhysicsUnitSelect'
import { useSearchParams } from "react-router";
import ShareModal from './ShareModal'
import { shareLinkBase } from '../config'

function SpeedConverter({}) {
    const conversionUnits = {
        'm/s': 1,
        'km/h': 3.6,
        'mi/h': 2.23694,
        'm/h': 3600,
        'm/min': 60,
        'km/min': 0.06,
        'km/s': 0.001,
        'cm/h': 360000,
        'cm/min': 6000,
        'cm/s': 100,
        'mm/h': 3600000,
        'mm/min': 60000,
        'mm/s': 1000,
        'ft/h': 11811.023622,
        'ft/min': 196.850394,
        'ft/s': 3.28084,
        'yd/h': 3937.007874,
        'yd/min': 65.616798,
        'yd/s': 1.093613,
        'mi/min': 0.0372823,
        'mi/s': 0.000621371,
        'kt': 1.94384,
        'kt (UK)': 1.942604,
        'light': 3.33564e-9, // Fraction of the speed of light
        'cosmic1': 7.91, // First cosmic velocity in km/s
        'cosmic2': 11.2, // Second cosmic velocity in km/s
        'cosmic3': 16.7, // Third cosmic velocity in km/s
        'earth': 29.78, // Earth's orbital velocity in km/s
        'sound_water': 1.484, // Speed of sound in pure water in km/s
        'sound_seawater': 1.496, // Speed of sound in seawater (20°C, 1 atm) in km/s
        'mach_20c': 0.001013, // Mach at 20°C, 1 atm in km/s
        'mach_si': 0.001225, // Mach (SI standard) in km/s
      };
          const [searchParams] = useSearchParams();
          const [convertFrom, setConvertFrom] = React.useState('m/s');
          const [convertTo, setConvertTo] = React.useState('m/s');
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

        const convertSpeedFunc = (value, from, to) =>{
          let result;
          const valueInMetersPerSecond = value * (conversionUnits[from] || 1);// Convert to base unit
          result = valueInMetersPerSecond * (conversionUnits[to] || 1);
          setResultValue(result.toFixed(6)); // Set output value with precision
        }

        const shareFunc = () =>{
          let newLink =`${shareLinkBase}/physics-unit-converter?share=${true}&type=speed-converter&val=${enteredValue}&from=${convertFrom}&to=${convertTo}&calc=2`
          setShareLink(newLink)
          window.history.pushState({}, '', newLink);
          }
        
      
        const handleCalculateBtn = () => {
            const value = parseFloat(enteredValue);  
            if (isNaN(value)) {
              alert('Invalid input');
              return;
            }
            else {
              convertSpeedFunc(value, convertFrom, convertTo)
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
            if(share && type === 'speed-converter'){
              setEnteredValue(Number(val));
              setConvertFrom(from);
              setConvertTo(to);
              setLoadSharedInputs(true)
              const value = parseFloat(val);   
              convertSpeedFunc(value, from, to)
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
      <div className="relative p-4 pl-0  pr-0 sm:pr-2 w-full max-w-md max-h-full ">
        {/* <!-- Modal content --> */}
        <div className="relative bg-mattBlack text-leadGrey rounded-lg shadow dark:bg-gray-700">
          {/* <!-- Modal header --> */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-lg font-semibold text-leadGrey dark:text-white">
              Convert Any Speed Unit
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
              label={'Enter Conversion Speed Unit'} 
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

             {/* From  */}
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

export default SpeedConverter