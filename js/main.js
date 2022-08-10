import { LeftNav } from "./components/LeftNav.js";
import {Posts} from './components/Posts.js';

(() => {
  const app = {};

  async function renderComponents() {
    const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await postsResponse.json();

    const leftNavContainer = document.getElementById('left-nav');
    leftNavContainer.innerHTML = LeftNav(posts);

    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = Posts(posts);
  }


  renderComponents();
})();