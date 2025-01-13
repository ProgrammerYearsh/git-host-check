import React, { useState, useRef } from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../PageSections/HeroSection'
import Quickstart from '../PageSections/Quickstart'
import AboutTools from '../PageSections/AboutTools'
import AboutUsContent from '../PageSections/AboutUsContent'
import Footer from '../components/Footer'
import SidebarNav from '../components/SidebarNav'
import PageHeader from '../components/PageHeader'
import BlogsSection from '../PageSections/BlogsSection'
import MaintenancePage from './MaintenancePage'

function Home() {
  const quickstartRef = useRef(null);

  const scrollToQuickstart = () => {
    quickstartRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="bg-white dark:bg-mattBlack ">
    <PageHeader/>
    <HeroSection scrollToQuickstart={scrollToQuickstart} />
    <Quickstart quickstartRef={quickstartRef}/>
    <AboutTools/>
    <BlogsSection restrictLoad={true}/>
    <AboutUsContent/>
    <Footer/>
    </div>
  )
}

export default Home