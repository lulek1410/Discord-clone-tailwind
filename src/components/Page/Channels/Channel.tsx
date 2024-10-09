import { useState } from "react";

import { FaChevronRight, FaPlus } from "react-icons/fa";

import SubChannel from "./SubChannel";

import { IChannel } from "./types";

const Channel = ({ text, subChannels }: IChannel) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li>
      <button
        className={`flex w-full items-center justify-between text-gray-500 hover:text-gray-400`}
        onClick={toggleOpen}
      >
        <div className="flex gap-1 items-center font-bold">
          <FaChevronRight size={12} />
          <span className={isOpen ? "text-blue-500" : ""}>{text}</span>
        </div>
        <FaPlus size={10} />
      </button>
      {isOpen && (
        <ul>
          {subChannels.map((subChannel, index) => (
            <SubChannel text={subChannel.text} key={index} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default Channel;
