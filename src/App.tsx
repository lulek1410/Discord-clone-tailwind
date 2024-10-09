import Channels from "./components/Page/Channels";
import Chat from "./components/Page/Chat";
import Sidebar from "./components/Page/Sidebar";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Channels />
      <Chat />
    </div>
  );
}

export default App;
