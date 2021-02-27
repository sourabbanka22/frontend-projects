import './App.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import Header from "./header/header"
import Footer from "./footer/footer"

function App() {
  return (
    <Router>
      <div className="page-container">
        <div className="content-wrap">
          <Header/>
              
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/calculator" exact>
            <Users />
          </Route>
          <Route path="/drum-machine" exact>
            <Users />
          </Route>
          <Route path="/markdown-previewer" exact>
            <Users />
          </Route>
          <Route path="/pomodoro-clock" exact>
            <Users />
          </Route>
          <Route path="/random-quote-machine" exact>
            <Users />
          </Route>  
        </div>
        <div className="footer">
          <Footer/>
        </div>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Users(){
  return <h2>Users</h2>;
}

export default App;
