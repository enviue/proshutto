import React from 'react'
import Advertisment from './advertisment'
import Categories from './categories'
import HotNew from './hotNew'
import News2 from './news2'
import Projects from './projects'

const CategoriesAndProjects = () => {
    return (
        <div>
            <div className='grid grid-cols-12 gap-4 2xl:p-0 p-4'>
                <div className='2xl:col-span-8 col-span-full  '>
                    <Categories />
                    <HotNew />
                    <Advertisment />
                    {/* e538160f99674edea3cf80f2098e4279 */}
                    <News2 />
                </div>
                <div className='col-span-full 2xl:col-span-4 2xl:col-start-9  '>
                    <Projects className={``} />
                </div>
            </div>
        </div>
    )
}

export default CategoriesAndProjects
