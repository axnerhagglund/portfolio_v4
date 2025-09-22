export interface QuizItem {
    id: number,
    question: string,
    answers: string[],
    correctAnswer: string
}

export const quizData: QuizItem[] = [
    {
        id: 1,
        question: "What is Axners favourite programming language?",
        answers: ["React","Java","Spanish","Python"],
        correctAnswer: "React"
    },
    {
        id: 2,
        question: "What is Axners Favourite hobby?",
        answers: ["Gym","Fotball","Gaming","Fishing"],
        correctAnswer: "Fishing"
    },
    {
        id: 3,
        question: "What is Axners dream job?",
        answers: ["Frontend dev","Fotballer","Handyman","King"],
        correctAnswer: "Frontend dev"

    },
    {
        id: 4,
        question: "Who is Axners idol?",
        answers: ["Lennart","Glenn","Arga snickaren","Zlatan"],
        correctAnswer: "Glenn"
    }


]
 