import React from "react";
import './LibraryHours.css';
export const LibraryHours:React.FC=()=>{
    return(
        <div className="library-hours">
            <h2>Library Hours:</h2>
            <table className="library-hours-table" id="hours">
                <tbody>
                    <tr>
                        <td>Monday</td>
                        <td>9:00AM - 5:00PM</td>
                    </tr>
                    <tr>
                        <td>Tuesday</td>
                        <td>9:00AM - 5:00PM</td>
                    </tr>
                    <tr>
                        <td>Wednesday</td>
                        <td>9:00AM - 5:00PM</td>
                    </tr>
                    <tr>
                        <td>Thursday</td>
                        <td>9:00AM - 5:00PM</td>
                    </tr>
                    <tr>
                        <td>Friday</td>
                        <td>9:00AM - 5:00PM</td>
                    </tr>
                    <tr>
                        <td>Saturday</td>
                        <td>9:00AM - 5:00PM</td>
                    </tr>
                    <tr>
                        <td>Sunday</td>
                        <td>Closed</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}