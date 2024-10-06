import { useState } from "react";

import { FaChevronRight, FaPlus } from "react-icons/fa";

import { IChannel } from "./types";

const Channel = ({ text }: IChannel) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li>
      <div className="flex items-center text-gray-500 hover:text-gray-400">
        <button
          className="flex grow gap-1 items-center font-bold"
          onClick={toggleOpen}
        >
          <FaChevronRight size={12} />
          <span>{text}</span>
        </button>
        <FaPlus size={10} />
      </div>
      {isOpen && <ul></ul>}
    </li>
  );
};

export default Channel;
