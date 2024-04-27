import React from 'react';
import InputField from "./InputField";
import SelectField from "./SelectField";
import TextAreaField from "./TextAreaField";

export default function FontFields({ prefix, formData, handleChange }) {
    const TextFieldComponent = formData[`${prefix}Type`] === 'multiLine' ? TextAreaField : InputField;

    return (
        <div>
            <TextFieldComponent id={`${prefix}Text`} label="Header text" name={`${prefix}Text`}
                                value={formData[`${prefix}Text`]} onChange={handleChange}/>
            <div className="grid grid-cols-2 gap-4">
                <SelectField id={`${prefix}FontName`} label="Font Name" name={`${prefix}FontName`}
                             value={formData[`${prefix}FontName`]} onChange={handleChange}/>
                <InputField id={`${prefix}FontSize`} label="Font Size" name={`${prefix}FontSize`}
                            type="number" value={formData[`${prefix}FontSize`]} onChange={handleChange}/>
            </div>
        </div>
    );
}
