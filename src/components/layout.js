import React from "react"
import {Footer} from "./Footer"
import {Header} from "./Header"
import "./layout.css"

export default function Layout({children}) {
    return (
        <div>
            {children}
        </div>
    )
}