
const searchIcon = document.getElementById('search-icon');
const searchBar = document.getElementById('search-bar');

searchIcon.addEventListener('click', function() {
    searchBar.style.display = (searchBar.style.display === 'block') ? 'none' : 'block';
});
