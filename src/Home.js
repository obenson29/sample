import Movielist from "./Movielist";
import useFetch from "./useFetch";


const Home = () => {
  let  {data :Movies,pending,error}= useFetch("http://localhost:6002/movies"); 

    // var [ratings,setRating]=useState(10)
    // const changerating = () =>{
    //     setRating(8)
    //     // console.log(ratings);
    // }

 
 
    // const handleDelete =(passedId) =>{
    //     var newMovies=Movies.filter((movie)=>{return movie.id!=passedId});
    //     setMovies(newMovies);
   // }
          
    return ( 
        // <Movielist/>
        //<Movielist m={movies}/>
        <div>
            {error && <h1>{error}</h1>}
           { pending &&
                <div id="load"><h1>🌻</h1></div>}
          {Movies && <Movielist mov={Movies} />}
    
            {/* <Movielist mov={Movies.filter((mo)=>{return mo.director=="Jon Favreau"})}
            title="Jon's"/> */}
        </div>

    );
};
 
export default Home;