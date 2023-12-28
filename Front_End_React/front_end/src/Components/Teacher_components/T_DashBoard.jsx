import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { THeader } from "./THeader";
import { useState } from "react";
import { T_Contest_card } from "./T_Contest_card";


export function T_DashBoard(props){
    //dummy data as of now
    const[contestList, setContestList] = useState( [
            {
              "contest_id" : 1, 
              "teacher_id" : 1  ,
              "title" :  "title1", 
              "topic" :  "String", 
              "description" : "title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1" ,
              "start_time" :  "2023-10-31 15:30:45", 
              "end_time" :  "2023-12-31 15:30:45", 
              "created_at" :  "2023-10-31 15:30:45"
            },
          {
              "contest_id" : 2, 
              "teacher_id" : 1  ,
              "title" :  "title1title1title1", 
              "topic" :  "Array", 
              "description" : "title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1" ,
              "start_time" :  "2023-12-31 15:30:45", 
              "end_time" :  "2023-12-31 15:30:45", 
              "created_at" :  "2023-12-31 15:30:45"
            },
          {
              "contest_id" : 3, 
              "teacher_id" : 1  ,
              "title" :  "title1title1", 
              "topic" :  "Number", 
              "description" : "title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1" ,
              "start_time" :  "2023-12-31 15:30:45", 
              "end_time" :  "2023-12-31 15:30:45", 
              "created_at" :  "2023-12-31 15:30:45"
            },
          {
              "contest_id" : 4, 
              "teacher_id" : 1  ,
              "title" :  "title1", 
              "topic" :  "Array", 
              "description" : "title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1" ,
              "start_time" :  "2023-12-31 15:30:45", 
              "end_time" :  "2023-12-31 15:30:45", 
              "created_at" :  "2023-12-31 15:30:45"
            },
          {
              "contest_id" : 5, 
              "teacher_id" : 1  ,
              "title" :  "title1title1title1title1", 
              "topic" :  "Number", 
              "description" : "title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1" ,
              "start_time" :  "2023-12-31 15:30:45", 
              "end_time" :  "2023-12-31 15:30:45", 
              "created_at" :  "2023-12-31 15:30:45"
            }
        ]);


      
    return(
        <>
            <THeader text="Teacher DashBoard Page "></THeader>

            <Container>
                <Row xs={1} md={3} className="g-4">
                    {contestList.map((element) => (
                        <Col key={element.contest_id}> 
                            <T_Contest_card title={element.title} 
                                description={element.description} 
                                topic={element.topic}
                                ID={element.contest_id}
                                start_time={element.start_time}
                                end_time={element.end_time}
                                created_at={element.created_at}>
                            </T_Contest_card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}