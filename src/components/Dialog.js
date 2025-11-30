import React from "react"

// A pretty basic dialog box. Hopefully I can make it fit the theme of the rest 
// of the app.

/** @param {React.PropsWithChildren<{}>} props */
export default function Dialog(props) {
    return (
        <>
            <div className="top-0 bottom-0 right-0 left-0 bg-violet-950/70" />
            <div className="absolute top-1/2 left-1/2 rounded-4xl bg-cyan-800 translate-1/2">
                {props.children}
            </div>
        </>
    )
}
