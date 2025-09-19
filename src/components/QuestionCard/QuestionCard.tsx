import React from 'react';
import clsx from 'clsx';
import type { QuizItem } from '../data/data';

type QuestionCardProps = {
    data: QuizItem
}


function QuestionCard({data} : QuestionCardProps) {
    
    const [selected, setSelected] = React.useState<string | null>(null);
    const [locked, setLocked] = React.useState(false)
    
    
;   
    const handleAnswer = (answer: string) => {
        if(locked) return;
        setSelected(answer)
        setLocked(true)
    }
  return (
    <section className=" z-50 font-[poppins] max-w-sm p-4 flex flex-col gap-3">
        
        
        <h2 className="text-xl text-[var(--text-color)]">{data.question}</h2>
        <section className="flex justify-between ">
          {
            data.answers.map((answer,index) => (
              <button 
               disabled = {locked}
               onClick={() => handleAnswer(answer)}
               className={clsx(
                "border rounded-lg p-1 transition",
                locked && answer === data.correctAnswer && " border-green-500",
                locked && answer === selected && answer !== data.correctAnswer && " border-red-500",
                locked && answer !== data.correctAnswer && answer !== selected && "opacity-50",
              )} key={index} >{answer}</button>
              
            ))
            
          }
        </section>
         
        
    </section>
  )
}

export default QuestionCard