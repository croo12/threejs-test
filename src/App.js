import "./App.css";
import ImportMyModel from "./research/ImportMyModel";
import ResearchHeader from "./research/ResearchHeader";

function App() {
  return (
    <div className="App">
      <ResearchHeader title={"Three.js 연구소입니다"} />
      <ImportMyModel />
    </div>
  );
}

export default App;
