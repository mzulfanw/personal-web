import React from 'react'
import classes from '../Home/Home.module.css'
export default function Home() {
    return (
        <div className={classes.wrapperHome}>
            <div className={classes.content__Home}>
                <div className={classes.content__text}>
                    <h1>Muhammad Zulfan Wahyudin</h1>
                    <p>Frontend Developer</p>
                    <q>let's build something cool</q>
                </div>
            </div>
        </div>
    )
}


