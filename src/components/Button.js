import React from "react"

class ButtonProps {
    /** @type {React.MouseEventHandler} */
    onClick
}

/**
 * @param {React.PropsWithChildren<ButtonProps>} props
 */
export default function Button(props) {
    return (
        <button 
            onClick={props.onClick}
            className={
                "p-4 m-2 border-solid rounded-xl bg-green-400 border-green-400 " +
                    "hover:border-green-300 hover:bg-green-300 text-rose-900"
            }
        >
            {props.children}
        </button>
    )
}
