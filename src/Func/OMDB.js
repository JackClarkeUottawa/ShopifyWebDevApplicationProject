export default class Omdb {
  constructor(key) {
    this.key = key;
  }
  search(searchText) {
    const promise = fetch(
      "https://www.omdbapi.com/?apikey=" +
        this.key +
        "&&s=" +
        searchText +
        "&&type=movie"
    );
    return promise;
  }
}
