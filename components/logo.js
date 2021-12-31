import Pumpkin from "./svg/pumpkin"


const Logo = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center">
            <div className="flex gap-3 items-center">
                <Pumpkin />
                <p className="text-orange text-2xl font-bold uppercase ">
                    Pumpkin
                </p>
            </div>

            <div className="">
                <p className="text-white ml-4">
                    Ultimate source of crypto data
                </p>
            </div>
        </div>
    )
}

export default Logo
