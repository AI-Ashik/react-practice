const InterviewQ1 = () => {
  const students = [1];
  return (
    <div>
      <p>{students.length && "No Students Found"}</p>
      {/* method 1 */}
      {/* <p>{students.length == 0 && "No Students Found"}</p> */}
      {/* method 2 */}
      {/* <p>{!students.length && "No Students Found"}</p>  */}
      <p>Number of students : {students.length}</p>
    </div>
  );
};

export default InterviewQ1;
