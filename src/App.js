import './styles/App.scss';
import React from "react";
import Box from "./components/layout/Box";
import { db } from './components/external/firebase';
import { v4 as uuidv4 } from 'uuid';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import {Button} from "@material-tailwind/react";
import Add from "./components/editor/modal/Add";

export default function App() {

    const [data, setData] = React.useState(null);
    const [blocks, setBlocks] = React.useState(null);
    const [openAddModal, setOpenAddModal] = React.useState(false);

    const writeData = async (userId, userData) => {
        try {
            const checkedData = JSON.parse(JSON.stringify(userData, (key, value) =>
                value === undefined ? null : value
            ));

            if (Array.isArray(checkedData)) {
                await setDoc(doc(db, "blocks", userId), { items: checkedData });
            } else {
                await setDoc(doc(db, "blocks", userId), checkedData);
            }
            setBlocks(checkedData);
            console.log("Document successfully written!");
        } catch (error) {
            console.error("Error writing document: ", error);
        }
    }

    React.useEffect(() => {
        const loadData = async (userId) => {
            try {
                const response = await fetch(process.env.PUBLIC_URL + '/data.json');
                const data = await response.json();
                setData(data);
                setBlocks(data);

                await writeData(userId, data);
            } catch (error) {
                console.log(error);
            }
        };

        const fetchData = async () => {
            let userId = localStorage.getItem('userId');
            if (!userId) {
                userId = uuidv4();
                localStorage.setItem('userId', userId);

                // Load data from data.json
                await loadData(userId);
            } else {
                const docRef = doc(db, 'blocks', userId);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const data = docSnap.data().items;
                    setData(data);
                    setBlocks(data);
                } else {
                    await loadData(userId);
                }
            }
        };

        fetchData();
    }, []);

    if (!data) return "Loading...";

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

    const handleAdd = () => {
        setOpenAddModal(true);
    };

    const handleCloseAddModal = () => {
        setOpenAddModal(false);
    };

    return (
        <div className="App">
            {blocks.map(item => {
                return <Box
                    key={item.id}
                    item={item}
                    handleMoveBlock={moveBlock}
                    blocks={blocks}
                    handleWriteData={writeData}
                />
            })}


            <Button
                data-parent="123"
                className="addBlock"
                title="add"
                onClick={handleAdd}
            >
                add +
            </Button>


            <Add
                triggerOpen={openAddModal}
                handleClose={handleCloseAddModal}
                handleWriteData={writeData}
                blocks={blocks}
            />
        </div>
    );
}
