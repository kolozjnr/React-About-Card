import {
  FaBeer,
  FaTwitterSquare,
  FaFacebookF,
  FaInstagramSquare,
  FaGithubSquare
} from "react-icons/fa";
export default function Social() {
  return (
    <div className="social--icons">
      <FaTwitterSquare style={iconsStyle} />
      <FaFacebookF style={iconsStyle} />
      <FaInstagramSquare style={iconsStyle} />
      <FaGithubSquare style={iconsStyle} />
    </div>
  );
}
const iconsStyle = {
  marginRight: "10px",
  fontSize: 30
};
//export default Social
