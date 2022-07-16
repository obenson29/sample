import Addnewmovie from './Addnewmovie'
import Home from './Home.js';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Na from './Navbar.js'
import Moviedetail from './Moviedetail';
import Not from'./Notfound';
function App() {


  return (
    <Router>
      <div className="app-content">
<Na />

       
        <Switch>
         
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/addnewmovie">
            <Addnewmovie/>
          </Route>

          <Route path="/moviedetail:id">
            <Moviedetail/>
          </Route>

          <Route path="*">
            <Not/>
          </Route>

          {/* <Route path="id">
            <New/>
          </Route> */}
        
        </Switch>

      </div>
    </Router>
  );
  }
export default App;
