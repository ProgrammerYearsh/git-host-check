import React, { useEffect } from 'react'
import BaseConverterDummy from '../components/BaseConverterDummy'
import ScientificCalciDummy from '../components/ScientificCalciDummy'

function AboutScientificCalculator() {
       useEffect(() => {
                const scrollAnimElements = document.querySelectorAll(
                  "[data-animate-on-scroll]"
                );
                const observer = new IntersectionObserver(
                  (entries) => {
                    for (const entry of entries) {
                      if (entry.isIntersecting || entry.intersectionRatio > 0) {
                        const targetElement = entry.target;
                        targetElement.classList.add("animate");
                        observer.unobserve(targetElement);
                      }
                    }
                  },
                  {
                    threshold: 0.15,
                  }
                );
                for (let i = 0; i < scrollAnimElements.length; i++) {
                  observer.observe(scrollAnimElements[i]);
                }
            
                return () => {
                  for (let i = 0; i < scrollAnimElements.length; i++) {
                    observer.unobserve(scrollAnimElements[i]);
                  }
                };
              }, []);
  return (
    <section>
    <div className="pt-0 ">
         {/* For responsive edited here -------------------->  */}
        <div className="mx-auto  px-1 lg:px-12 md:px-3 sphn:px-2 max-w-6xl text-gray-500">
            <div className="grid gap-0 md:gap-0 md:grid-cols-2 lg:grid-cols-6 items-center lg:gap-10">
                
                <div data-animate-on-scroll className="lg:col-span-3 [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-left] opacity-0">
                <div className="md:pr-2 lg:pr-0">
                <h2 className="text-3xl text-gray-950 dark:text-white font-semibold tracking-tighter">About Scientific Calculator</h2>
                <p className="mt-6 text-mattBlack dark:text-gray-300 font-open-sans text-normal text-sm phn:text-base">Our Mortgage Calculator provides a comprehensive overview of your loan. It not only calculates your monthly payments but also determines the total repayment amount and the total interest you'll pay over the loan term, empowering you to make informed financial decisions.<br/>  <br/></p>
                </div>
        
                </div>


               
                <div className="overflow-hidden lg:col-span-3 border bg-leadGrey dark:bg-[--card-dark-bg] rounded-[--card-border-radius] border-[--ui-light-border-color] dark:border-[--ui-dark-border-color] sm:pb-6 pb-5 ">

                {/* For responsive edited here -------------------->  */}
                <div className="flex gap-2  *:size-2.5 *:rounded-full  
                sm:px-8 sm:pt-8 pb-2 md:px-6 px-5 pt-5
                ">
                    <div className="bg-[#f87171]"></div>
                    <div className="bg-[#fbbf24]"></div>
                    <div className="bg-[#a3e635]"></div>
                </div>
                   
                    <div>
                    <div>
                     {/* For responsive edited here -------------------->  */}  
                    <pre className="w-full 
                    sm:px-8 md:px-6 px-5
                    ">
                    <ScientificCalciDummy/>
                    </pre>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default AboutScientificCalculator

