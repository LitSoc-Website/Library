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
                cover:"https://images-na.ssl-images-amazon.com/images/I/51dR8N8sWFL._SX331_BO1,204,203,200_.jpg",//any img
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