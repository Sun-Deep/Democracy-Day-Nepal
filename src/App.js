import ChandraSurya from "./svg/ChandraSurya";
import './App.css'
import NepalOutline from "./svg/NepalOutline";

function App() {
  return (
    <div className="container">
      <div className="flag">
        <ChandraSurya />
      </div>
      <NepalOutline />
      <div className="text">
        <p>National Democracy Day 2078</p>
      </div>
    </div>
  );
}

export default App;
