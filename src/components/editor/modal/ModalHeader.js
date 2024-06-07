import React, { useEffect, useState } from "react";
import { Button, Dialog, DialogBody, DialogFooter } from "@material-tailwind/react";
import InputField from "./form/InputField";
import FontFields from "./form/FontFields";
import { storage, ref, uploadBytes, getDownloadURL } from "../../external/firebase";

const lines = ['firstLine', 'secondLine'];

export default function ModalHeader({ item, triggerOpen, handleClose, handleFontChange, handleWriteData, blocks }) {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState(
        lines.reduce((acc, line) => ({
            ...acc,
            [`${line}Text`]: item.data[line].text,
            [`${line}FontName`]: item.data[line].font.name,
            [`${line}FontSize`]: item.data[line].font.size,
        }), { parentId: item.id, image: item.data.image })
    );

    useEffect(() => setOpen(triggerOpen), [triggerOpen]);

    const handleSubmit = event => {
        event.preventDefault();
        const newData = blocks.map(block =>
            block.id === formData.parentId
                ? {
                    ...block,
                    data: {
                        image: formData.image,
                        ...lines.reduce((acc, line) => ({
                            ...acc,
                            [line]: {
                                text: formData[`${line}Text`],
                                font: {
                                    name: formData[`${line}FontName`],
                                    size: formData[`${line}FontSize`]
                                }
                            },
                        }), {})
                    }
                }
                : block
        );

        handleWriteData(newData);

        handleClose();
    };

    const handleChange = ({ target: { name, value, files } }) => {
        if (files) {
            const file = files[0];
            const fileRef = ref(storage, file.name);

            uploadBytes(fileRef, file).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((url) => {
                    setFormData(prevFormData => ({ ...prevFormData, [name]: url }));
                });
            });
        } else {
            setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
        }
        if (name.endsWith("FontName")) {
            handleFontChange(value);
        }
    };


    return (
        <Dialog open={open} handler={handleClose}>
            <DialogBody className="h-[42rem] overflow-scroll">
                <form onSubmit={handleSubmit} className="w-full">
                    {lines.map((line, lineIndex) => (
                        <FontFields key={lineIndex} prefix={line} formData={formData} handleChange={handleChange} component={item.type} />
                    ))}
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
