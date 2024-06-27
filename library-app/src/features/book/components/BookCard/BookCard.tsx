import { useNavigate } from "react-router-dom";
import './BookCard.css';
import { Book } from "../../../../models/Book";
import { mapAuthorsToString } from "../../utils/BookUtils";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/ReduxStore";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../redux/ReduxStore";
import { useEffect, useState } from "react";
import { setDisplayLoan } from "../../../../redux/slices/ModalSlice";
import { setCurrentBook } from "../../../../redux/slices/BookSlice";

interface BookCardProps{
    book:Book;
}
export const BookCard:React.FC<BookCardProps>=({book})=>{
    const user = useSelector((state: RootState) => state.authentication.loggedInUser);
    const dispatch:AppDispatch=useDispatch();
    const [available, setAvailable] = useState<boolean>(() => {
        if(book.records.length===0){
            return true;
        }
        return book.records[0].status==="AVAILABLE";
    }
    );
    const [buttonClass, setButtonClass] = useState<string>("");
    const handleLoan=(e:React.MouseEvent<HTMLButtonElement>)=>{
        e.stopPropagation();
        if(user?.type === "EMPLOYEE")
        {
            dispatch(setCurrentBook(book));
            dispatch(setDisplayLoan(true));
        }
    }
    const navigate=useNavigate();
    const displayBook=()=>{
        navigate(`/resource/${book.barcode}`);
    }
    useEffect(()=>{
        let c= "book-card-loan-button";
        if(available){
            c+=" available";
        }
        else{
            c+=" unavailable";
        }

        if(user && user.type==="EMPLOYEE" && available){
            c+=" checkout";
        }
        else if(user && user.type==="EMPLOYEE" && !available){
            c+=" checkin";
        }
        setButtonClass(c);
    }
    ,[available,user?.type,book.records]);
    return (
        <div className="book-card" id="book-card" onClick={displayBook}>
            <img src={book.cover} alt={book.title} className="book-card-cover"/>
            <div className="book-card-info">
                <h2 className="book-card-title">{book.title}</h2>
                <h3 className="book-card-author">{mapAuthorsToString(book)}</h3>
                <p className="book-card-description">{book.description}</p>
            </div>
            <button className="buttonClass" onClick={handleLoan}>Status:{available? "AVAILABLE":"UNAVAILABLE"}</button>
        </div>
    )
}