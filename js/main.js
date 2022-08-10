import { LeftNav } from "./components/LeftNav.js";
import { Posts } from './components/Posts.js';
import { PostFilterByUserOptions } from './components/PostFilterByUserOptions.js';

(() => {
  const app = {};

  // Containers
  const leftNavContainer = document.getElementById('left-nav');
  const postsContainer = document.getElementById('posts');

  // Dom elements
  const searchInput = document.getElementById('search-input');
  const postFilterSelectBox = document.getElementById('post-filter-by-user');

  async function renderComponents() {
    const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await postsResponse.json();
    app.posts = posts.slice(0, 19);
    
    leftNavContainer.innerHTML = LeftNav(app.posts);
    postsContainer.innerHTML = Posts(app.posts);
    postFilterSelectBox.innerHTML = PostFilterByUserOptions(app.posts);
  }

  // Search
  searchInput.addEventListener('input', (event) => {
    const searchText = event.target.value;
    postsContainer.innerHTML = Posts(app.posts, searchText);
  });

  // Filter
  postFilterSelectBox.addEventListener('change', (event) => {
    const userId = event.target.value;
    postsContainer.innerHTML = Posts(app.posts, '', userId);
  });

  renderComponents();
})();