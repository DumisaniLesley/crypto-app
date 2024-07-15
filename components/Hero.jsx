import Image from "next/image"
import Users from "./Users"

const Hero = () => {
  return (
    <div className="max-w-[85%] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center h-screen">
        <div>
          <div className="mt-12 lg:mt-0">
            <h2 className="text-center lg:text-start uppercase text-2xl md:text-3xl font-semibold">Keep tour money safe <span className="text-[#BBED2B]">!</span></h2>
            <h1 className="text-center lg:text-start font-extrabold text-4xl md:text-6xl lg:text-5xl mt-4 mb-4 md:mb-8">Best Crypto <br /> <span className="text-[#BBED2B]">investing platform</span> <br />for your future.</h1>
          </div>
          <hr className="hidden lg:flex w-[85%]"/>
          <div className="flex items-center md:justify-center lg:justify-start gap-8">
            <div className="w-[170px] md:w-[250]">
              <Image src="/assets/users.webp" width={250} height={250} alt="user"/>
            </div>
            <div>
              <h3 className="font-bold text-3xl">168K +</h3>
              <p className="font-normal text-sm md:text-lg">Realtime Users</p>
            </div>
          </div>
          <hr className="hidden lg:flex mb-4 w-[85%]"/>
          <div className="flex items-center gap-8 mb-8 lg:mb-0 justify-center lg:justify-start">
            <div className="hidden md:flex w-[80px] lg:w-[150px]">
              <Image src="/assets/arrow.svg" width={100} height={100} alt="line"/>
            </div>
            <p className="text-sm md:text-lg md:max-w-[500px] text-center md:text-start">Crypto unites and secures a growing ecosystem of specialized blockchains called parachains. Apps and services on Polkadot can.</p>
          </div>
        </div>
        <div className="flex justify-center items-center mt-8">
          <div className="w-[800px] md:w-[200%]">
            <Image src="/assets/hero.webp" width={800} height={500} alt="Hero Image"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero