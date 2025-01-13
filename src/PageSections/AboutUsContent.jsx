import React from 'react'

function AboutUsContent({ hideHeading } ) {
  return (
    <section>
    <div className="pt-10 pb-20 w-full  ">
        <div className="mx-auto px-1 md:px-6 phn:px-2 max-w-6xl ">
            <div className={`text-center ${hideHeading}`} >
                <h2 className="text-2xl text-mattBlack dark:text-white font-semibold mb-10 ">About Us</h2>
            </div>

    <div className="container w-full min-w-full mx-auto">
    <div className="wow fadeInUp w-full " data-wow-delay=".2s">
    <div className="flex flex-wrap items-center w-full  ">
      <div className="w-full  lg:w-1/2">
        <div className="mb-12 lg:max-w-[540px] w-full lg:mb-0">
          <h2
            className="mb-5 text-2xl font-bold leading-tight text-mattBlack dark:text-white sm:leading-[1.2]"
          >
             Empowering Calculation Confidence
          </h2>
          <p
            className="mb-10 text-sm sm:text-base leading-relaxed text-mattBlack dark:text-dark-6 font-open-sans "
          >
     At Binary Decimal, we're passionate about making calculations easier and more accessible for everyone. Our mission is to provide a suite of user-friendly online calculators that simplify complex tasks, from converting between different number systems to solving intricate physics equations.
            <br />
            <br />
            We believe that having the right tools can significantly enhance your learning experience and boost your productivity. Whether you're a student tackling challenging homework problems, a professional seeking to streamline your workflow, or simply curious about the world of numbers, Binary Decimal is here to help.
          </p>

        </div>
      </div>

      <div className="w-full  lg:w-1/2">
        <div className="flex flex-wrap ">
          <div className=" px-2 w-1/2 sm:px-4 lg:px-2 xl:px-4">
            <div
              className="mb-4 sm:mb-8 sm:h-[400px] md:h-[540px] lg:h-[400px] xl:h-[500px]"
            >
              <img
                 src="/images/ABOUT1.svg"
                alt="about image"
                className="object-contain object-center w-full h-full "
              />
            </div>
          </div>

          <div className=" px-2 w-1/2 sm:px-4 lg:px-2 xl:px-4">
            <div
              className="mb-4 sm:mb-8 sm:h-[220px] md:h-[346px] lg:mb-4 lg:h-[225px] xl:mb-8 xl:h-[310px]"
            >
              <img
                src="/images/ABOUT2.svg"
                alt="about image"
                className="object-fill object-center w-full h-full "
              />
            </div>

            <div
              className="relative z-10 mb-4 flex items-center justify-center overflow-hidden bg-primary px-6 py-12 sm:mb-8 sm:h-[160px] sm:p-5 lg:mb-4 xl:mb-8 bg-mattBlack rounded-[32px]"
            >
              <div>
                <span className="block text-5xl font-extrabold text-white">
                  09
                </span>
                <span className="block text-base font-semibold text-white">
                  We have
                </span>
                <span
                  className="block text-base font-medium text-white text-opacity-70"
                >
                  Years of experience
                </span>
              </div>
              <div>
                <span className="absolute top-0 left-0 -z-10">
                  <svg
                    width="106"
                    height="144"
                    viewBox="0 0 106 144"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      opacity="0.1"
                      x="-67"
                      y="47.127"
                      width="113.378"
                      height="131.304"
                      transform="rotate(-42.8643 -67 47.127)"
                      fill="url(#paint0_linear_1416_214)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1416_214"
                        x1="-10.3111"
                        y1="47.127"
                        x2="-10.3111"
                        y2="178.431"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white" />
                        <stop
                          offset="1"
                          stop-color="white"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="absolute top-0 right-0 -z-10">
                  <svg
                    width="130"
                    height="97"
                    viewBox="0 0 130 97"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      opacity="0.1"
                      x="0.86792"
                      y="-6.67725"
                      width="155.563"
                      height="140.614"
                      transform="rotate(-42.8643 0.86792 -6.67725)"
                      fill="url(#paint0_linear_1416_215)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1416_215"
                        x1="78.6495"
                        y1="-6.67725"
                        x2="78.6495"
                        y2="133.937"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white" />
                        <stop
                          offset="1"
                          stop-color="white"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="absolute bottom-0 right-0 -z-10">
                  <svg
                    width="175"
                    height="104"
                    viewBox="0 0 175 104"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      opacity="0.1"
                      x="175.011"
                      y="108.611"
                      width="101.246"
                      height="148.179"
                      transform="rotate(137.136 175.011 108.611)"
                      fill="url(#paint0_linear_1416_216)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1416_216"
                        x1="225.634"
                        y1="108.611"
                        x2="225.634"
                        y2="256.79"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white" />
                        <stop
                          offset="1"
                          stop-color="white"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    </div>
</section>
  )
}

export default AboutUsContent


