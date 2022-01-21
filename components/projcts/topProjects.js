import React from 'react'
import Curve from '../svg/curve'
import Category from '../category'

const TopProjects = () => {
    // <Category color={"#BB7E5D"}>
    //                     Exchanges
    //                 </Category>
    //                 <Category color={"#EB8A90"} >
    //                     Defi
    //                 </Category>

    const TopProjects = [
        {
            title: "Curve Finance",
            description: "Decentralized exchange liquidity pool",
            tags: <Category color={"#EB8A90"} fontSize={"xs"} >Defi</Category>,
            img: "curve.png"


        },
        {
            title: "yearn.finance",
            description: "Decentralized ecosystem of aggregators",
            tags: <Category color={"#BB7E5D"} fontSize={"xs"}>Exchanges</Category>,
            img: "yarn.png"
        },
        {
            title: "Sablier",
            description: "The protocol for real-time finance",
            tags: <Category color={"#EB8A90"} fontSize={"xs"} >Defi</Category>,
            img: "sablier.png"
        }
    ]

    return (
        <div className='p-8 bg-white mt-8 border-t-2 border-orange'>
            <h2 className='font-bold text-xl mb-4'>Top Projects</h2>
            <div >
                {TopProjects.map((item, index) => (
                    <div key={index} className='mb-8 items-center grid grid-cols-4 text'>
                        <div>
                            <img src={item.img} className='w-11 h-11' />
                        </div>
                        <div className='col-span-2 -ml-4'>
                            <div className='font-bold'>{item.title}</div>
                            <p>{item.description}</p>
                        </div>
                        <div className='flex justify-end text-m'>
                            <div >{item.tags}</div>
                        </div>
                    </div>

                ))}
            </div>
            <div>
                <p className='bg-orange w-max px-4 py-2 rounded-lg font-bold cursor-pointer'>Explore All Projects</p>
            </div>
        </div>
    )
}

export default TopProjects
