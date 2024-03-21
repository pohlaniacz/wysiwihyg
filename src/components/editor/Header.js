export default function Header(props) {
    return (
        <section className="App-header" data-id={props.item.id}>
            {props.item.data.title && <h1>{props.item.data.title}</h1>}
            {props.children}
        </section>
    )
}