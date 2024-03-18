import './styles/App.scss';
import Header from "./components/editor/Header";
import Slider from "./components/editor/Slider";
import data from "./data"
import EditBox from "./components/editor/EditBox";
import React from "react";

export default function App() {

    const [blocks, setBlocks] = React.useState(data);

    function moveBlock(e) {
        console.log('move');
        console.log(e.target.closest('section'));

        setBlocks(prevBlocks => (
            prevBlocks
        // function moveElement(id, type, data) {
        //     const currentElementIndex = data.findIndex(element => element.id === id);
        //     const currentElement = data[currentElementIndex];
        //
        //     if (type === "up") {
        //         if (currentElementIndex > 0) {
        //             const previousElement = data[currentElementIndex - 1];
        //
        //             [previousElement.position, currentElement.position] = [currentElement.position, previousElement.position];
        //             [data[currentElementIndex - 1], data[currentElementIndex]] = [currentElement, previousElement];
        //         }
        //     } else if (type === "down") {
        //         if (currentElementIndex < data.length - 1) {
        //             const nextElement = data[currentElementIndex + 1];
        //
        //             [nextElement.position, currentElement.position] = [currentElement.position, nextElement.position];
        //             [data[currentElementIndex + 1], data[currentElementIndex]] = [currentElement, nextElement];
        //         }
        //     }
        //
        //     return data;
        // }
        ))

        // data.sort((a,b) => a.position - b.position)
    }

    // data.sort((a,b) => a.position - b.position);

    console.log(blocks);

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
