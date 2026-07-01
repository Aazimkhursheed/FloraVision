import { FaSearch, FaShoppingBag } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { logo } from "../../assets/images";
import navigation from "../../data/navigation";

function Navbar() {
  return (
    <nav className="mx-auto flex max-w-[1380px] items-center justify-between px-8 pt-8">

      {/* Logo */}

      <div className="flex items-center gap-3">

        <img
          src={logo}
          alt="FloraVision Logo"
          className="w-9 object-contain"
        />

        <h1 className="text-[30px] font-bold tracking-tight text-white">
          FloraVision.
        </h1>

      </div>

      {/* Navigation */}

      <ul className="flex items-center gap-10">

        {navigation.map((item) => (
          <li
            key={item.id}
            className="cursor-pointer text-[15px] font-medium text-gray-300 transition-colors duration-300 hover:text-white"
          >
            {item.title}
          </li>
        ))}

      </ul>

      {/* Icons */}

      <div className="flex items-center gap-6">

        <button className="text-white transition-all duration-300 hover:scale-110 hover:text-green-400">
          <FaSearch size={18} />
        </button>

        <button className="text-white transition-all duration-300 hover:scale-110 hover:text-green-400">
          <FaShoppingBag size={18} />
        </button>

        <button className="text-white transition-all duration-300 hover:scale-110 hover:text-green-400">
          <HiOutlineMenuAlt3 size={24} />
        </button>

      </div>

    </nav>
  );
}

export default Navbar;