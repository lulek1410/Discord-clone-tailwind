import { FaMagnifyingGlass } from "react-icons/fa6";

interface Props {
  value: string;
  onChange: (value: string) => void;
  searchAction: () => void;
}

const SearchButton = ({ value, onChange, searchAction }: Props) => {
  return (
    <div className="flex items-center h-8">
      <input
        className="px-2 py-1 rounded-l-md outline-none text-zinc-400 bg-zinc-600 placeholder:text-zinc-400"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search..."
      />
      <button
        className="w-8 h-full flex justify-center rounded-r-md items-center bg-zinc-600"
        onClick={searchAction}
      >
        <FaMagnifyingGlass />
      </button>
    </div>
  );
};

export default SearchButton;
