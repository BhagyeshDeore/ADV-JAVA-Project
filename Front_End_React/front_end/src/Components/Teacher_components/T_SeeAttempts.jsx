import { useEffect, useState } from "react";
import { Table, Alert, Button, Dropdown } from "react-bootstrap";
import { TNavigationBar } from "./TNavigationBar";
import { getattempts } from "../../Services/Teacher_services/Teacher_APIs";
import { useParams } from "react-router-dom";
import { ModalForCode } from "./ModalForCode";

export function T_SeeAttempts(props) {
  const params = useParams();
  const [attempts, setAttempts] = useState([]);
  const [selectedAttemptId, setSelectedAttemptId] = useState(null);
  const [seeCode, setSeeCode] = useState(false);
  const [studentFilter, setStudentFilter] = useState(""); // State variable for selected student filter

  const getFromApi = async () => {
    try {
      const result = await getattempts(params.contest_id);
      console.log(result.data);
      setAttempts(result.data);
    } catch (error) {
      setAttempts([]);
      console.log("from api", error.data);
    }
  };

  const getCodeByAttemptId = (attemptId) => {
    const attempt = attempts.find((attempt) => attempt.attemptId === attemptId);
    return attempt ? attempt.code : "";
  };

  useEffect(() => {
    getFromApi();
  }, []);

  const handleCodeButtonClick = (attemptId) => {
    setSelectedAttemptId(attemptId);
    setSeeCode(true);
  };

  
  const studentNames = [...new Set(attempts.map(attempt => attempt.student.name))];

  
  const filteredAttempts = studentFilter ?
    attempts.filter(attempt => attempt.student.name === studentFilter) :
    attempts;

  return (
    <>
      <TNavigationBar />
      <div>
        <Alert key="dark" variant="secondary" className="text-center">
          <h3>Attempts By Students </h3>
        </Alert>
        &nbsp;
        {/* Dropdown for filtering by student name */}
        <Dropdown className="mb-3 ml-3">
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            {studentFilter ? `Filtering by ${studentFilter}` : "Filter by Student Name"}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setStudentFilter("")}>Show All</Dropdown.Item>
            {studentNames.map((name, index) => (
              <Dropdown.Item key={index} onClick={() => setStudentFilter(name)}>{name}</Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <Table
          striped
          bordered
          hover
          className="text-center"
          responsive
          variant="light"
        >
          <thead>
            <tr>
              <th>Attempt ID</th>
              <th>Student Name</th>
              <th>Contest Title</th>
              <th>Problem Title</th>
              <th>Language</th>
              <th>Status</th>
              <th>Result</th>
              <th>Obtained Marks</th>
              <th>Code</th>
            </tr>
          </thead>
          <tbody>
            {filteredAttempts.map((attempt, index) => (
              <tr key={index}>
                <td>{attempt.attemptId}</td>
                <td>{attempt.student.name}</td>
                <td>{attempt.contest.title}</td>
                <td>{attempt.problem.title}</td>
                <td>{attempt.language}</td>
                <td>{attempt.status}</td>
                {/* <td>{attempt.result}</td> */}
                <td>Pass</td>
                <td>{attempt.obtained_marks}</td>
                <td>
                  <Button
                    variant="primary"
                    onClick={() => handleCodeButtonClick(attempt.attemptId)}
                  >
                    Code
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <ModalForCode
          show={seeCode}
          onHide={() => setSeeCode(false)}
          code={
            selectedAttemptId ? getCodeByAttemptId(selectedAttemptId) : ""
          }
          attemptId={selectedAttemptId}
        />
      </div>
    </>
  );
}
