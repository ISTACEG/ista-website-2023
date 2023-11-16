import "./eventcard.scss";

const EventCard = () => {
  return (
    <article>
      <div class="article-wrapper">
        <figure>
          <img src="event_posters/innovate.jpg" alt="" />
        </figure>
        <div class="article-body">
          <h2>Innovate</h2>
          <p>
            A coding adventure that tests wit with coding puzzles and
            crosswords. Furthermore, immerses you in a DSA mystery escape room,
            solving story-based coding challenges with links and clues. You will
            experience a race against time and a combat against various huddles
            between tasks.
          </p>
          <h3>Time : 3:00 - 4:00</h3>
          <h3>Venue : Ground Floor Lab</h3>
        </div>
      </div>
    </article>
  );
};

export default EventCard;
