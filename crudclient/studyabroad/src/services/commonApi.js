import axios from "axios";


const commonApi = async (
    reqUrl,
    reqMethod,
    reqBody = {},
    reqHeader = {},
    username = null,
    password = null
) => {

    const headers = {
        ...reqHeader
    };


    // Basic Authentication
    if (username && password) {

        const encodedCredentials =
            btoa(`${username}:${password}`);

        headers.Authorization =
            `Basic ${encodedCredentials}`;
    }


    const config = {

        url: reqUrl,

        method: reqMethod,

        data: reqBody,

        headers: headers

    };


    console.log("URL:", reqUrl);
    console.log("USERNAME:", username);
    console.log(
        "PASSWORD EXISTS:",
        Boolean(password)
    );


    return await axios(config);
};


export default commonApi;