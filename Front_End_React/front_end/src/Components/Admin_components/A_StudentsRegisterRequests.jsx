// A_StudentsRegisterRequests.jsx

import React from 'react';
import { Table, Form, Button } from 'react-bootstrap';
import { THeader } from '../Teacher_components/THeader';

const data = [
 
  {
    "studentId" :  1,
    "pnr" : 230940520069,
    "name" : "bdbdubduxobx",
    "email" :  "bdhvhv@gmail.com",
    "emailverificationStatus" : "true",
     "mobileNumber" : "7894561230",
    "department" : "CDAC",
    "password" :  "varchar",
    "status" : "new_account"

  },
  {
    "studentId" :  2,
    "pnr" : 230940520069,
    "name" : "bdbdubduxobx",
    "email" :  "bdhvhv@gmail.com",
    "emailverificationStatus" : "true",
     "mobileNumber" : "7894561230",
    "department" : "CDAC",
    "password" :  "varchar",
    "status" : "new_account"

  },
  {
    "studentId" :  3,
    "pnr" : 230940520069,
    "name" : "bdbdubduxobx",
    "email" :  "bdhvhv@gmail.com",
    "emailverificationStatus" : "true",
     "mobileNumber" : "7894561230",
    "department" : "CDAC",
    "password" :  "varchar",
    "status" : "new_account"

  },
  {
    "studentId" :  4,
    "pnr" : 230940520069,
    "name" : "bdbdubduxobx",
    "email" :  "bdhvhv@gmail.com",
    "emailverificationStatus" : "true",
     "mobileNumber" : "7894561230",
    "department" : "CDAC",
    "password" :  "varchar",
    "status" : "new_account"

  },
  {
    "studentId" :  5,
    "pnr" : 230940520069,
    "name" : "bdbdubduxobx",
    "email" :  "bdhvhv@gmail.com",
    "emailverificationStatus" : "true",
     "mobileNumber" : "7894561230",
    "department" : "CDAC",
    "password" :  "varchar",
    "status" : "new_account"

  },
  {
    "studentId" :  6,
    "pnr" : 230940520069,
    "name" : "bdbdubduxobx",
    "email" :  "bdhvhv@gmail.com",
    "emailverificationStatus" : "true",
     "mobileNumber" : "7894561230",
    "department" : "CDAC",
    "password" :  "varchar",
    "status" : "new_account"

  },
  {
    "studentId" :  7,
    "pnr" : 230940520069,
    "name" : "bdbdubduxobx",
    "email" :  "bdhvhv@gmail.com",
    "emailverificationStatus" : "true",
     "mobileNumber" : "7894561230",
    "department" : "CDAC",
    "password" :  "varchar",
    "status" : "new_account"

  },
  {
    "studentId" :  8,
    "pnr" : 230940520069,
    "name" : "bdbdubduxobx",
    "email" :  "bdhvhv@gmail.com",
    "emailverificationStatus" : "true",
     "mobileNumber" : "7894561230",
    "department" : "CDAC",
    "password" :  "varchar",
    "status" : "new_account"

  }
];

const A_StudentsRegisterRequests = () => {
  return (
    <container>
        <div style={{ textAlign:"center" }}>
            <THeader text="Admin Accept/Reject Student Registration List  " ></THeader>
        </div>
        <div style={{  margin: '50px auto', maxWidth:"1300px" }}>
        <Table striped bordered hover responsive>
            <thead>
            <tr>
                {Object.keys(data[0])
                //.filter((key) => key !== 'status') // Exclude the 'status' column
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
                    //.filter((key) => key !== 'status') // Exclude the 'status' column
                    .map((key) => (
                    <td key={key}>{row[key]}</td>
                    ))}
                    <td>
                        
                        <Button variant="success">Accept</Button> &nbsp;
                        <Button variant="danger">Deny</Button>
                        
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
