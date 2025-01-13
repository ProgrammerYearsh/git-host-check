import React from 'react'

function PhysicsCalciDummy() {
  return (
    <div
    id="crud-modal"
    tabindex="-1"
    className=" overflow-y-auto overflow-x-hidden  justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)]  max-h-full"
  >
    <div className="relative p-4 px-2 w-full max-w-md max-h-full ">
      {/* <!-- Modal content --> */}
      <div className="relative bg-mattBlack text-leadGrey rounded-lg shadow dark:bg-gray-700 w-full">
        {/* <!-- Modal header --> */}
        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
          <h3 className="text-lg font-semibold text-lightgrey dark:text-white bg-lightgrey rounded-3xl">
            Convert Any Power
          </h3>
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-leadGrey rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-toggle="crud-modal"
          >
            <svg
              className="w-3 h-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        {/* <!-- Modal body --> */}
        <form className="p-4 md:p-5 block font-open-sans">
          <div className="grid gap-4 mb-4 grid-cols-2">
              {/* Number  */}
            <div className="col-span-2">
              <label
                for="name"
                className=" mb-2 text-sm font-medium text-lightgrey dark:text-white bg-lightgrey rounded-3xl "
              >
                Input Value
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-lightgrey text-mattBlack border border-gray-300  text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 mt-2
                "
                placeholder=""
                required=""
              />
            </div>
            {/* Result */}
            <div className="col-span-2">
              <label
                for="description"
                className=" mb-2 text-sm font-medium text-lightgrey dark:text-white bg-lightgrey rounded-3xl"
              >
           Input Value
              </label>
              <textarea
                id="description"
                rows="4"
                className="block p-2.5 w-full text-sm text-mattBlack  bg-lightgrey rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-2"
                placeholder=""
              ></textarea>
            </div>
            {/* From  */}
            <div className="col-span-2 sm:col-span-1 hidden md:block">
              <label
                className="block mb-2 text-sm font-medium text-lightgrey dark:text-white bg-lightgrey rounded-3xl"
              >
                From
              </label>
              <select
                id="category"
                className="bg-lightgrey border border-gray-300 text-mattBlack text-sm rounded-lg focus:ring-mattBlack focus:border-mattBlack block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
              </select>
            </div>

            {/*  To  */}
            <div className="col-span-2 sm:col-span-1">
              <label
                for="category"
                className="block mb-2 text-sm font-medium text-lighgrey dark:text-white bg-lightgrey rounded-3xl"
              >
                To
              </label>
              <select
                id="category"
                className=" bg-lightgrey border border-gray-300 text-mattBlack text-sm rounded-lg focus:ring-mattBlack focus:border-mattBlack block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
              </select>
            </div>

         
       
          </div>
          <a  className="group rounded-lg disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 
          bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 
          hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-10 justify-center w-full font-Fira-code">
              <span>Convet</span>
          </a>
        </form>
      </div>
    </div>
  </div>
  )
}

export default PhysicsCalciDummy