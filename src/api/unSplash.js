import axios from 'axios';




export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 
            'Client-ID 54295273aee91bed81f486ab4630b2d96baf61d2705764d655910e37ac871c08' ,
    }
});