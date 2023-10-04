let filteredProducts = [...products];
console.log(filteredProducts)

const productsContainer = document.querySelector('.products-container');

const displayProducts = () => {
  if (filteredProducts.length < 1) {
    productsContainer.innerHTML = `<h6>Sorry, no products matched your search</h6>`;
    return;
  }
  productsContainer.innerHTML = filteredProducts
    .map((product) => {
      const { type, name, imageSrc, rating,time } = product;
      return `<article class="product">
          <img
            src="${imageSrc}"
            class="product-img img"
            alt=""
          />
          <footer>
          <h6 class="product-type">${type}</h6>
          <div class="row-2">
            <h5 class="product-name">${name}</h5>
            <span class="fa fa-star checked">${rating}</span>
          </div>
          <div class="row-2">
            <h5 class="product-time">${time}</h5>
            <i class="fa-regular fa-heart"></i>
          </div>
          </footer>
        </article>`;
    })
    .join('');
};

displayProducts();

// Text Filter

const form = document.querySelector('.input-form');
const searchInput = document.querySelector('.search-input');

form.addEventListener('keyup', () => {
  const inputValue = searchInput.value;
  filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(inputValue);
  });
  displayProducts();
});

const filterBtn = document.querySelector(".btns")
const displayButtons = () => {
  const buttons = [
    'All racipes',
    ...new Set(products.map((product) => product.type)),
  ];
  console.log(buttons);
  filterBtn.innerHTML = buttons
    .map((btn) => {
      return `<button class='btn' data-id="${btn}">${btn}</button>`;
    })
    .join('');
};

displayButtons();

filterBtn.addEventListener('click', (e) => {
  const el = e.target;
  if (el.classList.contains('btn')) {
    if (el.dataset.id === 'All racipes') {
      filteredProducts = [...products];
    } else {
      filteredProducts = products.filter((product) => {
        return product.type === el.dataset.id;
      });
    }
    searchInput.value = '';
    displayProducts();
  }
});
