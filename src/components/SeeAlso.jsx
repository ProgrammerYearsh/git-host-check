import React from 'react'
import SeeAlsoOptions from './SeeAlsoOptions'

function SeeAlso() {
  return (
    <section className="bg-leadGrey py-8 antialiased dark:bg-gray-900 md:py-16 mb-20 ">
  <div className="mx-auto  px-4 2xl:px-0 max-w-6xl ">
    <div className="mb-4 flex items-center justify-between gap-4 md:mb-8">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Explore More Calculators</h2>
    </div>

    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <SeeAlsoOptions navigateTo={'/base-converter'} label={'Base Converter'}/>
      <SeeAlsoOptions navigateTo={'/physics-unit-converter'} label={'Physics Unit Converter'}/>
      <SeeAlsoOptions navigateTo={'/scientfic-calculator'} label={'Scientific Calculator'}/>
      <SeeAlsoOptions navigateTo={'/mortgage-calculator'} label={'Mortgage Calculator'}/>
    </div>
  </div>
</section>
  )
}

export default SeeAlso