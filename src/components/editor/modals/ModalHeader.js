import React, { useEffect, useState } from "react";
import {
    Button,
    Dialog,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

export default function ModalHeader({ item, triggerOpen, handleClose, handleSave, handleFontChange }) {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        firstLineText: item.data.firstLine.text,
        firstLineFontName: item.data.firstLine.font.name,
        firstLineFontSize: item.data.firstLine.font.size,
        secondLineText: item.data.secondLine.text,
        secondLineFontName: item.data.secondLine.font.name,
        secondTextFontSize: item.data.secondLine.font.size,
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
                            size: formData.secondTextFontSize
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
            <DialogBody>
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
                        <InputField id="secondTextFontSize" label="Font Size" name="secondTextFontSize"
                                    type="number" value={formData.secondTextFontSize} onChange={handleChange}/>
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

const InputField = ({id, label, type = "text", ...props}) => (
    <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
            <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor={id}>{label}</label>
            <input id={id} type={type} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" {...props} />
        </div>
    </div>
);

const SelectField = ({ id, label, ...props }) => (
    <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor={id}>{label}</label>
            <div className="relative">
                <select id={id} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" {...props}>
                    <option>Choose</option>
                    <option value="Arial">Arial</option>
                    <option value="Cambria">Cambria</option>
                    <option value="Parisienne">Parisienne</option>
                    <option value="Roboto">Roboto</option>
                </select>
            </div>
        </div>
    </div>
);
