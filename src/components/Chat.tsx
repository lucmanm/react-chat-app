import { Camera, CircleUserRound, Image, Mic, SendIcon, Smile } from "lucide-react";
import { Input } from "./ui/input";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import { useState } from "react";

function Chat() {
  const [isEmoOpen, setIsEmoOpen] = useState(false);
  const [textEmoji, setTextEmoji] = useState("");

  const handleEmojiClick = (e: EmojiClickData) => {
    setTextEmoji((prev) => prev + e.emoji);
    setIsEmoOpen(!isEmoOpen);
  };

  return (
    <div className="flex flex-col flex-1">
      {/* Header Chat*/}
      <div className="flex items-center gap-6 p-4 cursor-pointer border-b border-b-slate-300 hover:bg-slate-950/30 hover:border-none">
        <CircleUserRound className="size-10" />
        <div className="">
          <span className="font-bold">Jane Doe</span>
          <p className="text-sm font-medium text-slate-800">last Message</p>
        </div>
      </div>

      {/* content */}
      <div className="flex-1 overflow-y-auto p-4">mes</div>

      {/* Footer chat */}
      <div className="flex items-center gap-4 text-slate-100 px-4 py-4">
        <div className="flex gap-4 *:cursor-pointer">
          <Image />
          <Camera />
          <Mic />
        </div>

        {/* Message */}
        <Input
          type="text"
          placeholder="Search"
          value={textEmoji}
          onChange={(e) => setTextEmoji(e.target.value)}
          className="flex items-center rounded-sm bg-slate-950/30 grow max-w-full text-slate-100"
        />
        <SendIcon />
        <div className="relative flex items-center justify-center px-4">
          <Smile onClick={() => setIsEmoOpen(!isEmoOpen)} className="absolute" />
          <div className="absolute bottom-0 left-0">
            <EmojiPicker open={isEmoOpen} onEmojiClick={handleEmojiClick} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
