// wishlist.js
function removeItem(button) {
  const item = button.closest('.wishlist-item');
  item.remove();
}
