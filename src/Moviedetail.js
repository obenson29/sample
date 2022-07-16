import { useParams,useHistory } from "react-router-dom";
import useFetch from "./useFetch";


const Moviedetail = () => {
    let {id}=useParams();
    let history=useHistory();
    let  {data :Movies,pending,error}= useFetch(`http://localhost:6002/movies/${id}`);
    

const handleDelete=()=>{
        fetch(`http://localhost:6002/movies/${id}`,{method:"DELETE"})
        .then(()=>
        {alert("this movie has been removed")
        history.goBack();
    })
        }
        
    return ( 
        <div className="movie-detail">
            {error && <h1>{error}</h1>}
            { pending &&  <div id="load"><h1>🌻</h1></div>}
                {Movies && <div>
                    <img id="poster" src={Movies.poster} alt="not"/>
                        <h1><i>IMDB</i> {Movies.imdbRating}</h1>
                        <h1>Director: <i>{Movies.director}</i></h1>
                        <h1>Movie Name: <i>{Movies.mName}</i></h1>
                        <h1>Desc: <i>{Movies.desc}</i></h1>
                        <h2>Trailer: <iframe width="560" height="315" src={Movies.trailer}title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></h2>
                        <button id="del" onClick={handleDelete}>Delete</button>
                
                </div>}
        </div>


     );
}
 
export default Moviedetail;