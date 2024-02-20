import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";
import { THeader } from "../Teacher_components/THeader";
import { SNavigationBar } from "./SNavigationBar";
import { getProblemsWithAttempts, getLeaderboardData } from "../../Services/Student_services/Student_APIs";
import { getStudentID } from "../../Utiles/Student_utiles/Student_Token_util";
import { useNavigate, useParams } from "react-router-dom";

const S_Contest = (props) => {
  const [problemData, setProblemData] = useState([]);
  const [leaderboardData, setLeaderboardData] = useState([]);
  const params = useParams();
  const [filter, setFilter] = useState({
    easy: true,
    medium: true,
    hard: true,
    SOLVED: true,
    UNSOLVED: true,
  });

  const handleFilterChange = (filterType) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      [filterType]: !prevFilter[filterType],
    }));
  };

  const { contest_id } = useParams();

  const navigate = useNavigate();

  function QuestionPage(problemId) {
    navigate(`/student-attemptProblem/${params.contest_id}/${problemId}`);
  }

  const getFromApi = async () => {
    try {
      const result = await getProblemsWithAttempts(params.contest_id, getStudentID());
      setProblemData(result.data);

      // Fetch leaderboard data after setting the problem data
      await fetchLeaderboardData();
    } catch (error) {
      setProblemData([]);
      console.error("Error from API:", error);
    }
  };

  const fetchLeaderboardData = async () => {
    try {
      const leaderboardResult = await getLeaderboardData(params.contest_id);
      setLeaderboardData(leaderboardResult);
    } catch (error) {
      setLeaderboardData([]);
      console.error("Leaderboard fetch error:", error);
    }
  };

  useEffect(() => {
    getFromApi();
  }, []);

  const sortedLeaderboardData = leaderboardData.sort((a, b) => b.totalMarks - a.totalMarks);

  const filteredProblems = problemData.filter((problem) => {
    const difficultyFilter =
      (problem.difficultyLevel === "EASY" && filter.easy) ||
      (problem.difficultyLevel === "MEDIUM" && filter.medium) ||
      (problem.difficultyLevel === "HARD" && filter.hard);
  
    return difficultyFilter;
  });

  return (
    <>
    <SNavigationBar/>
    <Container>
      <div>
        <THeader text="Student See-Contest Page "></THeader>
      </div>
      <Row>
        <Col md={9} style={{ height: "200px" }}>
          <h2>Problems</h2>
          {filteredProblems.map((problem) => (
            <div
              key={problem.problemId}
              className="border p-3 mb-3 rounded"
              style={{ backgroundColor: "lightgrey" }}
            >
              <h3>{problem.title}</h3>
              <h6>Marks: {problem.marks}</h6>
              <h6>Difficulty: {problem.difficultyLevel}</h6>
              <h4>Status : {problem.status === null ? "Unsolved" : problem.status}</h4>
              {problem.status === "Solved" ? (
                <Button
                  variant="outline-success"
                  //onClick={() => QuestionPage(problem.problemId)}
                >
                  SOLVED
                </Button>
              ) : (
                <Button
                  variant="outline-danger"
                  onClick={() => QuestionPage(problem.problemId)}
                >
                  Attempt
                </Button>
              )}
            </div>
          ))}
        </Col>
        <Col
          md={3}
          className="border p-3 rounded"
          style={{
            marginTop: "46px",
            width: "310px",
            backgroundColor: "lightgrey",
          }}
        >
          <Form>
            <h3>Filters: </h3>
            <Form.Group controlId="formDifficulty">
              <Form.Label style={{ fontWeight: "bold" }}>Difficulty:</Form.Label>
              <Form.Check
                type="checkbox"
                label="Easy"
                checked={filter.easy}
                onChange={() => handleFilterChange("easy")}
              />
              <Form.Check
                type="checkbox"
                label="Medium"
                checked={filter.medium}
                onChange={() => handleFilterChange("medium")}
              />
              <Form.Check
                type="checkbox"
                label="Hard"
                checked={filter.hard}
                onChange={() => handleFilterChange("hard")}
              />
            </Form.Group>
          </Form>
          <br />
          <Form>
            <Form.Group controlId="formStatus">
              <Form.Label style={{ fontWeight: "bold" }}>Status:</Form.Label>
              <Form.Check
                type="checkbox"
                label="SOLVED"
                checked={filter.SOLVED}
                onChange={() => handleFilterChange("SOLVED")}
              />
              <Form.Check
                type="checkbox"
                label="UNSOLVED"
                checked={filter.UNSOLVED}
                onChange={() => handleFilterChange("UNSOLVED")}
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
      {/* Leaderboard section */}
      <Row>
      <Col md={{ span: 3, offset: 9 }}>
      {/* Leaderboard section */}
        <div className="border p-3 rounded" style={{ marginTop: "15px",marginLeft: "-12px",marginRight: "6px", backgroundColor: "lightgrey" }}>
          <h3>Leaderboard</h3>
            {sortedLeaderboardData === 0 ? (
            <p>No brave souls have attempted this challenge yet. Be the first one and shine!</p>
              ) : (
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Student Name</th>
                      <th>Marks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedLeaderboardData.map((entry) => (
                      <tr key={entry.studentId}>
                        <td>{entry.studentName}</td>
                        <td>{entry.totalMarks}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              )}
          </div>
            
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default S_Contest;
