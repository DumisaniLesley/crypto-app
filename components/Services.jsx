import Image from "next/image"
import Link from "next/link"
import { FaStar } from "react-icons/fa";
import { MdOutlineArrowForward } from "react-icons/md";

const Services = () => {
  return (
    <div id="#services" className='max-w-[85%] mx-auto'>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center h-screen lg:gap-20">
        <div>
          <Image src='/assets/Frame2.png' width={1500} height={500} alt='Services'/>
        </div>
        <div className="flex-col">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold ">Trusted <span className="text-[#BBED2B]">platform</span> <br className="hidden lg:flex" /> anytime & anywhere.</h2>
          <div className="flex gap-4 text-xl lg:text-xl md:text-3xl my-4 md:my-6">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p className="text-sm md:text-lg mt-4">This is a unites and secures a <span className="font-bold">growing ecosystem</span>  of specialized blockchains called parachains. Apps and services on Polkadot can 2001 ecosystem of specialized called.</p>
          <p className="text-sm md:text-lg mt-4">Polkadot <span className="font-bold">unites and secures a growing ecosystem </span> of specialized blockchains called parachains. Apps and services.</p>
          <div className="mt-8 flex gap-5 items-center">
            <Link href='' className="bg-[#BBED2B] px-4 py-2 rounded-md text-black text-sm md:text-lg font-semibold flex items-center gap-2">
            Learn More
            <MdOutlineArrowForward className="text-2xl"/>
            </Link>
            <Link href='' className="border border-slate-700 px-4 py-2 rounded-md text-sm md:text-lg font-semibold">Ask Question?</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services