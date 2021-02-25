import React from "react";
import "./FormControls.css"

export const TextArea = ({input, disabled, placeholder, type, meta: {touched, error, warning}}, ...rest) => {
    return <div>
        <div>
            <input {...input}
                   className={'textField'}
                   placeholder={placeholder}
                   disabled={disabled}
                   type={type}

            />
        </div>
        <div>
            <span>
                {touched && (error || warning)}
            </span>
        </div>
    </div>
}