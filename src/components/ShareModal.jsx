import React from 'react'

function ShareModal({shareModalDisplayStatus , shareLink , modalDisplayFunc, initialShareLink}) {

    const copyLinkToClipBoard = () =>{
        navigator.clipboard.writeText(shareLink)
        modalDisplayFunc()
    }
  return (


<div  className={`fixed top-0 left-0 right-0 z-10 w-full h-screen flex items-center justify-center backdrop-blur-md shadow-2xl  ${shareModalDisplayStatus ? 'flex ' : 'hidden '} `} >
<div onClick={modalDisplayFunc} className='w-full h-screen  absolute'></div>
<div  id="small-modal" tabindex="-1" class="   p-4 overflow-x-hidden  md:inset-0  ">
    <div class="relative w-full max-w-md max-h-full z-50 ">
        {/* <!-- Modal content --> */}
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-medium text-gray-900 dark:text-white">
                    Share with friends
                </h3>
                <button
                onClick={modalDisplayFunc}
                type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="small-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            {/* <!-- Modal body --> */}
            <div class="p-4 md:p-5 space-y-4">
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400 font-open-sans">
                {shareLink}
                </p>
            </div>
            {/* <!-- Modal footer --> */}
            <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                {
                    shareLink !== initialShareLink && (
                        <button 
                        onClick={copyLinkToClipBoard}
                        data-modal-hide="small-modal" type="button" class=" bg-lime-300 hover:bg-lime-500 focus:ring-4 focus:outline-none focus:ring-mattBlack  font-medium rounded-lg text-sm px-5 py-2.5 text-center  text-mattBlack">Copy link</button>
                    )
                }
            
                <button
                onClick={modalDisplayFunc}
                data-modal-hide="small-modal" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none  rounded-lg border border-gray-200 hover:bg-gray-400 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 bg-gray-200">Cancel</button>
            </div>
        </div>
    </div>
</div>

</div>

  )
}

export default ShareModal