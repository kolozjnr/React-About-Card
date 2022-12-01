import Pics from "../src/support1.png";
export default function Info() {
  return (
    <div className="info" style={InfoStyle}>
      <img src={Pics} width="300" style={{ height: "300px" }} alt={""} />
      <strong style={{ marginTop: "5px" }}> Barnabas KolozJnr </strong>
      <p>Fullstack Developer</p>
      <div className="info--btn">
        <button className="btn btn-success info--emailbtn">Email </button>
        <button className="btn btn-primary info--linkdelnbtn">Linkedln </button>
      </div>
    </div>
  );
}
const InfoStyle = {
  display: "grid",
  marginBottom: "5px"
};
