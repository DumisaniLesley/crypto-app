
import PortfolioCard from './PortfolioCard'
import { AiOutlineUser } from "react-icons/ai";
import { GiArrowsShield } from "react-icons/gi";
import { SlRocket } from "react-icons/sl";

const portfolioData = [
  {
    id: 1,
    title: 'Fund your account',
    description: 'Add funds to your crypto account to start trading crypto. You can add funds with a variety of payment methods.',
    link: '',
    icon: <AiOutlineUser />
  },
  {
    id: 1,
    title: 'Verify your identity',
    description: 'Complete the identity verification process to secure your account and transactions.',
    link: 'Learn More →',
    icon: <GiArrowsShield />
  },
  {
    id: 1,
    title: 'Start trading',
    description: 'You are good to go! Buy/sell crypto, set up recurring buys for your investments, and discover what Binance has to offer.',
    link: '',
    icon: <SlRocket />
  },
]
const Portfolio = () => {
  return (
    <div className='max-w-[85%] mx-auto md:mt-10'>
      <div>
        <div className='text-center lg:text-start'>
          <h2 className='text-2xl md:text-4xl font-bold'>Build your <span className='text-[#BBED2B]'>crypto</span> portfolio</h2>
          <p className='text-sm md:text-lg my-4'>Polkadot unites and secures a growing ecosystem of specialized blockchains called parachains. Apps and services on Polkadot can ecosystem of specialized called.</p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8'>
          {portfolioData.map((portfolio) => (
            <PortfolioCard key={portfolio.id} name={portfolio.name} title={portfolio.title} description={portfolio.description} link={portfolio.link} icon={portfolio.icon} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio