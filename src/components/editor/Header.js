export default function Header(props) {
    return (
        <section className="App-header" data-id={props.item.id}>
            <h1>{props.item.text ? props.item.text : 'Not set'}</h1>
            {props.children}
        </section>
    )
}