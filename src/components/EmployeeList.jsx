import React, { useState } from "react";

function EmployeeList() {
  const [employees] = useState([
    { name: "John Doe", age: 28, salary: 50000, designation: "Developer" },
    { name: "Jane Smith", age: 32, salary: 65000, designation: "Designer" },
    { name: "Michael Johnson", age: 40, salary: 80000, designation: "Manager" },
    { name: "Emily Davis", age: 25, salary: 45000, designation: "Intern" }
  ]);

  return (
    <div style={{ paddingTop: 10 }}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
            <th>Designation</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, idx) => (
            <tr key={idx}>
              <td>{emp.name}</td>
              <td>{emp.age}</td>
              <td>{emp.salary}</td>
              <td>{emp.designation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
