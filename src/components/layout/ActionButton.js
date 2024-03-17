import Button from "./Button";

export default function ActionButton(props) {
    let title = '';
    let text = '';

    switch (props.type) {
        case "up":
            title = 'up';
            text = '↑';
            break;
        case "down":
            title = 'down';
            text = '↓';
            break;
        case "duplicate":
            title = 'duplicate';
            text = '⎘';
            break;
    }

    return (
        <Button
            type={props.type}
            text={text}
            title={title}
            handleClick={props.handleClick}
        />
    );
}
