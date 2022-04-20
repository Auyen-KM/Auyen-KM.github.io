// import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Films from "./components/Films";
import Header from "./components/Header";
import MainFilm from "./components/MainFilm";
import Payment from "./components/Payment";
// import Player from "./components/Player";

function App() {
  return (
    // <BrowserRouter>
    <div className="App">
      <Header />
      <MainFilm />
      <Films />
      {/* <Player /> */}
      <Payment />
    </div>
    // </BrowserRouter>
  );
}

export default App;
