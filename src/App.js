// import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Films from "./components/Films";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainFilm from "./components/MainFilm";
import Payment from "./components/Payment";
// import Player from "./components/Player";

function App() {
  return (
    <div className="App">
      <Header />
      <MainFilm />
      {/* <BrowserRouter>
        <Route path="/player" component={Player} />
      </BrowserRouter> */}
      <Films />
      <Payment />
      <Footer />
    </div>
  );
}

export default App;
