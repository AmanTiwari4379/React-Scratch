import College from "./College";


function NestLoopMap() {
  const collegeData = [
    {
      name: "IIT Alwar",
      city: "Alwar",
      website: "www.iita.com",
      student: [
        {
          name: "Aman",
          age: 23,
          email: "xyzgmail.com",
        },
        {
          name: "Abhimanyu",
          age: 19,
          email: "xyzgmail.com",
        },
        {
          name: "Arjun",
          age: 35,
          email: "xyzgmail.com",
        },
      ],
    },
    {
      name: "IIT Delhi",
      city: "Delhi",
      website: "www.iitd.com",
      student: [
        {
          name: "Aman",
          age: 23,
          email: "xyzgmail.com",
        },
        {
          name: "Abhimanyu",
          age: 19,
          email: "xyzgmail.com",
        },
        {
          name: "Arjun",
          age: 35,
          email: "xyzgmail.com",
        },
      ],
    },
    {
      name: "IIT Mumbai",
      city: "Mumbai",
      website: "www.iitm.com",
      student: [
        {
          name: "Aman",
          age: 23,
          email: "xyzgmail.com",
        },
        {
          name: "Abhimanyu",
          age: 19,
          email: "xyzgmail.com",
        },
        {
          name: "Arjun",
          age: 35,
          email: "xyzgmail.com",
        },
      ],
    },
  ];
  return (
    <div>
      <h3>Nested Looping with Component</h3>
      {collegeData.map((college, index) => (
        <div key={index}>
          <College college={college}/>
        </div>
      ))}
    </div>
  );
}
export default NestLoopMap;