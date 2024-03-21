import ActionButton from "../layout/ActionButton";

export default function EditBox(props) {
    return (
        <div className="App-editBox">
            <ActionButton
                handleClick={props.handleClick}
                type="up"
            />
            <ActionButton
                handleClick={props.handleClick}
                type="down"
            />
            <ActionButton
                type="edit"
            />
            <ActionButton
                type="duplicate"
            />
        </div>
    )
}