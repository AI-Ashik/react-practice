import { useState } from "react";

const DerivedState = () => {
  const [students] = useState([
    { name: "Ashik", age: 21 },
    { name: "Piyash", age: 20 },
  ]);

  // Calculate total number of students
  const totalStudents = students.length;

  // Calculate the average age of students
  const averageStudents =
    totalStudents > 0
      ? students.reduce((accu, currentElem) => accu + currentElem.age, 0) /
        totalStudents
      : 0; // Handle division by zero

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      {/* Map through students to display their names and ages */}
      {students.map((student, index) => {
        return (
          <div key={index} className="mb-4 ">
            <h2 className="text-xl font-semibold text-gray-800">
              {/* Bold student name */}
              <span className="font-bold">{student.name}</span> : {student.age}
            </h2>
          </div>
        );
      })}
      {/* Display total number of students */}
      <p className="mt-4 text-lg text-gray-700">
        Total Students: <span className="font-bold">{totalStudents}</span>
      </p>
      {/* Display average age of students */}
      <p className="mt-2 text-lg text-gray-700">
        Average Age: <span className="font-bold">{averageStudents}</span>
      </p>
    </div>
  );
};

export default DerivedState;
