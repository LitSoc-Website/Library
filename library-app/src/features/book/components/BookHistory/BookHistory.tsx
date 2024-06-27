import './BookHistory.css'
import React from "react";
import { Book } from "../../../../models/Book";
import { BookHistoryitem } from '../BookHistoryitem/BookHistoryitem';
interface BookHistoryProps {
    book:Book;
}
export const BookHistory:React.FC<BookHistoryProps>=({book})=>{
    return(
        <div className="book-history">
            <h2>Loan History</h2>
            <div className="book-history-box">
                {
                    book.records.map((record)=>{
                        return (<BookHistoryitem key={record._id} record={record} />)
                })
                }
            </div>
        </div>
    )
}