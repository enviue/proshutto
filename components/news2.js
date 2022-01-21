import React from 'react'
import Category from './category'
import Share from './svg/share'
import { useState, useEffect } from 'react'

const News2 = () => {

    const [news, setNews] = useState([]);

    const api = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e538160f99674edea3cf80f2098e4279`

    useEffect(() => {



        (async function () {
            let api_url = await fetch(api);
            const res = await api_url.json();
            setNews(res.articles)


        })()



    }, [])
    console.log(news)
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
        <div>
            {news.map((item, index) => (
                <div style={{ backgroundColor: 'white' }} key={index} className='grid grid-cols-8 gap-4 mt-8'>
                    <div className='2xl:col-span-3 col-span-full flex justify-center 2xl:p-0 p-4 '>
                        <img src={item.urlToImage} alt="news" className='h-full' />
                    </div>
                    <div className=' 2xl:col-start-4 col-span-full p-4'>
                        <a href={item.url}><h2 className='font-bold text-2xl hover:shadow-xl'>{item.title}</h2></a>
                        <p>{item.description}</p>

                        <div className="flex gap-4 mt-4 items-center flex-wrap">
                            <Category color={"#EB8A90"}>Defi</Category>
                            <Category color={"#2D82B7"}>Yield Farms</Category>

                        </div>

                        <div className='flex justify-between mt-4 flex-wrap'>
                            <div className='flex gap-2'>
                                <img src={item.urlToImage} alt="" className='w-6 h-6 rounded-full' />
                                <p>{item.source.name}</p>
                            </div>
                            <div className='flex items-center gap-2 justify-end '>
                                <div><p>{item.publishedAt}</p></div>
                                <Share />
                            </div>
                        </div>

                    </div>
                </div>))}

        </div>
    )
}

export default News2
