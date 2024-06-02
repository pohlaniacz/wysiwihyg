import React from "react";

export default function Counter(props) {
    return (
        <section className="App-counter" data-id={props.item.id}>
            {props.item.data.countTo && <h1 style={{color: '#000'}}>{props.item.data.countTo}</h1>}
            {props.children}
        </section>
    )
}
