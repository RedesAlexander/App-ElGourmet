const TikTokEmbed = ({ url }) => {
  // Extraemos el ID del video de la URL
  const videoId = url.split("/video/")[1]?.split("?")[0];

  return (
    <blockquote
      className="tiktok-embed"
      cite={url}
      data-video-id={videoId}
      style={{ maxWidth: "605px", minWidth: "325px" }}
    >
      <section>
        <a target="_blank" rel="noreferrer" href={url}>
          Cargando video...
        </a>
      </section>
    </blockquote>
  );
};