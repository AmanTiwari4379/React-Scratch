import Student from "./Student";

const College = ({ college }) => {
  return (
    <div
      style={{
        backgroundColor: "#ccc",
        padding: "20px",
        borderBottom: "2px solid #000",
        margin: "20px",
      }}
    >
      <h3>College Name: {college.name}</h3>
      <ul>
        <li>
          <h3>City: {college.city}</h3>
        </li>
        <li>
          <h3>website: {college.website}</h3>
        </li>
        <li>
          <Student student={college.student}/>
        </li>
      </ul>
    </div>
  );
};
export default College;
