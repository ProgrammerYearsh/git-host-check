import React, { useEffect } from 'react'
import BaseConverterDummy from '../components/BaseConverterDummy'
import MortageCalciDummy from '../components/MortageCalciDummy'
import PhysicsCalciDummy from '../components/PhysicsCalciDummy'

function AboutPhysicsConverter() {

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
        <div className="mx-auto px-1 lg:px-12 md:px-3 sphn:px-2 max-w-6xl text-gray-500">
            <div className="grid gap-0 md:gap-0 md:grid-cols-2 lg:grid-cols-6 items-center lg:gap-10">
            
            {/* <----- for phone -----> */}
            <div data-animate-on-scroll className="lg:col-span-3 [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-right] opacity-0 md:hidden">
                <div className="md:pr-6 lg:pr-0">
                <h2 className="text-3xl text-gray-950 dark:text-white font-semibold tracking-tighter">About Physics Unit Converter</h2>
                <p className="mt-6 text-mattBlack dark:text-gray-300 font-open-sans text-normal text-sm phn:text-base">Our Mortgage Calculator provides a comprehensive overview of your loan. It not only calculates your monthly payments but also determines the total repayment amount and the total interest you'll pay over the loan term, empowering you to make informed financial decisions.<br/>  <br/></p>
                </div>
                </div>

            <div className="overflow-hidden lg:col-span-3 border bg-leadGrey dark:bg-[--card-dark-bg] rounded-[--card-border-radius] border-[--ui-light-border-color] dark:border-[--ui-dark-border-color] sm:pb-6 pb-5 pr-0 md:mr-5 ">

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
                    <PhysicsCalciDummy/>
                    </pre>
                    </div>
                    </div>
                </div>
                
                <div data-animate-on-scroll className="lg:col-span-3 [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-right] opacity-0 hidden md:block">
                <div className="md:pr-6 lg:pr-0">
                <h2 className="text-3xl text-gray-950 dark:text-white font-semibold tracking-tighter">About Physics Unit Converter</h2>
                <p className="mt-6 text-mattBlack dark:text-gray-300 font-open-sans text-normal text-base">Our Mortgage Calculator provides a comprehensive overview of your loan. It not only calculates your monthly payments but also determines the total repayment amount and the total interest you'll pay over the loan term, empowering you to make informed financial decisions.<br/>  <br/></p>
                </div>
                    {/* <ul className="mt-8 divide-y border-y border-[--ui-light-border-color] dark:border-[--ui-dark-border-color] divide-[--ui-light-border-color] dark:divide-[--ui-dark-border-color] *:py-3 *:flex *:items-center *:gap-3 text-gray-700 dark:text-gray-300">
                        <li>
                            <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <g fill="none" stroke="currentColor" stroke-width="1.5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m7 9l5 3.5L17 9"/>
                                    <path d="M2 17V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z"/>
                                </g>
                            </svg>
                            Email and web support
                        </li>
                        <li>
                            <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M8 9.5A1.25 1.25 0 1 0 8 12a1.25 1.25 0 0 0 0-2.5m4 0a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5m2.75 1.25a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0"/>
                                <path fill="currentColor" fill-rule="evenodd" d="M16.1 4.593a50.577 50.577 0 0 0-8.098-.04l-.193.015A4.93 4.93 0 0 0 3.25 9.483V18a.75.75 0 0 0 1.105.66l3.91-2.101a1.25 1.25 0 0 1 .593-.149h8.976c1.132 0 2.102-.81 2.305-1.923c.412-2.257.444-4.567.096-6.835l-.102-.669a2.666 2.666 0 0 0-2.408-2.252zM8.116 6.049a49.078 49.078 0 0 1 7.858.038l1.624.139c.536.046.972.453 1.053.985l.103.668a19.165 19.165 0 0 1-.09 6.339a.843.843 0 0 1-.829.692H8.858a2.75 2.75 0 0 0-1.302.328L4.75 16.746V9.483a3.43 3.43 0 0 1 3.171-3.42z" clip-rule="evenodd"/>
                            </svg>
                            Fast response time
                        </li>
                        <li>
                            <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14">
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 7.08h2.19a.52.52 0 0 0 .45-.27l1.8-3.6a.49.49 0 0 1 .49-.27a.48.48 0 0 1 .43.35l2.23 7.42a.5.5 0 0 0 .46.36a.5.5 0 0 0 .45-.32l1.37-3.35a.51.51 0 0 1 .47-.32h2.66"/>
                            </svg>
                            Menitoring and analytics
                        </li>
                        <li >
                            <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="currentColor" d="m6.75 21l-.25-2.2l2.85-7.85q.375.35.813.588t.937.362l-2.75 7.55zm10.5 0l-1.6-1.55l-2.75-7.55q.5-.125.938-.363t.812-.587l2.85 7.85zM12 11q-1.25 0-2.125-.875T9 8q0-.975.563-1.737T11 5.2V3h2v2.2q.875.3 1.438 1.063T15 8q0 1.25-.875 2.125T12 11m0-2q.425 0 .713-.288T13 8q0-.425-.288-.712T12 7q-.425 0-.712.288T11 8q0 .425.288.713T12 9"/>
                            </svg>
                            Architectural review
                        </li>
                    </ul> */}
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default AboutPhysicsConverter



