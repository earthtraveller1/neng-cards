import React from "react"

// A pretty basic dialog box. Hopefully I can make it fit the theme of the rest 
// of the app.

/** @param {React.PropsWithChildren<{}>} props */
export default function Dialog(props) {
    return (
        <>
            <div className="absolute top-0 bottom-0 right-0 left-0 bg-slate-950/70" />
            <div className="absolute top-1/2 left-1/2 rounded-4xl bg-zinc-800 -translate-1/2 p-8 flex flex-col items-center">
                {props.children}
            </div>
        </>
    )
}
