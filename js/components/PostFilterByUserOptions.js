export const PostFilterByUserOptions = (posts) => {
  const userIds = [...new Set(posts.map((post) => post.userId))];
  const options = userIds.map((userId) => `<option value="${userId}">User-${userId}</option>`);
  const defaultOption = `<option value="all">All User</option>`;
  options.unshift(defaultOption);
  return options.join('');
}