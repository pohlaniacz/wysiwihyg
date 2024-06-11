import React, {useEffect, useState} from "react";
import {Button, Dialog, DialogBody, DialogFooter} from "@material-tailwind/react";
import InputField from "./form/InputField";
import FontFields from "./form/FontFields";
import {useParams} from "react-router-dom";
import {uploadImage} from "../../utils/uploadImage";


const sections = ['one', 'two'];
const lines = ['firstLine', 'secondLine', 'paragraph'];

export default function ModalTwoColumns({ item, triggerOpen, handleClose, handleFontChange, handleWriteData, blocks }) {
    const { singleId } = useParams();
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState(
        sections.reduce((acc, section) => ({
            ...acc,
            ...lines.reduce((acc2, line) => ({
                ...acc2,
                [`${section}${line}Text`]: item.data[section][line].text,
                [`${section}${line}FontName`]: item.data[section][line].font.name,
                [`${section}${line}FontSize`]: item.data[section][line].font.size,
            }), {}),
            [`${section}ImageSrc`]: item.data[section].image.src,
            [`${section}ImagePosition`]: item.data[section].image.position,
        }), { parentId: item.id })
    );
    const [imageFiles, setImageFiles] = useState({});

    useEffect(() => setOpen(triggerOpen), [triggerOpen]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const updatedFormData = { ...formData };

        for (const section of sections) {
            if (imageFiles[section]) {
                try {
                    updatedFormData[`${section}ImageSrc`] = await uploadImage(imageFiles[section], singleId);
                } catch (error) {
                    console.error("Image upload failed for section:", section, error);
                    return;
                }
            }
        }

        const newData = blocks.map(block =>
            block.id === updatedFormData.parentId
                ? {
                    ...block,
                    data: sections.reduce((acc, section) => ({
                        ...acc,
                        [section]: {
                            ...lines.reduce((acc2, line) => ({
                                ...acc2,
                                [line]: {
                                    text: updatedFormData[`${section}${line}Text`],
                                    font: {
                                        name: updatedFormData[`${section}${line}FontName`],
                                        size: updatedFormData[`${section}${line}FontSize`]
                                    }
                                },
                            }), {}),
                            image: {
                                src: updatedFormData[`${section}ImageSrc`],
                                position: updatedFormData[`${section}ImagePosition`]
                            }
                        }
                    }), {})
                }
                : block
        );

        handleWriteData(newData);
        handleClose();
    };

    const handleChange = ({ target: { name, value, files } }) => {
        if (files) {
            const section = name.split('ImageSrc')[0];
            setImageFiles(prevFiles => ({ ...prevFiles, [section]: files[0] }));
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
                    {sections.map((section, index) => (
                        <div key={index}>
                            <h2>{section.charAt(0).toUpperCase() + section.slice(1)} side</h2>
                            {lines.map((line, lineIndex) => (
                                <FontFields key={lineIndex} prefix={`${section}${line}`} formData={formData} handleChange={handleChange} component={item.type} />
                            ))}
                            <InputField id={`${section}ImageSrc`} label="Image (only if want to change)" name={`${section}ImageSrc`} type="file"
                                        onChange={handleChange} />
                        </div>
                    ))}
                </form>
            </DialogBody>
            <DialogFooter>
                <Button variant="text" color="red" onClick={handleClose} className="mr-1">Cancel</Button>
                <Button variant="gradient" color="green" onClick={handleSubmit}>Confirm</Button>
            </DialogFooter>
        </Dialog>
    );
}
