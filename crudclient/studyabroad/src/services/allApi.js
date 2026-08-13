const BASE_URL = import.meta.env.VITE_API_URL;


// =========================
// GET STUDENTS
// =========================

export const getStudentsApi = async () => {

    const response = await fetch(
        `${BASE_URL}/students/`
    );


    if (!response.ok) {

        throw new Error(
            "Unable to fetch students"
        );

    }


    return await response.json();

};



// =========================
// ADD STUDENT
// =========================

export const addStudentApi = async (
    studentData
) => {

    const response = await fetch(

        `${BASE_URL}/students/`,

        {
            method: "POST",

            headers: {

                "Content-Type":
                    "application/json"

            },

            body:
                JSON.stringify(studentData)

        }

    );


    const data =
        await response.json();


    if (!response.ok) {

        const errors =
            Object.values(data)
                .flat()
                .join(" ");


        throw new Error(
            errors ||
            "Unable to add student"
        );

    }


    return data;

};



// =========================
// DELETE STUDENT
// =========================

export const deleteStudentApi = async (
    id
) => {

    const response = await fetch(

        `${BASE_URL}/students/${id}/`,

        {
            method: "DELETE"
        }

    );


    if (!response.ok) {

        throw new Error(
            "Unable to delete student"
        );

    }


    return true;

};