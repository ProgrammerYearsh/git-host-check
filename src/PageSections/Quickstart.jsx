import React from 'react'
import QuickStartTools from '../components/QuickStartTools'

function Quickstart({quickstartRef}) {
  return (
    <section ref={quickstartRef}>
    <div className="pt-20 pb-20 md:pt-40 ">
        <div className="mx-auto px-0 sphn:px-1 phn:px-2 sm:px-6 max-w-6xl ">
            <div className="text-center">
                <h2 className="text-xl phn:text-2xl text-mattBlack dark:text-white font-semibold">Quickstart with These</h2>
                <p className="mt-5 text-sm phn:text-base text-mattBlack dark:text-gray-300">This concisely conveys the ease of use and encourages users to explore the tools.</p>
            </div>
        
             <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-2 gap-5 ">
                <QuickStartTools
                name={'Base Converter'}
                Description={"Effortlessly convert numbers between any base (binary, decimal, hexadecimal, and more)."}
                linkToPage={'/base-converter'}
                additionalClass={'col-span-2 sm:col-span-1'}  
                />
                <QuickStartTools
                name={'Mortgage Converter'}
                Description={"Do Loan Calculation Easily with Mortgage Calculator that provide monthly Interest"}
                linkToPage={'/mortgage-calculator'}
                additionalClass={'col-span-2 sm:col-span-1'}  
                />
                <QuickStartTools
                name={'Scientific Calculator'}
                Description={"Solve complex mathematical problems with ease, from basic arithmetic to advanced calculus."}
                linkToPage={'/scientfic-calculator'}
                additionalClass={'col-span-2 sm:col-span-1'}  
                />
                <QuickStartTools
                name={'Physics Unit Converter'}
                Description={"Instantly convert between various units of measurement in physics, including power, energy, force & speed."}
                linkToPage={'/physics-unit-converter'}
                additionalClass={'lg:hidden col-span-2 sm:col-span-1'}
                />
                  <QuickStartTools
                name={'Notes App'}
                Description={"A dedicated space to store and highlight your important calculations, formulas, and notes. Boost your productivity by keeping track of your work and eliminating the need to re-calculate or search for past solutions."}
                linkToPage={'/notes'}
                colSpan={2}
                additionalClass={'lg:hidden '}
                />
            </div>

            <div className="mt-5  grid-cols-3 lg:grid-cols-3  gap-5 hidden lg:grid">
                <QuickStartTools
                name={'Physics Unit Converter'}
                Description={"Instantly convert between various units of measurement in physics, including power, energy, force & speed."}
                linkToPage={'/physics-unit-converter'}
                colSpan={1}
                />
                <QuickStartTools
                name={'Notes App'}
                Description={"A dedicated space to store and highlight your important calculations, formulas, and notes. Boost your productivity by keeping track of your work and eliminating the need to re-calculate or search for past solutions."}
                linkToPage={'/notes'}
                colSpan={2}
                />
            </div>
        </div>
    </div>
</section>
  )
}

export default Quickstart


// <div className="relative group overflow-hidden p-[--card-padding] rounded-[--card-border-radius] bg-white border border-[--ui-light-border-color] dark:border-[--ui-dark-border-color] dark:bg-[--card-dark-bg]">
// <div aria-hidden="true" className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-info-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-0 dark:group-hover:opacity-5"></div>
// <div className="relative">
//     <div className="border border-info-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-[calc(var(--card-border-radius)/2)] dark:bg-gray-900 dark:border-white/15 before:rounded-[calc((var(--card-border-radius)/2)-1px)] before:absolute before:inset-0 before:border-t before:border-white before:from-info-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
//         <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128"><path fill="#0080ff" d="M64.142 102.96H39.24V78.522h24.903ZM39.24 122.131H20.373v-19.173H39.24Zm-18.866-19.173H4.53V87.167h15.843Zm43.394 24.814v-24.814c26.41 0 46.784-25.94 36.597-53.388c-3.775-10.15-11.694-18.42-22.26-22.181c-27.167-9.772-53.2 10.527-53.2 36.468H0c0-41.354 40.37-74.064 84.52-60.53c19.242 6.017 34.334 21.055 40.37 40.23c13.581 43.985-19.245 84.214-61.123 84.214Zm0 0"/></svg>
//     </div>

//     <div className="mt-6 pb-6 rounded-b-[--card-border-radius]">
//         <p className="text-gray-700 dark:text-gray-300">Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente.</p>
//     </div>
//     <div className="flex gap-3 -mb-[--card-padding] py-4 border-t border-[--ui-light-border-color] dark:border-[--ui-dark-border-color]">
//         <a href="#" download="/" className="group rounded-[--btn-border-radius] disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center">
//             <span>Download</span>
//             <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 13l-5 5m0 0l-5-5m5 5V6"/></svg>
//         </a>
//         <a href="https://github.com/tailus-ui" className="group flex items-center rounded-[--btn-border-radius] disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 size-8 justify-center">
//             <span className="sr-only">Source Code</span>
//             <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg>
//         </a>
//     </div>
// </div>
// </div>