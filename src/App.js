import './App.css';
import Counter from "./features/counter/Counter";
import Coin from "./features/coin/Coin";
import Theam from "./features/theam/Theam";

function App() {
  return (
    <div className="App">
     <Counter/>
     <Coin/>
     <Theam/>
    </div>
  );
}

export default App;
