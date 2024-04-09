import EditBox from "../editor/EditBox";
import React from "react";
import Modal from "./Modal";
import Header from "../editor/Header";
import Slider from "../editor/Slider";
import ModalHeader from "../editor/modals/ModalHeader";

export default function Box(props) {


    const [openModalId, setOpenModalId] = React.useState(0);

    function handleEdit(e) {
        e.stopPropagation();
        setOpenModalId(Number(e.target.closest('section').getAttribute('data-id')));
    }

    function handleClose() {
        setOpenModalId(0);
    }

    return (
        <>
            {props.item.type === "header" && (
                <Header key={props.item.id} item={props.item}>
                    <EditBox handleEdit={handleEdit} handleMoveBlock={props.handleMoveBlock} />
                    <ModalHeader
                        handleSave={props.handleSave}
                        blocks={props.blocks}
                        triggerOpen={props.item.id === openModalId}
                        handleClose={handleClose}
                        item={props.item}
                    />
                </Header>
            )}
            {props.item.type === "slider" && (
                <Slider key={props.item.id} item={props.item}>
                    <EditBox handleEdit={handleEdit} handleMoveBlock={props.handleMoveBlock} />
                    <Modal type={props.item.type} triggerOpen={props.item.id === openModalId} handleClose={handleClose} content={props.item.id}/>
                </Slider>
            )}
        </>
    );
}
