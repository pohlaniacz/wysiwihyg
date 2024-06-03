import {Button, Dialog, DialogBody, DialogFooter} from "@material-tailwind/react";
import React, {useEffect, useState} from "react";
import {header, twoColumns} from "../../defaults";
import { v4 as uuidv4 } from 'uuid';

export default function Add ({ triggerOpen, handleClose, handleWriteData, blocks }) {
    const [open, setOpen] = useState(false);
    const [changed, setChanged] = useState(false);

    useEffect(() => setOpen(triggerOpen), [triggerOpen]);

    const [formData, setFormData] = useState({
        blockType: ''
    });

    const handleChange = ({ target: { name, value } }) => {
        setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
        setChanged(true);
    };

    const handleSubmit = event => {
        event.preventDefault();
        const newData = blocks;

        let newBlock = formData.blockType === "header" ? header : twoColumns; // future todo
        newBlock.id = uuidv4();

        newData.push(newBlock);

        handleWriteData(newData);
        handleClose();

        setTimeout(function () {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
        }, 300);
    };

    return (
        <Dialog open={open} handler={handleClose}>
            <DialogBody className="h-[42rem] overflow-scroll">

                <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">Choose block type:</h3>
                <ul className="grid w-full gap-6 md:grid-cols-2">
                    <li>
                        <input type="radio" id="blockType-header" name="blockType" value="header"
                               className="hidden peer"
                               onChange={handleChange}
                               checked={formData.blockType === "header"}
                        />
                        <label htmlFor="blockType-header"
                               className="inline-flex items-center justify-between w-full p-5 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div className="block">
                                <div className="w-full text-lg font-semibold">Header</div>
                                <div className="w-full">Fullpage photo with text</div>
                            </div>
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                 viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2" d="M5 12h14m-7 7V5"/>
                            </svg>
                        </label>
                    </li>
                    <li>
                        <input type="radio" id="blockType-twoColumns" name="blockType" value="twoColumns"
                               className="hidden peer"
                               onChange={handleChange}
                               checked={formData.blockType === "twoColumns"}
                       />
                        <label htmlFor="blockType-twoColumns"
                               className="inline-flex items-center justify-between w-full p-5 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div className="block">
                                <div className="w-full text-lg font-semibold">Two columns</div>
                                <div className="w-full">Two columns layout with text and pictures</div>
                            </div>
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                 viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2" d="M5 12h14m-7 7V5"/>
                            </svg>
                        </label>
                    </li>
                </ul>

            </DialogBody>
            <DialogFooter>
                <Button variant="text" color="red" onClick={handleClose} className="mr-1">Cancel</Button>
                <Button variant="gradient" color="green" onClick={handleSubmit} disabled={!changed}>Add</Button>
            </DialogFooter>
        </Dialog>
    );
}