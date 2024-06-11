import React, { useEffect, useState } from "react";
import { Button, Dialog, DialogBody, DialogFooter } from "@material-tailwind/react";
import InputField from "./form/InputField";
import FontFields from "./form/FontFields";
import { useParams } from "react-router-dom";
import { uploadImage } from "../../utils/uploadImage";

const lines = ['firstLine', 'secondLine'];

export default function ModalHeader({ item, triggerOpen, handleClose, handleFontChange, handleWriteData, blocks }) {
    const { singleId } = useParams();
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState(
        lines.reduce((acc, line) => ({
            ...acc,
            [`${line}Text`]: item.data[line].text,
            [`${line}FontName`]: item.data[line].font.name,
            [`${line}FontSize`]: item.data[line].font.size,
        }), { parentId: item.id, image: item.data.image })
    );
    const [imageFile, setImageFile] = useState(null);

    useEffect(() => setOpen(triggerOpen), [triggerOpen]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        let imageUrl = formData.image;

        if (imageFile) {
            try {
                imageUrl = await uploadImage(imageFile, singleId);
            } catch (error) {
                console.error("Image upload failed:", error);
                return;
            }
        }

        const newData = blocks.map(block =>
            block.id === formData.parentId
                ? {
                    ...block,
                    data: {
                        image: imageUrl,
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
            setImageFile(file);
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
                                onChange={handleChange} />
                </form>
            </DialogBody>
            <DialogFooter>
                <Button variant="text" color="red" onClick={handleClose} className="mr-1">Cancel</Button>
                <Button variant="gradient" color="green" onClick={handleSubmit}>Confirm</Button>
            </DialogFooter>
        </Dialog>
    );
}
