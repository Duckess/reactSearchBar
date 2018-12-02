export default class SearchService {
	constructor() {
		this.baseRoute = 'http://localhost:3000';
		this.apiSearchRoute = '/search';
	}

	/* Fetching data from api */
	getSearchResults(query) {
		return fetch(`${this.baseRoute}${this.apiSearchRoute}?q=${query}`)
			.then(response => response.json())
	}
};
