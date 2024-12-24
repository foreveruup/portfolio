import React from 'react';
import { Quiz } from "./Quiz";

export const MailchimpForm = () => {
    const handleQuizSubmit = (quizData) => {
        console.log("Quiz data:", quizData);
        // Here you can handle the quiz data as needed
        // For example, you could send it to a server or perform some other action
    };

    return (
        <Quiz onSubmit={handleQuizSubmit} />
    );
};
