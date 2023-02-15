import "./about.css";
import aboutImg from "../../img/av4";

const About = () => {
  return (
    <>
      <div className="a">
        <div className="a-left">
          <div className="a-card bg"></div>
          <div className="a-card">
            <img src={aboutImg} alt="" className="a-img" />
          </div>
        </div>
        <div className="a-right">
          <h1 className="a-title">About Me</h1>
          <p className="a-sub">My career so far.</p>
          <p className="a-desc">
            Front end developer seeking roles to utilise my in-depth knowledge
            of UI/UX development and responsive designing to create exceptional
            interfaces and user experiences.
            <br />I have experience of 1.8 year into Front-End development in
            <b> Tech Mahindra</b> and working with client <b>British Telecom</b>{" "}
            for last 1.5 years into one of their project.
          </p>
        </div>
      </div>
    </>
  );
};
export default About;
