import {Button, Dialog, DialogBody, DialogFooter} from "@material-tailwind/react";
import React, {useEffect, useState} from "react";
import {header, twoColumns} from "../../defaults";

export default function Add ({ parentId, triggerOpen, handleClose, handleWriteData, handleSave }) {
    const [open, setOpen] = useState(false);

    useEffect(() => setOpen(triggerOpen), [triggerOpen]);

    const [formData, setFormData] = useState({
        blockType: ''
    });

    const handleChange = ({ target: { name, value } }) => {
        setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = event => {
        event.preventDefault();
        handleSave(prevBlocks => {
            const newData = prevBlocks;

            let index = newData.findIndex(obj => obj.id === parentId);

            // todo, put random id to block
            // todo, prevent not checking anything

            if (index !== -1) {
                newData.splice(index + 1, 0, formData.blockType === "header" ? header : twoColumns); // future todo
            }

            const userId = localStorage.getItem('userId');

            handleWriteData(userId, newData);

            return newData;
        });
        handleClose();
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
                <Button variant="gradient" color="green" onClick={handleSubmit}>Add</Button>
            </DialogFooter>
        </Dialog>
    );
}