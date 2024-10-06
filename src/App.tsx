import Channels from "./components/Channels";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Channels />
    </div>
  );
}

export default App;
