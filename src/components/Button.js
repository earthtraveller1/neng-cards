import React from "react"

/**
 * @typedef {Object} ButtonProps
 * @property {React.MouseEventHandler} onClick
 * @property {string} [className]
 */

/**
 * @param {React.PropsWithChildren<ButtonProps>} props
 */
export default function Button(props) {
    let styles = "px-3 py-1 border-solid rounded-xl bg-cyan-400 border-cyan-400 " +
        "hover:border-cyan-300 hover:bg-cyan-300 text-black hover:rounded-lg " +
        "active:border-green-300 active:bg-green-300 duration-250 active:rounded-2xl"

    if (props.className != null) {
        styles += " " + props.className
    }

    return (
        <button 
            onClick={props.onClick}
            className={styles}
        >
            {props.children}
        </button>
    )
}
