import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { THeader } from "../Teacher_components/THeader";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getProblems } from "../../Services/Teacher_services/Teacher_APIs";

const S_Contest = (props) => {
  const [problemData, setProblemData] = useState([]);
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
    navigate(`/student-attemptProblem/${problemId}`);
  }

  const getFromApi = async () => {
    try {
      const result = await getProblems(params.contest_id);
      console.log(result.data);
      setProblemData(result.data);
    } catch (error) {
      setProblemData([]);
      console.log("from api", error.data);
    }
  };

  useEffect(() => {
    getFromApi();
  }, []);

  const filteredProblems = problemData.filter((problem) => {
    const difficultyFilter =
      (problem.difficultyLevel === "EASY" && filter.easy) ||
      (problem.difficultyLevel === "MEDIUM" && filter.medium) ||
      (problem.difficultyLevel === "HARD" && filter.hard);
  
    return difficultyFilter;
  });

  return (
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
              {problem.status === "SOLVED" ? (
                <Button
                  variant="outline-success"
                  onClick={() => QuestionPage(problem.problemId)}
                >
                  SOLVED
                </Button>
              ) : (
                <Button
                  variant="outline-danger"
                  onClick={() => QuestionPage(problem.problemId)}
                >
                  UNSOLVED
                </Button>
              )}
              {/* Add more details as needed */}
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
    </Container>
  );
};

export default S_Contest;
