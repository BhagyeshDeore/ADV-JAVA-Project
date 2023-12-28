import { Button, Col, Container, Row } from "react-bootstrap";
import { THeader } from "../Teacher_components/THeader";
import { S_Contest_card } from "./S_Contest_card";
import { useState } from "react";
import { Card, DropdownButton, Dropdown } from 'react-bootstrap';

export function S_DashBoard(props) {
  const [contestList, setContestList] = useState([
    {
      "contest_id": 1,
      "Student_id": 1,
      "title": "Contest1",
      "topic": "DSA",
      "category": "DSA",
      "description": "Desription of contest",
      "start_time": "2023-10-31 15:30:45",
      "end_time": "2023-12-31 15:30:45",
    },
    {
      "contest_id": 2,
      "Student_id": 1,
      "title": "Contest2",
      "topic": "String",
      "category": "String",
      "description": "Desription of contest",
      "start_time": "2023-10-31 15:30:45",
      "end_time": "2023-12-31 15:30:45",
    }, 
    {
      "contest_id": 3,
      "Student_id": 1,
      "title": "Contest3",
      "topic": "OOPs",
      "category": "OOPs",
      "description": "Desription of contest",
      "start_time": "2023-10-31 15:30:45",
      "end_time": "2023-12-31 15:30:45",
    }, 
    {
      "contest_id": 4,
      "Student_id": 1,
      "title": "Contest1",
      "topic": "String",
      "category": "String",
      "description": "Desription of contest",
      "start_time": "2023-10-31 15:30:45",
      "end_time": "2023-12-31 15:30:45",
    }, 
    {
      "contest_id": 5,
      "Student_id": 1,
      "title": "Contest1",
      "topic": "String",
      "category": "String",
      "description": "Desription of contest",
      "start_time": "2023-10-31 15:30:45",
      "end_time": "2023-12-31 15:30:45",
    },
    {
      "contest_id": 6,
      "Student_id": 1,
      "title": "Contest1",
      "topic": "ExceptionHandling",
      "category": "ExceptionHandling",
      "description": "Desription of contest",
      "start_time": "2023-10-31 15:30:45",
      "end_time": "2023-12-31 15:30:45",
    },
    
    {
      "contest_id": 7,
      "Student_id": 1,
      "title": "Contest1",
      "topic": "ExceptionHandling",
      "category": "ExceptionHandling",
      "description": "Desription of contest",
      "start_time": "2023-10-31 15:30:45",
      "end_time": "2023-12-31 15:30:45",
    },
    {
      "contest_id": 8,
      "Student_id": 1,
      "title": "Contest1",
      "topic": "OOPs",
      "category": "OOPs",
      "description": "Desription of contest",
      "start_time": "2023-10-31 15:30:45",
      "end_time": "2023-12-31 15:30:45",
    },
    {
      "contest_id": 9,
      "Student_id": 1,
      "title": "Contest1",
      "topic": "ExceptionHandling",
      "category": "ExceptionHandling",
      "description": "Desription of contest",
      "start_time": "2023-10-31 15:30:45",
      "end_time": "2023-12-31 15:30:45",
    },
    {
      "contest_id": 10,
      "Student_id": 1,
      "title": "Contest1",
      "topic": "ExceptionHandling",
      "category": "ExceptionHandling",
      "description": "Desription of contest",
      "start_time": "2023-10-31 15:30:45",
      "end_time": "2023-12-31 15:30:45",
    },
    {
      "contest_id": 11,
      "Student_id": 1,
      "title": "Contest1",
      "topic": "DSA",
      "category": "DSA",
      "description": "Desription of contest",
      "start_time": "2023-10-31 15:30:45",
      "end_time": "2023-12-31 15:30:45",
    },
    {
      "contest_id": 12,
      "Student_id": 1,
      "title": "Contest1",
      "topic": "DSA",
      "category": "DSA",
      "description": "Desription of contest",
      "start_time": "2023-10-31 15:30:45",
      "end_time": "2023-12-31 15:30:45",
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter contests based on the selected category
  const filteredContests = selectedCategory === 'All'
    ? contestList
    : contestList.filter(contest => contest.category === selectedCategory);

  return (
    <div>
      <div>
      <THeader text="Student DashBoard Page "></THeader>
      </div>
    <div className="d-flex justify-content-end align-items-center">
        <DropdownButton
          title={`Filter by ${selectedCategory}`}
          onSelect={(eventKey) => setSelectedCategory(eventKey)}
        >
          <Dropdown.Item eventKey="All">All</Dropdown.Item>
          <Dropdown.Item eventKey="DSA">DSA</Dropdown.Item>
          <Dropdown.Item eventKey="OOPs">OOPs</Dropdown.Item>
          <Dropdown.Item eventKey="String">String</Dropdown.Item>
          <Dropdown.Item eventKey="ExceptionHandling">ExceptionHandling</Dropdown.Item>
        </DropdownButton>
    
    </div>
    <div>
        <Container>
          <Row xs={1} md={3} className="g-4">
            {filteredContests.map((element) => (
              <Col key={element.contest_id}>
                <S_Contest_card
                  title={element.title}
                  description={element.description}
                  topic={element.topic}
                  ID={element.contest_id}
                  start_time={element.start_time}
                  end_time={element.end_time}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
  
}
