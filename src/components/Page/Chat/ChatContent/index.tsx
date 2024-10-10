import { FaCirclePlus } from "react-icons/fa6";
import Message from "./Message";
import { messagesTestDate } from "./messagesTestData";

const ChatContent = () => {
  return (
    <main className="w-full  h-[calc(100%-64px)]">
      <div className="flex flex-col gap-8 overflow-auto h-[calc(100%-64px)] p-10">
        {messagesTestDate.map((el, index) => (
          <Message
            key={index}
            avatarSrc={el.avatarSrc}
            message={el.message}
            authorName={el.userName}
            timestamp={el.timestamp}
          />
        ))}
      </div>
      <div className="h-16 flex items-center px-10 ">
        <div className=" flex items-center w-full h-10">
          <div className="w-10 pl-2 h-full flex justify-center rounded-l-lg items-center bg-zinc-600">
            <FaCirclePlus className="text-emerald-500 w-5 h-5" />
          </div>
          <input
            type="text"
            className="flex-1 h-full pr-2 py-1 outline-none rounded-r-lg text-zinc-400 bg-zinc-600 placeholder:text-zinc-400"
            placeholder="Enter message..."
          />
        </div>
      </div>
    </main>
  );
};

export default ChatContent;
