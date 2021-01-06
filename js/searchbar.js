window.onload = () => {
  // Search bar
  let isSearchBarOpen = false;  
  let searchHook = document.querySelector('.search-hook')
  let searchBar = document.querySelector('.search-bar')
  let searchBarCloseButton = document.querySelector('.close-search-bar')

  const searchBarToggler = () => {
      searchBar.classList.toggle('disabled')
      searchHook.classList.toggle('disabled')
  }

  searchHook.addEventListener('click', () => {
      searchBarToggler()
  })

  searchBarCloseButton.addEventListener('click', () => {
      searchBarToggler()
  })
}