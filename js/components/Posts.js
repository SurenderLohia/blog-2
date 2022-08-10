export const Posts = (posts) => {
  const postItems = posts.slice(0, 9).map((post) => `<div class="post-list-item">
  <h3 class="post-title">${post.title}</h3>
  <p>${post.body}</p>
  <button class="button">Read More...</button>
</div>`);
  return postItems.join('');
}