import React from 'react'
import Navbar from '../components/Navbar'
import SeeAlso from '../components/SeeAlso'
import Footer from '../components/Footer'
import Notepad from '../components/Notepad'
import MaintenancePage from './MaintenancePage'
import PageHeader from '../components/PageHeader'
import SlateNotepad from '../components/SlateNotepad/SlateNotepad'

function Notes() {
  return (
    <div className="bg-white dark:bg-mattBlack  flex-col ">
    <PageHeader/>

    <div className="pt-20 sm:pt-28 pb-40 ">
        <div className="mx-auto flex flex-col  px-2 md:px-6 phn:px-2 max-w-6xl bg items-start justify-center gap-5 sm:gap-10 text-left">
            <div className="text-center mb-5">
            <div className=" text-base text-mattBlack dark:text-gray-300  text-left font-open-sans hid">Home &rarr; Note Editor </div>
                <h2 className="md:text-7xl sm:text-5xl text-3xl mt-5  text-mattBlack dark:text-white font-semibold text-left tracking-tighter ">Edit Notes</h2>

            </div>
            <div className=' min-h-full w-full'><SlateNotepad 
            dynamicHeight={'550px'}
            hideExpandBtn={true} 
            /> 
            </div> 
            {/* <div className=' min-h-full w-full'><Notepad/> </div>  */}

        </div>
    </div>
    <SeeAlso/>
    <Footer/>
    </div>
  )
}

export default Notes