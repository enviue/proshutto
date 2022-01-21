import React from 'react'

const Category = ({ children, color, fontSize = "base" }) => {
    return (
        <div className="flex gap-4">

            <div style={{ borderColor: color }} className={` ${fontSize === "base" ? "px-4 py-2" : "px-2 py-1 "}   border flex rounded-3xl items-center gap-2 `} >



                <div style={{ backgroundColor: color }} className={` ${fontSize === "base" ? " w-2 h-2" : "w-1 h-1"}  rounded-full`}></div>

                <div >
                    <p style={{ color: color }} className={`text-${fontSize}`}>{children}</p>
                </div>



            </div>

        </div>
    )
}

export default Category
