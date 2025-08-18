import axios  from "axios";

const API_KEY = import.meta.env.VITE_STRIPE_API_KEY;
const axiosClient = axios.create({
    baseURL :"http://localhost:1337/api/",
    headers : {
        "Content-Type" : "application/json",
        "Authorization" : `Bearer ${API_KEY}`
    }
})

const createNewResume = (data) => axiosClient.post('/user-resumes',data)

const GetUserResumes = (userEmail) => axiosClient.get('/user-resumes?filters[userEmail][$eq]='+userEmail)
const updateResumeDetail = (id,data) => axiosClient.put('/user-resumes/'+id,data);

export default {
    createNewResume,
    GetUserResumes,
    updateResumeDetail
}