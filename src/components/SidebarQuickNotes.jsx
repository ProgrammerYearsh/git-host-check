import React from "react";
import Sidenav from "./Sidenav";
import QuickNotes from "./QuickNotes";
import SlateNotepad from "./SlateNotepad/SlateNotepad";

function SidebarQuickNotes({displayFunc, quickNotesDisplayStatus}) {

  return (
    <aside
      class={`flex items-start justify-end  fixed top-0 right-0   h-screen transition-transform duration-500  hidden sm:flex
        ${ quickNotesDisplayStatus ? "translate-x-0" : "translate-x-full"}  
        text-8xl z-20 w-full`}
      aria-label="Sidebar"
    >
      <div onClick={displayFunc} className={`w-full h-full z-30 absolute top-0 backdrop-blur-sm bg-black/5 transition-opacity duration-[1500ms]
                ${ quickNotesDisplayStatus ? "opacity-100" : "opacity-0"}  
        `} ></div>

      <div className=" flex flex-col   items-start justify-start gap-10 text-left pt-10 w-[740px] px-10 h-screen
      bg-white rounded-l-3xl
       shadow-2xl border-l-4 z-40
        ">
        <div className="text-center mb-0">
          <h2 className="text-3xl mt-5  text-mattBlack dark:text-white font-semibold text-left tracking-tighter ">
            Quick Notes
          </h2>
        </div>
        <div className="w-full">
        <SlateNotepad hideExpandBtn={true} dynamicHeight={"500px"} />
        </div>
      </div>
    </aside>
  );
}

export default SidebarQuickNotes;
