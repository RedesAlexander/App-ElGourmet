import "./VideoCard.css";

function VideoCard({ title, image, buttonText, onButtonClick }) {
  return (
    <article className="video_card">
      <div className="video_card_image_wrapper">
        <img src={image} alt={title} className="video_card_image" />
      </div>

      <div className="video_card_footer">
        <h3 className="video_card_title">{title}</h3>

        <button className="video_card_button" onClick={onButtonClick}>
          {buttonText}
        </button>
      </div>
    </article>
  );
}

export default VideoCard;