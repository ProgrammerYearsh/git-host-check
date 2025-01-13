import React, { useEffect, useState } from 'react'
import notesLogo from '../assets/notes-logo.svg';
import { useNavigate } from 'react-router';
import SidebarNav from './SidebarNav';

function Navbar({phnMenuDisplayStatus, setPhnMenuDisplayStatus}) {

    const [toolMenuDisplayStatus ,setToolMenuDisplayStatus]=useState(false)

    const handleToolMenuButton = () =>{
        setToolMenuDisplayStatus(!toolMenuDisplayStatus)
    }

    const navigate = useNavigate()


    window.addEventListener("scroll", () => {
        const navbar = document.getElementById("navbar");
        if (window.scrollY > 300) {
          navbar.classList.add("bg-black/30", "backdrop-blur", "shadow-md", );
          navbar.classList.remove("bg-mattBlack");
        } else {
          navbar.classList.add("bg-mattBlack");
          navbar.classList.remove("bg-black/30", "backdrop-blur", "shadow-md", );
        }
      });
  return (
    <header>
    <nav id='navbar' className="fixed top-0 overflow-visible z-20 w-full bg-grey-50  rounded-b-lg border-b border-[--ui-light-border-color] border-x  backdrop-blur-2xl font-open-sans bg-mattBlack transition-all duration-500
    
    dark:bg-gray-950/0  dark:shadow-md dark:shadow-gray-950/10 dark:border-[--ui-dark-border-color]
    ">
        <div className="px-6 m-auto max-w-6xl 2xl:px-0">
            <div className="flex flex-wrap items-center justify-between py-2 sm:py-4">
                <div className="w-full items-center flex justify-between lg:w-auto">
                    <a className='font-Fira-code' href="/" aria-label="tailus logo">
                   Binary Decimal
                    </a>
                    <div
                    onClick={()=>setPhnMenuDisplayStatus(!phnMenuDisplayStatus)}
                    className="flex lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50"
                    style={{fill:'#FFFFFF'}}>
                    <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
                    </svg>
                    </div>
                </div>
                <div className="w-full h-0 lg:w-fit flex-wrap justify-end items-center space-y-8 lg:space-y-0 lg:flex lg:h-fit md:flex-nowrap hidden">
                    <div className="mt-6 text-leadGrey 
                     md:-ml-4 lg:pr-4 lg:mt-0
                     dark:text-gray-300
                     ">
                        <ul className="space-y-6 tracking-wide text-base lg:text-sm lg:flex lg:space-y-0  ">
                            <li onClick={()=>navigate('/')}>
                                <a className=" cursor-pointer block md:px-4    hover:text-neon
                                 transition-all 
                                dark:hover:text-primary-400">
                                    <span>Home</span>
                                </a>
                            </li>

                            {/* TOols  */}
                            <li>
                                <a
                                onClick={handleToolMenuButton}
                                className=" md:px-4   hover:text-neon
                                 transition-all  cursor-pointer
                                dark:hover:text-primary-400 flex items-end justify-center gap-2">
                                    <span>Tools </span>
                                    <span style={{fontSize: '30px', lineHeight: 0}}>&#129171;</span>
                                </a>
                                {/*Tools options  */}
                                <div id="dropdown" className={`z-50 bg-gray-100 backdrop-blur-2xl  shadow-lg   divide-gray-100 bg-grey-50 rounded-lg  w-48 absolute top-14 ${!toolMenuDisplayStatus ? 'hidden': '' } custom-bg animate-fade-in-translate-nav-options `}>
                                    <ul className="py-2 text-sm text-mattBlack dark:text-gray-200" aria-labelledby="dropdownDefaultButton z-50">
                                    
                                    {/* ------------------------ Finance Section ------------------------  */}
                                    <div className='group group-first'>
                                    <li > 
                                    <button id="doubleDropdownButton"  type="button" className="   flex items-center justify-between w-full px-4 py-2 hover:bg-gray-200  border-0 dark:hover:bg-gray-600 dark:hover:text-white bg-transparent
                                    ">Finance
                                        <svg className="w-2.5 h-2.5 ms-3 rtl:rotate-180 font-normal text-mattBlackcursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                                    </svg
                                    ></button> 
                                    </li>

                                    {/* Finance Subsection  */}
                                    <div id="doubleDropdown" className={`  divide-y divide-gray-100 rounded-lg shadow w-48 absolute top-0 left-52 cursor-pointer bg-leadGrey
                                    group-hover:flex    
                                    transition-all duration-500    
                                    opacity-0 group-hover:opacity-100
                                    translate-y-4 group-hover:translate-y-0  
                                    bg-black/5 backdrop-blur-3xl  shadow-lg 
                                    `} >
                              
                                    <ul className="py-2 text-sm text-mattBlack font-semibold dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                                    <li>
                                        <a onClick={()=>navigate('/mortgage-calculator')} className=" cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ">Mortgage Calculator</a>
                                    </li>
                                    </ul>
                                    </div>
                                    </div>

                                   

                                    {/*  ------------------------ Mathematics Section ------------------------   */}
                                    <div className='group group-second  '>
                                    <li>
                                    <button id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" className=" flex items-center justify-between w-full px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white 
                                       bg-transparent border-0
                                    ">Mathematics<svg className="w-2.5 h-2.5 ms-3 rtl:rotate-180 font-normal text-mattBlack 
                                    " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                                    </svg></button>
                                    </li>

                                    {/*  Mathematic Subsection   */}
                                    <div id="doubleDropdown" className={`z-20 bg-leadGrey   divide-y divide-gray-100 rounded-lg shadow w-48 absolute top-10 left-52 
                                          group-hover:flex    
                                    transition-all duration-500    
                                    opacity-0 group-hover:opacity-100
                                    translate-y-4 group-hover:translate-y-0  
                                    bg-black/5 backdrop-blur-3xl  shadow-lg 
                                    
                                    `} >
                                    <ul className="py-2 text-sm text-mattBlack font-semibold dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                                    <li>
                                        <a onClick={()=>navigate('/base-converter')} className=" cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Base Converter</a>
                                    </li>
                                    </ul>
                                    </div>
                                    </div>


                                    {/* ------------------------ Science Section ------------------------   */}
                                    <div className='group group-third:'>
                                    <li>
                                    <button style={{cursor: 'pointer'}} id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" className="flex  items-center justify-between w-full px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer
                                    bg-transparent border-0
                                    ">Science <svg className="w-2.5 h-2.5 ms-3 rtl:rotate-180 font-normal text-mattBlack" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                                    </svg></button>
                                    </li>

                                    {/* Scientce Subsection  */}
                                    <div id="doubleDropdown" className={`   z-20 bg-leadGrey   divide-y divide-gray-100 rounded-lg  w-48 absolute top-20 left-52
                                    group-hover:flex    
                                    transition-all duration-500    
                                    opacity-0 group-hover:opacity-100
                                    translate-y-4 group-hover:translate-y-0  .
                                    bg-black/5 backdrop-blur-3xl  shadow-lg 
                                    `} >
                                    <ul className="py-2 text-sm text-mattBlack font-semibold dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                                    <li>
                                        <a onClick={()=>navigate('/scientfic-calculator')} className=" cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Scientific Calculator</a>
                                    </li>
                                    <li>
                                        <a onClick={()=>navigate('/physics-unit-converter')} className=" cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Physics Unit Converter</a>
                                    </li>
                                    </ul>
                                    </div>
                                    </div>


                                    </ul>
                                </div>
                            </li>
                            
                            <li onClick={()=>navigate('/blogs')}>
                                <a className=" cursor-pointer block md:px-4   hover:text-neon
                                 transition-all 
                                dark:hover:text-primary-400">
                                    <span>Blogs</span>
                                </a>
                            </li>
                          
                            <li onClick={()=>navigate('/about-us')}>
                                <a className=" cursor-pointer block md:px-4   hover:text-neon
                                 transition-all 
                                dark:hover:text-primary-400">
                                    <span>About us</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div
                    onClick={()=>navigate('/notes')}
                    className="w-full space-y-2 gap-2 pt-6 pb-4 lg:pb-0 border-t border-[--ui-light-border-color] dark:border-[--ui-dark-border-color] items-center lg:flex flex-col lg:flex-row lg:space-y-0 lg:w-fit lg:border-l lg:border-t-0 lg:pt-0 lg:pl-8 pl-4 cursor-pointer hidden ">
                     <img className='w-6 h-6  ' src={notesLogo} alt="Logo" />
                    <a className=" cursor-pointer block    hover:text-neon transition-all  dark:hover:text-primary-400">
                    <span>Notepad</span>
                    </a>    
                    </div>
                </div>
            </div>
        </div>


    </nav>
</header>
  )
}

export default Navbar