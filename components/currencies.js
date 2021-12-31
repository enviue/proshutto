import { MainWrapper } from "./mainWrapper"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const Currencies = () => {

    const currencies = [
        {
            value: "BTC",
            current: "56,658",
            prev: "57,078",
            diff: "-0.42",
            stonks: true

        },
        {
            value: "BTC",
            current: "56,658",
            prev: "57,078",
            diff: "-0.42",
            stonks: true


        },
        {
            value: "BTC",
            current: "56,658",
            prev: "57,078",
            diff: "-0.42",
            stonks: false

        },
        {
            value: "BTC",
            current: "56,658",
            prev: "57,078",
            diff: "+0.42",
            stonks: true

        },
        {
            value: "BTC",
            current: "56,658",
            prev: "57,078",
            diff: "+0.42",
            stonks: true

        },
        {
            value: "BTC",
            current: "56,658",
            prev: "57,078",
            diff: "-0.42",
            stonks: false

        },
        {
            value: "BTC",
            current: "56,658",
            prev: "57,078",
            diff: "+0.42",
            stonks: true

        },
        {
            value: "BTC",
            current: "56,658",
            prev: "57,078",
            diff: "-0.42",
            stonks: false

        },
        {
            value: "BTC",
            current: "56,658",
            prev: "57,078",
            diff: "+0.42",
            stonks: true

        }

    ]

    return (

        <div className="bg-bg-dark mt-px w-full  py-4 px-4 xl:px-0">

            <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-9 gap-2 lg:gap-4 lg:w-max text-m">
                {currencies.map((item, index) => (

                    <div key={index} className=" text-white  flex gap-1 w-max">

                        <p className="">
                            {item.value}

                        </p>
                        <div className={`${item.stonks ? "text-green-500" : "text-red-500"} flex `}>
                            <p >${item.current}</p>
                            <p >{item.diff}%</p>
                        </div>
                    </div>

                ))}
            </div>

        </div >

    )
}

export default Currencies
