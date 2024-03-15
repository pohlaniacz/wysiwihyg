export default function Button(props) {
    function handleClick() {
        return alert("yay!");
    }
    return (
        <button
            onClick={handleClick}
            title={props.title}
            type={props.type}
        >
            {props.text}
        </button>
    )
}
