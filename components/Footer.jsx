import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaXTwitter, FaDiscord } from "react-icons/fa6";

const socials = [
  {
    id: 1,
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/company/cryptoblockchain/",
  },
  {
    id: 2,
    icon: <FaGithub />,
    link: "https://github.com/cryptoblockchain",
  },
  {
    id: 3,
    icon: <FaXTwitter />,
    link: "https://twitter.com/cryptoblockchain",
  },
  {
    id: 4,
    icon: <FaDiscord />,
    link: "https://discord.gg/cryptoblockchain",
  },
];
const Footer = () => {
  return (
    <footer className="max-w-[85%] mx-auto mt-20">
      <hr className="my-4" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="">
          <h1 className="text-3xl uppercase font-extrabold text-[#BBED2B]">
            Crypto.
          </h1>
          <p className="text-[12px] text-gray-500 mt-4">
            NFTs are transforming the way commerce is a transacted
          </p>
          <div className="flex items-center gap-4 lg:gap-2 my-4">
            {socials.map((social) => (
              <div
                key={social.id}
                className="w-[30px] h-[30px] bg-[#B2F403] p-2 rounded-full flex justify-center items-center"
              >
                <Link
                  href={social.link}
                  className="text-sm border-2 border-black p-[4px] rounded-full text-black"
                >
                  {social.icon}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Products</h3>
          <ul className="text-[12px] text-gray-500 mt-1">
            <li className="mb-1">Rainbow Wallet</li>
            <li className="mb-1">IRISplorer</li>
            <li className="mb-1">Endpoints & 5DKs</li>
            <li className="mb-1">CLI Client</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Information</h3>
          <ul className="text-[12px] text-gray-500 mt-2">
            <li className="mb-1">Market Explore</li>
            <li className="mb-1">Ready Token</li>
            <li className="mb-1">Main Option</li>
            <li className="mb-1">File Checking</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Resources</h3>
          <ul className="text-[12px] text-gray-500 mt-2">
            <li className="mb-1">FAQ</li>
            <li className="mb-1">Blog</li>
            <li className="mb-1">Docs</li>
            <li className="mb-1">Press Kit</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Newsletter</h3>
          <div className="mt-2">
            <div className="flex rounded-lg shadow-sm">
              <input
                type="text"
                name="hs-input-with-add-on-url"
                id="hs-input-with-add-on-url"
                className="py-2 px-8 block w-full border-gray-200 shadow-sm rounded-s-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                placeholder="Enter Your Email"
              />
              <button className="px-4 lg:text-sm lg:px-2 inline-flex items-center min-w-fit rounded-e-md border border-e-0 border-[#BBED2B] bg-[#BBED2B] ">
                Subscribe
              </button>
            </div>
          </div>
          <p className="text-[12px] text-gray-500 mt-2">
            NFTs are transforming the way commerce is a transacted
          </p>
        </div>
      </div>
      <div className="text-center text-sm text-[#BBED2B] mt-8">
        <p>&copy; 2024 Crypto. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
