import axios from "axios";

export default {
  //headlines= TOP news headlines. Uses the 2-letter ISO 3166-1 code of the country

  getTopHeadlines: function () {
    return axios.get("/api/getnews");
  },

  getSearchedHeadlines: function (query) {
    return axios.get(`/api/getsearchednews/${query}`);
  },

  //i.e. Top business headlines from Germany
  headlinesCountryAndCategory: function (countryCode, category) {
    return axios.get(
      "http://newsapi.org/v2/top-headlines?country=" +
        countryCode +
        "&category=" +
        category +
        "&pageSize=100&apiKey=" +
        process.env.REACT_APP_API_KEY
    );
  },

  //i.e. Top headlines from BBC News. (You can't mix this param with the country or category params.)
  headlinesSources: function (sources) {
    return axios.get(
      "http://newsapi.org/v2/top-headlines?sources=" +
        sources +
        "&pageSize=100&apiKey=" +
        process.env.REACT_APP_API_KEY
    );
  },

  //i.e. Top headlines about Trump
  headlinesQuery: function (query) {
    return axios.get(
      "http://newsapi.org/v2/top-headlines?q=" +
        query +
        "&pageSize=100&apiKey=" +
        process.env.REACT_APP_API_KEY
    );
  },

  //everything= breaking news as well as lesser articles. Keywords or phrases to search for in the article title and body. i.e. All articles about Bitcoin
  everythingQuery: function (query) {
    return axios.get(
      "http://newsapi.org/v2/everything?q=" +
        query +
        "&pageSize=100&apiKey=" +
        process.env.REACT_APP_API_KEY
    );
  },

  //Keywords or phrases to search for in the article title only.
  everythingQueryinTitle: function (query) {
    return axios.get(
      "http://newsapi.org/v2/everything?qInTitle=" +
        query +
        "&pageSize=100&apiKey=" +
        process.env.REACT_APP_API_KEY
    );
  },

  //A comma-seperated string of identifiers (maximum 20) for the news sources or blogs you want headlines from.
  everythingSources: function (sources) {
    return axios.get(
      "http://newsapi.org/v2/everything?sources=" +
        sources +
        "&pageSize=100&apiKey=" +
        process.env.REACT_APP_API_KEY
    );
  },

  //Query with from/to dates and optional time of the oldest/newest articles allowed. This should be in ISO 8601 format (e.g. 2020-09-10 or 2020-09-10T00:11:56).
  everythingQueryFromTo: function (query, from, to) {
    return axios.get(
      "http://newsapi.org/v2/everything?q=" +
        query +
        "&from=" +
        from +
        "&to=" +
        to +
        "&pageSize=100&apiKey=" +
        process.env.REACT_APP_API_KEY
    );
  },

  //Query and sort (relevancy, popularity, publishedAt)
  everythingQuerySort: function (query, sortBy) {
    return axios.get(
      "http://newsapi.org/v2/everything?q=" +
        query +
        "&sortBy=" +
        sortBy +
        "&pageSize=100&apiKey=" +
        process.env.REACT_APP_API_KEY
    );
  },

  //Combines the above two. I.e. All articles mentioning Apple from yesterday, sorted by popular publishers first
  everythingQueryFromToSort: function (query, from, to, sortBy) {
    return axios.get(
      "http://newsapi.org/v2/everything?q=" +
        query +
        "&from=" +
        from +
        "&to=" +
        to +
        "&sortBy=" +
        sortBy +
        "&pageSize=100&apiKey=" +
        process.env.REACT_APP_API_KEY
    );
  },

  //API routes to mongo db

  // Get all aticles
  saveArticle: function (articleData) {
    return axios.post("/api/articles", articleData);
  },

  //get all articles
  getArticles: function () {
    return axios.get("/api/articles");
  },

  // Gets the article with the given id
  getArticle: function (id) {
    return axios.get("/api/articles/" + id);
  },

  // Romoves the article with the given id
  deleteArticle: function (id) {
    return axios.delete("/api/articles/" + id);
  },

  signUpUser: function (userData) {
    return axios.post("/api/users", userData);
  },
};
