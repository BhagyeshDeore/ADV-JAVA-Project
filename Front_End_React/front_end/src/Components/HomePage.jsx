import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Modal, Button, Card, Container, Row, Col } from 'react-bootstrap';
import './style.css';
import { HNavbar } from './HNavbar';
import webdev from '../Assets/Designer.png'
import DSA from '../Assets/DSA1.png'
import OOPs from '../Assets/OPPs.png'
import string from '../Assets/String2.png'
import Exception from '../Assets/EXC_Handling.png'
import multithreading from '../Assets/Multithreading.png'

export function HomePage() {
  const [showWebModal, setShowWebModal] = useState(false);
  const [showDSAModal, setShowDSAModal] = useState(false);
  const [showOopsModal, setShowOopsModal] = useState(false);
  const [showStringModal, setShowStringModal] = useState(false);
  const [showExceptionModal, setShowExceptionModal] = useState(false);
  const [showMultithreadingModal, setShowMultithreadingModal] = useState(false);
  const navigate = useNavigate();

  const StudentDashBoard = () => {
    navigate('/student-dashboard');
  }
  return (
    <div>
      <HNavbar />
      <header className="header">
        <h1>Welcome to <span className="highlight">Parikshak</span></h1>
        <p>Practice coding, prepare for Competitive Coding, and elevate your skills</p>
      </header>

      <section className="d-flex justify-content-center align-items-center">
        <Container>
          <div className="jumbotron text-center">
            <h2 className="display-4">🚀 Unlock Your Coding Potential</h2>
            <p className="lead">Embark on an exciting journey with <span className="highlight">Parikshak</span>, where you can supercharge your skills, broaden your knowledge, and conquer technical Coding Rounds.</p>
            <hr className="my-4" />
            <p>🌐 Explore a diverse range of coding challenges, sharpen your problem-solving prowess, and join a vibrant global community of passionate developers.</p>
            <div className="cta-buttons">
              <div className="cta-buttons">
                <Button variant="primary" size="lg" onClick={() => StudentDashBoard()} className="hover-effect">
                  Get Started
                </Button>

              </div>
            </div>
          </div>
        </Container>
      </section>




      <Row className="justify-content-center">
        <Col lg={12}>
          <h2 className="mb-4 text-center">Important Topics in Programming</h2>
        </Col>
      </Row>
      <br/>

      <section>
        <Container>
          <Row>
            <Col lg={4}>
              <div className="card-deck">
                <Card>
                  <Card.Img variant="top" src={webdev} />
                  <Card.Body>
                    <Card.Title>Web Programming</Card.Title>
                    <Card.Text>Understanding Web Programming: Building Dynamic and Interactive Websites</Card.Text>
                    <Button variant="primary" onClick={() => setShowWebModal(true)} className="hover-effect">Show Info</Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>



            <Col lg={4}>
              <div className="card-deck">
                <Card>
                  <Card.Img variant="top" src={DSA}/>
                  <Card.Body>
                    <Card.Title>DSA</Card.Title>
                    <Card.Text>Exploring Data Structures: Organizing and Managing Information Efficiently</Card.Text>
                    <Button variant="primary" onClick={() => setShowDSAModal(true)} className="hover-effect">Show Info</Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            <Col lg={4}>
              <div className="card-deck">
                <Card>
                  <Card.Img variant="top" src={OOPs} />
                  <Card.Body>
                    <Card.Title>OOPs</Card.Title>
                    <Card.Text>Mastering Object-Oriented Programming: Principles and Practices for Building Scalable Software</Card.Text>
                    <Button variant="primary" onClick={() => setShowOopsModal(true)} className="hover-effect">Show Info</Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg={4}>
              <div className="card-deck">
                <Card>
                  <Card.Img variant="top" src={string} />
                  <Card.Body>
                    <Card.Title>String Manipulation</Card.Title>
                    <Card.Text>Explore techniques for string manipulation, concatenation, and pattern matching.</Card.Text>
                    <Button variant="primary" onClick={() => setShowStringModal(true)} className="hover-effect">Show Info</Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            <Col lg={4}>
              <div className="card-deck">
                <Card>
                  <Card.Img variant="top" src={Exception} />
                  <Card.Body>
                    <Card.Title>Exception Handling</Card.Title>
                    <Card.Text>Learn how to handle exceptions gracefully and implement error recovery strategies.</Card.Text>
                    <Button variant="primary" onClick={() => setShowExceptionModal(true)} className="hover-effect">Show Info</Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            <Col lg={4}>
              <div className="card-deck">
                <Card>
                  <Card.Img variant="top" src={multithreading} />
                  <Card.Body>
                    <Card.Title>Multithreading</Card.Title>
                    <Card.Text>Explore concurrent execution of multiple threads to improve performance and responsiveness.</Card.Text>
                    <Button variant="primary" onClick={() => setShowMultithreadingModal(true)} className="hover-effect">Show Info</Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>

          {/* Web Programming Modal */}
          <Modal show={showWebModal} onHide={() => setShowWebModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Web Programming</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Web Programming involves the creation and development of websites and web applications. It encompasses a variety of technologies and skills to build interactive and dynamic user interfaces. Here are some key aspects of Web Programming:</p>
              <ul>
                <li><strong>HTML (Hypertext Markup Language):</strong> The standard markup language for creating web pages and web applications.</li>
                <li><strong>CSS (Cascading Style Sheets):</strong> Used for styling and layout of web pages, enhancing the visual presentation.</li>
                <li><strong>JavaScript:</strong> A versatile scripting language that adds interactivity and dynamic behavior to web pages.</li>
                <li><strong>Server-Side Scripting:</strong> Technologies like PHP, Node.js, and Python are used for server-side scripting to handle server operations and database interactions.</li>
                <li><strong>Web Frameworks:</strong> Frameworks like React, Angular, and Vue.js facilitate the development of robust and scalable web applications.</li>
                <li><strong>Database Integration:</strong> Interaction with databases, such as MySQL, MongoDB, or PostgreSQL, to store and retrieve data.</li>
              </ul>
              <p>By mastering Web Programming, developers can create responsive and feature-rich websites, ensuring a seamless user experience across different devices.</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowWebModal(false)}>Close</Button>
            </Modal.Footer>
          </Modal>

          {/* DSA Modal */}
          <Modal show={showDSAModal} onHide={() => setShowDSAModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>DSA</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Data Structures and Algorithms (DSA) is a fundamental subject in computer science that focuses on understanding and implementing efficient solutions to real-world problems. Here's a brief overview of DSA:</p>
              <ul>
                <li><strong>Data Structures:</strong> Data structures are a way of organizing and storing data to perform operations efficiently. Common data structures include arrays, linked lists, stacks, queues, trees, and graphs.</li>
                <li><strong>Algorithms:</strong> Algorithms are step-by-step procedures or formulas for solving problems. They can range from simple to complex and are designed to process data efficiently.</li>
                <li><strong>Importance:</strong> DSA is crucial for software development and plays a significant role in coding interviews for tech companies. It helps in improving problem-solving skills, understanding system design, and writing efficient code.</li>
                <li><strong>Topics:</strong> Some important topics in DSA include searching and sorting algorithms, dynamic programming, greedy algorithms, graph algorithms, and more.</li>
              </ul>
              <p>By mastering DSA concepts and practicing problem-solving, developers can tackle a wide range of coding challenges, optimize code performance, and excel in technical interviews.</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowDSAModal(false)}>Close</Button>
            </Modal.Footer>
          </Modal>
          
          {/* OOPs Modal */}
          <Modal show={showOopsModal} onHide={() => setShowOopsModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>OOPs</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Object-Oriented Programming (OOP) is a programming paradigm that organizes software design around objects and data rather than actions and logic. Here are some key concepts of OOP:</p>
              <ul>
                <li><strong>Classes and Objects:</strong> Objects are instances of classes, which define the structure and behavior of objects. Classes encapsulate data for the object and provide methods to manipulate that data.</li>
                <li><strong>Inheritance:</strong> Inheritance allows a class (subclass) to inherit properties and behavior from another class (superclass). It promotes code reuse and allows for the creation of hierarchical relationships between classes.</li>
                <li><strong>Encapsulation:</strong> Encapsulation refers to the bundling of data and methods that operate on that data into a single unit (class). It hides the internal state of an object and only exposes necessary functionality through methods.</li>
                <li><strong>Polymorphism:</strong> Polymorphism allows objects to be treated as instances of their parent class, enabling different classes to be treated as instances of a common superclass. It promotes flexibility and extensibility in code.</li>
                <li><strong>Abstraction:</strong> Abstraction is the process of hiding complex implementation details and showing only essential features of an object. It simplifies the programming model and enhances code readability.</li>
              </ul>
              <p>OOP promotes modular and reusable code, facilitates code maintenance and testing, and improves overall software quality and scalability.</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowOopsModal(false)}>Close</Button>
            </Modal.Footer>
          </Modal>

          {/* String Manipulation Modal */}
          <Modal show={showStringModal} onHide={() => setShowStringModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>String Manipulation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>String manipulation involves performing operations on strings, such as concatenation, substring extraction, searching, and pattern matching. Here are some common techniques used in string manipulation:</p>
              <ul>
                <li><strong>Concatenation:</strong> Combining two or more strings together to form a single string.</li>
                <li><strong>Substring Extraction:</strong> Extracting a portion of a string based on specified indices or delimiters.</li>
                <li><strong>Search and Replace:</strong> Searching for specific substrings within a string and replacing them with another substring.</li>
                <li><strong>Splitting:</strong> Splitting a string into multiple substrings based on a delimiter.</li>
                <li><strong>Regular Expressions:</strong> Using regular expressions to define search patterns for complex string manipulation tasks.</li>
              </ul>
              <p>String manipulation is a fundamental skill in programming and is used extensively in tasks such as text processing, data parsing, and input validation.</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowStringModal(false)}>Close</Button>
            </Modal.Footer>
          </Modal>

          {/* Exception Handling Modal */}
          <Modal show={showExceptionModal} onHide={() => setShowExceptionModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Exception Handling</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Exception handling is a programming construct used to handle runtime errors and exceptional conditions gracefully. Here's an overview of exception handling:</p>
              <ul>
                <li><strong>Exception:</strong> An exception is an event that occurs during the execution of a program that disrupts the normal flow of instructions.</li>
                <li><strong>Try-Catch Blocks:</strong> Exceptions are caught and handled using try-catch blocks, where code that might throw an exception is enclosed within a try block, and the exception is caught and handled in a catch block.</li>
                <li><strong>Throwing Exceptions:</strong> Developers can manually throw exceptions using the throw keyword to indicate exceptional conditions in their code.</li>
                <li><strong>Exception Types:</strong> Exceptions can be of various types, such as checked exceptions (compile-time exceptions) and unchecked exceptions (runtime exceptions).</li>
                <li><strong>Error Handling Strategies:</strong> Exception handling allows developers to implement error recovery strategies, such as logging the error, notifying users, or gracefully degrading application functionality.</li>
              </ul>
              <p>Effective exception handling is essential for writing robust and reliable software that can gracefully recover from unexpected errors and maintain system stability.</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowExceptionModal(false)}>Close</Button>
            </Modal.Footer>
          </Modal>

          {/* Multithreading Modal */}
          <Modal show={showMultithreadingModal} onHide={() => setShowMultithreadingModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Multithreading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Multithreading is a programming concept that allows multiple threads of execution to run concurrently within a single process. Here's an overview of multithreading:</p>
              <ul>
                <li><strong>Thread:</strong> A thread is the smallest unit of execution within a process. Multithreading enables programs to perform multiple tasks simultaneously by executing multiple threads concurrently.</li>
                <li><strong>Concurrency vs. Parallelism:</strong> Multithreading enables concurrency, where multiple threads make progress concurrently, but it does not necessarily imply parallelism, where multiple threads execute simultaneously on multiple processors.</li>
                <li><strong>Thread Synchronization:</strong> Synchronization mechanisms such as locks, semaphores, and monitors are used to coordinate the execution of threads and prevent race conditions and other concurrency issues.</li>
                <li><strong>Benefits:</strong> Multithreading can improve program responsiveness, resource utilization, and overall system throughput by leveraging the computational power of modern multicore processors.</li>
                <li><strong>Challenges:</strong> Multithreading introduces complexities such as thread safety, deadlock, and livelock, which must be carefully managed to ensure correct and efficient concurrent behavior.</li>
              </ul>
              <p>Understanding and effectively utilizing multithreading can lead to significant performance improvements in software applications, particularly in tasks that can be parallelized and executed concurrently.</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowMultithreadingModal(false)}>Close</Button>
            </Modal.Footer>
          </Modal>
        </Container>
      </section>

    </div>
  );
}

export default HomePage;
