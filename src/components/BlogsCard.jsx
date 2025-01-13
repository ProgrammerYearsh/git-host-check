import React from 'react'
import Shades from './Shades'
import { useNavigate } from 'react-router'

function BlogsCard({
date, 
category, 
title, 
description, 
blogDetailLink, 
data
}) {
  const navigate = useNavigate()
  return (
    <div
    onClick={() => navigate("/blog-detail" , {
      state : {data : data}
    })}
    className={`relative group overflow-hidden p-[--card-padding] rounded-[--card-border-radius] bg-mattBlack border border-[--ui-light-border-color] dark:border-[--ui-dark-border-color] dark:bg-[--card-dark-bg] w-full   flex cursor-pointer`}>
    
    {/* Top Shadow */}
    <div aria-hidden="true" className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-leadGrey to-mattBlack dark:from-white dark:to-white blur-2xl opacity-10 group-hover:opacity-20 dark:opacity-0 dark:group-hover:opacity-5 "></div>

    <Shades/>

    {/* Card Section  */}
    {/* <div className="relative flex flex-col gap-8 cursor-pointer "> */}

        {/* Top Logo & Heading*/}
        <div className='flex gap-5 flex-col items-start justify-around'>
        {/* Logo */}

        <div className='flex flex-row gap-5'>
        <div className="border border-warning-500/10 flex relative *:relative *:size-1 *:m-auto size-5 rounded-[calc(var(--card-border-radius)/2)] before:rounded-[calc((var(--card-border-radius)/2)-1px)] before:absolute before:inset-0 before:border-t
        bg-gradient-to-b from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800"></div>
            <p className="font-normal text-sm dark:text-gray-300 text-leadGrey">{date}</p>
        </div>  
        <div className=" wow fadeInUp group text-leadGrey" data-wow-delay=".1s">
      <div>
        <span
          className="inline-block px-4 py-0.5 mb-5 leading-loose text-center rounded-[--btn-border-radius] bg-primary 
           bg-gradient-to-b from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 text-mattBlack font-black text-sm          ">
        {category}
        </span>
        <h3>
          <a 
            className="inline-block mb-4 font-semibold  dark:text-white hover:text-primary dark:hover:text-primary sm:text-2xl xl:text-lg text-lg">
          {title.length > 45 ? `${title.slice(0, 43)}...` : title}
          </a>
        </h3>
        <p className="text-base font-light font-open-sans dark:text-dark-6 cursor-pointer">
        {description.length > 80 ? `${description.slice(0, 80)}...` : description}
        </p>
        
      </div>
      
    </div> 
    <a  className="group rounded-[--btn-border-radius] disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 
           bg-leadGrey
            hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center ">
                <span>Open </span>
                <span style={{fontSize: '20px'}} className='font-[500px]'>&#8599;</span>
            </a>
        </div>
    {/* </div> */}
</div>
  )
}

export default BlogsCard


