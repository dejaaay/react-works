import './App.css';
import Header from "./Header.js";
import Body from "./Body.js";
import Cards from "./Cards.js";
import Footer from "./Footer.js"
import Content from "./Content.js";
import Jobs from './Jobs.js';
import Button from "react-bootstrap/Button";



function App() {
  return (
    <div className="container">
    <Header />
    <Body />
    <Content />
    <Cards />
    <div>
      <Title  intro= "Our Product And Services"/>
    </div>
    <Jobs />
    <Footer />
    </div>
  );
}



function Title(props) {
  return (
    <div className="introduction text-center pt-5">
      <h1 className="intro text-center fw-bolder">{props.intro}</h1>
    </div>
  );
}

export default App;