export default function Slider(props) {
    const slides = props.item.data;
    return (
        <section className="App-slider" data-id={props.item.id}>
            {slides.map(function(slides, i){
                return (
                    <div className="App-slider-slide">
                        <h4>{slides.title}</h4>
                        <p>{slides.content}</p>
                    </div>
                );
            })}
            {props.children}
        </section>
    )
}