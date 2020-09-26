import debounce from 'lodash.debounce';

let query;
const input = document.getElementById('query-film');
console.log(input);
input.addEventListener('input', debounce(() => {
  console.log(input.value);
  query = input.value;
}, 500))

fetch(`https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/${query}`, {
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
    "x-rapidapi-key": "7c7ae4c279msha15b89a719fab95p11a7cfjsn055b8825a58a"
  }
})
  .then(response => response.json())
  .then(data => console.log(data))

