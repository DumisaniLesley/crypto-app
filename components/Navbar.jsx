import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

import { MdMenu } from "react-icons/md";

const Links = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Services",
    path: "#services",
  },
  {
    id: 3,
    name: "About",
    path: "#about",
  },
  {
    id: 4,
    name: "What's New?",
    path: "#whats-new",
  },
];

const Navbar = () => {
  return (
    <nav className="max-w-[85%] mx-auto py-8 ">
      <div className="flex justify-between items-center">
        <Link href="/">
          <h1 className="text-3xl uppercase font-extrabold text-[#BBED2B]">
            Crypto.
          </h1>
        </Link>
        <div className="hidden lg:flex gap-4">
          {Links.map((link) => (
            <a
              href={link.path}
              key={link.id}
              className="text-lg font-semibold hover:text-[#BBED2B] transition ease-out delay-75"
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex">
          <Link
            href="#explore"
            className="bg-[#BBED2B] px-5 py-3 rounded-md text-black font-semibold"
          >
            Explore Now
          </Link>
        </div>
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" className="lg:hidden cursor-pointer">
                <MdMenu className="h-8 w-8 outline-none " />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col items-start gap-6 p-6">
                <Link
                  href="#"
                  className="text-lg font-medium hover:underline"
                  prefetch={false}
                >
                  Home
                </Link>
                <Link
                  href="#"
                  className="text-lg font-medium hover:underline"
                  prefetch={true}
                >
                  Services
                </Link>
                <Link
                  href="#"
                  className="text-lg font-medium hover:underline"
                  prefetch={false}
                >
                  About
                </Link>
                <Link
                  href="#"
                  className="text-lg font-medium hover:underline"
                  prefetch={false}
                >
                  Whats New
                </Link>
                <div className="flex">
                  <Link
                    href="#explore"
                    className="bg-[#BBED2B] px-4 py-2 rounded-md text-black font-semibold"
                  >
                    Explore Now
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
