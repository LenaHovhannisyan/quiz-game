import React, { useState } from "react";
import { Button } from "@mui/material";
import questions from "./question";
import sun from "./images/suns.svg"
import "./quiz.css"

export default function Quiz() {
    const [name, setName] = useState("")
    const [isChecked, setCheck] = useState(true)
    const [isShow, setShow] = useState(false)
    const [currentQusetion, setNext] = useState(0)
    const [score, setScore] = useState(0);
    const [certificate, setCertificate] = useState(false);
    const [isGood, setGrade] = useState(false)

    const styles = {
        h1: {
            color: "#dec939",
            fontFamily: "'Puppies Play', cursive",
            fontSize: 100,
            paddingTop: "11vh"
        },
        form: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: 50
        },
        p: {
            fontFamily: "'Puppies Play', cursive",
            fontSize: 51,
            color: "antiquewhite"
        },
        input: {
            margin: "5% 0",
            padding: 10,
            border: "none",
            outline: "none",
            borderRadius: "46%",
            fontFamily: 'Niconne',
            fontSize: 20,
            textAlign: "center",
            backgroundColor: "#e5d8e8ed",
            color: "#2b1f2b"
        },
        button: {
            fontFamily: 'Niconne',
            border: "none",
            width: 96,
            borderRadius: 50,
            padding: 3,
            fontSize: 25,
            backgroundColor: isChecked ? "rgb(106 177 70 / 40 %)" : "#6ab146",
            color: "#75517b"
        },
        question: {
            fontFamily: 'Niconne',
            fontSize: 51,
            color: "#dec939",
            fontWeight: 500,
            padding: "0 10px 10px"

        },
        options: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
        },
        option: {
            fontFamily: "'Cinzel Decorative', cursive",
            fontWeight: 600,
            width: "35vw",
            marginBottom: "30px",
            padding: 17,
            borderRadius: 50,
            padding: 3,
            fontSize: "100%",
            color: "antiquewhite",
            backgroundColor: "#8f2cc1"

        },
        image: {
            margin: 20,
            width: "70%",
            height: 200,
            boxShadow: "rgb(64 0 75) 18px 20px 20px",
            borderRadius: 70
        },
        spam: {
            fontFamily: "'Puppies Play', cursive",
            fontSize: 51,
            color: "antiquewhite",
            borderBottom: "1px solid antiquewhite"
        },
        cerc: {
            fontWeight: 500,
            color: "rgb(245 255 96",
            fontFamily: "'Puppies Play', cursive",
            fontSize: 100,
            paddingTop: "11vh",
            fontWeight: 500,
            position: "relative",
            zIndex: 99999
        },
        icon1: {
            height: 150,
            width: 150,
            position: "absolute",
            top: 39,
            opacity: 0.7,
            left: "10%",
        },
        names: {
            float: "right",
            margin: "51px 27px",
            fontWeight: 600,
            width: 93,
            color: "#621e6d",
            position: "absolute"
        },
        date: {
            color: "antiquewhite",
            fontSize: 23,
            fontFamily: 'Niconne'
        },
        restart: {
            position: "absolute",
            right: -139,
            top: "70vh",
            fontFamily: 'Niconne',
            border: "none",
            width: 117,
            borderRadius: 50,
            padding: 3,
            fontSize: 25,
            backgroundColor: "rgb(177 169 70)"
        },
        footer: {
            display: "flex",
            justifyContent: "space-around",
            marginBottom: 50,
            alignItems: "center"
        }
    }

    const show_style = {
        disabled: "block",
        position: "relative "
    }
    const hide_style = { disabled: "none" }

    function start(e) {
        e.preventDefault();
        setShow(true)
    }
    function nextQuestion(isCorrect) {
        if (currentQusetion === questions.length - 1) {
            if (score >= 15) {
                setGrade(true)
            }
            setCertificate(true)
        }
        else {
            setNext(prevQuestion => ++prevQuestion)
            if (isCorrect)
                setScore(prevScore => ++prevScore)
            console.log(name)
        }
    }
    function restart() {
        setCheck(true)
        setShow(false)
        setCertificate(false)
        setGrade(false)
        setNext(0)
        setName("")
    }

    return (
        <>{!isShow ? <div
            style={isShow ? hide_style : show_style}>
            <img src={sun} alt="sun" style={styles.icon1} />
            <h1 style={styles.h1}>Welcome!</h1>
            <form style={styles.form} onSubmit={start} >
                <p style={styles.p}>Enter your name to start the game</p>
                <input style={styles.input} type="text" value={name} onChange={(e) => {
                    setName(e.target.value)
                    setCheck((name.length >= 2) ? false : true)
                }} />
                <button
                    style={styles.button}
                    disabled={isChecked}
                >Start</button>
            </form>
        </div>
            : (!certificate ? <div style={isShow ? show_style : hide_style}  >
                <img style={styles.image} src={questions[currentQusetion].image} alt={questions[currentQusetion].image} />
                <h1 style={styles.question}>{questions[currentQusetion].question}</h1>
                <div style={styles.options} >
                    {questions[currentQusetion].options.map((val, index) => {
                        return <Button variant="string" key={index} sx={styles.option} onClick={() => nextQuestion(val.isCorrect)}>{val.option}</Button>
                    })}
                </div>
            </div> :
                <div className="cercificat" style={{ position: "relative" }}>
                    <h1 style={styles.cerc}>Cercificat of {isGood ? "Excellence" : " Participation"}</h1>
                    <p style={styles.p}>This cercificate {isGood ? " of excellence" : ""} is given to</p>
                    <span style={styles.spam}>{name}</span>
                    <p style={styles.p}> for partisipating in on-line Quiz<br></br> and get a score {score} of 20. </p>
                    <p></p>
                    <img src={sun} alt="sun" style={styles.icon1} />
                    <div style={styles.footer}>
                        <div style={styles.date}>
                            <p>Date</p>
                            <p style={{ borderBottom: "1px solid" }}>{new Date().getDate()}.{(new Date().getMonth() + 1).toString().padStart(2, "0")}.{new Date().getFullYear()}</p>
                        </div>
                        <div  >
                            <span style={styles.names}>Arpine Mkoyan</span>
                            <img src={sun} alt="sun" style={{ height: 150 }} />
                        </div>
                    </div>

                    <button className="restar" style={styles.restart} onClick={restart}>Play again</button>
                </div>
            )
        }
        </>
    )
}