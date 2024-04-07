import classNames from "classnames";
import React, { CSSProperties, ChangeEvent, MutableRefObject, ReactElement, RefObject, useRef } from "react";

interface InputProps {
    className?: string;
    id?: string;
    label?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onFocus?: () => void;
    placeholder?: string;
    ref?: MutableRefObject<HTMLInputElement | null>;
    style?: CSSProperties;
    type?: "text" | "email" | "password";
    value?: string;
}

const Input = ({
    className,
    id,
    type,
    value,
    label,
    onChange,
    onFocus,
    placeholder,
    ref,
    style,
}: InputProps): ReactElement => {
    const inputRef = ref ?? useRef<HTMLInputElement | null>(null);
    const inputClass = classNames('Input', className);

    return (
        <div>
            {label && <label htmlFor={id}>{label}</label>}
            <input
                className={inputClass}
                id={id}
                type={type}
                style={style}
                onChange={onChange}
                onFocus={onFocus}
                placeholder={placeholder}
                value={value}
                ref={inputRef}
            />
        </div>
    )
}

export {Input as default};