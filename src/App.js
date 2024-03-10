import './styles/App.css';
import Header from "./components/editor/Header";
import Slider from "./components/editor/Slider";
import ActionButton from "./components/layout/ActionButton";
import data from "./data"

function App() {

    const blocks = data.map(item => {
        if (item.type === "header") {
            return <Header
                key={item.id}
                position={item.position}
                text={item.data.title}
            >
                <ActionButton text="up"/>
                <ActionButton text="down" />
            </Header>
        }
        if (item.type === "slider") {
            return <Slider
                key={item.id}
                position={item.position}
            />
        }
    }
    )

  return (
    <div className="App">
        {blocks}
    </div>
  );
}

export default App;
