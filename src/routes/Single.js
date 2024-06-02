import Box from "../components/layout/Box";
import {Button} from "@material-tailwind/react";
import Add from "../components/editor/modal/Add";
import React from "react";
import {doc, getDoc, setDoc} from "firebase/firestore";
import {db} from "../components/external/firebase";
import {useParams} from "react-router-dom";

export default function Landing() {

    const { singleId } = useParams();

    const [data, setData] = React.useState(null);
    const [blocks, setBlocks] = React.useState(null);
    const [openAddModal, setOpenAddModal] = React.useState(false);

    const writeData = async (userData) => {
        try {
            const checkedData = JSON.parse(JSON.stringify(userData, (key, value) =>
                value === undefined ? null : value
            ));

            if (Array.isArray(checkedData)) {
                await setDoc(doc(db, "blocks", singleId), { items: checkedData });
            } else {
                await setDoc(doc(db, "blocks", singleId), checkedData);
            }
            setBlocks(checkedData);
            console.log("Document successfully written!");
        } catch (error) {
            console.error("Error writing document: ", error);
        }
    }

    React.useEffect(() => {
        const loadDefaultData = async () => {
            try {
                const response = await fetch(process.env.PUBLIC_URL + '/data.json');
                const data = await response.json();
                setData(data);
                setBlocks(data);

                await writeData(data);
            } catch (error) {
                console.log(error);
            }
        };

        const fetchData = async () => {
            const docRef = doc(db, 'blocks', singleId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const data = docSnap.data().items;
                setData(data);
                setBlocks(data);
            } else {
                await loadDefaultData();
            }
        };

        fetchData();
    }, []);

    if (!data) return "Loading...";

    function moveBlock(e) {
        e.stopPropagation();

        const id = e.target.closest('section').getAttribute('data-id');
        const type = e.target.getAttribute('data-action');

        const newData = JSON.parse(JSON.stringify(blocks));

        const currentElementIndex = newData.findIndex(element => element.id === id);

        if (type === "up") {
            if (currentElementIndex > 0) {
                [newData[currentElementIndex - 1], newData[currentElementIndex]] = [newData[currentElementIndex], newData[currentElementIndex - 1]];
            }
        } else if (type === "down") {
            if (currentElementIndex < newData.length - 1) {
                [newData[currentElementIndex + 1], newData[currentElementIndex]] = [newData[currentElementIndex], newData[currentElementIndex + 1]];
            }
        }

        setBlocks(newData);
        // to do, save data
    }

    const handleAdd = () => {
        setOpenAddModal(true);
    };

    const handleCloseAddModal = () => {
        setOpenAddModal(false);
    };

    return (
        <>
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
        </>
    )
}