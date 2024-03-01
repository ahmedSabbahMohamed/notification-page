function Notifications({ avatar, name, action, action2, time }) {
  return (
    <div className="content bg-lgblue1 p-4 rounded-md flex items-center gap-4">
      <img className="rounded-full w-16 h-16" src={avatar} alt="jacob" />
      <div>
        <span className="font-bold text-vdblue">{name}</span>
        <span className="text-dgblue ml-2">{action}</span>
        <span className="font-bold text-Blue cursor-pointer ml-2">
          {action2}
        </span>
        <span className="inline-block w-2 h-2 rounded-full bg-Red ml-2"></span>
        <span className="block text-dgblue mt-2">{time}</span>
      </div>
    </div>
  );
}

export default Notifications