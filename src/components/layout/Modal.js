import React, { useEffect } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

export default function Modal(props) {
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        if (props.triggerOpen) {
            setOpen(true);
        }
    }, [props.triggerOpen]);

    const handleOpen = () => setOpen(!open);
    const handleClose = () => {
        setOpen(false);
        props.handleClose();
    };

    return (
        <>
            <Button onClick={handleOpen} variant="gradient">
                Open Dialog
            </Button>
            <Dialog open={open} handler={handleClose}>
                <DialogHeader>Its a simple dialog.</DialogHeader>
                <DialogBody>
                    Hi {props.content} ID!
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={handleClose}
                        className="mr-1"
                    >
                        <span>Cancel</span>
                    </Button>
                    <Button variant="gradient" color="green" onClick={handleClose}>
                        <span>Confirm</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}
