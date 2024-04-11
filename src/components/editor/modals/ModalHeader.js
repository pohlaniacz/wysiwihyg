import React, { useEffect, useState } from "react";
import {
    Button,
    Dialog,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

export default function ModalHeader({ item, triggerOpen, handleClose, handleSave }) {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        title: item.data.title,
        font: item.data.font,
        parentId: item.id,
        image: item.data.image,
    });
    useEffect(() => setOpen(triggerOpen), [triggerOpen]);

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
    };

    const handleSubmit = event => {
        event.preventDefault();
        handleSave(prevBlocks => prevBlocks.map(block =>
            block.id === formData.parentId
                ? { ...block, data: { title: formData.title, font: formData.font, image: formData.image } }
                : block
        ));
        handleClose();
    };

    return (
        <Dialog open={open} handler={handleClose}>
            <DialogBody>
                <form onSubmit={handleSubmit} className="w-full">
                    <InputField id="title" label="Header text" name="title" value={formData.title} onChange={handleChange} />
                    <SelectField id="font" label="Font" name="font" value={formData.font} onChange={handleChange} />
                    <InputField id="image" label="Image" name="image" type="file" onChange={handleChange} />
                </form>
            </DialogBody>
            <DialogFooter>
                <Button variant="text" color="red" onClick={handleClose} className="mr-1">Cancel</Button>
                <Button variant="gradient" color="green" onClick={handleSubmit}>Confirm</Button>
            </DialogFooter>
        </Dialog>
    );
}

const InputField = ({ id, label, type = "text", ...props }) => (
    <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor={id}>{label}</label>
            <input id={id} type={type} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" {...props} />
        </div>
    </div>
);

const SelectField = ({ id, label, ...props }) => (
    <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor={id}>{label}</label>
            <div className="relative">
                <select id={id} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" {...props}>
                    <option>Choose</option>
                    <option value="arial">Arial</option>
                    <option value="cambria">Cambria</option>
                </select>
            </div>
        </div>
    </div>
);
