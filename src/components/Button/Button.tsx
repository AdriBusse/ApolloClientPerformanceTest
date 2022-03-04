import React from "react";

export interface ButtonProps {
    label: string;
}

const Button = (props: ButtonProps) => {
    return <button>My first lib!!!</button>;
};

export default Button;