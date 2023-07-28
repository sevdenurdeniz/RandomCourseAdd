import React from "react";
import "./App.css";
import Course from "./Course.js";
import { useState } from "react";

function getRandomCourse() {
  const courseArray = [`Angular`, `Bootstrap`, `Ccsharp`, `KompleWeb`];
  return courseArray[Math.floor(Math.random() * courseArray.length)];
}

function App() {
  const [courses, setCourses] = useState([]);

  const handleClick = () => {
    setCourses([...courses, getRandomCourse()]); // ... tüm diziyi dolaşsın
  };
  const courseList = courses.map((course, index) => {
    return <Course key={index} courseName={course} />;
  });

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <button className="btn btn-primary my-5" onClick={handleClick}>
              Kurs Ekle
            </button>
          </div>
          <br></br>
          {courseList}
        </div>
      </div>
    </div>
  );
}

export default App;
