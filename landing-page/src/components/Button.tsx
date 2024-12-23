import { HTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const classes = cva("", {
    variants: {
        variant: {},
    },
});

export default function Button(
    props: {
        variant: "primary" | "secondary";
    } & HTMLAttributes<HTMLButtonElement>
) {
    return <button></button>;
}
