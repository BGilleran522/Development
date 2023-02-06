import axios from 'axios';

const searchImages = async(term) => {
 const myUrl = 'https://api.unsplash.com/search/photos'
 const response = await axios.get(myUrl, {
    headers: {
        Authorization: 'Client-ID {app-key}'
    },
    params: {
        query: term,
    },
 });
 console.log(response.data.results);
 
 return response.data.results;
 
};

export default searchImages;