import Channel from "./Channel";
import { IChannel } from "./types";

const Channels = () => {
  const channels: IChannel[] = [
    {
      text: "Topics",
      subChannels: [],
    },
    {
      text: "Questions",
      subChannels: [],
    },
    {
      text: "Random",
      subChannels: [],
    },
  ];

  return (
    <div className="w-64 bg-zinc-800 h-screen p-4">
      <h1 className="text-gray-300 font-bold text-lg mb-5">Channels</h1>
      <nav>
        <ul className="flex flex-col gap-2">
          {channels.map((el, index) => (
            <Channel key={index} text={el.text} subChannels={el.subChannels} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Channels;
