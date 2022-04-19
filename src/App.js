import "./App.css";
import Films from "./components/Films";
import Header from "./components/Header";
import MainFilm from "./components/MainFilm";
import Payment from "./components/Payment";

function App() {
  return (
    <div className="App">
      <Header />
      <MainFilm />
      <Films />
      <Payment />
    </div>
  );
}

export default App;
