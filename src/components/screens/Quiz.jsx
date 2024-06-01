import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import '../../styles/quiz.css'
import { data } from '../../assests/data'
import { Link, useParams } from 'react-router-dom'

const Quiz = () => {
    const { userId, courseId } = useParams();
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
        else if(score > 4){
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

    useEffect(() => {
        const saveQuizResults = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/users/update', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        userId,
                        courseId: courseId,
                        grade: group,
                        quizMarks: score,
                    }),
                });
                if (!response.ok) {
                    throw new Error('Failed to update quiz results');
                }
                console.log('Quiz results updated successfully');
            } catch (error) {
                console.error('Error updating quiz results:', error.message);
            }
        };
        if (score) {
            saveQuizResults();
        }
    }, [score, courseId, userId, group]);

    return (
        <>
        <div className='q-container'>


            {resut ?
                <>
                    <Link to={`/report/userId/courseId`}><button>Get Report</button></Link>
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
                    <div className='bottom'>
                        <div className="index">{index + 1}  of {data.length} questions</div>
                        <button onClick={next}>Save and Next</button>
                    </div>
                </>}

        </div>
        </>
    )
}

export default Quiz
