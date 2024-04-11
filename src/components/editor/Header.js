export default function Header(props) {
    return (
        <section className="App-header" data-id={props.item.id} style={{backgroundImage: `url(${props.item.data.image})`}}>
            {props.item.data.title && <h1>{props.item.data.title}</h1>}
            {props.children}
        </section>
    )
}