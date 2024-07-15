import Link from "next/link";

const Card = ({ id, name, title, description, link }) => {
  return (
    <div
      className="flex-col justify-between items-center bg-black/20 mb-4 py-6 px-5 rounded-lg border border-slate-700"
    >
      <h3 className="text-2xl uppercase font-bold text-[#BBED2B]">{name}</h3>
      <h4 className="text-xl font-semibold max-w-[200px] my-4">{title}</h4>
      <p className="text-sm mb-4">{description}</p>
      <Link href='/' className="mt-4 font-bold hover:text-[#BBED2B]">{link}</Link>
    </div>
  );
};

export default Card;
