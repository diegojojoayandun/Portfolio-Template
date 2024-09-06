import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <p></p>
        <div className="social-links">
          <a href="https://x.com/Xcryp70R___" className="twitter">
            <i className="bx bxl-twitter bx-md"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/diego-fernando-jojoa-yandun/"
            className="linkedin"
          >
            <i className="bx bxl-linkedin bx-md"></i>
          </a>
          <a href="https://x.com/Xcryp70R___" className="twitter">
            <i className="bx bxl-github bx-md"></i>
          </a>
          <a href="https://x.com/Xcryp70R___" className="twitter">
            <i className="bx bxl-gitlab bx-md"></i>
          </a>
        </div>
        <div className="copyright"></div>
        <div className="credits font-beckman sm:text-[20px] text-[60px]">
          Designed by <a href="#">Diego Fernando Jojoa</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
