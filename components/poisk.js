import React from 'react'
import BigLogo from './svg/bigLogo'
import Search from './svg/search'
import Search2 from './svg/search2'
const Poisk = () => {
    return (
        <div className='grid grid-cols-12 grid-rows-2 justify-center  items-center mt-36 gap-y-12'>

            <div className='justify-center col-span-full  w-full'>
                <BigLogo />
            </div>
            <div className='col-start-2 col-span-10 lg:col-span-6 lg:col-start-4 row-start-2 relative'>
                <input type="text" placeholder='Search...' className='rounded-md py-4 pl-6 w-full outline-none   border-2 focus:border-orange ' />
                <Search2 className={'absolute top-5  right-5'} />

            </div>

        </div >
    )
}

export default Poisk
