import axios from 'axios';

// acceso a mi api:
export default axios.create({
    baseURL:'https://c34e-82-158-129-184.ngrok-free.app',
    headers:{'ngrok-skip-browser-warning': true}
});

