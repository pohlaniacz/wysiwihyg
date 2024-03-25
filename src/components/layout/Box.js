import Header from "../editor/Header";
import EditBox from "../editor/EditBox";
import Slider from "../editor/Slider";
import React from "react";
import Modal from "./Modal";

export default function Box(props) {

    const [triggerOpen, setTriggerOpen] = React.useState(0);

    function handleEdit(e) {
        e.stopPropagation();

        setTriggerOpen(Number(e.target.closest('section').getAttribute('data-id')));
    }

    return (
        <>
            {props.item.type === "header" && (
                <Header key={props.item.id} item={props.item}>
                    <EditBox handleEdit={handleEdit} handleMoveBlock={props.handleMoveBlock} />
                    <Modal triggerOpen={props.item.id === triggerOpen} />
                </Header>
            )}
            {props.item.type === "slider" && (
                <Slider key={props.item.id} item={props.item}>
                    <EditBox handleEdit={handleEdit} handleMoveBlock={props.handleMoveBlock} />
                    <Modal triggerOpen={props.item.id === triggerOpen}  />
                </Slider>
            )}
        </>
    );
}