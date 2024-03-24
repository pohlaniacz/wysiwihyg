import Header from "../editor/Header";
import EditBox from "../editor/EditBox";
import Slider from "../editor/Slider";
import React from "react";
import Modal from "./Modal";

export default function Box(props) {

    return (
        <>
            {props.item.type === "header" && (
                <Header key={props.item.id} item={props.item}>
                    <EditBox handleMoveBlock={props.handleMoveBlock} />
                    <Modal />
                </Header>
            )}
            {props.item.type === "slider" && (
                <Slider key={props.item.id} item={props.item}>
                    <EditBox handleMoveBlock={props.handleMoveBlock} />
                    <Modal />
                </Slider>
            )}
        </>
    );
}