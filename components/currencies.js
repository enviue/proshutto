import { MainWrapper } from "./mainWrapper"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useState, useEffect } from "react";


const Currencies = () => {

    const [currencies, setCurrencies] = useState([]);

    const api = `https://61e280ac3050a100176821c3.mockapi.io/currencies`

    useEffect(() => {



        (async function () {
            let api_url = await fetch(api);
            const res = await api_url.json();
            setCurrencies(res)


        })()



    }, [])





    return (

        <div className="w-full bg-bg-dark py-4 px-4 xl:px-0">

            <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-9 gap-2 lg:gap-4 lg:w-max text-m">
                {currencies.map((item, index) => (

                    <div key={index} className=" text-white  flex gap-1 w-max">

                        <p className="">
                            {item.value}

                        </p>
                        <div className={`${item.stonks ? "text-green-500" : "text-red-500"} flex `}>
                            <p >${item.current}</p>
                            <p className={`${item.stonks ? "visible" : "hidden"}`}>+</p>
                            <p className={`${!item.stonks ? "visible" : "hidden"}`}>-</p>
                            <p >{item.diff}%</p>
                        </div>
                    </div>

                ))}
            </div>

        </div >

    )
}

export default Currencies
