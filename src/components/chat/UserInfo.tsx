import { Edit, MoreHorizontal, User2Icon, Video } from "lucide-react";

function UserInfo() {
  return (
    <div className="p-4 px-6 flex items-center justify-between flex-1 grow-0 ">
      <div className="flex items-center gap-6">
        <User2Icon />
        <h2 className="font-bold">Mahid Lucman</h2>
      </div>
      <div className="flex gap-6">
        <MoreHorizontal />
        <Video />
        <Edit />
      </div>
    </div>
  );
}

export default UserInfo;
