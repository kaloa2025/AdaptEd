import React, { useRef } from 'react'
import { useState } from 'react'
import "../styles/quiz.css"
import { data } from '../assests/data'

const Quiz = () => {

    let [index, setIndex] = useState(0);
    let [question, setQuestion] = useState(data[index]);
    let [lock, setLock] = useState(false);
    let [score, setScore] = useState(0);
    let [resut, setResult] = useState(false);
    let[group,setGroup] = useState("");

    let Opt1 = useRef(null);
    let Opt2 = useRef(null);
    let Opt3 = useRef(null);
    let Opt4 = useRef(null);
    let opt_list = [Opt1, Opt2, Opt3, Opt4];

    const checkAns = (e, ans) => {
        if (lock == false) {
            if (question.ans == ans) {
                e.target.classList.add("correct");
                setLock(true);
                setScore(prev => prev + 1);
            }
            else {
                e.target.classList.add("wrong");
                setLock(true);
                opt_list[question.ans - 1].current.classList.add("correct");
            }
        }
    }

    const next = () => {
        if (lock == true) {
            if (index == data.length - 1) {
                setResult(true);
                groups();
                return 0;
            }
            setIndex(++index);
            setQuestion(data[index]);
            setLock(false);
            opt_list.map((option) => {
                option.current.classList.remove("correct");
                option.current.classList.remove("wrong");
            })
        }
    }

    const groups = () =>{
        if(score > 8){
            setGroup("A");
        }
        else if(score > 5){
            setGroup("B");
        }
        else{
            setGroup("C");
        }
    }

    const reset = () =>{
        setIndex(0);
        setQuestion(data[index]);
        setScore(0);
        setLock(false);
        setResult(false);
    }

    return (
        <>
        {/* <h1 className='title'>AdaptEd</h1> */}
        <div className='container'>


            {resut ?
                <>
                    <h2>You scored {score} out of {data.length}</h2>
                    <h2>You Lies in {group} group</h2>
                    <button onClick={reset}> Reset </button>
                </>
                :
                <>
                    <div className="que">
                        <h2>{index + 1}. {question.question}</h2>
                    </div>
                    <ul>
                        <li ref={Opt1} onClick={(e) => { checkAns(e, 1) }}>{question.option1}</li>
                        <li ref={Opt2} onClick={(e) => { checkAns(e, 2) }}>{question.option2}</li>
                        <li ref={Opt3} onClick={(e) => { checkAns(e, 3) }}>{question.option3}</li>
                        <li ref={Opt4} onClick={(e) => { checkAns(e, 4) }}>{question.option4}</li>
                    </ul>
                    <button onClick={next}>Save and Next</button>
                    <div className="index">{index + 1}  of {data.length} questions</div>
                </>}

        </div>
        </>
    )
}

export default Quiz
