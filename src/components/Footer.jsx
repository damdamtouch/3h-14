import React from "react";
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <div className="footer">
      <SocialIcon url="https://www.facebook.com/3heuresmoinslequart/" />
      <SocialIcon
        className="socialIcon"
        url="https://www.instagram.com/troisheuresmoinslequart/"
      />
      <SocialIcon
        className="socialIcon"
        url="https://www.youtube.com/channel/UC5qqxtsbVtiGsDJn60a0PSQ"
      />
    </div>
  );
}

export default Footer;
