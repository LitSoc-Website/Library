import React,{useRef} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { RootState } from '../../../../redux/ReduxStore';
import { AppDispatch } from '../../../../redux/ReduxStore';
import './BookCheckout.css';
import { setCurrentBook } from '../../../../redux/slices/BookSlice';
import { setDisplayLoan } from '../../../../redux/slices/ModalSlice';
import { checkoutBook } from '../../../../redux/slices/BookSlice';
export const BookCheckout:React.FC=()=>{
    const user=useSelector((state:RootState)=>state.authentication.loggedInUser);
    const book=useSelector((state:RootState)=>state.book.currentBook);
    const dispatch:AppDispatch=useDispatch();
    const libraryCardRef=useRef<HTMLInputElement>(null);
    const checkout = (e:React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        if(book && user && libraryCardRef && libraryCardRef.current){
            dispatch(checkoutBook({
                book:book,
                LibraryCard:libraryCardRef.current.value,
                employee:user
            }));
        }
        dispatch(setCurrentBook(undefined));
        dispatch(setDisplayLoan(false));
    }
    return(
        <div className="book-checkout">
            {
                book && user && 
                <form className='book-checkout-form'>
                    <h3>Loan Book Titled:{book.title}</h3>
                    <h4>Enter patrons Library Card</h4>
                    <input  className="book-checkout-input" placeholder='Library Card ID' ref={libraryCardRef}/>
                    <h4>Checkout Employee ID:</h4>
                    <input  className="book-checkout-input" value={user._id} disabled/>
                    <button className="book-checkout-button" onClick={checkout}>Loan book</button>
                </form>
            }
            </div>)
}