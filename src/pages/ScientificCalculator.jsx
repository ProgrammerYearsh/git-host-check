import React from 'react'
import Navbar from '../components/Navbar'
import SeeAlso from '../components/SeeAlso'
import Footer from '../components/Footer'
import ScientificCalci from '../components/ScientificCalci'
import Notepad from '../components/Notepad'
import CalcPageHeader from '../components/CalcPageHeader'
import MaintenancePage from './MaintenancePage'
import PageHeader from '../components/PageHeader'
import SlateNotepad from '../components/SlateNotepad/SlateNotepad'
import CalcInfoSection from '../components/CalcInfoSection'

function ScientificCalculator() {
  return (
    <div className="bg-white dark:bg-mattBlack  flex-col flex ">
   <PageHeader/>

    <div className="sm:pt-28 pt-20 pb-20 ">
    <div className="mx-auto flex flex-col  px-1 md:px-6 phn:px-2 max-w-6xl bg items-start justify-center gap-10 text-left">
    <CalcPageHeader nav1="Science" nav2="Scientific Calculator" calcName="Scientific Calculator" calcDesc="Your go-to tool for all your mathematical needs. Our scientific calculator empowers you to solve complex problems with ease and accuracy."/>

            <div className='  w-full gap-5 justify-start items-start grid grid-cols-6'>
              <div className=' lg:col-span-3 col-span-6  '>   <ScientificCalci/> </div>
              <div className=' lg:col-span-3 col-span-6 '>
              <CalcInfoSection
              heading={'Performing Complex Calculations with a Scientific Calculator'}
              para1={"Scientific calculators are essential tools for students, researchers, and professionals across various fields, from mathematics and physics to engineering and finance. These calculators go beyond basic arithmetic operations, offering a wide range of advanced functions. "}
              para2={'By utilizing this scientific calculator, you can Solve complex equations, Improve accuracy, Enhance efficiency, Explore advanced concepts & more'}
              para3={''}
              />
                </div> 
            </div>
        </div>
    </div>

    <SeeAlso/>
    <Footer/>
    </div>
  )
}

export default ScientificCalculator