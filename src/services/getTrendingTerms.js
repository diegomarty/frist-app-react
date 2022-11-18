import {API_KEY, API_URL} from './settings'

const fromApiResponseToGifs = apiResponse => {
    const {data = []} = apiResponse
    return data
}

export default function getTrendingTerms() {
    const giphyRoute = `${API_URL}/trending/searches?api_key=${API_KEY}`;

    return fetch(giphyRoute)
        .then(res => res.json())
        .then(fromApiResponseToGifs)
}
