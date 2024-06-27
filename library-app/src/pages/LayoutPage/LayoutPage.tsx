import { useSelector } from 'react-redux';
import {Outlet} from 'react-router-dom';
import { RootState } from '../../redux/ReduxStore';
import {LoginRegisterModal,LibraryCardModal} from '../../features/authentication';
import './LayoutPage.css';
import { Footer, Navbar } from './../../features/navigation';
import { LoanBookModal } from '../../features/book';

export default function LayoutPage() {
    const state= useSelector((state:RootState)=>state.modal);
    return (
        <div className="layout-page">
            {state.displayLogin && <LoginRegisterModal />}
            {state.displayLibraryCard && <LibraryCardModal />}
            {state.displayLoan && <LoanBookModal />}
           <Navbar/>
            <Outlet />
            <Footer/>
        </div>)
}
