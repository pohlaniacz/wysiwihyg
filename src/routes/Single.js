import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { doc, setDoc, getDoc } from '@firebase/firestore';
import Box from "../components/layout/Box";
import {Button} from "@material-tailwind/react";
import Add from "../components/editor/modal/Add";
import {db} from "../components/external/firebase";

export default function Landing() {
    const { singleId } = useParams();
    const [data, setData] = useState(null);
    const [blocks, setBlocks] = useState(null);
    const [openAddModal, setOpenAddModal] = useState(false);

    const writeData = useCallback(async (userData) => {
        const checkedData = JSON.parse(JSON.stringify(userData, (key, value) => value === undefined ? null : value));
        console.log(checkedData);
        await setDoc(doc(db, "blocks", singleId), Array.isArray(checkedData) ? { items: checkedData } : checkedData);
        setBlocks(checkedData);
    }, [singleId]);

    useEffect(() => {
        const fetchData = async () => {
            const docRef = doc(db, 'blocks', singleId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const data = docSnap.data().items;
                setData(data);
                setBlocks(data);
            } else {
                const response = await fetch(process.env.PUBLIC_URL + '/data.json');
                const data = await response.json();
                setData(data);
                setBlocks(data);
                await writeData(data);
            }
        };
        fetchData();
    }, [singleId, writeData]);

    if (!data) return "Loading...";

    const moveBlock = (e) => {
        e.stopPropagation();
        const id = e.target.closest('section').getAttribute('data-id');
        const type = e.target.getAttribute('data-action');
        const newData = [...blocks];
        const currentElementIndex = newData.findIndex(element => element.id === id);

        if ((type === "up" && currentElementIndex > 0) || (type === "down" && currentElementIndex < newData.length - 1)) {
            const swapIndex = type === "up" ? currentElementIndex - 1 : currentElementIndex + 1;
            [newData[swapIndex], newData[currentElementIndex]] = [newData[currentElementIndex], newData[swapIndex]];
            writeData(newData);
        }
    }

    const handleAdd = () => {
        setOpenAddModal(true);
    };

    const handleCloseAddModal = () => {
        setOpenAddModal(false);
    };

    return (
        <>
            {blocks.map(item => (
                <Box
                    key={item.id}
                    item={item}
                    handleMoveBlock={moveBlock}
                    blocks={blocks}
                    handleWriteData={writeData}
                />
            ))}

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
