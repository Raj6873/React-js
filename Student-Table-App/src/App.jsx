import { useState } from "react";
import "../public/css/app.css"; // Updated path (assumes you placed your CSS in `src/app.css`)

function App() {
  const [allStudents] = useState([
    {
      roll_no: 89631,
      first_name: "Jay",
      last_name: "Pawar",
      age: 15,
      phone: "7863214591",
      address: "Surat",
      class: "9th",
      division: "D",
    },
    // Add rest of the data...
  ]);

  return (
    <div className="container">
      <h1 className="title">📚 Students Table</h1>

      <div className="table-container">
        <table className="student-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Roll No</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Class</th>
              <th>Division</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allStudents.map((stud, index) => (
              <tr key={stud.roll_no}>
                <td>{index + 1}</td>
                <td>{stud.roll_no}</td>
                <td>{stud.first_name}</td>
                <td>{stud.last_name}</td>
                <td>{stud.age}</td>
                <td>{stud.class}</td>
                <td>{stud.division}</td>
                <td>{stud.phone}</td>
                <td>{stud.address}</td>
                <td>delet</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
