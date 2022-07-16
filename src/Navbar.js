import { Link } from "react-router-dom";

const  Navbar= () => {
    return (
        <div className="nav-content">
            <h1>🌻Sunflower</h1>
            <div>
            <Link to ="/">Home</Link>
            <Link to="/Addnewmovie">Add new movies</Link>
            </div>
            <hr></hr>
        </div>
      );
}
 
export default Navbar;