import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { doc, setDoc, getDoc } from '@firebase/firestore';
import Box from "../components/layout/Box";
import {Button} from "@material-tailwind/react";
import Add from "../components/editor/modal/Add";
import {db} from "../components/external/firebase";
import {defaultBlocks} from "../components/defaults";
import {findUniqueFontNames} from "../components/utils/font";
import WebFont from "webfontloader";
import {useAuth} from "../hooks/useAuth";

export default function Landing() {
    const { singleId } = useParams();
    const { user, loading } = useAuth();
    const [data, setData] = useState(null);
    const [blocks, setBlocks] = useState(null);
    const [openAddModal, setOpenAddModal] = useState(false);

    const writeData = useCallback(async (userData) => {
        console.log('writeData');
        const checkedData = JSON.parse(JSON.stringify(userData, (key, value) => value === undefined ? null : value));
        const dataToSave = { items: checkedData, user: user ? user.uid : null };
        await setDoc(doc(db, "blocks", singleId), dataToSave);
        setBlocks(dataToSave.items);
    }, [singleId, user]);

    useEffect(() => {
        const fetchData = async () => {
            console.log('fetchData');
            const docRef = doc(db, 'blocks', singleId);
            const docSnap = await getDoc(docRef);
            let data;

            if (docSnap.exists()) {
                data = docSnap.data();
                console.log('exists');
            } else {
                data = defaultBlocks();
                await writeData(data.items);
                console.log('not exists');
            }
            console.log(data);

            setData(data);
            setBlocks(data.items);

            WebFont.load({
                google: {
                    families: findUniqueFontNames(data)
                },
            });
        };
        fetchData();
    }, [singleId, writeData]);

    if (!data || loading) return "Loading...";

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

    console.log(blocks);

    return (
        <>
            {blocks && blocks.map(item => (
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
