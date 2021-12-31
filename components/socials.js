import React from 'react'
import Facebook from './svg/facebook'
import Search from './svg/search'
import Telegram from './svg/telegram'
import Twitter from './svg/twitter'

const Socials = ({ className }) => {

    const links = [
        {
            href: "https://www.twitter.com",
            img: <Twitter />

        },
        {
            href: "https://www.facebook.com/",
            img: <Facebook />
        },
        {
            href: "https://www.t.me",
            img: <Telegram />
        }
    ]

    return (
        <div className={`col-span-2 justify-self-end flex items-center ${className}`}>
            <div className='grid grid-cols-3 gap-x-4'>

                {links.map((item, index) => (
                    <a key={index} href={item.href} rel="noreferrer" target={'_blank'}>
                        {item.img}
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Socials
