import React from 'react';

const Footer = props => {
return (
  <footer className="footer">


    <div className="credits">
      <h1>
      Parisa Chavoshi
      </h1>

      <div>
      <a href="https://www.linkedin.com/in/pchavoshi">  <img src={window.linkedin} title="LinkedIn"/> </a>
      <a href="https://github.com/pchavoshi">  <img src={window.github} title="Github" /> </a>
      <a href="http://parisachavoshi.com">  <img src={window.portfolio} title="Portfolio"/> </a>
      <a href="mailto:pchavoshi@gmail.com">  <img src={window.email} title="Email"/> </a>
      </div>

    </div>

  </footer>
  );
}

export default Footer;
