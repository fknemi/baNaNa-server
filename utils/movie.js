import axios from "axios";
async function getMovieDetails(title, year) {
    const encodedTitle = encodeURIComponent(title);
    let url = `http://www.omdbapi.com/?t=${encodedTitle}&plot=full&apikey=${process.env.OMDB_API_KEY}`
    if (year) {
        url += `&y=${year}`
    }

    let { data } = await axios.get(url)
    console.log(data)
    return data

}


async function getNowPlaying(location, language, shortCountryCode) {

}
async function getComingSoon(location, language, shortCountryCode) {

}












export {
    getMovieDetails,
    getNowPlaying,
    getComingSoon
}

