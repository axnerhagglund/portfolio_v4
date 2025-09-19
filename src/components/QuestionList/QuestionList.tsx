import React from 'react'
import QuestionCard from '../QuestionCard/QuestionCard';
import { quizData } from "../../components/data/data";




function QuestionList() {
  return (
    <section>
        <section>
            {
                quizData.map((item) => (
                    <QuestionCard key={item.id} data={item}/>
                ))
            }
        </section>
    </section>
  )
}

export default QuestionList