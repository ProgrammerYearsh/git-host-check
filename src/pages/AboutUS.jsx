import React from 'react'
import AboutUsContent from '../PageSections/AboutUsContent'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import MaintenancePage from './MaintenancePage'
import PageHeader from '../components/PageHeader'

function AboutUS() {
  return (
    <div className="bg-white dark:bg-mattBlack flex-col  flex"
    >
    <PageHeader/>

    <div className="pt-28 pb-0 ">
        <div className="mx-auto flex flex-col px-2 md:px-6 phn:px-2 max-w-6xl bg items-start justify-center gap-10 text-left">
            <div className="text-center mb-5">
            <div className=" text-base text-mattBlack dark:text-gray-300  text-left font-open-sans hid">Home &rarr; aboutus</div>
                <h2 className="md:text-7xl sm:text-5xl text-3xl mt-5  text-mattBlack dark:text-white font-semibold text-left tracking-tighter ">About us</h2>
            </div>
        </div>
    </div>

    <AboutUsContent hideHeading={'hidden'}/>
    <Footer/>
    </div>
  )
}

export default AboutUS