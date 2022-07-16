import { Link } from "react-router-dom";
const Movielist = (props) => {
    var Movies =props.mov;
    // var title=props.title;
    // var handleDelete=props.funcD


    return (         
    <div className="home-content">
    {
        Movies.map((movie)=>(
            <div className="movie-list">
                <Link to={`/moviedetail${movie.id}`}>
                <h1>{movie.mName}</h1>
                <h2>Cast: {movie.cast}</h2>
                <h3>Director: {movie.director}</h3>
                <h3>IMDB Ratings: {movie.imdbRating}</h3><br />
                </Link>
            </div>
        ))
    }

</div> );
}
 
export default Movielist;