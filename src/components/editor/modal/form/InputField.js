import React from "react";

const InputField = ({id, label, type = "text", ...props}) => (
    <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
            <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor={id}>{label}</label>
            <input id={id} type={type} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" {...props} />
        </div>
    </div>
);

export default InputField;