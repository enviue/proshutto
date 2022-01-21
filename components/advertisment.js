import React from 'react'

const Advertisment = () => {
    return (
        <div className='bg-brown font-lato font-light subpixel-antialiased p-4 mt-4'>
            <div>
                <h2 className='text-white'>Stop Paying Trading Fees</h2>
                <p className='text-2xl text-white'><span className='text-red-700 font-bold'>Earn 0.10%</span> on Taker Orders</p>
            </div>
            <div className='flex justify-between items-center'>
                <img src='crypto.svg' />
                <div className=' w-fit items-center'><p className=' bg-red-600 rounded-md text-sm py-1 px-3 text-white'>Trade Now</p></div>
            </div>
        </div>
    )
}

export default Advertisment
