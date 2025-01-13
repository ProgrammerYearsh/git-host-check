import React from 'react'
import BlogsCard from './BlogsCard'

function SeeAlsoBlogs() {
  return (
    <section className="bg-leadGrey py-8 antialiased dark:bg-gray-900 md:py-16  ">
    <div className="mx-auto  px-4 2xl:px-0 max-w-6xl ">
      <div className="mb-4 flex items-center justify-between gap-4 md:mb-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Explore More Blgos</h2>
      </div>
  
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <BlogsCard
                date={'Dec 13 2024'}
                category={'Scientific'}
                title={'The Science of Sleep: Why 7-8 Hours of Sleep'}
                description={'This blog post can explore the scientific basis of sleep, discussing its importance for physical and mental health'}
                />
                <BlogsCard
           date={'Dec 14 2024'}
                category={'Loan & Money'}
                title={'Understanding Compound Interest'}
                description={' This blog post can explain the concept of compound interest in a simple and engaging manner'}
                />
                <BlogsCard
             date={'Dec 15 2024'}
                category={'Mathematics'}
                title={'The Beauty of the Golden Ratio'}
                description={'This blog post can delve into the fascinating concept of the Golden Ratio (Phi), its mathematical definition, '}
                />
            </div>
    </div>
  </section>
  )
}

export default SeeAlsoBlogs