interface Props {
  avatarSrc: string;
  message: string;
  authorName: string;
  timestamp: string;
}

const Message = ({ avatarSrc, message, authorName, timestamp }: Props) => {
  return (
    <section className="flex gap-5">
      <img src={avatarSrc} className="w-10 h-10 bg-gray-400 rounded-full" />
      <div className="text-slate-100">
        <div className="font-semibold">
          {authorName}
          <span className="text-xs text-gray-500 ml-2">{timestamp}</span>
        </div>
        <p>{message}</p>
      </div>
    </section>
  );
};

export default Message;
