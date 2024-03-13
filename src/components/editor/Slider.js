function Slider(props) {
    return (
        <div className="App-slider">
            <dic classname="App-slider-slide">
                Slide1
            </dic>
            <dic classname="App-slider-slide">
                Slide2
            </dic>
            <dic classname="App-slider-slide">
                Slide3
            </dic>
            {props.children}
        </div>
    )
}

export default Slider;