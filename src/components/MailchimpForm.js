import React from 'react';
import { Quiz } from "./Quiz";

export const MailchimpForm = () => {
    const handleQuizSubmit = (quizData) => {
        console.log("Quiz data:", quizData);
    };

    return (
        <Quiz onSubmit={handleQuizSubmit} />
    );
};
