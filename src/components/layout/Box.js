import Header from "../editor/Header";
import EditBox from "../editor/EditBox";
import Slider from "../editor/Slider";
import React from "react";
import Modal from "./Modal";

function Container({ type: ComponentType, item, handleMoveBlock }) {
    const [openModalId, setOpenModalId] = React.useState(0);

    function handleEdit(e) {
        e.stopPropagation();
        setOpenModalId(Number(e.target.closest('section').getAttribute('data-id')));
    }

    function handleClose() {
        setOpenModalId(0);
    }

    return (
        <ComponentType key={item.id} item={item}>
            <EditBox handleEdit={handleEdit} handleMoveBlock={handleMoveBlock} />
            <Modal triggerOpen={item.id === openModalId} handleClose={handleClose} content={item.id}/>
        </ComponentType>
    );
}

export default function Box(props) {
    return (
        <>
            {props.item.type === "header" && (
                <Container type={Header} item={props.item} handleMoveBlock={props.handleMoveBlock} />
            )}
            {props.item.type === "slider" && (
                <Container type={Slider} item={props.item} handleMoveBlock={props.handleMoveBlock} />
            )}
        </>
    );
}
