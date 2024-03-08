function Header(props) {
    return (
        <div className="App-header">
            <h1>{props.text ? props.text : 'Not set'}</h1>
        </div>
    )
}

export default Header;