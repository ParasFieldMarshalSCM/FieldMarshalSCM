import React from 'react'
import Lottie from 'lottie-react'

import earthAnimation from '../../animationData/earth.json'

function Earth() {
    return (
        <div className="mx-auto  max-w-[920px] max-h-[518px]">
            <Lottie animationData={earthAnimation} loop={true} />
        </div>
    )
}

export default Earth
