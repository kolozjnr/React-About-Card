import "./styles.css";
import Info from "../components/Info.js";
import Interest from "../components/Interest.js";
import AboutMe from "../components/AboutMe.js";
import Social from "../components/Social.js";
//import ReactDOM from "react-dom"

export default function App() {
  return (
    <div className="App">
      <Info />
      <AboutMe />
      <Interest />
      <Social />
    </div>
  );
}
//ReactDOM.render(<App />, document.getElementById("root"))
