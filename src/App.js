import './styles/App.css';
import Header from "./components/editor/Header";
import Slider from "./components/editor/Slider";

function App() {
  return (
    <div className="App">
        <Header position="1" />
        <Slider position="2" />
    </div>
  );
}

export default App;
