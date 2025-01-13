import React, { useEffect, useState } from 'react'
import CalcInputs from './CalcInputs'
import CalcOutput from './CalcOutput'
import SelectInputs from './SelectInputs'
import CalculateBtn from './CalculateBtn'
import PhysicsUnitSelect from './PhysicsUnitSelect'
import { useSearchParams } from "react-router";
import ShareModal from './ShareModal'
import { shareLinkBase } from '../config'

function EnergyConverter({}) {
    const conversionUnits = {
        J: 1,
        KJ: 1000,
        'kWh': 3.6e6,
        'W*h': 3600,
        'cal': 4.184,
        'hp*h': 2.6845195376961728e6,
        'Btu': 1055.05585,
        GJ: 1e9,
        MJ: 1e6,
        mJ: 0.001,
        'µJ': 1e-6,
        nJ: 1e-9,
        aJ: 1e-18,
        MeV: 1.60218e-13,
        keV: 1.60218e-16,
        eV: 1.60218e-19,
        erg: 1e-7,
        'GW*h': 3.6e12,
        'MW*h': 3.6e9,
        'kW*s': 1000,
        'W*s': 1,
        'N*m': 1,
        'kcal (IT)': 4186.8,
        'kcal (th)': 4184,
        'cal (IT)': 4.1868,
        'cal (th)': 4.184,
        'MBtu (IT)': 1.05505585e9,
        'ton-hour (refrigeration)': 12660670.782,
        'fuel oil equivalent @kiloliter': 4.1868e10,
        'fuel oil equivalent @barrel (US)': 6.11809e9,
        Gton: 4.184e18,
        Mton: 4.184e15,
        kton: 4.184e12,
        'ton (explosives)': 4.184e9,
        'dyn*cm': 1e-7,
        'gf*m': 9.80665,
        'gf*cm': 0.0980665,
        'kp*m': 9.80665,
        'lbf*ft': 1.35582,
        'lbf*in': 0.1129848,
        'ozf*in': 0.0070615518,
        'ft*lbf': 1.35582,
        'in*lbf': 0.1129848,
        'in*ozf': 0.0070615518,
        'pdl*ft': 0.04214011,
        therm: 1.05506e8,
        'therm (EC)': 1.05506e8,
        'therm (US)': 1.0548e8,
        'Hartree energy': 4.3597447222071e-18,
        'Rydberg constant': 2.1798723611035e-18,
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

        const convertEnergyFunc = (value, from, to) =>{
          let result;
          const valueInJoules = value * (conversionUnits[from] || 1);// Convert to Joules
          result = valueInJoules / (conversionUnits[to] || 1);
          setResultValue(result.toFixed(6)); // Set output value with precision
        }

        const shareFunc = () =>{
          let newLink =`${shareLinkBase}/physics-unit-converter?share=${true}&type=energy-converter&val=${enteredValue}&from=${convertFrom}&to=${convertTo}&calc=1`
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
              convertEnergyFunc(value, convertFrom, convertTo)
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
            if(share && type === 'energy-converter'){
              setEnteredValue(Number(val));
              setConvertFrom(from);
              setConvertTo(to);
              setLoadSharedInputs(true)
              const value = parseFloat(val);   
              convertEnergyFunc(value, from, to)
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
              Convert Any Energy Unit
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
              label={'Enter Conversion Energy Unit'} 
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

export default EnergyConverter