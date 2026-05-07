import { CirclePlusFill, Plus } from "@gravity-ui/icons";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="container mx-auto sticky top-0 z-50">
      <nav className=" bg-gray-700 rounded-2xl my-1 text-white px-6 py-4 flex items-center justify-between ">
        {/* Logo / Brand */}
        <div className="text-xl font-bold">
          <Link href="/">MyApp</Link>
        </div>

        {/* Links */}
        <div className="flex items-center gap-2 text-xl fornt-bold bg-gray-300 text-black hover:bg-gray-400 px-3 py-2 rounded transition ">
          <CirclePlusFill />
          <Link
            href="/addData"
            className=""
          >
            Add Users
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;