export const LeftNav = (posts) => {
  const postItems = posts.slice(0, 9).map((post) => `<a class='aside-nav-item' href='#'>${post.title}</a>`);
  return postItems.join('');
}