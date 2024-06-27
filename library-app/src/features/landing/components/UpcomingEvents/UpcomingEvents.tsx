import React from "react";
import './UpcomingEvents.css';
import { AutoAwesome } from "@mui/icons-material";
export const UpcomingEvents:React.FC=()=>{
    return(
        <div className="upcoming-events">
           <div className="upcoming-events-header-group">
            <AutoAwesome sx={{fontSize:'2.25rem',color:"#3626A7"}}/>
            <h2>Upcoming Events:</h2>
            <AutoAwesome sx={{fontSize:'2.25rem',color:"#3626A7"}}/>
           </div>
           <h3>This Summer</h3>
           <h4>Tuesday's: 10:00AM -Noon</h4>
           <ul className="upcoming-events-events">
                <li><p>Any</p></li>
                <li><p>Any</p></li>
           </ul>
           <h4>Wednesday</h4>
           <ul className="upcoming-events-events">
                <li><p>Any</p></li>
                <li><p>Any</p></li>
           </ul>
        </div>
    )
}