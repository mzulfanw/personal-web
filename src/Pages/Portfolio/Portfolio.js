import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from '../Portfolio/Portfolio.module.css'

export default function Portfolio() {
    const [state, setState] = useState(false)

    const [repo, setRepo] = useState([])

    useEffect(() => {



        const portfolio = async () => {
            const url = await fetch("https://api.github.com/users/mzulfanw/repos")
            const data = await url.json();
            const arr = await data.filter(value => value.stargazers_count > 0);
            setRepo(arr)
            setState(true)

        }


        portfolio();

        return () => {

        }



    }, [])
    return (
        <div>
            {
                state ?
                    <div className={classes.content}>
                        <h1>My Portfolio</h1>
                        <div className={classes.wrapperBox}>
                            {
                                repo.map((value, index) => {
                                    return (
                                        <div key={index} className={classes.items}>
                                            <h3>{value.name}</h3>
                                            <p>{value.language}</p>
                                            <Link to={`//${value.html_url}`} >Repository</Link>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    :
                    <div className={classes.basketball}>
                        <div className={classes.ball}>
                            <div className={classes.lines}></div>
                        </div>
                        <h3 className={classes.text}>Please Waitt , I'm still dribbling the ball</h3>
                    </div>
            }
        </div>

    )
}