import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import '../../styles/quiz.css';
import { Link, useParams } from 'react-router-dom';

const Quiz = () => {
    const { userId, courseId } = useParams();

    // Add logs to verify values
    console.log('userId:', userId);
    console.log('courseId:', courseId);

    const [index, setIndex] = useState(0);
    const [question, setQuestion] = useState(null);
    const [questions, setQuestions] = useState([]);
    const [lock, setLock] = useState(false);
    const [score, setScore] = useState(0);
    const [result, setResult] = useState(false);
    const [group, setGroup] = useState("");

    const Opt1 = useRef(null);
    const Opt2 = useRef(null);
    const Opt3 = useRef(null);
    const Opt4 = useRef(null);
    const optList = [Opt1, Opt2, Opt3, Opt4];

    useEffect(() => {
        // Fetch quiz questions from the backend
        const fetchQuestions = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/courses/${courseId}/quiz`);
                if (!response.ok) {
                    throw new Error('Failed to fetch quiz questions');
                }
                const data = await response.json();
                setQuestions(data);
                setQuestion(data[0]);
            } catch (error) {
                console.error('Error fetching quiz questions:', error.message);
            }
        };

        fetchQuestions();
    }, [courseId]);

    const checkAns = (e, ans) => {
        if (!lock) {
            if (question.ans === ans) {
                e.target.classList.add("correct");
                setLock(true);
                setScore(prev => prev + 1);
            } else {
                e.target.classList.add("wrong");
                setLock(true);
                optList[question.ans - 1].current.classList.add("correct");
            }
        }
    };

    const next = () => {
        if (lock) {
            if (index === questions.length - 1) {
                assignGroup();
            } else {
                setIndex(prevIndex => prevIndex + 1);
                setQuestion(questions[index + 1]);
                setLock(false);
                optList.forEach(option => {
                    option.current.classList.remove("correct");
                    option.current.classList.remove("wrong");
                });
            }
        }
    };

    const assignGroup = () => {
        let group = "";
        if (score > 8) {
            group = "A";
        } else if (score > 4) {
            group = "B";
        } else {
            group = "C";
        }
        setGroup(group);
        setResult(true);
    };

    const reset = () => {
        setIndex(0);
        setScore(0);
        setLock(false);
        setResult(false);
    };

    useEffect(() => {
        if (index < questions.length) {
            setQuestion(questions[index]);
        }
    }, [index, questions]);

    useEffect(() => {
        const saveQuizResults = async () => {
            try {
                console.log('Sending request to update quiz results:', {
                    userId,
                    courseId,
                    grade: group,
                    quizMarks: score,
                });

                const response = await fetch('http://localhost:5000/api/users/update', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        userId,
                        courseId,
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

        if (result) {
            saveQuizResults();
        }
    }, [result, score, courseId, userId, group]);

    return (
        <div className='q-container'>
            {result ?
                <Link to={`/report/${userId}/${courseId}`}><button>Get Report</button></Link>
                :
                question && (
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
                            <div className="index">{index + 1} of {questions.length} questions</div>
                            <button onClick={next}>Save and Next</button>
                        </div>
                    </>
                )
            }
        </div>
    );
};

export default Quiz;
