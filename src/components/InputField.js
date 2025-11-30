import React from "react"

/** @param {{ name: string, onInput: (value: string) => void}} props */
export default function InputField(props) {
    return (
        <div className="flex flex-row">
            <p className="pr-2">{props.name}</p>
            <input
                className={"border-solid border-b-4 border-zinc-700 hover:border-cyan-300 " +
                    "focus:border-blue-500 duration-250 outline-none"}
                onInput={input => {
                    props.onInput(input.currentTarget.value)
                }}
            />
        </div>
    )
}
