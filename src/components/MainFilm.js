import m from "./MainFilm.module.css";

function MainFilm() {
  return (
    <div className={m.MainFilm}>
      <img
        className={m.img}
        src="https://way2day.com/wp-content/uploads/2019/11/luchshie-filmy-pro-ograblenija-.jpg"
        alt="https://way2day.com/wp-content/uploads/2019/11/luchshie-filmy-pro-ograblenija-.jpg"
      />
      <button className={m.button}>&#9654;Смотреть</button>
      <h2 className={m.h2}>Ограбление банка</h2>
    </div>
  );
}

export default MainFilm;
