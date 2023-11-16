import EventCard from "../eventcard/eventcard";
import "./cards.scss";
import Title from "./title";

const events = {
  Tech: [
    {
      title: "Hurdle-a-thon",
      img: "event_posters/hurdle_a_thon.jpg",
      description:
        "A professional and innovative event, where technology enthusiasts collaborate to tackle complex real-world challenges. Participants harness cutting-edge technology to devise creative and effective solutions, delivering transformative outcomes to address critical problem statements.",
      size: "2-3 persons",
      date: "17/11/2023",
      time: "7:30 am to 4pm",
      venue: "3rd floor lab",
    },
    {
      title: "Break The Query",
      img: "event_posters/break_the_query.jpg",
      description:
        "An event where participants dive into the world of relational databases. The contest tests their ability to solve complex queries, fetch, manipulate, and organize data effectively, making it a thrilling showcase of DBMS expertise.",
      size: "1 person",
      date: "18/11/2023",
      time: "9am",
      venue: "2nd floor lab",
    },
    {
      title: "Inverse Code",
      img: "event_posters/inverse_code.jpg",
      description:
        "A unique contest where participants decipher complex algorithms by analyzing input-output patterns. Competitors employ their problem-solving skills to reverse engineer the underlying logic, showcasing their ability to understand and recreate intricate code sequences.",
      size: "2 persons",
      date: "18/11/2023",
      time: "9:00 am",
      venue: "1st floor lab",
    },
    {
      title: "Webtrix",
      img: "event_posters/webtrix.jpg",
      description:
        "Participants will have to craft a functional and visually appealing webpage from scratch, all within a strict time limit. It's a race against the clock to showcase top-notch web design skills under pressure.",
      size: "1-2 person(s)",
      date: "18/11/2023",
      time: "9:00 am",
      venue: "2nd floor lab",
    },
    {
      title: "CodeFresh",
      img: "event_posters/code_fresh.jpg",
      description:
        "A thrilling coding competition exclusively for first-year students, where novice programmers will get an opportunity to showcase their skills. Participants will tackle fun and engaging programming problems tailored to their skill level.",
      size: "1-2 person(s)",
      date: "18/11/2023",
      time: "9:00 am",
      venue: "2nd floor lab",
    },
    {
      title: "Coding Chronicles",
      img: "event_posters/coding_chronicles.jpg",
      description:
        "A coding adventure that tests wit with coding puzzles and crosswords. Furthermore, immerses you in a DSA mystery escape room, solving story-based coding challenges with links and clues. You will experience a race against time and a combat against various huddles between tasks.",
      size: "2 persons",
      date: "18/11/2023",
      time: "9:00 am",
      venue: "3rd floor lab",
    },
    {
      title: "Code Mafia",
      img: "event_posters/code_mafia.jpg",
      description:
        "A professional and innovative event, where technology enthusiasts collaborate to tackle complex real-world challenges. Participants harness cutting-edge technology to devise creative and effective solutions, delivering transformative outcomes to address critical problem statements.",
      size: "2-3 persons",
      date: "18/11/2023",
      time: "9:00 am",
      venue: "3rd floor lab",
    },
  ],
  NonTech: [
    {
      title: "Scan and Seek",
      img: "event_posters/scan_and_seek.jpg",
      description:
        "Participants will have to follow a series of cleverly hidden clues and riddles that ultimately lead to a hidden treasure. It's a race against time that tests problem-solving skills and teamwork.",
      size: "1-3 persons",
      date: "18/11/2023",
      time: "9:00 am",
      venue: "Help Desk",
    },
    {
      title: "Escape Room",
      img: "event_posters/escape_room.jpg",
      description:
        "Participate in an electrifying contest where teams collaborate to unravel a series of intricate puzzles, riddles, and challenges, showcasing their problem-solving prowess and strategic thinking in a thrilling competition.",
      size: "2 persons",
      date: "18/11/2023",
      time: "9:00 am",
      venue: "G3 Classroom",
    },
    {
      title: "Trivia Quiz",
      img: "event_posters/trivia.jpg",
      description:
        "Embark on a journey through time and diverse subjects with this engaging trivia quiz, challenging your prowess in general knowledge, culture, history, and significant events, testing the depths of your expertise!",
      size: "1-3 person(s)",
      date: "18/11/2023",
      time: "9:00 am",
      venue: "Second Floor Classroom",
    },
    {
      title: "Innovate",
      img: "event_posters/innovate.jpg",
      description:
        "Engage in creative expression by designing a compelling poster for a product or company. Utilize provided materials—chart, newspapers, pen, glue, and scissors—to craft an innovative and visually captivating representation.",
      size: "1-3 person(s)",
      date: "18/11/2023",
      time: "9:00 am",
      venue: "F4 Classroom",
    },
  ],
};

const Cards = () => {
  return (
    <div className="main">
      <div className="category">
        <Title title="Tech Events"></Title>
        <div className="cards">
          {events.Tech.map((event) => {
            return (
              <EventCard
                img={event.img}
                description={event.description}
                time={event.time}
                venue={event.venue}
                size={event.size}
                title={event.title}
                date={event.date}
              ></EventCard>
            );
          })}
        </div>
      </div>
      <div className="category">
        <Title title="Non Tech Events"></Title>
        <div className="cards">
          {events.NonTech.map((event) => {
            return (
              <EventCard
                img={event.img}
                description={event.description}
                time={event.time}
                venue={event.venue}
                size={event.size}
                title={event.title}
                date={event.date}
              ></EventCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards;
