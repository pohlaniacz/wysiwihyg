export default function Button(props) {
    return (
        <button
            onClick={props.handleClick}
            title={props.title}
            type={props.type}
        >
            {props.text}
        </button>
    )
}
