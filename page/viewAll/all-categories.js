// all-categories.js

const categories = [
  { name: "Men's Clothing", image: "https://via.placeholder.com/220x180?text=Men" },
  { name: "Women's Clothing", image: "https://via.placeholder.com/220x180?text=Women" },
  { name: "Kids", image: "https://via.placeholder.com/220x180?text=Kids" },
  { name: "Accessories", image: "https://via.placeholder.com/220x180?text=Accessories" },
  { name: "Shoes", image: "https://via.placeholder.com/220x180?text=Shoes" },
  { name: "Winter Wear", image: "https://via.placeholder.com/220x180?text=Winter+Wear" },
  { name: "Summer Wear", image: "https://via.placeholder.com/220x180?text=Summer+Wear" },
  { name: "Formal", image: "https://via.placeholder.com/220x180?text=Formal" },
];

const grid = document.getElementById('categoryGrid');

categories.forEach(cat => {
  const card = document.createElement('div');
  card.className = 'category-card';
  card.innerHTML = `
    <img src="${cat.image}" alt="${cat.name}">
    <h3>${cat.name}</h3>
  `;
  card.addEventListener('click', () => {
    alert(`You clicked on ${cat.name}`);
  });
  grid.appendChild(card);
});
