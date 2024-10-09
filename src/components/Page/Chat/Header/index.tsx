import { useState } from "react";
import { FaRegBell, FaSun } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { HiHashtag } from "react-icons/hi";

import SearchButton from "src/components/UI/SearchButton";

const Header = () => {
  const [searchPhrase, setSearchPhrase] = useState<string>("");

  return (
    <header className="flex items-center justify-between w-full h-16 p-2 shadow-[0_3px_6px_rgb(40,40,40)] ">
      <div className="flex gap-1 items-center text-gray-500 font-semibold">
        <HiHashtag />
        <div>tailwind-css</div>
      </div>
      <div className="flex items-center gap-4 text-gray-500">
        <div className="flex items-center gap-2 ">
          <button>
            <FaSun className="text-xl" />
          </button>
          <SearchButton
            value={searchPhrase}
            onChange={setSearchPhrase}
            searchAction={() => {}}
          />
          <button>
            <FaRegBell className="text-xl" />
          </button>
        </div>
        <button>
          <FaCircleUser className="text-xl" />
        </button>
      </div>
    </header>
  );
};

export default Header;
