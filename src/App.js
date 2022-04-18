import "./App.css";
import Header from "./components/Header";
import MainFilm from "./components/MainFilm";

function App() {
  return (
    <div className="App">
      <Header />
      <MainFilm />

      <div id="notification">
        Измените соотношения экрана или зайдите с мобильного устройства
      </div>
    </div>
  );
}

export default App;
