import {
  CiFacebook,
  CiInstagram,
  CiLinkedin,
  CiTwitter,
  CiYoutube,
} from "react-icons/ci";
import {
  FaDiscord,
  FaGithub,
  FaTelegram,
  FaTiktok,
  FaTwitch,
  FaWhatsapp,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosSend } from "react-icons/io";

export function findByIcon(name: string) {
  switch (name) {
    case "instagram":
      return <CiInstagram className="text-white w-6 h-6" />;
    case "linkedin":
      return <CiLinkedin className="text-white w-6 h-6" />;
    case "github":
      return <FaGithub className="text-white w-6 h-6" />;
    case "twitter":
      return <CiTwitter className="text-white w-6 h-6" />;
    case "facebook":
      return <CiFacebook className="text-white w-6 h-6" />;
    case "youtube":
      return <CiYoutube className="text-white w-6 h-6" />;
    case "twitch":
      return <FaTwitch className="text-white w-6 h-6" />;
    case "tiktok":
      return <FaTiktok className="text-white w-6 h-6" />;
    case "discord":
      return <FaDiscord className="text-white w-6 h-6" />;
    case "whatsapp":
      return <FaWhatsapp className="text-white w-6 h-6" />;
    case "telegram":
      return <FaTelegram className="text-white w-6 h-6" />;
    case "email":
      return <MdOutlineEmail className="text-white w-6 h-6" />;

    default:
      return <IoIosSend className="text-white w-6 h-6" />;
  }
}
