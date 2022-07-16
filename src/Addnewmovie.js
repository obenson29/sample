import { useHistory } from "react-router-dom";
import { useState } from "react";
import useFetch from "./useFetch";
const Addnewseries = () => {
    let history=useHistory();
    const [mName,setmName]=useState();
    const [cast,setcast]=useState();
    const [imdbRating,setimdbRating]=useState();
    const [desc,setdesc]=useState();
    const [trailer,settrailer]=useState();
    const [poster,setposter]=useState();

    let {data:Movies}=useFetch("http://localhost:6002/movies");
    const handleSubmit = (e)=>{
        e.preventDefault();

            let newMovie ={mName,cast,imdbRating,desc,trailer}
            fetch("http://localhost:6002/movies",
            {
                method:"POST", 
                headers:{"Content-Type":"application/json"},
                body : JSON.stringify(newMovie)
            })
            .then(()=>{
                alert("the data has been added")
                //history.push(`/moviedetail${((Movies[Movies.length-1].id)+1)}`);
                history.push("/moviedetail"+((Movies[Movies.length-1].id)+1))
            })
    }
    return (
        <div className="new-movie">
                <h1>Add New Series</h1>
                    <form onSubmit={handleSubmit}>
                        <label for="name" > Movie name</label><input placeholder="enter the movie name" type="text" value={mName} onChange={(m)=>{setmName(m.target.value)}} />
                        <label for="cast" >Cast</label><input placeholder="Cast" type="text" value={cast} onChange={(c)=>{setcast(c.target.value)}} />
                        <label for="Rating" >Rating</label><input placeholder="IMDB rating" type="text" value={imdbRating} onChange={(i)=>{setimdbRating(i.target.value)}}/>
                        <label for="desc" >Description</label><input placeholder="Description" type="text" value={desc} onChange={(d)=>{setdesc(d.target.value)}} />
                        <label>Trailer-link</label><input placeholder="link" value={trailer} onChange={(t)=>{settrailer(t.target.value)}}/>
                        <label>Image</label><input placeholder="link" value={poster} onChange={(p)=>{setposter(p.target.value)}}/>
                        <input type="submit"/>
                    </form>

        </div>

    );
}

export default Addnewseries;