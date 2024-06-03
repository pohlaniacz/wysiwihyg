import {Button, ButtonGroup} from "@material-tailwind/react";

export default function EditBox(props) {

    const remove = event => {
        event.preventDefault();
        const idToRemove = event.target.closest('section').getAttribute('data-id');

        // Copy the blocks array
        const newData = [...props.blocks];

        // Find the index of the object with the given id
        let index = newData.findIndex(obj => obj.id === idToRemove);

        // If the object is found, remove it from the array
        if (index !== -1) {
            newData.splice(index, 1);
        }

        props.handleWriteData(newData);
    };

    return (
        <ButtonGroup className="App-editBox" color="amber">
            <Button
                data-parent={props.parent}
                data-action="up"
                title="up"
                onClick={props.handleMoveBlock}
            >
                up ↑
            </Button>
            <Button
                data-parent={props.parent}
                data-action="down"
                title="down"
                onClick={props.handleMoveBlock}
            >
                down ↓
            </Button>
            <Button
                data-parent={props.parent}
                data-action="edit"
                title="edit"
                onClick={props.handleEdit}
            >
                edit ✎
            </Button>
            <Button
                data-parent="456"
                data-action="remove"
                title="remove"
                onClick={remove}
            >
                remove -
            </Button>
        </ButtonGroup>
    )
}