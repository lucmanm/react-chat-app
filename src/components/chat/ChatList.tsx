import { CircleUserRound, Minus, PlusIcon, Search } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

function ChatList() {
  const [addMode, setAddMode] = useState(false);

  return (
    <div className="overflow-hidden border-black">
      {/* Search Users */}
      <div className="flex items-center gap-6 sticky py-3 px-4">
        <div className="relative flex flex-1 items-center rounded-sm">
          <Search className="absolute ml-2" />
          <Input
            type="search"
            placeholder="Search"
            onChange={() => {}}
            className="flex items-center rounded-sm p-3 pl-10 bg-slate-950/30 grow max-w-full text-slate-100"
          />
        </div>
        <Button
          onClick={() => setAddMode(!addMode)}
          className="min-h-full size-11 p-0 rounded-sm bg-slate-950/30 hover:bg-slate-950/50 cursor-pointer hover:text-white"
        >
          {addMode ? <Minus /> : <PlusIcon />}
        </Button>
      </div>

      {/* users details */}
      <div className="overflow-y-auto h-[700px] px-4">
        {Array.from({ length: 11 }).map((_, idx) => (
          <div
            key={idx}
            className="flex items-center gap-6 p-4 cursor-pointer border-b border-b-slate-950 hover:bg-slate-950/30 hover:border-none"
          >
            <CircleUserRound className="size-10" />
            <div className="">
              <span className="font-bold">Jane Doe</span>
              <p className="text-sm font-normal">last Message</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChatList;
