import React from 'react'
import Category from './category'
import HotTag from './hotTag'
import Share from './svg/share'

const HotNew = () => {
    const tags = [

        {
            name: "Defi",
            color: "#EB8A90"
        },
        {
            name: "Yield Farms",
            color: "#2D82B7"
        },

    ]


    return (
        <div style={{ backgroundColor: '#FFEBD7' }} className='grid grid-cols-8 gap-4 mt-8'>
            <div className='2xl:col-span-3 col-span-full flex justify-center 2xl:p-0 p-4'>
                <img src='china.png' alt="china" className='h-full' />
            </div>
            <div className=' 2xl:col-start-4 col-span-full p-4'>
                <h2 className='font-bold text-2xl'>China Trials DCEP Crypto for Payment Card Operations</h2>
                <p>Chinese central bank has begun trialing operations with credit cards that include DCEP payments for transportation card charge, retail, catering and other payment areas</p>

                <div className="flex gap-4 mt-4 items-center flex-wrap">
                    <Category color={"#EB8A90"}>Defi</Category>
                    <Category color={"#2D82B7"}>Yield Farms</Category>
                    <HotTag />

                </div>
                <div className='flex justify-between mt-4 flex-wrap'>
                    <div className='flex gap-2'>
                        <img src='Cointelegraph.png' alt="cointelegraph" className='w-6 h-6 rounded-full' />
                        <p>Cointelegraph</p>
                    </div>
                    <div className='flex items-center gap-2 justify-end'>
                        <div><p>1 hour ago</p></div>
                        <Share />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HotNew
