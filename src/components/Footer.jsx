import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container flex flex-col items-center justify-center">
        <p></p>
        <div className="social-links flex justify-center items-center gap-4 mt-4">
          <a href="https://x.com/Xcryp70R___" className="twitter">
            <i className="bx bxl-twitter text-xl xs:text-3xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/diego-fernando-jojoa-yandun/"
            className="linkedin"
          >
            <i className="bx bxl-linkedin text-xl  xs:text-3xl"></i>
          </a>
          <a href="https://github.com/diegojojoayandun" className="github">
            <i className="bx bxl-github text-xl xs:text-3xl"></i>
          </a>
          <a href="https://gitlab.com/xcryptorlabs" className="gitlab">
            <i className="bx bxl-gitlab text-xl  xs:text-3xl"></i>
          </a>
        </div>
        <div className="copyright mt-4"></div>
        <div className="credits font-beckman sm:text-[20px] text-[60px] mt-4">
          <span className="designed-text">Design by</span>{" "}
          <a className="designed-name font-beckman text-[16px]" href="#">
            Diego Fernando Jojoa
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
