import { FaLinkedinIn, FaGithub, FaXTwitter, FaDiscord } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className='max-w-[85%] mx-auto mt-20'>
      <hr className="my-4"/>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div className="">
        <h1 className="text-3xl uppercase font-extrabold text-[#BBED2B]">Crypto.</h1>
          <p className="text-sm">NFTs are transforming the way commerce is a transacted</p>
          <div className="flex items-center text-3xl gap-8 lg:gap-4 my-4">
            <FaLinkedinIn />
            <FaGithub />
            <FaXTwitter />
            <FaDiscord />
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold">Products</h3>
          <ul className="text-sm mt-2">
            <li>Rainbow Wallet</li>
            <li>IRISplorer</li>
            <li>Endpoints & 5DKs</li>
            <li>CLI Client</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold">Information</h3>
          <ul className="text-sm mt-2">
            <li>Market Explore</li>
            <li>Ready Token</li>
            <li>Main Option</li>
            <li>File Checking</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold">Resources</h3>
          <ul className="text-sm mt-2">
            <li>FAQ</li>
            <li>Blog</li>
            <li>Docs</li>
            <li>Press Kit</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold">Newsletter</h3>
          <div>Input field</div>
          <p>NFTs are transforming the way commerce is a transacted</p>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>&copy; 2024 Crypto. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer