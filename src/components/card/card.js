import React from 'react';
import {useState} from "react";
import "./card.css";
function Card({movieData}) {
    let [state,setState]=useState([]);
    const ReadData=(title,year)=>{
    
       setState([...state,{Title:title,Year:year}])
    }
    console.log(state);
return(
    <>
    {
        movieData?.map(item=>{
           return(
           <>
                <div className='card-poster'> 
            <img src={item.Poster}/>
           </div>
           <div className='card-title'>
               <p>{item.Title} ({item.Year})</p>
               <button type="click" onClick={()=>{ReadData(item.Title,item.Year)}}>siyahıya əlavə et</button>
           </div>
          </>
           )

        })
    }
    
    </>
)


}
export default Card;