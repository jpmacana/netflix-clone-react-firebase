// eslint-disable-next-line no-unused-vars
const key = 'dfbb4e76e0906f8e15033548494ec73c';

const requests = {
	requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
	requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`,
	requestTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`,
	requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`,
	requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=horror`,
};

export default requests;
