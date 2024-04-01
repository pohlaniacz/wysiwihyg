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

    const [formData, setFormData] = React.useState(
        {
            header: "",
        }
    )

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    return (
        <>
            <Dialog open={open} handler={handleClose}>
                <DialogHeader>Its a {props.type}.</DialogHeader>
                <DialogBody>
                    {props.type === "header" && (
                        <form>
                            <input
                                type="text"
                                placeholder="Header"
                                onChange={handleChange}
                                name="header"
                                value={formData.header}
                            />
                        </form>
                    )}
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
