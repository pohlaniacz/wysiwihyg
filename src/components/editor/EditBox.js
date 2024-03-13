import ActionButton from "../layout/ActionButton";

function EditBox(props) {
    return (
        <div className="App-editBox">
            <ActionButton text="&uarr;"/>
            <ActionButton text="&darr;" />
        </div>
    )
}

export default EditBox;