import React from 'react'
import SlateNotepad from './SlateNotepad/SlateNotepad'

function QuickNotes() {
  return (
    <div className=" flex flex-col   items-start justify-start gap-5 sm:gap-10 text-left bg-white">
    <div className="text-center mb-5">
        <h2 className="md:text-7xl sm:text-5xl text-3xl mt-5  text-mattBlack dark:text-white font-semibold text-left tracking-tighter ">Quick Notes</h2>

    </div>
    <div className=' w-full'><SlateNotepad hideExpandBtn={true}  /> 
    </div> 

</div>
  )
}

export default QuickNotes