import React, {
    useState
} from "react";


import {
    addStudentApi
} from "../services/allApi.js";


import "./Home.css";


function Home() {

    const [formData, setFormData] = useState({

        name: "",

        email: "",

        phone: "",

        course: "",

        age: ""

    });


    const [loading, setLoading] = useState(false);

    const [success, setSuccess] = useState("");

    const [error, setError] = useState("");


    const handleChange = (event) => {

        const {
            name,
            value
        } = event.target;


        setFormData({

            ...formData,

            [name]: value

        });

    };


    const handleSubmit = async (event) => {

        event.preventDefault();


        setLoading(true);

        setSuccess("");

        setError("");


        try {

            const studentData = {

                name: formData.name,

                email: formData.email,

                phone: formData.phone,

                course: formData.course,

                age: Number(formData.age)

            };


            await addStudentApi(
                studentData
            );


            setSuccess(
                "Student added successfully!"
            );


            setFormData({

                name: "",

                email: "",

                phone: "",

                course: "",

                age: ""

            });

        }
        catch (error) {

            console.error(error);

            setError(
                error.message ||
                "Unable to add student."
            );

        }
        finally {

            setLoading(false);

        }

    };


    return (

        <main className="home-page">


            <section className="left-content">


                <div className="logo-area">

                    <div className="logo-box">
                        S
                    </div>


                    <div className="logo-text">

                        <span>
                            Student
                        </span>

                        <strong>
                            Portal
                        </strong>

                    </div>

                </div>


                <p className="small-title">

                    STUDENT MANAGEMENT SYSTEM

                </p>


                <h1>

                    Manage your

                    <br />

                    <span>
                        students easily.
                    </span>

                </h1>


                <div className="info-box">

                    <h3>
                        Student Management
                    </h3>

                    <p>
                        Simple · Fast · Secure
                    </p>

                </div>


                <p className="description">

                    Add and manage student information
                    from one simple interface. Store
                    student details securely and access
                    them whenever you need.

                </p>


                <div className="feature-list">

                    <div className="feature">
                        Student Registration
                    </div>

                    <div className="feature">
                        Course Management
                    </div>

                    <div className="feature">
                        Student Records
                    </div>

                </div>


            </section>



            <section className="right-content">


                <div className="form-card">


                    <div className="form-header">

                        <p>
                            STUDENT REGISTRATION
                        </p>


                        <h2>
                            Add Student Details
                        </h2>


                        <span>

                            Enter the student information
                            below to create a new student
                            record.

                        </span>

                    </div>



                    {success && (

                        <div className="success-message">

                            ✓ {success}

                        </div>

                    )}



                    {error && (

                        <div className="error-message">

                            ✕ {error}

                        </div>

                    )}



                    <form onSubmit={handleSubmit}>


                        <div className="input-group">

                            <label>
                                Student Name
                            </label>

                            <input
                                type="text"
                                name="name"
                                placeholder="Enter student name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />

                        </div>



                        <div className="input-group">

                            <label>
                                Email Address
                            </label>

                            <input
                                type="email"
                                name="email"
                                placeholder="Enter email address"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />

                        </div>



                        <div className="input-group">

                            <label>
                                Phone Number
                            </label>

                            <input
                                type="tel"
                                name="phone"
                                placeholder="Enter phone number"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />

                        </div>



                        <div className="input-group">

                            <label>
                                Course
                            </label>

                            <input
                                type="text"
                                name="course"
                                placeholder="Enter course name"
                                value={formData.course}
                                onChange={handleChange}
                                required
                            />

                        </div>



                        <div className="input-group">

                            <label>
                                Age
                            </label>

                            <input
                                type="number"
                                name="age"
                                placeholder="Enter age"
                                min="1"
                                max="100"
                                value={formData.age}
                                onChange={handleChange}
                                required
                            />

                        </div>



                        <button
                            type="submit"
                            className="submit-button"
                            disabled={loading}
                        >

                            {loading
                                ? "Adding Student..."
                                : "Add Student"
                            }

                        </button>


                    </form>


                </div>


            </section>


        </main>

    );

}


export default Home;