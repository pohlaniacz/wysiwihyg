import './styles/App.scss';
import Header from "./components/editor/Header";
import Slider from "./components/editor/Slider";
import data from "./data"
import EditBox from "./components/editor/EditBox";

function App() {

    data.sort((a,b) => a.position - b.position);

    const blocks = data.map(item => {
        if (item.type === "header") {
            return <Header
                key={item.id}
                item={item}
            >
                <EditBox />
            </Header>
        }
        if (item.type === "slider") {
            return <Slider
                key={item.id}
            >
                <EditBox />
            </Slider>
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
