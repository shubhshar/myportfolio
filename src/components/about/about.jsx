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
          {/* <p className="a-sub">My career so far.</p> */}
          <p className="a-desc">
            A Front-End Developer with a passion for creating visually appealing
            and user-friendly websites. With 2+ years of experience in the
            industry, I have developed a strong skillset in ReactJS, HTML, CSS,
            JavaScript, and other front-end development technologies. My primary
            focus is on building responsive and accessible websites that provide
            a seamless user experience across all devices. I enjoy collaborating
            with clients and other developers to bring their vision to life.
            <br />
            Please don't hesitate to contact me if you have any questions or
            would like to discuss a potential project.
            <br />
            <b>Thanks for stopping by!"</b>
          </p>
        </div>
      </div>
    </>
  );
};
export default About;
