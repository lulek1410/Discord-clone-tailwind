import { BsFillLightningFill, BsPlus } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

import { SidebarElement } from "./SidebarElement";

const Sidebar = () => {
  return (
    <div className="h-screen w-16 flex flex-col bg-neutral-800 text-white shadow-lg">
      <nav>
        <ul>
          <SidebarElement icon={<FaFire size={28} />} text="tooltip" />
          <SidebarElement icon={<BsPlus size={32} />} text="tooltip" />
          <SidebarElement
            icon={<BsFillLightningFill size={20} />}
            text="tooltip"
          />
          <SidebarElement icon={<FaPoo size={20} />} text="tooltip" />
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
