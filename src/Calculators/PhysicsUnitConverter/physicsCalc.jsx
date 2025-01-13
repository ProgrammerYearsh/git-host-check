import React from 'react'
import ForceConverter from './forceConverter'
import EnergyConverter from './EnergyConverter'
import SpeedConverter from './SpeedConverter'
import SpeedConverterUpdated from './SpeedConverterUpdated'
import SpeedConverter2 from './SpeedConvert2'
import PowerConverter from './PowerConverter'
import PowerConverter2 from './PowerCalc2'

function PhysicsCalc() {
  return (
    <div className='text-black'>
        {/* <ForceConverter/> */}
        {/* <EnergyConverter/> */}
        {/* <SpeedConverter/> */}
        {/* <SpeedConverterUpdated/> */}
        {/* <SpeedConverter2/>  */}
        { /* The code is working right all I had to do is change the convertUnit value from the value that are depicting in the internet unit converter for 1m/s to all the results shown*/ }
        {/* <PowerConverter/> */}
        <PowerConverter2/>
    </div>
  )
}

export default PhysicsCalc

