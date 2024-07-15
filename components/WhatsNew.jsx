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
      <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-20'>
        <div>
          <h2>Whats <span>new</span> we provide for you?</h2>
          <p>This is a unites and secures a growing ecosystem of specialized blockchains called parachains. Apps and Serivices on it.</p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5'>
            {data.map((item, index) => (
              <div key={index} className='flex gap-2 bg-green-500 p-2'>
                <div className='w-[80px] lg:h-[80px] bg-orange-700 p-4 rounded-full'>
                  <Image src={item.icon} width={100} height={100} alt='' />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p className='text-sm'>{item.description}</p>
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