import React from 'react'
import Category from './category'
import Share from './svg/share'
import { useState, useEffect } from 'react'

const News2 = () => {

    // const [news, setNews] = useState([]);

    // const api = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e538160f99674edea3cf80f2098e4279`

    // useEffect(() => {



    //     (async function () {
    //         let api_url = await fetch(api);
    //         const res = await api_url.json();
    //         setNews(res.articles)


    //     })()



    // }, [])
    const news = [



        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Intel plans $20 bln chip manufacturing site in Ohio - Reuters",
            "description": "Intel Corp will invest $20 billion in two new plants in Ohio to make advanced chips, the company said on Friday, the first step to a \"mega-site\" that can accommodate eight chip factories costing $100 billion.",
            "url": "https://www.reuters.com/technology/intel-plans-new-chip-manufacturing-site-ohio-report-2022-01-21/",
            "urlToImage": "https://www.reuters.com/resizer/xcBf7lZeSLbBLo890breb0gz0k8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/ORZXBO5JFBJJBLE3YD5GVJ2PEA.jpg",
            "publishedAt": "2022-01-21T10:29:00Z",
            "content": "WASHINGTON/SAN FRANCISCO, Jan 20 (Reuters) - Intel Corp will invest $20 billion in two new plants in Ohio to make advanced chips, the company said on Friday, the first step to a \"mega-site\" that can … [+2637 chars]"
        },
        {
            "source": {
                "id": "financial-times",
                "name": "Financial Times"
            },
            "author": null,
            "title": "Netflix warning on subscriber growth sends stock plummeting - Financial Times",
            "description": "Sharp sell-off comes as investors dump shares in Peloton and other companies that prospered in the pandemic",
            "url": "https://www.ft.com/content/fea461d6-e3e0-4016-a641-fca87e59d019",
            "urlToImage": "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F7d1da3b9-ccec-45bb-bb35-9f2417e10de4.jpg?source=next-opengraph&fit=scale-down&width=900",
            "publishedAt": "2022-01-21T09:52:27Z",
            "content": "Netflix has warned that subscriber growth would slow substantially in early 2022, sending its stock tumbling 20 per cent in pre-market trading on Friday in the latest instance of investors dumping sh… [+4061 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Barron's"
            },
            "author": "Karishma Vanjani",
            "title": "Peloton CEO Calls Report Claiming the Company Is Halting Production False - Barron's",
            "description": "The report sent shares of Peloton into a free fall. The stock was rising early Friday.",
            "url": "https://www.barrons.com/articles/peloton-stock-price-production-halt-report-51642702799",
            "urlToImage": "https://images.barrons.com/im-471056/social",
            "publishedAt": "2022-01-21T09:47:00Z",
            "content": "Peloton co-founder and CEO John Foley said a media report that claimed the company was halting all production of its bikes and other connected-fitness products amid lower demand from consumers was fa… [+3288 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Fox Business"
            },
            "author": "Associated Press",
            "title": "Toyota halts production at 11 plants due to parts crunch from COVID-19 - Fox Business",
            "description": "The shortage of parts caused by the coronavirus pandemic is further denting production at Toyota, Japan’s top automaker.",
            "url": "https://www.foxbusiness.com/markets/toyota-halts-production-at-11-plants",
            "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2021/12/0/0/AP21340433832237.jpg?ve=1&tl=1",
            "publishedAt": "2022-01-21T09:02:53Z",
            "content": "The shortage of parts caused by the coronavirus pandemic is further denting production at Toyota, Japan’s top automaker.\r\nProduction at 11 plants in Japan will be halted Friday, Saturday and next Mon… [+2784 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Cointelegraph"
            },
            "author": "William Suberg",
            "title": "Crypto liquidations pass $700M as altcoins take a hit from Bitcoin sinking below $40K - Cointelegraph",
            "description": "Bitcoin stays below $40,000 as BTC price support rout is echoed by significant crypto liquidations.",
            "url": "https://cointelegraph.com/news/crypto-liquidations-pass-700m-as-altcoins-take-a-hit-from-bitcoin-sinking-below-40k",
            "urlToImage": "https://images.cointelegraph.com/images/1200_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjItMDEvZjlkNzBkMjItZDUxYS00NzM3LTllMzktYzA1ZjNmODBiNzYyLmpwZw==.jpg",
            "publishedAt": "2022-01-21T08:29:45Z",
            "content": "Bitcoin (BTC) stayed lower on Friday after an overnight bout of volatility sent the largest cryptocurrency to six-month lows.\r\nBTC/USD 1-hour candle chart (Bitstamp). Source: TradingView\r\n$40,000 opt… [+1952 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Elliot Smith",
            "title": "European markets tumble, tracking global momentum; Stoxx 600 down 1.3%; DAX down 1.4% - CNBC",
            "description": "European markets fell sharply on Friday, tracking a global pullback for risk assets.",
            "url": "https://www.cnbc.com/2022/01/21/european-markets-open-to-close-stocks-fall-tracking-global-momentum.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/106731727-1601986813831-gettyimages-543267942-AFP_CH2TB.jpeg?v=1601986862",
            "publishedAt": "2022-01-21T06:54:06Z",
            "content": "LONDON European markets fell sharply on Friday, tracking a global pullback for risk assets.The pan-European Stoxx 600 dropped 1.3% by late morning, with basic resources shedding 2.4% to lead losses a… [+2566 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Saheli Roy Choudhury",
            "title": "Singapore's second SPAC made its debut on Friday — and a third one is on its way - CNBC",
            "description": "Pegasus Asia is the first Singapore-listed special purpose acquisition company with international backers such as European asset manager Tikehau Capital.",
            "url": "https://www.cnbc.com/2022/01/21/singapore-spac-ipo-for-pegasus-asia-backed-by-european-investors.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/106910587-1626250166749-gettyimages-1209324396-AFP_1QF878.jpeg?v=1632808827",
            "publishedAt": "2022-01-21T06:24:35Z",
            "content": "A general view shows the Singapore Exchange (SGX) stock exchange building in the central business district in Singapore on April 7, 2020, as the country ordered the closure of all businesses deemed n… [+4276 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Laura He, CNN Business",
            "title": "Evergrande's international creditors threaten legal action over 'opaque' restructuring process - CNN",
            "description": "Evergrande's international creditors are losing patience.",
            "url": "https://www.cnn.com/2022/01/21/investing/evergrande-china-debt-bondholders-legal-action-intl-hnk/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220120221207-02-evergrande-china-1210-restricted-super-tease.jpg",
            "publishedAt": "2022-01-21T05:57:00Z",
            "content": null
        },
    ]

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
            {
                news.map((item, index) => (
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
                    </div>))
            }

        </div >
    )
}

export default News2
