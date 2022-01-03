import React from "react";
import classes from "../Links/Links.module.css"

import { Routes, Route } from "react-router-dom"
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";

export default function Links() {
    return (

        <div className={classes.wrapperNavbar}>
            <ul>
                <li><Route path="/" element={<Home />}></Route></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>

    )
}