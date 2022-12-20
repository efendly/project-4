import React, { useState } from "react";
import { getMovieData } from "../../services/db";
import Card from "../card/card";
import "./form.css"
function Form() {
    //#region 
    const [data, setData] = useState([]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(e.target.movieName.value){
            const result = await getMovieData(e.target.movieName.value);
            setData(result);
        }
       

    }
    //#endregion

    return (
        <div className="form-row">
            <form className="left" onSubmit={handleSubmit}>
                <p>Film başlığına görə axtarın:</p><br />
                <input type="text" name="movieName" placeholder="nümunə,Shawshank Redemption" />
                <button type="submit">axtar</button>
            </form>

            <div>
                <Card movieData={data} />
            </div>
        </div>



    )
}
export default Form;