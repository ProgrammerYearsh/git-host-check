import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SeeAlso from "../components/SeeAlso";
import Footer from "../components/Footer";
import BaseConverter from "./BaseConverter";
import BaseConverterSection from "../components/BaseConverterSection";
import PowerConverter from "../components/PowerConverter";
import Notepad from "../components/Notepad";
import ForceConverter from "../components/ForceConverter";
import EnergyConverter from "../components/EnergyConverter";
import SpeedConverter from "../components/SpeedConverter";
import CalcPageHeader from "../components/CalcPageHeader";
import MaintenancePage from "./MaintenancePage";
import PageHeader from "../components/PageHeader";
import PhysicCalcDropdown from "../components/PhysicCalcDropdown";
import SlateNotepad from "../components/SlateNotepad/SlateNotepad";
import CalcInfoSection from "../components/CalcInfoSection";
import { useSearchParams } from "react-router";

function PhysicsUnitConverter() {
  const [searchParams] = useSearchParams();
  const baseUrl = window.location.pathname;
  const [activeBtnStatus, setActiveBtnStatus] = useState(0);
  const activeClassName =
    "text-xl text-mattBlack dark:text-white font-semibold  py-3 text-left  cursor-pointer bg-leadGrey px-1 mr-10 hidden sm:block";
  const inactiveClassName =
    "font-semibold opacity-60 text-xl  mr-10 cursor-pointer text-mattBlack  px-1 hidden sm:block";

  const activeGradientClass =
    "border mb-1 flex relative *:relative *:size-1 *:m-auto size-5 rounded-[calc(var(--card-border-radius)/2)] before:rounded-[calc((var(--card-border-radius)/2)-1px)] before:absolute before:inset-0 before:border-t bg-gradient-to-b from-lime-200 via-lime-400 to-lime-500  focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800";

  useEffect(() => {
    const type = searchParams.get('type');
    const calc = searchParams.get('calc');
    if (baseUrl === '/physics-unit-converter') {
      if (type === 'force-converter' && Number(calc) === 0) {
        setActiveBtnStatus(0)
      }
      if (type === 'energy-converter' && Number(calc) === 1) {
        setActiveBtnStatus(1)
      }
      if (type === 'speed-converter' && Number(calc) === 2) {
        setActiveBtnStatus(2)
      }
      if (type === 'power-converter' && Number(calc) === 3) {
        setActiveBtnStatus(3)
      }
    }

  }, [])
  
  return (
    <div className="bg-white dark:bg-mattBlack  flex-col ">
      <PageHeader />
      <div className="pt-20 sm:pt-28 pb-0 sm:pb-10 ">
        <div className="mx-auto flex flex-col  px-1 md:px-6 phn:px-2 max-w-6xl bg items-start justify-center gap-10 text-left">
          <CalcPageHeader
            nav1="Science"
            nav2="Physics Unit Converter"
            calcName="Physics Unit Converter"
            calcDesc="Instantly switch between various physics units with our intuitive converter. Whether you're dealing with power, energy, force, or speed, our tool makes unit conversions quick and easy, saving you time and effort."
          />
        </div>
      </div>

      <div className="text-center mx-auto px-1 md:px-6 phn:px-2 max-w-6xl flex flex-col items-start pb-20 w-full  ">
        <div className="text-2xl text-mattBlack dark:text-white font-semibold border-b-2  w-full text-left border-mattBlack border-solid border-1  flex-row items-center justify-start hidden sm:flex ">
          <div
            onClick={() => setActiveBtnStatus(0)}
            className={`flex items-center gap-2 ${
              activeBtnStatus === 0 ? activeClassName : null
            }`}
          >
            {/* <div className={activeBtnStatus === 0  ? activeGradientClass : 'hidden'}></div> */}
            <span
              className={` -ml-0  ${
                activeBtnStatus !== 0 ? inactiveClassName : null
              }`}
            >
              Force
            </span>
          </div>

          <div
            onClick={() => setActiveBtnStatus(1)}
            className={`flex items-center gap-2 ${
              activeBtnStatus === 1 ? activeClassName : null
            }`}
          >
            {/* <div className={activeBtnStatus === 1  ? activeGradientClass : 'hidden'}></div> */}
            <span className={activeBtnStatus !== 1 ? inactiveClassName : null}>
              Energy
            </span>
          </div>

          <div
            onClick={() => setActiveBtnStatus(2)}
            className={`flex items-center gap-2 ${
              activeBtnStatus === 2 ? activeClassName : null
            }`}
          >
            {/* <div className={activeBtnStatus === 2  ? activeGradientClass : 'hidden'}></div> */}
            <span className={activeBtnStatus !== 2 ? inactiveClassName : null}>
              Speed
            </span>
          </div>

          <div
            onClick={() => setActiveBtnStatus(3)}
            className={`flex items-center gap-2 ${
              activeBtnStatus === 3 ? activeClassName : null
            }`}
          >
            {/* <div className={activeBtnStatus === 3  ? activeGradientClass : 'hidden'}></div> */}
            <span className={activeBtnStatus !== 3 ? inactiveClassName : null}>
              Power
            </span>
          </div>
        </div>

        <PhysicCalcDropdown activeBtnStatus={activeBtnStatus} setActiveBtnStatus={setActiveBtnStatus} />

        {/* Main section */}
        <div className="grid grid-cols-5 font-open-sans w-full mt-10 text-left gap-2 ">
          <div
            className={` lg:col-span-2 col-span-5 -mt-5 ${
              activeBtnStatus !== 0 ? "hidden" : null
            }`}
          >
            <ForceConverter />
          </div>
          <div
            className={` lg:col-span-2 col-span-5 -mt-5 ${
              activeBtnStatus !== 1 ? "hidden" : null
            }`}
          >
            <EnergyConverter />
          </div>
          <div
            className={` lg:col-span-2 col-span-5 -mt-5 ${
              activeBtnStatus !== 2 ? "hidden" : null
            }`}
          >
            <SpeedConverter />
          </div>
          <div
            className={` lg:col-span-2 col-span-5 -mt-5 ${
              activeBtnStatus !== 3 ? "hidden" : null
            }`}
          >
            <PowerConverter />
          </div>
          {/* <div className=' col-span-2 -mt-5 hidden'>    <PowerConverter/></div> */}
          <div className=" lg:col-span-3 col-span-5 ">
          <CalcInfoSection
              heading={'Simplifying Physics Calculations with a Unit Converter'}
              para1={"Physics deals with a wide range of quantities, each measured in various units. To streamline calculations and ensure consistency, physics unit converters are invaluable tools. These tools allow for seamless conversion between units of force, energy, speed, power, and other physical quantities."}
              para2={'By simply selecting the initial and target units and entering the value, a physics unit converter can quickly and accurately convert between units such as Newtons, Joules, meters per second, Watts, and many more. '}
              para3={''}
              />
          </div>
        </div>

    
      </div>

      <SeeAlso />
      <Footer />
    </div>
  );
}

export default PhysicsUnitConverter;
