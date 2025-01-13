import React from 'react'
import AboutBaseConverter from './AboutBaseConverter'
import AboutMortgageConverter from './AboutMortgageConverter'
import AboutScientificCalculator from './AboutScientificCalculator'
import AboutPhysicsConverter from './AboutPhysicsConverter'

function AboutTools() {
  return (
    <section>
    <div className="pt-20 pb-20 ">
        <div className="mx-auto px-0 md:px-6 phn:px-2 max-w-6xl flex flex-col gap-20 ">
        <AboutBaseConverter/>
        <AboutMortgageConverter/>
        <AboutScientificCalculator/>
        <AboutPhysicsConverter/>
        </div>
    </div>
</section>
  )
}

export default AboutTools

