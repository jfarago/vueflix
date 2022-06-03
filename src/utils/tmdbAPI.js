const AXIOS = require('axios').default;

const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_IMAGE_URL = 'https://image.tmdb.org/t/p/original';

export async function getPopularMedia() {
  console.log(process.env);
  let response = [];
  try {
    const media = await AXIOS.get(`${TMDB_BASE_URL}/trending/all/day?api_key=${process.env.VUE_APP_TMDB_API_KEY}`);
    response = media.data.results.map((item) => ({
      posterURL: TMDB_IMAGE_URL + item.poster_path || '',
      mediaType: item.media_type,
      name: item.name || item.title,
      id: item.id
    }));
  } catch (error) {
    console.error(error);
  }

  return response;
}
