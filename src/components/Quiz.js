import React, { useState } from 'react';
import { Col, Row, Modal } from "react-bootstrap";
import { ArrowRight } from 'react-bootstrap-icons';

const questions = [
    {
        id: 1,
        text: "What's your favorite programming language?",
        options: ["JavaScript", "Python", "Java", "C++"]
    },
    {
        id: 2,
        text: "How many years of experience do you have?",
        options: ["0-2", "3-5", "6-10", "10+"]
    },
    {
        id: 3,
        text: "What's your preferred working style?",
        options: ["Remote", "Office", "Hybrid", "Flexible"]
    }
];

export const Quiz = ({ onSubmit }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});
    const [showSuccess, setShowSuccess] = useState(false);

    const handleAnswer = (answer) => {
        setAnswers({ ...answers, [questions[currentQuestion].id]: answer });
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const handleSubmit = async () => {
        const quizData = {
            favoriteLanguage: answers[1],
            experience: answers[2],
            workingStyle: answers[3],
        };

        try {
            const response = await fetch("http://localhost:5001/quiz", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(quizData),
            });

            if (response.ok) {
                setShowSuccess(true);
                if (onSubmit) onSubmit(quizData);
            } else {
                console.error("Failed to submit quiz");
            }
        } catch (error) {
            console.error("Error submitting quiz:", error);
        }
    };

    const handleClose = () => setShowSuccess(false);

    const question = questions[currentQuestion];
    const isLastQuestion = currentQuestion === questions.length - 1;
    const selectedAnswer = answers[question.id];

    return (
        <>
            <Col lg={12}>
                <div className="quiz-container">
                    <Row>
                        <Col lg={4}>
                            <div className="question-number">
                                {currentQuestion + 1}/{questions.length}
                            </div>
                            <h3 className="question-text">{question.text}</h3>
                        </Col>
                        <Col lg={8}>
                            <div className="options-container">
                                {question.options.map((option, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleAnswer(option)}
                                        className={`quiz-option ${isLastQuestion && selectedAnswer === option ? 'selected' : ''}`}
                                    >
                                        {option}
                                    </button>
                                ))}
                                {isLastQuestion && selectedAnswer && (
                                    <button onClick={handleSubmit} className="quiz-submit">
                                        Submit <ArrowRight size={25} />
                                    </button>
                                )}
                            </div>
                        </Col>
                    </Row>
                </div>
            </Col>

            <Modal
                show={showSuccess}
                onHide={handleClose}
                centered
                className="success-modal"
            >
                <Modal.Body>
                    <div className="text-center p-4">
                        <div className="success-circle">
                            <div className="checkmark">✓</div>
                        </div>
                        <h2 className="success-title">Data has been sent!</h2>
                        <p className="success-text">fortunately, working...</p>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

