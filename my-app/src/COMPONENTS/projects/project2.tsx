import timeline from "../../images/timeline.png";

const Project5 = ({}) => {
  return (
    <div>
      <h1 id="title">Timeline </h1>
      <div id="projectCanvas">
        <img src={timeline} alt="" />
        <p>
          As part of the course DH2642, we made our very own website. The
          objective was to in teams of 2 create a website that built upon
          frameworks such as React, Redux or Vue. We choose to build our website
          with React and Redux since this is a very popular framework in
          practice. In addition to React and Redux we also used Firebase to
          store data from the website in a Firebase Realtime Database and
          Firebase Auth to authenticate users.
          <br />
          <br />
          The idea we had was to build a digital version of the very popular
          board game ‘När då då? ‘. In ‘När då då?’ you are presented various
          events and on your own timeline you are supposed to place these events
          in chronological order. Our game mechanics utilize the API numbersAPI
          to retrieve a random event from history. The user then has to drag
          this event to his/her timeline and place it in chronological order.
          <br />
          <br />
          <a id="reportLink" href="http://timelinesebem.herokuapp.com/">
            See the awesome Website here
          </a>
          <br />
          <br />
          <a
            id="reportLink"
            href="https://www.kth.se/student/kurser/kurs/DH2642"
          >
            Link to course web DH2642
          </a>
        </p>
      </div>
    </div>
  );
};
export default Project5;
