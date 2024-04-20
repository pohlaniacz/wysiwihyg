export default function Header(props) {
    return (
        <section className="App-header" data-id={props.item.id} style={{backgroundImage: `url(${props.item.data.image})`}}>
            {props.item.data.firstLine.text && <h1 style={{fontFamily: props.item.data.firstLine.font.name, fontSize: `${props.item.data.firstLine.font.size}px`}}>{props.item.data.firstLine.text}</h1>}
            {props.item.data.secondLine.text && <h2 style={{fontFamily: props.item.data.secondLine.font.name, fontSize: `${props.item.data.secondLine.font.size}px`}}>{props.item.data.secondLine.text}</h2>}
            {props.children}
        </section>
    )
}