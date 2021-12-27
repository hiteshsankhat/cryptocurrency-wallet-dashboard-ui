import "./App.css";
import { Contents, RightSideBar, Sidebar } from "./components";

function App() {
  return (
    <div className="App">
      <div className="side-bar left-side-bar">
        <Sidebar />
      </div>
      <div className="main">
        <Contents />
      </div>
      <div className="side-bar right-side-bar">
        <RightSideBar />
      </div>
    </div>
  );
}

export default App;
