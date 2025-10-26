import axios from 'axios';

// acceso a mi api:
export default axios.create({
    baseURL:'http://localhost:8080'
});

