import React from "react";
import Navbar from "../components/Navbar";
import BaseConverterSection from "../components/BaseConverterSection";
import SeeAlso from "../components/SeeAlso";
import Footer from "../components/Footer";
import Notepad from "../components/Notepad";
import CalcPageHeader from "../components/CalcPageHeader";
import MaintenancePage from "./MaintenancePage";
import PageHeader from "../components/PageHeader";
import SlateNotepad from "../components/SlateNotepad/SlateNotepad";
import CalcInfoSection from "../components/CalcInfoSection";

function BaseConverter() {
  return (
    <div
      className="bg-white dark:bg-mattBlack  flex-col   flex
    "
    >
      <PageHeader />

      <div className="pt-20 sm:pt-28 pb-20 ">
        <div className="mx-auto flex flex-col  px-1 lg:px-6 md:px-3 sphn:px-2 max-w-6xl bg items-start justify-center gap-10 text-left">
          <CalcPageHeader
            nav1="Mathematics "
            nav2="Base Converter"
            calcName="Base Converter"
            calcDesc="Effortlessly convert numbers between any base (binary, decimal, hexadecimal, and more)."
          />

          <div className="   w-full gap-0 justify-start items-start grid grid-cols-5">
            <div className=" col-span-5 sm:col-span-3 md:col-span-2 "> <BaseConverterSection /> </div>
            <div className=" col-span-5 sm:col-span-2 md:col-span-3  ">
              <CalcInfoSection
              heading={' How to convert from any base to any base'}
              para1={" 1. Convert from source base to decimal (base 10 ) by multiplying each digit with the base raised to the power of the digit number (starting from right digit number 0): decimal = ∑(digit×basedigit number)"}
              para2={'     2. Convert from decimal to destination base: divide the decimal with base until the quotient is 0 and calculate the remainder each time. The destination base digits are the calculated remainders.'}
              para3={''}
              />
            </div>
          </div>
        </div>
      </div>
      <SeeAlso />
      <Footer />
    </div>
  );
}

export default BaseConverter;
