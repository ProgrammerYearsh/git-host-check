import React from 'react'

function HeroSection({scrollToQuickstart}) {
  return (
    <main className="overflow-hidden">
    {/* Just add relative in below section  & div if anything error occurs in design  */}
   <section className="">
            <div className=" pt-40 pb-20 lg:pt-60 lg:pb-40   ">
                <div className="mx-auto px-0 max-w-7xl md:px-12 sphn:px-2  ">

                    <div className="text-center w-full md:mx-auto md:w-10/12 md:mr-auto md:mt-0  ">
                        
                        {/* Top Introducing Section  */}
                        <a className="border w-fit mx-auto flex justify-between items-center transition duration-200 rounded-[--annonce-border-radius] border-[--ui-light-border-color] hover:border-[--ui-light-border-hover-color] dark:border-[--ui-dark-border-color] dark:hover:border-[--ui-dark-border-hover-color] p-1 group gap-2 bg-mattBlack">
                        <span className="block text-sm px-2 py-0.5 rounded-[calc(var(--annonce-border-radius)-0.375rem)] text-mattBlack bg-neon">New</span>
                            <span className="text-sm font-medium text-leadGrey dark:text-gray-300 flex gap-2 ">
                                Introducing <span className=''>Modern</span> Caclulator
                                <div className="flex items-center -space-x-3 group-hover:-translate-x-1 transition-transform duration-300">
                                </div>
                            </span>
                        </a>
                        
                        {/* Heading */}
                        <span className='flex flex-col  items-center justify-center text-7xl sm:text-7xl  xl:[line-height:1.125] mt-10 gap-2
                        sm:flex-row 
                        '>
                        <h1 className=" text-wrap  font-medium text-mattBlack dark:text-white mr-1   ">Binary  </h1>
                        <h1 className=" text-wrap  font-normal text-neon dark:text-white bg-mattBlack px-5  tracking-tighter   "> Decimal </h1>
                        </span>

                        <h1 className="md:mt-5  mt-2 text-wrap  font-semibold text-mattBlack dark:text-white 
                        text-base
                        sphn:text-lg 
                        phn:text-2xl 
                        md:text-3xl 
                        xl:text-5xl 
                        tracking-tighter xl:[line-height:1.125] 
                        ">Tools For Complex Calculations</h1>
                      
                        
                        {/* Para  */}
                        <p className="text-wrap w-full  mt-10 text-sm tracking-tighter  text-mattBlack dark:text-gray-300 flex items-center justify-center 
                        md:tracking-normal md:text-lg sm:text-base 
                        ">Simplify your calculations with Binary Decimal! Explore a suite of powerful online calculators, including a versatile Base Converter, a comprehensive Physics Unit Converter, advanced mathematical tools, and a helpful Mortgage Calculator</p>

                        {/* Start Using Button */}

                   

                        <div className="mt-10 flex flex-col items-center justify-center gap-4">
                        <button onClick={scrollToQuickstart} type="button" className="text-mattBlack bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 border border-mattBlack">Start Exploring &darr;</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</main>
  )
}

export default HeroSection