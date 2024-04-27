import React from "react";

export default function Header(props) {
    return (
        <section className="App-header" data-id={props.item.id} style={{backgroundImage: `url(${props.item.data.image})`}}>
            {props.item.data.firstLine.text && <h1 style={{fontFamily: props.item.data.firstLine.font.name, fontSize: `${props.item.data.firstLine.font.size}px`}}>{props.item.data.firstLine.text.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br /></React.Fragment>)}</h1>}
            {props.item.data.secondLine.text && <h2 style={{fontFamily: props.item.data.secondLine.font.name, fontSize: `${props.item.data.secondLine.font.size}px`}}>{props.item.data.secondLine.text.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br /></React.Fragment>)}</h2>}
            {props.children}
        </section>
    )
}
