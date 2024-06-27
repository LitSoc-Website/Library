import React,{useEffect,useState} from "react";
import {useSelector,useDispatch} from 'react-redux';
import './CatalogOverview.css';
import { RootState } from '../../../../redux/ReduxStore';
import { AppDispatch } from '../../../../redux/ReduxStore';
import { fetchAllBooks } from "../../../../redux/slices/BookSlice";
import { generateRandomGenres, getRandomBooksByGenre } from "../../utils/CatalogUtils";
import { CatalogOverviewSection } from "../CatalogOverviewSection/CatalogOverviewSection";
export const CatalogOverview:React.FC = () => {
    const bookstate=useSelector((state:RootState)=>state.book);
    const dispatch:AppDispatch=useDispatch();
    const [genres,setGenres]=useState<string[]>(()=>{return generateRandomGenres();})
    useEffect(()=>{
        dispatch(fetchAllBooks());
    },[]);
    return (
        <>{bookstate.books.length>0 && !bookstate.loading ?
            <div className="catalog-overview">
                <h2>welcome ,we currently have {bookstate.books && bookstate.books.length} books.</h2>
                <h4>Browse our selected books below, or search for something using top navigation</h4>
                {genres.map((genre)=><CatalogOverviewSection key={genre} books={getRandomBooksByGenre(genre,bookstate.books)} label={genre}/>)}
            </div>:<> </>
            }

        </>
        
        )

}