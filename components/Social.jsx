import Link from "next/link";
import {
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/arnabdev1" },
  { icon: <FaFacebook />, path: "https://www.facebook.com/arnabdev6" },
  { icon: <FaTwitter />, path: "https://x.com/arnaabdev" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/arnabde__v8/" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/arnabdev/" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} target="_blank" className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
