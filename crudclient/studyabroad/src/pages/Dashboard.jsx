import React, {
    useEffect,
    useState
} from "react";


import {
    getStudentsApi,
    deleteStudentApi
} from "../services/allApi.js";


import "./Dashboard.css";


function Dashboard() {

    const [students, setStudents] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");


    // =========================
    // GET STUDENTS
    // =========================

    const getStudents = async () => {

        try {

            setLoading(true);

            setError("");


            const data = await getStudentsApi();


            setStudents(data);

        }
        catch (error) {

            console.error(error);

            setError(
                "Unable to load students. Make sure Django server is running."
            );

        }
        finally {

            setLoading(false);

        }

    };


    // =========================
    // LOAD STUDENTS
    // =========================

    useEffect(() => {

        getStudents();

    }, []);


    // =========================
    // DELETE STUDENT
    // =========================

    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this student?"
        );


        if (!confirmDelete) {

            return;

        }


        try {

            await deleteStudentApi(id);


            setStudents(
                (oldStudents) =>

                    oldStudents.filter(
                        (student) =>
                            student.id !== id
                    )

            );

        }
        catch (error) {

            console.error(error);

            alert(
                "Unable to delete student."
            );

        }

    };


    return (

        <main className="dashboard-page">


            <div className="dashboard-header">


                <div>

                    <p className="dashboard-small-title">

                        STUDENT MANAGEMENT SYSTEM

                    </p>


                    <h1>
                        Student Dashboard
                    </h1>


                    <p className="dashboard-description">

                        View and manage all registered students.

                    </p>

                </div>


                <div className="total-card">

                    <span className="total-number">

                        {students.length}

                    </span>


                    <span className="total-label">

                        Total Students

                    </span>

                </div>

            </div>



            {error && (

                <div className="dashboard-error">

                    {error}

                </div>

            )}



            <section className="students-card">


                <div className="students-card-header">

                    <div>

                        <h2>
                            Student Records
                        </h2>

                        <p>
                            All registered students
                        </p>

                    </div>


                    <button
                        className="refresh-button"
                        onClick={getStudents}
                    >

                        ↻ Refresh

                    </button>

                </div>



                {loading ? (

                    <div className="empty-state">

                        <div className="loader"></div>

                        <p>
                            Loading students...
                        </p>

                    </div>

                ) : students.length === 0 ? (

                    <div className="empty-state">

                        <div className="empty-icon">
                            S
                        </div>

                        <h3>
                            No Students Found
                        </h3>

                        <p>
                            Add your first student.
                        </p>

                    </div>

                ) : (

                    <div className="table-wrapper">

                        <table className="student-table">

                            <thead>

                                <tr>

                                    <th>
                                        ID
                                    </th>

                                    <th>
                                        Name
                                    </th>

                                    <th>
                                        Email
                                    </th>

                                    <th>
                                        Phone
                                    </th>

                                    <th>
                                        Course
                                    </th>

                                    <th>
                                        Age
                                    </th>

                                    <th>
                                        Action
                                    </th>

                                </tr>

                            </thead>


                            <tbody>

                                {students.map(
                                    (student) => (

                                        <tr
                                            key={student.id}
                                        >

                                            <td>
                                                #{student.id}
                                            </td>


                                            <td>

                                                <div className="student-name">

                                                    <div className="student-avatar">

                                                        {student.name
                                                            ?.charAt(0)
                                                            .toUpperCase()}

                                                    </div>


                                                    {student.name}

                                                </div>

                                            </td>


                                            <td>
                                                {student.email}
                                            </td>


                                            <td>
                                                {student.phone}
                                            </td>


                                            <td>

                                                <span className="course-badge">

                                                    {student.course}

                                                </span>

                                            </td>


                                            <td>
                                                {student.age}
                                            </td>


                                            <td>

                                                <button
                                                    className="delete-button"
                                                    onClick={() =>
                                                        handleDelete(
                                                            student.id
                                                        )
                                                    }
                                                >

                                                    Delete

                                                </button>

                                            </td>

                                        </tr>

                                    )
                                )}

                            </tbody>

                        </table>

                    </div>

                )}

            </section>

        </main>

    );

}


export default Dashboard;