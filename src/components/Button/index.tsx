
import React, { HTMLProps, MutableRefObject, RefObject, forwardRef } from "react";

export interface ButtonProps {
    label: string;
    onClick?: () => void;
    className?: string;
    id?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    label,
    onClick,
    className,
    id,
}, ref) => {
    return (
        <button
        ref={ref}
        >
            {label}
        </button>
    )
});

export default Button;