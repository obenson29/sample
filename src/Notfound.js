import { Link } from "react-router-dom"; 
const Notfound = () => {
    return ( 
        <div className="not-found">
                <h1>Not found</h1>
                <h2>the page you are looking for is not here</h2>
                <Link to="/" id="butt">Go to home</Link>
        </div>
     );
}
 
export default Notfound;