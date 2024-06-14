import Chat from "./components/Chat";
import Detail from "./components/Detail";
import List from "./components/chat/List";

function App() {
  return (
    <main className="grid place-items-center h-screen p-4 md:p-14 bg-gradient-to-r from-blue-800 to-indigo-900 ">
      <section className="flex justify-center min-w-full grow h-full rounded-md  backdrop-blur-sm bg-white/30">
        <List />
        <Chat />
        <Detail />
      </section>
    </main>
  );
}

export default App;
