import React from 'react'

const Categories = () => {

    const tags = [
        {
            name: "All Crypto news",
            color: "black"
        },
        {
            name: "Defi",
            color: "#EB8A90"
        },
        {
            name: "Yield Farms",
            color: "#2D82B7"
        },
        {
            name: "Farms",
            color: "#0CA4A5"
        },
        {
            name: "Exchanges",
            color: "#BB7E5D"
        }
    ]

    return (
        <div>
            <div>
                <h2 className='font-bold text-4xl text-center 2xl:text-left'>Choose Your Category</h2>
                <div className="flex gap-4 mt-4 flex-wrap">
                    {tags.map((item, index) => (
                        <div key={index} style={{ borderColor: item.color }} className={`border flex px-4 py-2 rounded-3xl items-center gap-2 `} >



                            <div style={{ backgroundColor: item.color }} className={`w-2 h-2 rounded-full`}></div>

                            <div >
                                <p style={{ color: item.color }}>{item.name}</p>
                            </div>



                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Categories
