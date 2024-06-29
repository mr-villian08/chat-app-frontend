const RecentChats = () => {
  return (
    <div className="px-2">
      <div className="">
        <h5 className="font-semibold mb-6">Recent</h5>
      </div>
      <ul className="w-full bg-red-500">
        <div className="pl-2 flex flex-col">
          <div className="h-20">
            <div className="w-10 h-full flex items-center text-center relative rounded-full">
              <img
                className="w-[40px] object-cover rounded-full"
                src="http://chatvia-dark.react.themesbrand.com/static/media/avatar-2.feb0f89de58f0ef9b424.jpg"
                alt="David"
              />
              <div></div>
              <div className="p-1 w-0.5 h-0.5 absolute right-0.5 border-2 border-black bottom-5 rounded-full bg-green-500"></div>
            </div>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default RecentChats;
