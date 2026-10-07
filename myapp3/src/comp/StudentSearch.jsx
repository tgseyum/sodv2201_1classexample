import { useState, useEffect } from "react";

function StudentSearch() {

    const [students,setStudent] = useState([
        { id: 1, name: "Alice", program: "Web Development" },
        { id: 2, name: "Brian", program: "Software Development" },
        { id: 3, name: "Carlos", program: "Web Development" },
        { id: 4, name: "Diana", program: "Database Development" }
    ]);

    const [search, setSearch] = useState("");

    const [filteredStudents, setFilteredStudents] = useState(students);

    useEffect(() => {

        const results = students.filter(student => student.name.toLowerCase().includes(search.toLowerCase()));

        setFilteredStudents(results);

    }, [search, students]);

    return (
        <div>
            <h2>Student Search</h2>

            <input type="text"  placeholder="Search by student name" value={search} onChange={event => setSearch(event.target.value)} />

            <ul>
                {filteredStudents.map(student => (
                    <li key={student.id}>
                        <strong>{student.name}</strong>
                        {" - "}
                        {student.program}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default StudentSearch;
 