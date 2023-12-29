// A_StudentsRegisterRequests.jsx

import React from 'react';
import { Table, Form } from 'react-bootstrap';
import { THeader } from '../Teacher_components/THeader';

const data = [
  // Your JSON data here
  {
    "PRN" : 230940520069,
    "NAME" : "Vaishnavi Gawraskar",
    "Email" : "vaishnavi@gmail.com",
    "email-verification-status" : "true",
    "status" : "accept" 

  },
  {
    "PRN" : 230940520068,
    "NAME" : "Ankita Pareek",
    "Email" : "ankita@gmail.com",
    "email-verification-status" : "false",
    "status" : "reject" 

  },
  {
    "PRN" : 230940520067,
    "NAME" : "Bhagyesh Deore",
    "Email" : "bhagyesh@gmail.com",
    "email-verification-status" : "true",
    "status" : "accept" 

  },
  {
    "PRN" : 230940520066,
    "NAME" : "Viraj Tandel",
    "Email" : "viraj@gmail.com",
    "email-verification-status" : "false",
    "status" : "reject" 

  },
  {
    "PRN" : 230940520065,
    "NAME" : "Rushikesh Jagdale",
    "Email" : "rushikeshjagdale10@gmail.com",
    "email-verification-status" : "true",
    "status" : "accept" 

  }
];

const A_StudentsRegisterRequests = () => {
  return (
    <container>
        <div style={{ textAlign:"center" }}>
            <THeader text="Admin Accept/Reject Student Registration List  " ></THeader>
        </div>
        <div style={{  margin: '100px auto', maxWidth:"1200px" }}>
        <Table striped bordered hover responsive>
            <thead>
            <tr>
                {Object.keys(data[0])
                .filter((key) => key !== 'status') // Exclude the 'status' column
                .map((key) => (
                    <th key={key}>{key}</th>
                ))}
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {data.map((row) => (
                <tr key={row.PRN}>
                {Object.keys(row)
                    .filter((key) => key !== 'status') // Exclude the 'status' column
                    .map((key) => (
                    <td key={key}>{row[key]}</td>
                    ))}
                <td>
                    <Form.Check
                    inline
                    type="radio"
                    label="Accept"
                    name={`action-${row.PRN}`}
                    id={`accept-${row.PRN}`}
                    />
                    <Form.Check
                    inline
                    type="radio"
                    label="Reject"
                    name={`action-${row.PRN}`}
                    id={`reject-${row.PRN}`}
                    />
                </td>
                </tr>
            ))}
            </tbody>
        </Table>
        </div>
    </container>
  );
};

export default A_StudentsRegisterRequests;
