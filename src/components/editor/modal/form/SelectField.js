import React from "react";
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

export default SelectField;