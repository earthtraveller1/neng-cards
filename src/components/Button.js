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
                "px-3 py-1 m-2 border-solid rounded-xl bg-cyan-400 border-cyan-400 " +
                    "hover:border-cyan-300 hover:bg-cyan-300 text-black hover:rounded-lg " +
                    "active:border-green-300 active:bg-green-300 duration-250 active:rounded-2xl"
            }
        >
            {props.children}
        </button>
    )
}
