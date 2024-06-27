import React from "react";
import './BookOfTheWeek.css';
import { BookInformation } from "../../../book";
export const BookOfTheWeek:React.FC=()=>{
    return(
        <div className="book-of-the-week">
            <h1>Book of the Week:</h1>
            <BookInformation
             book={
               {_id:"1234",
                barcode:"1234",
                cover:"https://www.stellabooks.com/storage/images/stock/1317/1317766.JPG",//any img
                title:"any",
                authors:["any"],
                description:"any",
                subjects:["any"],
                publicationDate:new Date("2024-01-01"),
                publisher:"any",
                pages:1,
                genre:"any",
                records:[]}
               
             }/>
        </div>
    )
}