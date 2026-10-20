// src/CourseCard.jsx

import './CourseCard.css'; // Import the CSS file for this component

function CourseCard() {
    return (
        <article className="course-card">
            <span className="course-level">Intermediate</span>
            <h2>React Development</h2>
            <p>Learn to build reusable user interfaces with React components.</p>
            <button className="course-button" type="button">
                View Course
            </button>
        </article>
    );
}

export default CourseCard;