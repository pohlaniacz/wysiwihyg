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

    const handleClose = () => {
        setOpen(false);
        props.handleClose();
    };

    function search(formData) {
        const query = formData.get("query");
        alert(`You searched for '${query}'`);
    }
    console.log(props);

    function renderForm() {
        if (props.type === "header") {
            return "aaa";
        }
        return null;
    }

    return (
        <>
            <Dialog open={open} handler={handleClose}>
                <DialogHeader>Its a simple dialog.</DialogHeader>
                <DialogBody>
                    {renderForm}
                    Hi {props.content} ID!

                    <form action={search}>
                        <input name="query"/>
                        <button type="submit">Search</button>
                    </form>
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
