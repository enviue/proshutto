import React from 'react'
import { useState, useEffect } from 'react';
import Down from './svg/down';

const News = ({ item }) => {



    const [activeNews, setActiveNews] = useState(false);

    const handleClickNews = () => {
        setActiveNews(!activeNews);



    };


    return (
        <div className='mt-8 grid grid-cols-12 p-4 xl:p-0'>
            <div className='bg-white p-4 rounded-md bg-opacity-25 col-start-1 col-span-full xl:col-span-5 xl:col-start-1 2xl:col-span-6 2xl:col-start-1'>
                <div className='font-bold'>
                    {item.title}
                </div>
                <p className='mt-2 mb-4'>{item.description}</p>
                <p>{item.publishedAt} </p>
                <a href={item.url} className='text-orange border-b border-orange'>Read more</a>
                <p onClick={handleClickNews} className='cursor-pointer flex justify-center mt-2'><Down /></p>
                <div className={`${activeNews ? ' visible' : 'hidden'} `}>{item.content}</div>
            </div>
        </div>
    )
}

export default News
