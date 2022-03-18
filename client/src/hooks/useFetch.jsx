import { useState, useEffect } from "react";

const API_KEY = 'NQHgDM5cI9M6vPlGXRoeHplQKndDRrZl';


const useFetch = ({ keyword }) => {
    const [gifUrl, setGifUrl] = useState('');

    const fetchGifs = async () => {
        try {
            const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword.split(' ').join('')}&limit=1`);
            // console.log(response.url);
            // const { data } = response.json();
            const giphyAPI = response.url;

            function setup(){

                fetch(giphyAPI)
                .then(response => {
                    return response.json();
                })
                .then(json => {
                    setGifUrl(json.data[0].images.downsized_medium.url);
                })

                .catch(err => console.log(err));
            }

            setup();
        } catch (error) {
            console.log(error);
            setGifUrl("https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284");
        }
    }

    useEffect(() => {
        if(keyword) fetchGifs();
    }, [keyword]);

    return gifUrl;
}

export default useFetch;