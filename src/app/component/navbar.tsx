import Image from "next/image"
import logo from "../../../image/Logo.png"
export default function Navbar(){
    return(
        <div className="w-[1920px] h-[92px] bg-[#043873] px-[220px] py-4 flex justify-between">
            <div className="w-[191px] h-[34px] relative top-2">
               <Image src={logo} alt="logo"/> 
            </div>
            <div className=" w-[737.5px] h-[60px] flex gap-[60px]">
                <div className="flex text-[#FFFFFF] w-[549px] h-[23px] gap-8 relative top-3">
                    <div className="w-[78px] h-[23px] font-dm_sans font-medium text-lg leading-[23px]">Products</div>
                    <div className="w-[79px] h-[23px] font-dm_sans font-medium text-lg leading-[23px]">Solutions</div>
                    <div className="w-[89px] h-[23px] font-dm_sans font-medium text-lg leading-[23px]">Resources</div>
                    <div className="w-[58px] h-[23px] font-dm_sans font-medium text-lg leading-[23px]">Pricing</div>
                </div>
                <div className="flex w-[126px] h-[60px] gap-6">
                    <button className="w-[126px] h-[60px] rounded-lg bg-[#FFE492] px-10 py-4 text-[#043873] font-inter font-medium text-lg leading-[23px] tracking-wider">Login</button>
                </div>
            </div>
        </div>
    )
}