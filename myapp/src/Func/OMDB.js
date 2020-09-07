export default class Omdb {
  constructor(key) {
    this.key = key;
  }
  search(searchText) {
    const promise = fetch(
      "http://www.omdbapi.com/?apikey=" +
        this.key +
        "&&s=" +
        searchText +
        "&&t=movie"
    );
    return promise;
  }
}
