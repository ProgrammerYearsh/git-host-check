import React, { useEffect, useState } from 'react'
import SeeAlso from "./SeeAlso";
import SeeAlsoBlogs from "./SeeAlsoBlogs";

function BlogExpandSection({ data }) {

  const componentMap = {
    point: (text) => (
      <ul className="mb-10 list-inside list-disc text-body-color font-open-sans">
        {text &&
          text.map((e) => {
            return (
              <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                {e}
              </li>
            );
          })}
      </ul>
    ),
    para: (text) => (
      <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed font-open-sans">
        {text}
      </p>
    ),
    heading: (text) => (
      <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
        {text}
      </h3>
    ),
  };




  return (
    <section className="pb-[120px] sm:pt-28 pt-20 text-mattBlack dark:text-white ">
      <div className="container min-w-fit  mx-auto">
        <div className="-mx-4 flex flex-wrap justify-center w-full ">
          <div className=" px-5 sphn:px-10 md:px-6 phn:px-10 lg:w-8/12 sm:w-10/12 ">
            <div>
              <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                {data.title}
              </h2>
              <div className="mb-10 flex flex-wrap items-center justify-between border-b border-mattBlack  pb-4 dark:border-white dark:border-opacity-10">
                <div className="flex flex-wrap items-center">
                  <div className="mb-5 flex items-center  justify-center">
                    {/* Blog Date */}
                    <p className="mr-5 flex items-center text-base font-medium text-body-color">
                      <span className="mr-3">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          className="fill-current"
                        >
                          <path d="M3.89531 8.67529H3.10666C2.96327 8.67529 2.86768 8.77089 2.86768 8.91428V9.67904C2.86768 9.82243 2.96327 9.91802 3.10666 9.91802H3.89531C4.03871 9.91802 4.1343 9.82243 4.1343 9.67904V8.91428C4.1343 8.77089 4.03871 8.67529 3.89531 8.67529Z" />
                          <path d="M6.429 8.67529H5.64035C5.49696 8.67529 5.40137 8.77089 5.40137 8.91428V9.67904C5.40137 9.82243 5.49696 9.91802 5.64035 9.91802H6.429C6.57239 9.91802 6.66799 9.82243 6.66799 9.67904V8.91428C6.66799 8.77089 6.5485 8.67529 6.429 8.67529Z" />
                          <path d="M8.93828 8.67529H8.14963C8.00624 8.67529 7.91064 8.77089 7.91064 8.91428V9.67904C7.91064 9.82243 8.00624 9.91802 8.14963 9.91802H8.93828C9.08167 9.91802 9.17727 9.82243 9.17727 9.67904V8.91428C9.17727 8.77089 9.08167 8.67529 8.93828 8.67529Z" />
                          <path d="M11.4715 8.67529H10.6828C10.5394 8.67529 10.4438 8.77089 10.4438 8.91428V9.67904C10.4438 9.82243 10.5394 9.91802 10.6828 9.91802H11.4715C11.6149 9.91802 11.7105 9.82243 11.7105 9.67904V8.91428C11.7105 8.77089 11.591 8.67529 11.4715 8.67529Z" />
                          <path d="M3.89531 11.1606H3.10666C2.96327 11.1606 2.86768 11.2562 2.86768 11.3996V12.1644C2.86768 12.3078 2.96327 12.4034 3.10666 12.4034H3.89531C4.03871 12.4034 4.1343 12.3078 4.1343 12.1644V11.3996C4.1343 11.2562 4.03871 11.1606 3.89531 11.1606Z" />
                          <path d="M6.429 11.1606H5.64035C5.49696 11.1606 5.40137 11.2562 5.40137 11.3996V12.1644C5.40137 12.3078 5.49696 12.4034 5.64035 12.4034H6.429C6.57239 12.4034 6.66799 12.3078 6.66799 12.1644V11.3996C6.66799 11.2562 6.5485 11.1606 6.429 11.1606Z" />
                          <path d="M8.93828 11.1606H8.14963C8.00624 11.1606 7.91064 11.2562 7.91064 11.3996V12.1644C7.91064 12.3078 8.00624 12.4034 8.14963 12.4034H8.93828C9.08167 12.4034 9.17727 12.3078 9.17727 12.1644V11.3996C9.17727 11.2562 9.08167 11.1606 8.93828 11.1606Z" />
                          <path d="M11.4715 11.1606H10.6828C10.5394 11.1606 10.4438 11.2562 10.4438 11.3996V12.1644C10.4438 12.3078 10.5394 12.4034 10.6828 12.4034H11.4715C11.6149 12.4034 11.7105 12.3078 11.7105 12.1644V11.3996C11.7105 11.2562 11.591 11.1606 11.4715 11.1606Z" />
                          <path d="M13.2637 3.3697H7.64754V2.58105C8.19721 2.43765 8.62738 1.91189 8.62738 1.31442C8.62738 0.597464 8.02992 0 7.28906 0C6.54821 0 5.95074 0.597464 5.95074 1.31442C5.95074 1.91189 6.35702 2.41376 6.93058 2.58105V3.3697H1.31442C0.597464 3.3697 0 3.96716 0 4.68412V13.2637C0 13.9807 0.597464 14.5781 1.31442 14.5781H13.2637C13.9807 14.5781 14.5781 13.9807 14.5781 13.2637V4.68412C14.5781 3.96716 13.9807 3.3697 13.2637 3.3697ZM6.6677 1.31442C6.6677 0.979841 6.93058 0.716957 7.28906 0.716957C7.62364 0.716957 7.91042 0.979841 7.91042 1.31442C7.91042 1.649 7.64754 1.91189 7.28906 1.91189C6.95448 1.91189 6.6677 1.6251 6.6677 1.31442ZM1.31442 4.08665H13.2637C13.5983 4.08665 13.8612 4.34954 13.8612 4.68412V6.45261H0.716957V4.68412C0.716957 4.34954 0.979841 4.08665 1.31442 4.08665ZM13.2637 13.8612H1.31442C0.979841 13.8612 0.716957 13.5983 0.716957 13.2637V7.16957H13.8612V13.2637C13.8612 13.5983 13.5983 13.8612 13.2637 13.8612Z" />
                        </svg>
                      </span>
                      {data.date}
                    </p>

                    {/* Add Category Here */}
                    <span
                      className="inline-block px-4 py-0.5 leading-loose text-center rounded-[--btn-border-radius] bg-primary 
                    bg-gradient-to-b from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 text-mattBlack font-black text-sm          "
                    >
                      {data.category}
                    </span>
                  </div>
                </div>
              </div>
              <div>
                {/* {data.content &&
                  Object.keys(data.content).map((key, index) => {
                    const Component = componentMap[key];
                    return Component ? Component(data.content[key]) : null; // Render if the key matches a template
                })} */}
                {/* {data.content &&
                  Object.keys(data.content).map((key, index) => {
                    const Component = componentMap[key];
                    return Component ? (
                      <div key={`content-${index}`}>
                        {Component(data.content[key])}
                      </div>
                    ) : null;
                  })} */}
                {data && data.content.map((item, index) => {
                  const Component = componentMap[item.type];
                  return Component ? (
                    <div key={`content-${index}`}>
                      {Component(item.text)}
                    </div>
                  ) : null;
                })}
                {/* {blogComponents} */}
                <div
                  class="wow fadeInUp relative z-10 mb-10 overflow-hidden rounded-[5px] bg-primary/5 px-6 py-8 text-center sm:p-10 md:px-[60px]"
                  data-wow-delay=".1s
                    "
                >
                  <div class="mx-auto max-w-[530px]">
                    <span class="mb-[14px] flex justify-center text-primary">
                      <svg
                        width="46"
                        height="46"
                        viewBox="0 0 46 46"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="fill-current"
                      >
                        <path d="M13.7995 35.5781C12.937 35.5781 12.1464 35.075 11.8589 34.2844L9.48702 28.5344C6.82765 28.1031 4.45577 26.7375 2.9464 24.6531C1.36515 22.5687 0.862021 19.9812 1.5089 17.4656C2.51515 13.3687 6.75577 10.2781 11.4276 10.35C14.7339 10.4219 17.4651 11.7875 19.262 14.2312C20.987 16.675 21.4183 19.9812 20.412 23C19.4776 25.7312 18.2558 28.4625 17.1058 31.1219C16.6745 32.2 16.1714 33.2781 15.7401 34.2844C15.4526 35.075 14.662 35.5781 13.7995 35.5781ZM11.2839 13.5844C8.1214 13.5844 5.2464 15.5969 4.59952 18.2562C4.24015 19.8375 4.52765 21.4187 5.5339 22.7125C6.6839 24.2937 8.62452 25.3 10.7089 25.4437L11.7151 25.5156L13.7995 30.5469C13.8714 30.3312 14.0151 30.0437 14.087 29.8281C15.237 27.2406 16.387 24.5812 17.2495 21.9219C17.9683 19.9094 17.6808 17.6812 16.5308 16.1C15.3808 14.5187 13.5839 13.6562 11.3558 13.5844C11.3558 13.5844 11.3558 13.5844 11.2839 13.5844Z" />
                        <path d="M37.5905 35.65C36.728 35.65 35.9374 35.1469 35.6499 34.3563L33.278 28.6063C30.6187 28.175 28.2468 26.8094 26.7374 24.725C25.1562 22.6406 24.653 20.0531 25.2999 17.5375C26.3062 13.4406 30.5468 10.35 35.2187 10.4219C38.5249 10.4938 41.2562 11.8594 42.9812 14.3031C44.7062 16.7469 45.1374 20.0531 44.1312 23.0719C43.1968 25.8031 41.9749 28.5344 40.8249 31.1938C40.3937 32.2719 39.8905 33.35 39.4593 34.3563C39.2437 35.1469 38.453 35.65 37.5905 35.65ZM35.0749 13.5844C31.9124 13.5844 29.0374 15.5969 28.3905 18.2563C28.0312 19.8375 28.3187 21.4188 29.3249 22.7844C30.4749 24.3656 32.4155 25.3719 34.4999 25.5156L35.5062 25.5875L37.5905 30.6188C37.6624 30.4031 37.8062 30.1156 37.878 29.9C39.028 27.3125 40.178 24.6531 41.0405 21.9938C41.7593 19.9813 41.4718 17.7531 40.3218 16.1C39.1718 14.5188 37.3749 13.6563 35.1468 13.5844C35.1468 13.5844 35.1468 13.5844 35.0749 13.5844Z" />
                      </svg>
                    </span>
                    <p class="mb-[18px] text-base italic leading-[28px] text-dark dark:text-white">
                      A spring of truth shall flow from it: like a new star it
                      shall scatter the darkness of ignorance, and cause a light
                      heretofore unknown to shine amongst men.
                    </p>
                    <span class="text-xs italic text-body-color dark:text-dark-6">
                      “Andrio Domeco”
                    </span>
                  </div>
                  <div>
                    <span class="absolute top-0 left-0">
                      <svg
                        width="103"
                        height="109"
                        viewBox="0 0 103 109"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <ellipse
                          cx="0.483916"
                          cy="3.5"
                          rx="102.075"
                          ry="105.5"
                          transform="rotate(180 0.483916 3.5)"
                          fill="url(#paint0_linear_2014_9016)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_2014_9016"
                            x1="-101.591"
                            y1="-50.4346"
                            x2="49.1618"
                            y2="-49.6518"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#3056D3" stop-opacity="0.15" />
                            <stop
                              offset="1"
                              stop-color="white"
                              stop-opacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <span class="absolute bottom-0 right-0">
                      <svg
                        width="102"
                        height="106"
                        viewBox="0 0 102 106"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <ellipse
                          cx="102.484"
                          cy="105.5"
                          rx="102.075"
                          ry="105.5"
                          fill="url(#paint0_linear_2014_9017)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_2014_9017"
                            x1="0.409163"
                            y1="51.5654"
                            x2="151.162"
                            y2="52.3482"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#3056D3" stop-opacity="0.15" />
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
                {/* <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed font-open-sans">
                Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat.
              </p>
              <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed font-open-sans">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Quis enim lobortis scelerisque fermentum. Neque
                sodales ut etiam sit amet. Ligula ullamcorper
                <strong className="text-primary dark:text-white">
                  malesuada
                </strong>
                proin libero nunc consequat interdum varius. Quam
                pellentesque nec nam aliquam sem et tortor consequat.
                Pellentesque adipiscing commodo elit at imperdiet.
              </p>
              <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed font-open-sans">
                Semper auctor neque vitae tempus quam pellentesque nec.
                <span className="text-primary underline dark:text-white">
                  Amet dictum sit amet justo
                </span>
                donec enim diam. Varius sit amet mattis vulputate enim nulla
                aliquet porttitor. Odio pellentesque diam volutpat commodo
                sed.
              </p>
              <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                Digital marketplace for Ui/Ux designers.
              </h3>
              <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed font-open-sans">
                consectetur adipiscing elit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                mattis vulputate cupidatat.
              </p>
              <ul className="mb-10 list-inside list-disc text-body-color font-open-sans">
                <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                  Consectetur adipiscing elit in voluptate velit.
                </li>
                <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                  Mattis vulputate cupidatat.
                </li>
                <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                  Vulputate enim nulla aliquet porttitor odio pellentesque
                </li>
                <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                  Ligula ullamcorper malesuada proin
                </li>
              </ul>


              <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed font-open-sans">
                consectetur adipiscing elit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                mattis vulputate cupidatat.
              </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <SeeAlsoBlogs />
    </section>
  );
}

export default BlogExpandSection;
