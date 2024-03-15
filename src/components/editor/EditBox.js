import ActionButton from "../layout/ActionButton";

function EditBox(props) {
    return (
        <div className="App-editBox">
            <ActionButton
                type="up"
            />
            <ActionButton
                type="down"
            />
            <ActionButton
                type="duplicate"
            />
        </div>
    )
}

export default EditBox;
