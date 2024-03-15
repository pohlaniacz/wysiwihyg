function Slider(props) {
    return (
        <div className="App-slider">
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
        </div>
    )
}

export default Slider;
