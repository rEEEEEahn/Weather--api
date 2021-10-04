var searchFormEl = document.querySelector('#submit-city');

function handleSearchFormSubmit(event) {
  event.preventDefault();

  var searchInputVal = document.querySelector('#search-city').value;

  if (!searchInputVal) {
    console.error('You need a search input value!');
    return;
  }
console.log(searchInputVal)
  var queryString =
    './search-results.html?q=' + searchInputVal + '&format=' + formatInputVal;

  location.assign(queryString);
}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);
