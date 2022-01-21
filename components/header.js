import { useState } from "react"
import Info from "./info"
import Logo from "./logo"
import Socials from "./socials"
import Social_n_links from "./social_n_links"
import Close from "./svg/close"


const Header = () => {

    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);


    };

    return (
        <div className="bg-bg-dark grid grid-cols-12 py-2 w-full  text-white lg:px-0">
            <div className="grid col-span-full  lg:col-span-5 ">
                <Logo />
                {/* <Info />
                <Social_n_links /> */}
            </div>

            <div className=" hidden lg:grid col-start-8 col-span-3 lg:col-start-7 xl:col-start-8  ">
                <Info />
            </div>

            <div className="grid col-span-2 col-start-11 items-center">
                <a id='menu' onClick={handleClick} className='text-white lg:hidden absolute top-5 right-5 flex justify-center items-center'>&#9776;</a>
                <Social_n_links className={`hidden lg:block`} />
            </div>

            <div id='slidebar' className={`${active ? 'transition-right right-0 overflow-y-auto duration-500' : 'transition-right -right-full overflow-y-auto duration-500'}  lg:hidden z-50 h-full flex flex-col overscroll-contain  justify-between w-9/12 bg-bg-dark fixed top-0  p-5`}>
                <div onClick={handleClick} className="w-full flex justify-end"><Close /></div>
                <div className="flex flex-col items-center  gap-16 ">
                    <a>
                        Top Projects
                    </a>
                    <a>
                        Manifesto
                    </a>
                    <a>
                        Careers
                    </a>
                </div>
                <div className="mt-14 flex justify-center bottom-4">
                    <Socials />
                </div>

            </div>
        </div>

    )
}

export default Header
