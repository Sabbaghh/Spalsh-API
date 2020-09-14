import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID MQMTLN87zNqV6qyUy5roHiaTOTqZTUo_430xrIMx2Dc'
    }
})