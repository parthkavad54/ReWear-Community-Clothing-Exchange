const products = [
  {
    name: "Black T-shirt",
    price: 18,
    oldPrice: 24,
    image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg",
  },
  {
    name: "White Sweatshirt",
    price: 18,
    oldPrice: 24,
    image: "https://images.pexels.com/photos/977702/pexels-photo-977702.jpeg",
  },
  {
    name: "Black Hoodie",
    price: 18,
    oldPrice: 24,
    image: "https://images.pexels.com/photos/7210744/pexels-photo-7210744.jpeg",
  },
  {
    name: "Cream Outfit",
    price: 18,
    oldPrice: 24,
    image: "https://images.pexels.com/photos/8154573/pexels-photo-8154573.jpeg",
  },
];

const itemGrid = document.getElementById("itemGrid");
const imageThumbnails = document.getElementById("imageThumbnails");
const mainImage = document.getElementById("mainImage");

function updateMainProduct(product) {
  mainImage.src = product.image;
  document.getElementById("productName").innerText = product.name;
  document.getElementById("productDescription").innerText = `This is the latest ${product.name}. Trendy, comfortable and affordable.`;
}

// Generate both thumbnails and item cards
products.forEach((item) => {
  // Thumbnail
  const thumb = document.createElement("img");
  thumb.src = item.image;
  thumb.alt = item.name;
  thumb.addEventListener("click", () => updateMainProduct(item));
  imageThumbnails.appendChild(thumb);

  // Item Card
  const card = document.createElement("div");
  card.className = "item-card";
  card.innerHTML = `
    <img src="${item.image}" alt="${item.name}" />
    <p>${item.name}</p>
    <p><s>$${item.oldPrice}</s> <strong>$${item.price}</strong> <span class="discount">10% OFF</span></p>
  `;
  card.addEventListener("click", () => updateMainProduct(item));
  itemGrid.appendChild(card);
});
