import React from "react"

/**
 * @typedef {Object} InputFieldProps
 * @property {string} name
 * @property {(value: string) => void} onInput
 * @property {string} [className]
 */

/** @param {InputFieldProps} props */
export default function InputField(props) {
    let innerStyle = "border-solid border-b-4 border-zinc-700 hover:border-cyan-300 " +
        "focus:border-blue-500 duration-250 outline-none"

    let style = "flex flex-row"

    if (props.className != null) {
        style += " " + props.className
    }

    return (
        <div className={style}>
            <p className="pr-2">{props.name}</p>
            <input
                className={innerStyle}
                onInput={input => {
                    props.onInput(input.currentTarget.value)
                }}
            />
        </div>
    )
}
