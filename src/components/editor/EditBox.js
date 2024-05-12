import {Button, ButtonGroup} from "@material-tailwind/react";

export default function EditBox(props) {
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
                data-parent="123"
                data-action="add"
                title="add"
                onClick={props.handleEdit}
            >
                add +
            </Button>
        </ButtonGroup>
    )
}