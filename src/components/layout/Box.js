import Header from "../editor/Header";
import EditBox from "../editor/EditBox";
import Slider from "../editor/Slider";
import React from "react";

export default function Box(props) {
    if (props.item.type === "header") {
        return <Header
            key={props.item.id}
            item={props.item}
        >
            <EditBox handleClick={props.handleClick}/>
        </Header>
    }
    if (props.item.type === "slider") {
        return <Slider
            key={props.item.id}
            item={props.item}
        >
            <EditBox handleClick={props.handleClick}/>
        </Slider>
    }
}