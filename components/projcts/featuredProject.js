import React from 'react'
import Category from '../category'

const FeaturedProject = () => {
    return (
        <div>
            <div className='px-8 flex flex-col gap-4 py-8 border-t-2 border-orange bg-white'>
                <p className='text-2xl font-bold'>Featured Project</p>
                <img src='featProjImg.png' alt='Project' />
                <p className=''>LoFi-DeFi Making History with a Massive Fair Launch</p>
                <div className='flex gap-2'>
                    <Category color={"#BB7E5D"}>
                        Exchanges
                    </Category>
                    <Category color={"#EB8A90"} >
                        Defi
                    </Category>
                </div>
                <p>The last two weeks saw decentralized finance cryptocurrency startup LOFI-DEFI gain intense social adoption for what is positioned to be the biggest fair launch in DeFi history</p>
            </div>

        </div>
    )
}

export default FeaturedProject
