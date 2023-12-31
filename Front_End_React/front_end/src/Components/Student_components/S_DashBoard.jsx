import { Button, Col, Container, Row } from "react-bootstrap";
import { THeader } from "../Teacher_components/THeader";
import { S_Contest_card } from "./S_Contest_card";
import { useState , useEffect } from "react";
import { Card, DropdownButton, Dropdown } from 'react-bootstrap';
import { getStudentContest } from "../../Services/Student_services/Student_APIs";

export function S_DashBoard(props) {
  const [contestList, setContestList] = useState([]);

  const [selectedTopic, setSelectedTopic] = useState('All');

  const getContestFromApi = async ()=>{
    try{
         const result = await getStudentContest();
         console.log(result.data);
         setContestList(result.data);
         
    }catch(error){
      
       console.log("from api",error.data)
    }
 }

useEffect(()=>{
    getContestFromApi();
},[]);

  // Filter contests based on the selected category
  const filteredContests = selectedTopic === 'All'
    ? contestList
    : contestList.filter(contest => contest.topic === selectedTopic);


  return (
    <div>
      <div>
      <THeader text="Student DashBoard Page "></THeader>
      </div>
    
    <div>
        <Container>
            <div className="d-flex justify-content-end align-items-center pe-5">
              <DropdownButton
                title={`Search by ${selectedTopic}`}
                onSelect={(eventKey) => setSelectedTopic(eventKey)}>
                <Dropdown.Item eventKey="All">All</Dropdown.Item>
                <Dropdown.Item eventKey="DSA">DSA</Dropdown.Item>
                <Dropdown.Item eventKey="OOPs">OOPs</Dropdown.Item>
                <Dropdown.Item eventKey="String">String</Dropdown.Item>
                <Dropdown.Item eventKey="ExceptionHandling">ExceptionHandling</Dropdown.Item>
              </DropdownButton>
          </div>
          <Row xs={1} md={3} className="g-4">
            {filteredContests.map((element) => (
              <Col key={element.contestId}>
                <S_Contest_card
                  title={element.title}
                  description={element.description}
                  topic={element.topic}
                  ID={element.contestId}
                  start_time={element.satrtTime}
                  end_time={element.endTime}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
  
}
