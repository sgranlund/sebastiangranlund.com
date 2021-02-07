import trangiaNatur from "../../images/trangiaNatur.jpg";

const Project2 = ({}) => {
  return (
    <div>
      <h1 id="title">Trangia bag</h1>
      <div id="projectCanvas">
        <img src={trangiaNatur} alt="" />
        <p>
          During my second year in my Design Engineer degree I together with 3
          other students where tasked to develop a new product for Trangia. The
          scope was general, and we could design anything which we deemed
          missing in their assortment. After researching their assortment and
          their competitors we realized that the storing of the kitchen had room
          for improvement. <br />
          <br /> The kitchen has a strap that holds everything to place when
          it’s stored in the bag. The problem with this strap is that in
          especially cold weather it’s immensely hard to loosen. Therefore, we
          designed a bag that tightly holds the kitchen without the need of the
          strap. In this project we learned a lot about prototyping which you
          can read more about in the full report.
          <br />
          <br />
          <a id="reportLink" href="">
            Link to full report
          </a>
          <br />
          <br />
          <a
            id="reportLink"
            href="https://www.kth.se/student/kurser/kurs/MF1062"
          >
            Link to course web MF1062
          </a>
        </p>
      </div>
    </div>
  );
};
export default Project2;
