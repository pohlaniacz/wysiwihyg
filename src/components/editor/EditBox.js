import ActionButton from "../layout/ActionButton";

function EditBox(props) {
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
                type="duplicate"
            />
        </div>
    )
}

export default EditBox;
