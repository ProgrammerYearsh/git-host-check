import React, { useState } from "react";
import SidebarQuickNotes from "./SidebarQuickNotes";

function CalcInfoSection({ heading, para1, para2, para3 }) {
  const [quickNotesDisplayStatus, setQuickNotesDisplayStatus]=useState(false)
  const displayFunc=()=>{
    setQuickNotesDisplayStatus(!quickNotesDisplayStatus)
  }
  return (
    <div className="text-center mx-auto px-1 lg:px-6 md:px-3 sphn:px-2 max-w-6xl flex flex-col items-start pb-20 gap-5 ">
          <SidebarQuickNotes quickNotesDisplayStatus={quickNotesDisplayStatus} displayFunc={displayFunc}/>
      <h2 className="text-2xl text-mattBlack dark:text-white font-semibold text-left">
        {heading}
      </h2>
      <p className="text-sm sm:text-base text-mattBlack dark:text-gray-300 font-open-sans text-left opacity-70 ">
        {para1}
      </p>
      <p className=" text-sm sm:text-base text-mattBlack dark:text-gray-300 font-open-sans text-left  opacity-70 ">
        {para2}
      </p>
      {para3 && (
        <p className=" text-sm sm:text-base text-mattBlack dark:text-gray-300 font-open-sans text-left  opacity-70 ">
          {para3}
        </p>
      )}
      <a
        onClick={displayFunc}
        className="group rounded-lg disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 mt-2  cursor-pointer
        bg-leadGrey
         hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10  gap-1.5 items-center text-sm h-8 px-3.5 justify-center  hidden sm:flex"
      >
        <span>Add in Quick Note </span>
        <span style={{ fontSize: "20px" }} className="font-[500px]">
          &#8599;
        </span>
      </a>
    </div>
  );
}

export default CalcInfoSection;
