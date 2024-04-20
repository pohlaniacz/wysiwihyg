export default function TwoColumns(props) {
    return (
        <section className="App-twoCOlumns" data-id={props.item.id}>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    {props.item.data.one.firstLine.text && <h1>{props.item.data.one.firstLine.text}</h1>}
                    {props.item.data.one.secondLine.text && <h2>{props.item.data.one.secondLine.text}</h2>}
                    {props.item.data.one.paragraph.text && <p>{props.item.data.one.paragraph.text}</p>}
                </div>
                <div>
                    {props.item.data.two.firstLine.text && <h1>{props.item.data.two.firstLine.text}</h1>}
                    {props.item.data.two.secondLine.text && <h2>{props.item.data.two.secondLine.text}</h2>}
                    {props.item.data.two.paragraph.text && <p>{props.item.data.two.paragraph.text}</p>}
                </div>
            </div>
        </section>
    )
}