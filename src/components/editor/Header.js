function Header(props) {
    return (
        <div className="App-header">
            <h1>{props.item.text ? props.item.text : 'Not set'}</h1>
            {props.children}
        </div>
    )
}

export default Header;