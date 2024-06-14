import ChatList from "./ChatList";
import UserInfo from "./UserInfo";

function List() {
  return (
    <div className="flex w-1/4 flex-col border-r border-slate-400 ">
      <UserInfo />
      <ChatList />
    </div>
  );
}

export default List;
