import React, { useEffect, useState } from "react";
import {
    Button,
    Dialog,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import InputField from "./form/InputField";
import FontFields from "./form/FontFields";
import {generateRandomName} from "../../utils/randomName";
import {getDownloadURL, ref, storage, uploadBytes} from "../../external/firebase";
import {useParams} from "react-router-dom";

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

    useEffect(() => setOpen(triggerOpen), [triggerOpen]);

    const handleSubmit = event => {
        event.preventDefault();

        const newData = blocks.map(block =>
            block.id === formData.parentId
                ? {
                    ...block,
                    data: sections.reduce((acc, section) => ({
                        ...acc,
                        [section]: {
                            ...lines.reduce((acc2, line) => ({
                                ...acc2,
                                [line]: {
                                    text: formData[`${section}${line}Text`],
                                    font: {
                                        name: formData[`${section}${line}FontName`],
                                        size: formData[`${section}${line}FontSize`]
                                    }
                                },
                            }), {}),
                            image: {
                                src: formData[`${section}ImageSrc`],
                                position: formData[`${section}ImagePosition`]
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
            const file = files[0];
            const randomName = generateRandomName();
            const filePath = `blocks/${singleId}/${randomName}.jpg`;
            const fileRef = ref(storage, filePath);

            uploadBytes(fileRef, file).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((url) => {
                    setFormData(prevFormData => ({ ...prevFormData, [name]: url }));
                });
            }).catch((error) => {
                console.error("Image upload failed:", error);
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
                    {sections.map((section, index) => (
                        <div key={index}>
                            <h2>{section.charAt(0).toUpperCase() + section.slice(1)} side</h2>
                            {lines.map((line, lineIndex) => (
                                <FontFields key={lineIndex} prefix={`${section}${line}`} formData={formData} handleChange={handleChange} component={item.type} />
                            ))}
                            <InputField id={`${section}ImageSrc`} label="Image (only if want to change)" name={`${section}ImageSrc`} type="file"
                                        onChange={handleChange}/>
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
