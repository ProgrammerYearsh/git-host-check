import React from 'react'
import Navbar from '../components/Navbar'
import AboutUsContent from '../PageSections/AboutUsContent'
import Footer from '../components/Footer'
import BlogsSection from '../PageSections/BlogsSection'
import MaintenancePage from './MaintenancePage'
import PageHeader from '../components/PageHeader'

function Blogs() {
  return (
    <div className="bg-white dark:bg-mattBlack  flex-col  flex ">
   <PageHeader/>

    <div className="pt-28 pb-0 ">
        <div className="mx-auto flex flex-col  px-6 max-w-6xl bg items-start justify-center gap-10 text-left">
            <div className="text-center ">
            <div className=" text-base text-mattBlack dark:text-gray-300  text-left font-open-sans hid">Home &rarr; Blogs </div>
                <h2 className="text-7xl mt-5  text-mattBlack dark:text-white font-semibold text-left tracking-tighter ">Blogs</h2>
            </div>
        </div>
    </div>
    <BlogsSection  hideHeading={'hidden'} leftText={'text-left'}/>
    
    <Footer/>
    </div>
  )
}

export default Blogs