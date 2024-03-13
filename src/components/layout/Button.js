export default function Button(props) {
    function handleClick() {
        return alert("yay!");
    }
    return (
        <button onClick={handleClick}>{props.text}</button>
    )
}