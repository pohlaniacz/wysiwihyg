import './styles/App.css';
import Header from "./components/editor/Header";
import Slider from "./components/editor/Slider";
import ActionButton from "./components/layout/ActionButton";

function App() {
  return (
    <div className="App">
        <Header position="1">
            <ActionButton text="up"/>
            <ActionButton text="down" />
        </Header>
        <Slider position="2">
            <ActionButton text="up"/>
            <ActionButton text="down" />
        </Slider>
    </div>
  );
}

export default App;
