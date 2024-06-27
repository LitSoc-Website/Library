import React from "react";
import './BookSubjects.css';
interface BookSubjectsProps {
    subjects: string[];
}
export const BookSubjects:React.FC<BookSubjectsProps>=({subjects})=>{
    return(
        <div className="book-subjects">
            <h3>Book Subjects:</h3>
            <div className="book-info-subjects-box">
                {
                    subjects.map((subject,index)=>{
                        if(index!==subjects.length-1){
                            return <p key={subject} className="book-info-subject">{subject},</p>
                        }  
                        else{
                            return <p key={subject} className="book-info-subject">{subject}</p>
                        }
                     })
                }
            
            </div>
        </div>
        )
 }
