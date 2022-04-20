import m from "./MainFilm.module.css";

function MainFilm() {
  return (
    <div className={m.MainFilm}>
      <img
        className={m.img}
        src="http://kinotom.com/wp-content/uploads/2013/09/stalingrad_4.jpg"
        alt="http://kinotom.com/wp-content/uploads/2013/09/stalingrad_4.jpg"
      />
      <a href="#player">
        <button className={m.button}>&#9654;Смотреть</button>
      </a>
      {/* className={m.Player}  onClick="Player()" */}
      <div id="player">
        <iframe
          title="Сталинград"
          src="https://vk.com/video_ext.php?oid=-106363905&id=456239037&hash=51a14f96a538074d"
          width="480"
          height="280"
          frameborder="0"
          allowfullscreen="1"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      </div>
      {/* <h2 className={m.h2}>Иллюзия обмана</h2> */}
    </div>
  );
}

export default MainFilm;
