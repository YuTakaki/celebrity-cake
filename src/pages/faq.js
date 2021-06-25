import '../styles/faq.scss';
import { useRef } from 'react';
import isVisible from '../method/onScroll';

const FAQ = () => {
    const question_answer = [
        {
            question : 'How much for requesting a cake',
            answer : 'It depend on the cake you want for us to design. For more info contact as on whatsapp',
        },
        {
            question : 'Where is your location',
            answer : 'Our location is at Ab plaza 9 block b nahda 2 dubai uae'
        },
    ]
    return ( 
        <main className='faq'>
            <h1>Frequently Ask Questions</h1>
            {question_answer.map(qa => (
                <div className='question_answer'>
                    <input id={qa.question} type='checkbox'/>
                    <div className='question'>
                        <label htmlFor={qa.question}>{qa.question}</label>
                    </div>
                    
                    <div className='answer'>
                    <p>{qa.answer}</p>
                    </div>
                </div>

            ))}

        </main>
     );
}
 
export default FAQ;