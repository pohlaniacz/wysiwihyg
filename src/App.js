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
                item={item}
            >
                <ActionButton text="up"/>
                <ActionButton text="down" />
            </Header>
        }
        if (item.type === "slider") {
            return <Slider
                key={item.id}
            />
        }

        return '';
    })

  return (
    <div className="App">
        {blocks}
    </div>
  );
}

export default App;
