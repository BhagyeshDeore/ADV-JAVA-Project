// src/S_Contest.jsx

import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { THeader } from '../Teacher_components/THeader';
import { Link, useParams } from 'react-router-dom';

const S_Contest = () => {

  const [filter, setFilter] = useState({
    easy: true,
    medium: true,
    hard: true,
    SOLVED: true,
    UNSOLVED: true,
  });

  const handleFilterChange = (filterType) => {
    setFilter((prevFilter) => ({ ...prevFilter, [filterType]: !prevFilter[filterType] }));
  };

  const problemsData = [
    // ... your JSON data here
    {
        "problem_id" : 1 ,
        "contest_id" : 1,
        "title" : "java-if-else",
        "problem_statement" : "In this challenge, we test your knowledge of using if-else conditional statements to automate decision-making processes.",
        "explanation" : "Given an integer,  , perform the following conditional actions:      If   is odd, print Weird If is even and in the inclusive range of to , print Not Weird If is even and in the inclusive range of to , print Weird If is even and greater than      , print Not Weird  Complete the stub code provided in your editor to print whether or not is weird.",
        "difficulty_level" : "HARD",
        "marks" : 10,
        "sample_input" : "3" ,
        "sample_output" : "Weired" ,
        "test_case" : "24" ,
        "result_test_case" : "Not weird" ,
        "solution_code" : "import java.io.*; import java.math.*; import java.security.*; import java.text.*; import java.util.*; import java.util.concurrent.*; import java.util.regex.*;  public class Solution {        private static final Scanner scanner = new Scanner(System.in);      public static void main(String[] args) {         int N = scanner.nextInt();                   scanner.close();     } } ",
        "status" : "SOLVED"
    
    },
    {
        "problem_id" : 2 ,
        "contest_id" : 1,
        "title" : "java-if-else",
        "problem_statement" : "In this challenge, we test your knowledge of using if-else conditional statements to automate decision-making processes.",
        "explanation" : "Given an integer,  , perform the following conditional actions:      If   is odd, print Weird If is even and in the inclusive range of to , print Not Weird If is even and in the inclusive range of to , print Weird If is even and greater than      , print Not Weird  Complete the stub code provided in your editor to print whether or not is weird.",
        "difficulty_level" : "MEDIUM",
        "marks" : 10,
        "sample_input" : "3" ,
        "sample_output" : "Weired" ,
        "test_case" : "24" ,
        "result_test_case" : "Not weird" ,
        "solution_code" : "import java.io.*; import java.math.*; import java.security.*; import java.text.*; import java.util.*; import java.util.concurrent.*; import java.util.regex.*;  public class Solution {        private static final Scanner scanner = new Scanner(System.in);      public static void main(String[] args) {         int N = scanner.nextInt();                   scanner.close();     } } ",
        "status" : "SOLVED"
    },
    {
        "problem_id" : 3 ,
        "contest_id" : 1,
        "title" : "java-if-else",
        "problem_statement" : "In this challenge, we test your knowledge of using if-else conditional statements to automate decision-making processes.",
        "explanation" : "Given an integer,  , perform the following conditional actions:      If   is odd, print Weird If is even and in the inclusive range of to , print Not Weird If is even and in the inclusive range of to , print Weird If is even and greater than      , print Not Weird  Complete the stub code provided in your editor to print whether or not is weird.",
        "difficulty_level" : "EASY",
        "marks" : 10,
        "sample_input" : "3" ,
        "sample_output" : "Weired" ,
        "test_case" : "24" ,
        "result_test_case" : "Not weird" ,
        "solution_code" : "import java.io.*; import java.math.*; import java.security.*; import java.text.*; import java.util.*; import java.util.concurrent.*; import java.util.regex.*;  public class Solution {        private static final Scanner scanner = new Scanner(System.in);      public static void main(String[] args) {         int N = scanner.nextInt();                   scanner.close();     } } ",
        "status" : "UNSOLVED"
    },
    {
        "problem_id" : 4 ,
        "contest_id" : 1,
        "title" : "java-if-else",
        "problem_statement" : "In this challenge, we test your knowledge of using if-else conditional statements to automate decision-making processes.",
        "explanation" : "Given an integer,  , perform the following conditional actions:      If   is odd, print Weird If is even and in the inclusive range of to , print Not Weird If is even and in the inclusive range of to , print Weird If is even and greater than      , print Not Weird  Complete the stub code provided in your editor to print whether or not is weird.",
        "difficulty_level" : "HARD",
        "marks" : 10,
        "sample_input" : "3" ,
        "sample_output" : "Weired" ,
        "test_case" : "24" ,
        "result_test_case" : "Not weird" ,
        "solution_code" : "import java.io.*; import java.math.*; import java.security.*; import java.text.*; import java.util.*; import java.util.concurrent.*; import java.util.regex.*;  public class Solution {        private static final Scanner scanner = new Scanner(System.in);      public static void main(String[] args) {         int N = scanner.nextInt();                   scanner.close();     } } ",
        "status" : "SOLVED"
    },
    {
        "problem_id" : 5 ,
        "contest_id" : 1,
        "title" : "java-if-else",
        "problem_statement" : "In this challenge, we test your knowledge of using if-else conditional statements to automate decision-making processes.",
        "explanation" : "Given an integer,  , perform the following conditional actions:      If   is odd, print Weird If is even and in the inclusive range of to , print Not Weird If is even and in the inclusive range of to , print Weird If is even and greater than      , print Not Weird  Complete the stub code provided in your editor to print whether or not is weird.",
        "difficulty_level" : "HARD",
        "marks" : 10,
        "sample_input" : "3" ,
        "sample_output" : "Weired" ,
        "test_case" : "24" ,
        "result_test_case" : "Not weird" ,
        "solution_code" : "import java.io.*; import java.math.*; import java.security.*; import java.text.*; import java.util.*; import java.util.concurrent.*; import java.util.regex.*;  public class Solution {        private static final Scanner scanner = new Scanner(System.in);      public static void main(String[] args) {         int N = scanner.nextInt();                   scanner.close();     } } ",
        "status" : "UNSOLVED"
    }
  ];

    const { contest_id } = useParams();

    // Filter problems based on the contest_id
    const contestProblems = problemsData.filter(
        (problem) => problem.contest_id.toString() === contest_id
    );

  const filteredProblems = problemsData.filter(
    (problem) =>
      filter[problem.difficulty_level.toLowerCase()] && filter[problem.status.toUpperCase()]
  );
  

  return (
    <Container>
      <div>
        <THeader text="Student See-Contest Page "></THeader>
      </div>
      <Row>
        <Col md={9} style={{ height: '200px' }}>
          <h2>Problems</h2>
          {filteredProblems.map((problem) => (
            <div key={problem.problem_id} className="border p-3 mb-3 rounded" >
              <h3>{problem.title}</h3>
              <h6>Marks: {problem.marks}</h6>
              <h6>Difficulty: {problem.difficulty_level}</h6>
              {problem.status === 'SOLVED' ? (
                <Button variant="outline-success" >SOLVED</Button>
              ) : (
                <Button variant="outline-danger">UNSOLVED</Button>
              )}
              {/* Add more details as needed */}
            </div>
          ))}
        </Col>
        <Col md={3} className="border p-3 rounded" style={{ marginTop: '46px' }}>
          <Form>
            <h3>Filters: </h3>
            <Form.Group controlId="formDifficulty">
              <Form.Label style={{ fontWeight:"bold"}}>Difficulty:</Form.Label>
              <Form.Check
                type="checkbox"
                label="Easy"
                checked={filter.easy}
                onChange={() => handleFilterChange('easy')}
              />
              <Form.Check
                type="checkbox"
                label="Medium"
                checked={filter.medium}
                onChange={() => handleFilterChange('medium')}
              />
              <Form.Check
                type="checkbox"
                label="Hard"
                checked={filter.hard}
                onChange={() => handleFilterChange('hard')}
              />
            </Form.Group>
          </Form>
          <br />
          <Form>
            <Form.Group controlId="formStatus">
              <Form.Label style={{ fontWeight:"bold"}}>Status:</Form.Label>
              <Form.Check
                type="checkbox"
                label="SOLVED"
                checked={filter.SOLVED}
                onChange={() => handleFilterChange('SOLVED')}
              />
              <Form.Check
                type="checkbox"
                label="UNSOLVED"
                checked={filter.UNSOLVED}
                onChange={() => handleFilterChange('UNSOLVED')}
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default S_Contest;
