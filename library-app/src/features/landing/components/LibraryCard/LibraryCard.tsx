import React from "react";
import './LibraryCard.css';
import { AppDispatch } from "../../../../redux/ReduxStore";
import libraryCard from "../../../../assets/libraryCard.jpg";
import { setDisplayLibraryCard } from "../../../../redux/slices/ModalSlice";
import { useDispatch } from "react-redux";

export const LibraryCard:React.FC=()=>{
    const dispatch:AppDispatch=useDispatch();
    const handleDisplayModal=()=>{
        dispatch(setDisplayLibraryCard(true));
    }
    return(
        <div className="get-library-card">
            <h2>Get a library card</h2>
            <img src={libraryCard} className="get-library-card-image" alt="library card"/>
            <p>Learn how to get your own library card <span className="get-library-card-link" onClick={handleDisplayModal}>here.</span></p>
        </div>
    )
}