import { HiHashtag } from "react-icons/hi";

interface Props {
  text: string;
}

const SubChannel = ({ text }: Props) => {
  return (
    <li>
      <button className="flex gap-1 items-center text-gray-500 pl-3 group">
        <HiHashtag className="text-gray-400" />
        <p className="text-gray-500 group-hover:text-gray-400">{text}</p>
      </button>
    </li>
  );
};

export default SubChannel;
