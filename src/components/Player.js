import m from "./Player.module.css";

function Player() {
  return (
    <div className={m.Player}>
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
  );
}

export default Player;
