import Link from "next/link";

const PortfolioCard = ({ id, icon, title, description, link }) => {
  return (
    <div
      className=" bg-black/20 mb-4 py-6 px-5 rounded-lg border border-slate-700"
    >
      <div className="flex justify-center items-center text-4xl text-center font-bold text-black bg-[#BBED2B] w-[85px] mx-auto rounded-full p-6">
        {icon}
        </div>
      <h4 className="text-xl text-center font-semibolds my-3">{title}</h4>
      <p className="text-sm text-center mb-4">{description}</p>
      <div className="flex justify-center items-center">
        <Link href='/' className="mt-4 font-bold hover:text-[#BBED2B]">{link}</Link>
      </div>
    </div>
  );
};

export default PortfolioCard;
