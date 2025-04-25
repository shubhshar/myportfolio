import "./intro.css";
import avatar from "../../img/av5.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro"> Hello, My name is </h2>
          <h1 className="i-name">Shubham&nbsp;Sharma</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-wrapper-left">I'm a &nbsp; </div>
              <div className="i-title-wrapper-right">
                <div className="i-title-items"> FrontEnd Developer</div>
    
                <div className="i-title-items">
                  Backend Developer (Beginner)
                </div>
              </div>
            </div>
          </div>
          <p className="i-desc">
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={avatar} alt="imageOfmine" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
