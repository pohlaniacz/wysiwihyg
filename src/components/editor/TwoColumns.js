import React from "react";

export default function TwoColumns(props) {
    return (
        <section className="App-twoColumns" data-id={props.item.id}>
            <div className="grid grid-cols-4 gap-4">
                <div className="col-start-2">
                    {props.item.data.one.firstLine.text && <h1 style={{fontFamily: props.item.data.one.firstLine.font.name, fontSize: `${props.item.data.one.firstLine.font.size}px`}}>{props.item.data.one.firstLine.text.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br /></React.Fragment>)}</h1>}
                    {props.item.data.one.secondLine.text && <h2 style={{fontFamily: props.item.data.one.secondLine.font.name, fontSize: `${props.item.data.one.secondLine.font.size}px`}}>{props.item.data.one.secondLine.text.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br /></React.Fragment>)}</h2>}
                    {props.item.data.one.image.src && (
                        <img src={props.item.data.one.image.src} alt={props.item.data.one.firstLine.text} />
                    )}
                    {props.item.data.one.paragraph.text && <p style={{fontFamily: props.item.data.one.paragraph.font.name, fontSize: `${props.item.data.one.paragraph.font.size}px`}}>{props.item.data.one.paragraph.text.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br /></React.Fragment>)}</p>}
                </div>
                <div>
                    {props.item.data.two.firstLine.text && <h1 style={{fontFamily: props.item.data.two.firstLine.font.name, fontSize: `${props.item.data.two.firstLine.font.size}px`}}>{props.item.data.two.firstLine.text.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br /></React.Fragment>)}</h1>}
                    {props.item.data.two.secondLine.text && <h2 style={{fontFamily: props.item.data.two.secondLine.font.name, fontSize: `${props.item.data.two.secondLine.font.size}px`}}>{props.item.data.two.secondLine.text.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br /></React.Fragment>)}</h2>}
                    {props.item.data.two.image.src && (
                        <img src={props.item.data.two.image.src} alt={props.item.data.two.firstLine.text}/>
                    )}
                    {props.item.data.two.paragraph.text && <p style={{fontFamily: props.item.data.two.paragraph.font.name, fontSize: `${props.item.data.two.paragraph.font.size}px`}}>{props.item.data.two.paragraph.text.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br /></React.Fragment>)}</p>}
                </div>
            </div>
            {props.children}
        </section>
    )
}
