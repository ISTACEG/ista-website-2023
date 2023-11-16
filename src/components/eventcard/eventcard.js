import "./eventcard.scss";

const EventCard = (props) => {
  return (
    <article>
      <div class="article-wrapper">
        <figure>
          <img src={props.img} alt="" />
        </figure>
        <div class="article-body">
          <h2>{props.title}</h2>
          <h5>{props.description}</h5>
          <br></br>
          <h4>Team Size : {props.size}</h4>
          <h4>Date : {props.date}</h4>
          <h4>Time : {props.time}</h4>
          <h4>Venue : {props.venue}</h4>
        </div>
      </div>
    </article>
  );
};

export default EventCard;
