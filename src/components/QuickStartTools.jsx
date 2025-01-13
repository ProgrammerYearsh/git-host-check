import React from 'react'
import Shades from './Shades'
import { useNavigate } from 'react-router'

function QuickStartTools( {
    name, 
    Description, 
    linkToPage, 
    colSpan, 
    additionalClass
}) {
    const navigate = useNavigate()

  return (
    <div
    onClick={() => navigate(linkToPage)}
    style={{columnSpan : colSpan}}
    className={`relative group overflow-hidden p-[32px] px-[20px] sm:px-[32px] rounded-[--card-border-radius] bg-mattBlack border border-[--ui-light-border-color] dark:border-[--ui-dark-border-color] dark:bg-[--card-dark-bg] w-full col-span-${colSpan} flex ${additionalClass}`}>
        
    
    {/* Top Shadow */}
    <div aria-hidden="true" className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-leadGrey to-mattBlack dark:from-white dark:to-white blur-2xl opacity-10 group-hover:opacity-20 dark:opacity-0 dark:group-hover:opacity-5 "></div>

    <Shades/>
    
    {/* Card Section  */}
    <div className="relative flex flex-col gap-8 cursor-pointer justify-between">
        

        {/* Top Logo & Heading*/}
        <div className='flex gap-5 items-center justify-start'>
        {/* Logo */}
        <div className="border   border-warning-500/10 flex relative *:relative *:size-1 *:m-auto size-5 rounded-[calc(var(--card-border-radius)/2)] before:rounded-[calc((var(--card-border-radius)/2)-1px)] before:absolute before:inset-0 before:border-t
        bg-gradient-to-b from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800

         ">

        <svg className='hidden' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" id="Calculator">
        <path d="M384 1536q0-53-37.5-90.5T256 1408t-90.5 37.5T128 1536t37.5 90.5T256 1664t90.5-37.5T384 1536zm384 0q0-53-37.5-90.5T640 1408t-90.5 37.5T512 1536t37.5 90.5T640 1664t90.5-37.5T768 1536zm-384-384q0-53-37.5-90.5T256 1024t-90.5 37.5T128 1152t37.5 90.5T256 1280t90.5-37.5T384 1152zm768 384q0-53-37.5-90.5T1024 1408t-90.5 37.5T896 1536t37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zm-384-384q0-53-37.5-90.5T640 1024t-90.5 37.5T512 1152t37.5 90.5T640 1280t90.5-37.5T768 1152zM384 768q0-53-37.5-90.5T256 640t-90.5 37.5T128 768t37.5 90.5T256 896t90.5-37.5T384 768zm768 384q0-53-37.5-90.5T1024 1024t-90.5 37.5T896 1152t37.5 90.5 90.5 37.5 90.5-37.5 37.5-90.5zM768 768q0-53-37.5-90.5T640 640t-90.5 37.5T512 768t37.5 90.5T640 896t90.5-37.5T768 768zm768 768v-384q0-52-38-90t-90-38-90 38-38 90v384q0 52 38 90t90 38 90-38 38-90zm-384-768q0-53-37.5-90.5T1024 640t-90.5 37.5T896 768t37.5 90.5T1024 896t90.5-37.5T1152 768zm384-320V192q0-26-19-45t-45-19H192q-26 0-45 19t-19 45v256q0 26 19 45t45 19h1280q26 0 45-19t19-45zm0 320q0-53-37.5-90.5T1408 640t-90.5 37.5T1280 768t37.5 90.5T1408 896t90.5-37.5T1536 768zm128-640v1536q0 52-38 90t-90 38H128q-52 0-90-38t-38-90V128q0-52 38-90t90-38h1408q52 0 90 38t38 90z" fill="#000" className="color000000 svgShape"></path>
        </svg>

        </div>
        <div className="rounded-b-[--card-border-radius] ">
            <p className="font-semibold text-lg dark:text-gray-300 text-leadGrey">{name}</p>
        </div>
        </div>

        {/* Para */}
        <p className="text-leadGrey dark:text-gray-300 text-base opacity-80  font-light font-open-sans">{Description}</p>

        <div className="flex gap-3 -mb-[--card-padding] py-4 border-t border-[--ui-light-border-color] dark:border-[--ui-dark-border-color] ">
            {/* <a href="#" download="/" className="group rounded-[--btn-border-radius] disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-neon hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center">
                <span>Explore &rarr;</span>
            </a> */}
            <a  className="group rounded-[--btn-border-radius] disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 
            bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 
            hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center">
                <span>Explore &rarr;</span>
            </a>
        </div>
    </div>
    
</div>
  )
}

export default QuickStartTools