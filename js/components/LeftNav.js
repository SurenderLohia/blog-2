export const LeftNav = (posts) => {
  const postItems = posts.map((post) => `<a class='aside-nav-item' href='#'>${post.title}</a>`);
  return postItems.join('');
}