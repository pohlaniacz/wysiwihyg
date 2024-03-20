import './styles/App.scss';
import Header from "./components/editor/Header";
import Slider from "./components/editor/Slider";
import data from "./data"
import EditBox from "./components/editor/EditBox";
import React from "react";

export default function App() {

    const [blocks, setBlocks] = React.useState(data);

    function moveBlock(e) {
        e.stopPropagation();

        const id = Number(e.target.closest('section').getAttribute('data-id'));
        const type = e.target.getAttribute('data-action');

        const newData = JSON.parse(JSON.stringify(blocks));

        const currentElementIndex = newData.findIndex(element => element.id === id);
        const currentElement = newData[currentElementIndex];

        if (type === "up") {
            if (currentElementIndex > 0) {
                const previousElement = newData[currentElementIndex - 1];

                [previousElement.position, currentElement.position] = [currentElement.position, previousElement.position];
                [newData[currentElementIndex - 1], newData[currentElementIndex]] = [currentElement, previousElement];
            }
        } else if (type === "down") {
            if (currentElementIndex < newData.length - 1) {
                const nextElement = newData[currentElementIndex + 1];

                [nextElement.position, currentElement.position] = [currentElement.position, nextElement.position];
                [newData[currentElementIndex + 1], newData[currentElementIndex]] = [currentElement, nextElement];
            }
        }
        newData.sort((a,b) => a.position - b.position)

        setBlocks(newData);
    }



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
                        item={item}
                    >
                        <EditBox handleClick={moveBlock}/>
                    </Slider>
                }

                return '';
            })}
        </div>
    );
}
