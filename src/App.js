import './styles/App.scss';
import Header from "./components/editor/Header";
import Slider from "./components/editor/Slider";
import data from "./data"
import EditBox from "./components/editor/EditBox";
import React from "react";

export default function App() {

    const [blocks, setBlocks] = React.useState(data);

    function moveBlock() {
        console.log('move');

        setBlocks(prevBlocks => ({
            prevBlocks
        }))

        // data.sort((a,b) => a.position - b.position)
    }

    // data.sort((a,b) => a.position - b.position);

    return (
        <div className="App">
            {blocks.map(item => {
                if (item.type === "header") {
                    return <Header
                        key={item.id}
                        item={item}
                    >
                        <EditBox handleClick={moveBlock}/>
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
            })}
        </div>
    );
}
