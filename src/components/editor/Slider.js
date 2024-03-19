export default function Slider(props) {
    return (
        <section className="App-slider" data-id={props.item.id}>
            <div className="App-slider-slide">
                Slide1
            </div>
            <div className="App-slider-slide">
                Slide2
            </div>
            <div className="App-slider-slide">
                Slide3
            </div>
            {props.children}
        </section>
    )
}