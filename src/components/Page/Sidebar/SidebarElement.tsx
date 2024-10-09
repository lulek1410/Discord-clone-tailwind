import { ReactNode } from "react";

import "./SidebarElement.css";

interface Props {
  icon: ReactNode;
  text: string;
}

export const SidebarElement = ({ icon, text }: Props) => {
  return (
    <li className="sidebar-element group">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </li>
  );
};
