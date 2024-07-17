import Image from 'next/image'
import { CiLock } from "react-icons/ci";
import { HiOutlineRefresh } from "react-icons/hi";
import { TbLayoutDashboard } from "react-icons/tb";
import { IoIosSwap } from "react-icons/io";

const data = [
  {
    title: 'Advanced Security',

    description: 'We use state of the art storeage technology to protect your assets',
    icon: <CiLock />
  },
  {
    title: 'Recurring Buys',
    description: 'It enables a world of NFTs, DAOs and other new business',
    icon: <HiOutlineRefresh />
  },
  {
    title: 'More On-Ramps',
    description: 'It enables a world of NFTs, DAOs and other new business',
    icon: <TbLayoutDashboard />
  },
  {
    title: 'Trading API',
    description: 'It enables a world of NFTs, DAOs and other new business',
    icon: <IoIosSwap />
  }

]

const WhatsNew = () => {
  return (
    <div className='max-w-[85%] mx-auto mt-8 lg:mt-20'>
      <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-20 items-center'>
        <div>
          <h2 className='text-2xl lg:text-5xl font-bold'>Whats <span className='text-[#B2F403]'>new</span> we provide for you?</h2>
          <p className='text-sm mt-4 border-l-[2px] border-[#B2F403] px-4 text-gray-500'>This is a unites and secures a growing ecosystem of specialized blockchains called parachains. Apps and Serivices on it.</p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-8'>
            {data.map((item, index) => (
              <div key={index} className='flex gap-2 p-2'>
                <div className='w-[40px] h-[40px] bg-[#B2F403] p-4 rounded-full flex justify-center items-center'>
                  <div className='text-2xl border-2 border-black p-[3px] rounded-full text-black'>
                    {item.icon}
                  </div>
                </div>
                <div className='ml-2'>
                  <h3>{item.title}</h3>
                  <p className='text-[10px] mt-1 text-gray-500'>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <Image src='/assets/Frame3.png' width={700} height={500} alt=''/>
        </div>
      </div>
    </div>
  )
}

export default WhatsNew