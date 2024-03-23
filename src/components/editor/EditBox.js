import {Button, ButtonGroup} from "@material-tailwind/react";

export default function EditBox(props) {
    return (
        <ButtonGroup className="App-editBox" color="amber">
            <Button
                data-action="up"
                title="up"
                onClick={props.handleClick}
            >
                up ↑
            </Button>
            <Button
                data-action="down"
                title="down"
                onClick={props.handleClick}
            >
                down ↓
            </Button>
            <Button
                data-action="edit"
                title="edit"
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