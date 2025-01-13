import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import notesLogo from '../assets/notes-logo.svg';

function Sidenav() {
    const [toolMenuDisplayStatus, setToolMenuDisplayStatus]=useState(false)
    const [financeMenuDisplayStatus, setFinanceMenuDisplayStatus]=useState(false)
    const [mathMenuDisplayStatus, setMathMenuDisplayStatus]=useState(false)
    const [scienceMenuDisplayStatus, setScienceMenuDisplayStatus]=useState(false)
    const navigate = useNavigate()
  return (
    <nav className="self-stretch border-whitesmoke-300 border-l-4 border-solid flex flex-col items-start justify-start  px-10 py-5 gap- text-lg font-poppins  text-dark-blue bg-white/10 backdrop-blur-2xl shadow-md overflow-visible  w-[250px] sphn:w-[300px] h-screen z-40 text-mattBlack">

    <div className="flex flex-col w-full items-start justify-start gap-0 text-[16px] ">
      <div 
      className="flex flex-row items-start justify-start cursor-pointer py-4 text-3xl border-b-[1px] border-solid border-mattBlack w-full">
      <div className="relative font-semibold">Menu</div>
      </div>
      <div 
      onClick={()=>{navigate('/')}}
      className="flex flex-row items-center justify-center cursor-pointer py-4 ">
      <div className="relative font-semibold">Home</div>
      </div>
      <div 
      onClick={()=>{setToolMenuDisplayStatus(!toolMenuDisplayStatus)}}
      className="flex flex-row items-center justify-center cursor-pointer gap-2  py-4">
      <div className="relative font-semibold">Tools {toolMenuDisplayStatus ? String.fromCharCode(11206) : String.fromCharCode(11208)}</div>
      </div>
      {/* ----------------------------- Tools menu -----------------------------   */}
      <div id="dropdown" className={`  ${!toolMenuDisplayStatus ? 'hidden': 'flex flex-col items-start  pl-5 w-full rounded-lg animate-fade-in-translate' }  `}>

      <div 
      onClick={()=>{setFinanceMenuDisplayStatus(!financeMenuDisplayStatus)}}
      className="flex flex-row items-center justify-center cursor-pointer gap-2  py-4">
      <div className="relative font-semibold">Finance  {financeMenuDisplayStatus ? String.fromCharCode(11206) : String.fromCharCode(11208)}</div>
      </div> 
            {/* <------------ Finance Menu Display  <------------*/}
            <div id="dropdown" className={`  ${!financeMenuDisplayStatus ? 'hidden': 'flex flex-col items-start' }  `}>
            
            <div 
            onClick={()=>{navigate('/mortgage-calculator')}}
            className="flex flex-row items-center justify-center cursor-pointer gap-2  py-4">
            <div className="relative font-normal tracking-tighter  animate-fade-in-translate"> Mortgage Calculator</div>
            </div>    

            </div>
      <div 
      onClick={()=>{setMathMenuDisplayStatus(!mathMenuDisplayStatus)}}
      className="flex flex-row items-center justify-center cursor-pointer gap-2  py-4">
      <div className="relative font-semibold">Mathematics  {mathMenuDisplayStatus ? String.fromCharCode(11206) : String.fromCharCode(11208)}</div>
      </div> 

            {/* <------------ Mathematics Menu Display  <------------*/}
            <div id="dropdown" className={`  ${!mathMenuDisplayStatus ? 'hidden': 'flex flex-col items-start' }  `}>
            
            <div 
            onClick={()=>{navigate('/base-converter')}}
            className="flex flex-row items-center justify-center cursor-pointer gap-2  py-4">
            <div className="relative font-normal tracking-tighter animate-fade-in-translate">Base Converter</div>
            </div>    
                                      
            </div>                          
    
    <div 
      onClick={()=>{setScienceMenuDisplayStatus(!scienceMenuDisplayStatus)}}
      className="flex flex-row items-center justify-center cursor-pointer gap-2  py-4">
      <div className="relative font-semibold">Science  {scienceMenuDisplayStatus ? String.fromCharCode(11206) : String.fromCharCode(11208)}</div>
      </div>  

            {/* <------------ Science  Menu Display  <------------*/}
               <div id="dropdown" className={`  ${!scienceMenuDisplayStatus ? 'hidden': 'flex flex-col items-start' }  `}>
            
            <div 
            onClick={()=>{navigate('/physics-unit-converter')}}
            className="flex flex-row items-center justify-center cursor-pointer gap-2  py-4">
            <div className="relative font-normal animate-fade-in-translate tracking-tighter">Physics Unit Converter</div>
            </div>    
            <div 
            onClick={()=>{navigate('/scientfic-calculator')}}
            className="flex flex-row items-center justify-center cursor-pointer gap-2  py-4">
            <div className="relative font-normal animate-fade-in-translate tracking-tighter">Scientfic Calculator</div>
            </div>    
                                      
            </div>                            
    </div>

      <div 
      onClick={()=>{navigate('/blogs')}}
      className="flex flex-row items-center justify-center cursor-pointer gap-2 py-4">
      <div className="relative font-semibold">Blogs</div>
      </div>
      <div 
      onClick={()=>{navigate('/about-us')}}
      className="flex flex-row items-center justify-center cursor-pointer py-4">
      <div className="relative font-semibold">About Us</div>
      </div>
      <div 
      onClick={()=>{navigate('/notes')}}
      className="flex flex-row items-center justify-center cursor-pointer py-4 gap-2">
            <img className='w-5 h-5  ' src={notesLogo} alt="Logo" />
      <div className="relative font-semibold">Notepad</div>
      </div>
    </div>
  </nav>
  )
}

export default Sidenav