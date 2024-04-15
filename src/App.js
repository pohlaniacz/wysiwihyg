import './styles/App.scss';
import React from "react";
import Box from "./components/layout/Box";
import WebFont from 'webfontloader';

export default function App() {

    const [data, setData] = React.useState(null);
    const [blocks, setBlocks] = React.useState(null);
    const [font, setFont] = React.useState('Roboto');

    React.useEffect(() => {
        fetch(process.env.PUBLIC_URL + '/data.json')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setBlocks(data);
            });
    }, []);

    if (!data) return "Loading...";


    const handleFontChange = (event) => {
        const newFont = event.target.value;
        WebFont.load({
            google: {
                families: [newFont]
            },
            active: () => {
                setFont(newFont);
            }
        });
    };

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
                return <Box
                    key={item.id}
                    item={item}
                    handleMoveBlock={moveBlock}
                    handleSave={setBlocks}
                    blocks={blocks}
                />
            })}
        </div>
    );
}
