import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzJlN2Y2YTI5ZTI3NGM0ODdiMzM5MjgzMGEwMDI4OCIsInN1YiI6IjY1MDQ2N2UxZGI0ZWQ2MTAzODU3OGMzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MSXZnGsYxXH-Lwu_zK_ocsoFF-SS4X8OuIJRtZM1-p4`
  }
})

export default api