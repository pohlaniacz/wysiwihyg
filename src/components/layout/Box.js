import EditBox from "../editor/EditBox";
import React from "react";
import Modal from "./Modal";
import Header from "../editor/Header";
import Slider from "../editor/Slider";
import ModalHeader from "../editor/modal/ModalHeader";
import WebFont from "webfontloader";
import TwoColumns from "../editor/TwoColumns";
import ModalTwoColumns from "../editor/modal/ModalTwoColumns";
import Add from "../editor/modal/Add";

export default function Box(props) {

    const [openModalId, setOpenModalId] = React.useState(0);

    const handleFontChange = (newFont) => {
        WebFont.load({
            google: {
                families: [newFont]
            },
        });
    };

    function handleEdit(e) {
        e.stopPropagation();
        setOpenModalId(Number(e.target.closest('button').getAttribute('data-parent')));
    }

    function handleClose() {
        setOpenModalId(0);
    }

    return (
        <>
            {props.item.type === "header" && (
                <Header key={props.item.id} item={props.item}>
                    <EditBox parent={props.item.id} handleEdit={handleEdit} handleMoveBlock={props.handleMoveBlock} />
                    <ModalHeader
                        handleSave={props.handleSave}
                        blocks={props.blocks}
                        triggerOpen={props.item.id === openModalId}
                        handleClose={handleClose}
                        item={props.item}
                        handleFontChange={handleFontChange}
                        handleWriteData={props.handleWriteData}
                    />
                </Header>
            )}
            {props.item.type === "slider" && (
                <Slider key={props.item.id} item={props.item}>
                    <EditBox parent={props.item.id} handleEdit={handleEdit} handleMoveBlock={props.handleMoveBlock} />
                    <Modal type={props.item.type} triggerOpen={props.item.id === openModalId} handleClose={handleClose} content={props.item.id}/>
                </Slider>
            )}
            {props.item.type === "two-columns" && (
                <TwoColumns key={props.item.id} item={props.item}>
                    <EditBox parent={props.item.id} handleEdit={handleEdit} handleMoveBlock={props.handleMoveBlock} />
                    <ModalTwoColumns
                        handleSave={props.handleSave}
                        blocks={props.blocks}
                        triggerOpen={props.item.id === openModalId}
                        handleClose={handleClose}
                        item={props.item}
                        handleFontChange={handleFontChange}
                        handleWriteData={props.handleWriteData}
                    />
                </TwoColumns>
            )}

            <Add
                parentId={props.item.id}
                triggerOpen={123 === openModalId}
                handleClose={handleClose}
                handleWriteData={props.handleWriteData}
                handleSave={props.handleSave}
            />
        </>
    );
}
