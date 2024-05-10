import {Button, Dialog, DialogBody, DialogFooter} from "@material-tailwind/react";
import React, {useEffect, useState} from "react";

export default function Add ({ item, triggerOpen, handleClose }) {
    const [open, setOpen] = useState(false);

    useEffect(() => setOpen(triggerOpen), [triggerOpen]);

    return (
        <Dialog open={open} handler={handleClose}>
            <DialogBody className="h-[42rem] overflow-scroll">
                Hi
            </DialogBody>
            <DialogFooter>
                <Button variant="text" color="red" onClick={handleClose} className="mr-1">Cancel</Button>
                {/*<Button variant="gradient" color="green" onClick={handleSubmit}>Confirm</Button>*/}
            </DialogFooter>
        </Dialog>
    );
}