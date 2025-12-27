import Image from 'next/image'
import React from 'react'

const Potential = () => {
    return (
        <div className='w-full h-screen flex items-center justify-center  bg-white'>

            <Image src='/about/pote.svg' width={650} height={100} alt='potential' className='' />
        </div>
    )
}

export default Potential