export default function Button(props) {
    return (
        <button
            onClick={props.handleClick}
            title={props.title}
            data-action={props.type}
        >
            {props.text}
        </button>
    )
}
