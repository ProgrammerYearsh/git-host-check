import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BlogExpandSection from '../components/BlogExpandSection'
import MaintenancePage from './MaintenancePage'
import PageHeader from '../components/PageHeader'
import { useLocation } from 'react-router'

function BlogExpand() {
  const location = useLocation();
  const { data } = location.state || null;
  return (
    <div className="bg-white dark:bg-mattBlack w-full ">
    <PageHeader/>
    <BlogExpandSection data={data}/>
    <Footer/>
    </div>
  )
}

export default BlogExpand