import React from 'react'
import classes from '../About/About.module.css'
import Image from '../../Assets/mzulfanw.jpeg'
export default function About() {
    return (
        <div className={classes.aboutWrapper}>
            <div className={classes.wrapperContent}>
                <div className={classes.about}>
                    <h1>About Me</h1>
                    <p>Helooo let me introduce myself, my name is Muhammad Zulfan Wahyudin, now i'm live in Cimahi, Indonesia.
                        My Hobbies playing <span>Basketball</span>, <span>Guitar</span> and <span>Code</span>
                    </p>
                </div>

                <div className={classes.journey}>
                    <h1>My Code Journey</h1>
                    <p>My first time code in Junior High School ( SMP ). My first language is PHP, im so confused at the first time, cause i never code before.
                        i was remember when first code is print " Hello World ", i think code its make me feel happy, cause i can build something webs or apps that can help people in the future.
                    </p>
                    <p>After graduated at SMP Negeri 1 Cimahi, I continued at SMK ( Rekayasa Perangkat Lunak ), in there i learn about Web Programming, Desktop Programming and Mobile Programming and for the languages is Java, C ( i dont even remember is C ++ or just C), PHP, HTML, CSS</p>
                </div>

                <div className={classes.ach}>
                    <h1>My Achievment </h1>
                    <div className={classes.achievment}>
                        <h3>Runner Up at Dinamika UPI 15</h3>
                        <img src={Image} alt="Runner Up " />
                    </div>
                </div>
            </div>
        </div>
    )
}
