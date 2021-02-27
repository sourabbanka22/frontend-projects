import './App.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";


import Header from "./header/header"
import Footer from "./footer/footer"
import RandomQuotes from "./random-quote-machine/randomQuotes";
import DrumMachine from "./drum-machine/DrumMachine"
import Calculator from './calculator/Calculator';
import Markdown from './markdown-previewer/Markdown';
import Clock from "./pomodoro-clock/Clock";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="page-container">
          <div className="content-wrap">
            <Header/>
                
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/calculator" exact>
              <Calculator />
            </Route>
            <Route path="/drum-machine" exact>
              <DrumMachine />
            </Route>
            <Route path="/markdown-previewer" exact>
              <Markdown />
            </Route>
            <Route path="/pomodoro-clock" exact>
              <Clock />
            </Route>
            <Route path="/random-quote-machine" exact>
              <RandomQuotes />
            </Route>  
          </div>
          <div className="footer">
            <Footer/>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

function Home() {
  return <h2>Home</h2>;
}

export default App;
