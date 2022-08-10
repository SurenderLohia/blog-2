const getPostItems = (posts, searchText, userId) => {
  if(searchText) {
    return posts.filter((post) => {
      return post.title.includes(searchText) || post.body.includes(searchText);
    });
  }

  if(userId) {
    if(userId === 'all') {
      return posts;    
    }
    return posts.filter((post) => {
      return post.userId == userId;
    });
  }

  return posts;
}

export const Posts = (posts, searchText, userId) => {
  const postItems = getPostItems(posts, searchText, userId);
  const postHtml = postItems.map((post) => `<div class="post-list-item">
  <h3 class="post-title">${post.title}</h3>
  <h5 class="posted-by">Posted by User-${post.userId}</h5>
  <p>${post.body}</p>
  <button class="button">Read More...</button>
</div>`);
  return postHtml.join('');
}