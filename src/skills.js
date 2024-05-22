import React from 'react';
import { Paper, Typography } from '@mui/material';
import styles from './Skills.css';




const skillsData = [
        { title: 'MySQL', description: 'Introduction to Databases for Back-End Development' },
        { title: 'SQL', description: 'Introduction to Databases for Back-End Development' },
        { title: 'Databases', description: 'Introduction to Databases for Back-End Development' },
        { title: 'Relational Databases', description: 'Introduction to Databases for Back-End Development' },
        { title: 'Data Structures', description: 'Coding Interview Preparation (data structures and algorithms)' },
        { title: 'Algorithms', description: 'Coding Interview Preparation (data structures and algorithms)' },
        { title: 'HTML5', description: 'HTML and CSS in depth' },
        { title: 'React Basics', description: 'Web Development' },
        { title: 'Web Development', description: 'HTML and CSS in depth' },
        { title: 'Test-Driven Development', description: 'Programming in Python' },
        { title: 'Unit Testing', description: 'Programming in Python' },
        { title: 'pytest', description: 'Programming in Python' },
        { title: 'Object-Oriented Programming (OOP)', description: 'Programming in Python' },
        { title: 'Django', description: 'Introduction To Back-End Development' },
        { title: 'Bootstrap (Framework)', description: 'Introduction to Front-End Development' },
        { title: 'Bash', description: 'Version Control' },
        { title: 'Git', description: 'Version Control' },
        { title: 'GitHub', description: 'Version Control' },
        { title: 'React Native', description: 'Mobile App Development (React Native)' },
        { title: 'Programming with Javascript', description: 'Mobile App Development (React Native)' },
        { title: 'React.js', description: 'Mobile App Development (React Native)' },
        { title: 'Java', description: 'Machine Learning' },
        { title: 'Data Science', description: 'Data Science and Machine Learning (python)' },
        { title: 'Data Analytics', description: 'Course in data science and visualisation (python) at LUMS at Lahore University of Management Sciences' },
        { title: 'Kaggle', description: 'Course in data science and visualisation (python) at LUMS at Lahore University of Management Sciences' },
        { title: 'Seaborn', description: 'Course in data science and visualisation (python) at LUMS at Lahore University of Management Sciences' },
        { title: 'Go (Programming Language)', description: 'R (Programming Language)' },
        { title: 'SciPy', description: 'Course in data science and visualisation (python) at LUMS at Lahore University of Management Sciences' },
        { title: 'JavaScript', description: 'Intern in Web Design and management (using shopify) at BTW® | By The Way' },
        { title: 'PHP', description: 'Intern in Web Design and management (using shopify) at BTW® | By The Way' },
        { title: 'Swift and Kotlin (Programming Language)', description: 'Mobile development' },
        { title: 'Shopify', description: 'Intern in Web Design and management (using shopify) at BTW® | By The Way' },
        { title: 'Product Descriptions', description: 'Intern in Web Design and management (using shopify) at BTW® | By The Way' },
        { title: 'Urdu', description: 'Lahore Grammar School' },
        { title: 'Matplotlib', description: 'Course in data science and visualisation (python) at LUMS at Lahore University of Management Sciences' },
        { title: 'NumPy', description: 'Course in data science and visualisation (python) at LUMS at Lahore University of Management Sciences' },
        { title: 'Pandas (Software)', description: 'Course in data science and visualisation (python) at LUMS at Lahore University of Management Sciences' },
        { title: 'C#/C++', description: 'OOP, Data structures and Algorithms, Unity etc.' },
        { title: 'C (Programming Language)', description: 'Python (Programming Language)' },
        { title: 'HTML', description: 'Intern in Web Design and management (using shopify) at BTW® | By The Way' },
        { title: 'Cascading Style Sheets (CSS)', description: 'Intern in Web Design and management (using shopify) at BTW® | By The Way' },
        { title: 'Web Design', description: 'Intern in Web Design and management (using shopify) at BTW® | By The Way' },
    ]
    const CustomExpandIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
        </svg>
      );
      
function Skills() {
        return (
          <div>
            <h2 style={{ textAlign: 'center' }}>Skills</h2>
            <div className="skills-container">
              {skillsData.map((skill, index) => (
                 <Paper key={index} elevation={1} className="skill-card" >
                  <Typography variant="h5">{skill.title}</Typography>
                  <Typography style={{color: 'black'}}>{skill.description}</Typography>
                </Paper>
              ))}
            </div>
          </div>
        );
      }
      
      export default Skills;