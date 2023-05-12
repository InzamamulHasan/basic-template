import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App.js";
import "./style.css";

let Hello=(()=>{
    return (
            <App/>
    )
})
let apps=document.getElementById("root")
let root=createRoot(apps);
root.render(<Hello/>)