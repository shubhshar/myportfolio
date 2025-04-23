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
           I make websites pretty (and functional, promise!).  Been wrangling pixels and code for over 3.9 years now (yes, I counted the decimal point). 
            I speak fluent ReactJS, HTML, CSS, and JavaScript (and a sprinkle of other fancy acronyms).<br/>
            My superpower? Turning your website vision into a reality that works on any device, from a giant desktop monitor to your grandma's flip phone (okay, maybe not that last one).
            <br/>
I love working with awesome people (that's you!) and fellow code wizards to bring ideas to life. Basically, I'm here to make the internet a more beautiful and user-friendly place, one line of code at a time.
<br/>
Need a website that doesn't look like it was built in 1999? Hit me up! Let's chat about your project.
<br/>
Thanks for stopping by !
          </p>
        </div>
      </div>
    </>
  );
};
export default About;
