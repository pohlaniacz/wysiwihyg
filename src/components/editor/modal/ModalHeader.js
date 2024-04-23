import React, { useEffect, useState } from "react";
import {
    Button,
    Dialog,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import InputField from "./form/InputField";
import SelectField from "./form/SelectField";

export default function ModalHeader({ item, triggerOpen, handleClose, handleSave, handleFontChange }) {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        firstLineText: item.data.firstLine.text,
        firstLineFontName: item.data.firstLine.font.name,
        firstLineFontSize: item.data.firstLine.font.size,
        secondLineText: item.data.secondLine.text,
        secondLineFontName: item.data.secondLine.font.name,
        secondLineTextFontSize: item.data.secondLine.font.size,
        parentId: item.id,
        image: item.data.image,
    });
    useEffect(() => setOpen(triggerOpen), [triggerOpen]);

    const handleSubmit = event => {
        event.preventDefault();
        handleSave(prevBlocks => prevBlocks.map(block =>
            block.id === formData.parentId
                ? { ...block, data: {
                    image: formData.image,
                    firstLine: {
                        text: formData.firstLineText,
                        font: {
                            name: formData.firstLineFontName,
                            size: formData.firstLineFontSize
                        }
                    },
                    secondLine: {
                        text: formData.secondLineText,
                        font: {
                            name: formData.secondLineFontName,
                            size: formData.secondLineTextFontSize
                        }
                    },
                } }
                : block
        ));
        handleClose();
    };

    const handleChange = ({ target: { name, value, files } }) => {
        if (files) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData(prevFormData => ({ ...prevFormData, [name]: reader.result }));
            };
            reader.readAsDataURL(files[0]);
        } else {
            setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
        }
        if (name === "firstLineFontName" || name === "secondLineFontName") {
            handleFontChange(value);
        }
    };

    return (
        <Dialog open={open} handler={handleClose}>
            <DialogBody className="h-[42rem] overflow-scroll">
                <form onSubmit={handleSubmit} className="w-full">
                    <div>
                        <InputField id="firstLineText" label="Header text" name="firstLineText"
                                    value={formData.firstLineText} onChange={handleChange}/>
                        <SelectField id="firstLineFontName" label="Font Name" name="firstLineFontName"
                                     value={formData.firstLineFontName} onChange={handleChange}/>
                        <InputField id="firstLineFontSize" label="Font Size" name="firstLineFontSize"
                                    type="number" value={formData.firstLineFontSize} onChange={handleChange}/>
                    </div>
                    <div>
                        <InputField id="secondLineText" label="Header text" name="secondLineText"
                                    value={formData.secondLineText} onChange={handleChange}/>
                        <SelectField id="secondLineFontName" label="Font Name" name="secondLineFontName"
                                     value={formData.secondLineFontName} onChange={handleChange}/>
                        <InputField id="secondLineTextFontSize" label="Font Size" name="secondLineTextFontSize"
                                    type="number" value={formData.secondLineTextFontSize} onChange={handleChange}/>
                    </div>
                    <InputField id="image" label="Image (only if want to change)" name="image" type="file"
                                onChange={handleChange}/>
                </form>
            </DialogBody>
            <DialogFooter>
                <Button variant="text" color="red" onClick={handleClose} className="mr-1">Cancel</Button>
                <Button variant="gradient" color="green" onClick={handleSubmit}>Confirm</Button>
            </DialogFooter>
        </Dialog>
    );
}
