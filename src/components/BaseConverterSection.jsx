import React, { useEffect, useState } from "react";
import CalcInputs from "./CalcInputs";
import CalcOutput from "./CalcOutput";
import SelectInputs from "./SelectInputs";
import CalculateBtn from "./CalculateBtn";
import { useSearchParams } from "react-router";
import ShareModal from "./ShareModal";
import { shareLinkBase } from "../config";

function BaseConverterSection() {

  const Base = [
    2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
    24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
  ];
  const [searchParams] = useSearchParams();

  // "2 Binary"
  // "8 Octal"
  // "10 Decimal"
  // "16 Hex"

  const [convertFrom, setConvertFrom] = React.useState(2);
  const [convertTo, setConvertTo] = React.useState(10);
  const [enteredValue, setEnteredValue] = React.useState(null);
  const [resultValue, setResultValue] = React.useState(null);
  const [loadSharedInputs, setLoadSharedInputs]=useState(false); 
  const [shareModalDisplayStatus, setShareModalDisplayStatus]=useState(false)
  const initialShareLink ='Nothing to share, please perform some calculations to share'
  const [shareLink, setShareLink]=useState(initialShareLink)

  // <------------------------ Handling the Inputs  ------------------------>
  const handleInputChange = (event) => {
    const selectedValue = event.target.value;
    setEnteredValue(selectedValue);
  };

  const handleFromSelectChange = (event) => {
    const selectedValue = event.target.value;
    setConvertFrom(selectedValue);
  };
  const handleToSelectChange = (event) => {
    const selectedValue = event.target.value;
    setConvertTo(selectedValue);
  };

  const calculateBase = (valueEntered, fromValue , toValue ) =>{
      const decimalValue = parseInt(valueEntered, fromValue);
      const convertedValue = decimalValue.toString(toValue);
      setResultValue(convertedValue.toUpperCase());
  }

  const handleCalculateBtn = () => {
    if (!enteredValue) {
      return alert("Please enter a number");
    } else {
      calculateBase(enteredValue ,convertFrom ,convertTo)
      let newLink =`${shareLinkBase}/base-converter?share=${true}&type=base-converter&val=${enteredValue}&from=${convertFrom}&to=${convertTo}`
      setShareLink(newLink)
      window.history.pushState({}, '', newLink);
    }
  };

  useEffect(() => {
    const share = searchParams.get('share');
    const val = searchParams.get('val');
    const from = searchParams.get('from');
    const to = searchParams.get('to');
    const type = searchParams.get('type')
    if(share && type === 'base-converter'){
      setEnteredValue(Number(val));
      setConvertFrom(Number(from));
      setConvertTo(Number(to));
      setLoadSharedInputs(true)
      calculateBase(val ,from ,to)
    }else{
      setLoadSharedInputs(true)
    }
  }, [])

  const modalDisplayFunc = () =>{
    setShareModalDisplayStatus(!shareModalDisplayStatus)
  }


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
      <div className="relative p-4 pt-0 pl-0 pr-0 sm:pr-4 w-full max-w-md max-h-full ">
        {/* <!-- Modal content --> */}
        <div className="relative bg-mattBlack text-leadGrey rounded-lg shadow dark:bg-gray-700">
          {/* <!-- Modal header --> */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-lg font-semibold text-leadGrey dark:text-white">
              Convert Any Number
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
                inputValue={enteredValue}
                htmlFor={"conversionNumber"}
                additionalClasses={""}
                label={"Enter Conversion Number"}
                inputType={"number"}
                inputName={"conversionNumber"}
                inputId={""}
                additionInputClassName={""}
                inputPlaceholder={"Enter the Number for conversion"}
                inputRequired={true}
                handleInputChange={handleInputChange}
              />

              {/* Result */}
              <CalcOutput label={"Result"} resultValue={resultValue} />
              {/* From  */}
              {
                loadSharedInputs && (
                  <SelectInputs
                  label={"From"}
                  additionalClassName={"col-span-1"}
                  selectOptions={Base}
                  handleSelectChange={handleFromSelectChange}
                  defaultChecked={convertFrom}
                  // additionalOptionText={'Year'}
                />
                )
              }
           

              {/*  To  */}
              {
                loadSharedInputs && (
                  <SelectInputs
                  additionalClassName={"col-span-1"}
                  label={"To"}
                  selectOptions={Base}
                  handleSelectChange={handleToSelectChange}
                  defaultChecked={convertTo}
                />
                )
              }
            </div>
            <CalculateBtn
              btnText={"Convert"}
              handleCalculateBtn={handleCalculateBtn}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default BaseConverterSection;
