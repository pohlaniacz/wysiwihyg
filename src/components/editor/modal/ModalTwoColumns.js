import React, { useEffect, useState } from "react";
import {
    Button,
    Dialog,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import InputField from "./form/InputField";
import SelectField from "./form/SelectField";

export default function ModalTwoColumns({ item, triggerOpen, handleClose, handleSave, handleFontChange }) {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        oneFirstLineText: item.data.one.firstLine.text,
        oneFirstLineFontName: item.data.one.firstLine.font.name,
        oneFirstLineFontSize: item.data.one.firstLine.font.size,
        oneSecondLineText: item.data.one.secondLine.text,
        oneSecondLineFontName: item.data.one.secondLine.font.name,
        oneSecondLineFontSize: item.data.one.secondLine.font.size,
        oneParagraphText: item.data.one.paragraph.text,
        oneParagraphFontName: item.data.one.paragraph.font.name,
        oneParagraphFontSize: item.data.one.paragraph.font.size,
        twoFirstLineText: item.data.two.firstLine.text,
        twoFirstLineFontName: item.data.two.firstLine.font.name,
        twoFirstLineFontSize: item.data.two.firstLine.font.size,
        twoSecondLineText: item.data.two.secondLine.text,
        twoSecondLineFontName: item.data.two.secondLine.font.name,
        twoSecondTextFontSize: item.data.two.secondLine.font.size,
        twoParagraphText: item.data.two.paragraph.text,
        twoParagraphFontName: item.data.two.paragraph.font.name,
        twoParagraphFontSize: item.data.two.paragraph.font.size,
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
                    one: {
                        firstLine: {
                            text: formData.oneFirstLineText,
                            font: {
                                name: formData.oneFirstLineFontName,
                                size: formData.oneFirstLineFontSize
                            }
                        },
                        secondLine: {
                            text: formData.oneSecondLineText,
                            font: {
                                name: formData.oneSecondLineFontName,
                                size: formData.oneSecondLineFontSize
                            }
                        },
                        paragraph: {
                            text: formData.oneParagraphText,
                            font: {
                                name: formData.oneParagraphFontName,
                                size: formData.oneParagraphFontSize
                            }
                        }
                    },
                    two: {
                        firstLine: {
                            text: formData.twoFirstLineText,
                            font: {
                                name: formData.twoFirstLineFontName,
                                size: formData.twoFirstLineFontSize
                            }
                        },
                        secondLine: {
                            text: formData.twoSecondLineText,
                            font: {
                                name: formData.twoSecondLineFontName,
                                size: formData.twoSecondTextFontSize
                            }
                        },
                        paragraph: {
                            text: formData.twoParagraphText,
                            font: {
                                name: formData.twoParagraphFontName,
                                size: formData.twoParagraphFontSize
                            }
                        }
                    }
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
                        <InputField id="oneFirstLineText" label="Header text" name="oneFirstLineText"
                                    value={formData.oneFirstLineText} onChange={handleChange}/>
                        <div className="grid grid-cols-2 gap-4">
                            <SelectField id="oneFirstLineFontName" label="Font Name" name="oneFirstLineFontName"
                                         value={formData.oneFirstLineFontName} onChange={handleChange}/>
                            <InputField id="oneFirstLineFontSize" label="Font Size" name="oneFirstLineFontSize"
                                        type="number" value={formData.oneFirstLineFontSize} onChange={handleChange}/>
                        </div>
                    </div>
                    <div>
                        <InputField id="oneSecondLineText" label="Header text" name="oneSecondLineText"
                                    value={formData.oneSecondLineText} onChange={handleChange}/>
                        <div className="grid grid-cols-2 gap-4">
                            <SelectField id="oneSecondLineFontName" label="Font Name" name="oneSecondLineFontName"
                                         value={formData.oneSecondLineFontName} onChange={handleChange}/>
                            <InputField id="oneSecondLineFontSize" label="Font Size" name="oneSecondLineFontSize"
                                        type="number" value={formData.oneSecondLineFontSize} onChange={handleChange}/>
                        </div>
                    </div>
                    <div>
                        <InputField id="oneParagraphText" label="Header text" name="oneParagraphText"
                                    value={formData.oneParagraphText} onChange={handleChange}/>
                        <div className="grid grid-cols-2 gap-4">
                            <SelectField id="oneParagraphFontName" label="Font Name" name="oneParagraphFontName"
                                         value={formData.oneParagraphFontName} onChange={handleChange}/>
                            <InputField id="oneParagraphFontSize" label="Font Size" name="oneParagraphFontSize"
                                        type="number" value={formData.oneParagraphFontSize} onChange={handleChange}/>
                        </div>
                    </div>
                    <div>
                        <InputField id="twoFirstLineText" label="Header text" name="twoFirstLineText"
                                    value={formData.twoFirstLineText} onChange={handleChange}/>
                        <div className="grid grid-cols-2 gap-4">
                            <SelectField id="twoFirstLineFontName" label="Font Name" name="twoFirstLineFontName"
                                         value={formData.twoFirstLineFontName} onChange={handleChange}/>
                            <InputField id="twoFirstLineFontSize" label="Font Size" name="twoFirstLineFontSize"
                                        type="number" value={formData.twoFirstLineFontSize} onChange={handleChange}/>
                        </div>
                    </div>
                    <div>
                        <InputField id="twoSecondLineText" label="Header text" name="twoSecondLineText"
                                    value={formData.twoSecondLineText} onChange={handleChange}/>
                        <div className="grid grid-cols-2 gap-4">
                            <SelectField id="twoSecondLineFontName" label="Font Name" name="twoSecondLineFontName"
                                         value={formData.twoSecondLineFontName} onChange={handleChange}/>
                            <InputField id="twoSecondLineFontSize" label="Font Size" name="twoSecondLineFontSize"
                                        type="number" value={formData.twoSecondLineFontSize} onChange={handleChange}/>
                        </div>
                    </div>
                    <div>
                        <InputField id="twoParagraphText" label="Header text" name="twoParagraphText"
                                    value={formData.twoParagraphText} onChange={handleChange}/>
                        <div className="grid grid-cols-2 gap-4">
                            <SelectField id="twoParagraphFontName" label="Font Name" name="twoParagraphFontName"
                                         value={formData.twoParagraphFontName} onChange={handleChange}/>
                            <InputField id="twoParagraphFontSize" label="Font Size" name="twoParagraphFontSize"
                                        type="number" value={formData.twoParagraphFontSize} onChange={handleChange}/>
                        </div>
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