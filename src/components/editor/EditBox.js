import {Button, ButtonGroup} from "@material-tailwind/react";

export default function EditBox(props) {
    return (
        <ButtonGroup className="App-editBox" color="amber">
            <Button
                data-action="up"
                title="up"
                onClick={props.handleMoveBlock}
            >
                up ↑
            </Button>
            <Button
                data-action="down"
                title="down"
                onClick={props.handleMoveBlock}
            >
                down ↓
            </Button>
            <Button
                data-action="edit"
                title="edit"
                onClick={props.handleEdit}
            >
                edit ✎
            </Button>
            <Button
                data-action="duplicate"
                title="duplicate"
            >
                clone ⎘
            </Button>
        </ButtonGroup>
    )
}