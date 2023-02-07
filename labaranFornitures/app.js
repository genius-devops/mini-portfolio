// variables

const cartBtn = document.querySelector(".cart-btn");
const clseCartBtn = document.querySelector(".close-cart");
const clearCartBtn = document.querySelector(".clear-cart");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartcontent = document.querySelector(".cart-content");
const productsDOM = document.querySelector(".products-center");

// cart
let cart = [];
// buttons
let buttonsDOM = [];

// getting the products
class Products{
 async getProducts() {
  try {
   let result = await fetch("products.json");
   let data = await result.json();

   let products = data.items;
   products = products.map(item => {

   })
  }
 }
}
class UI {
 displayProducts(products) {
  let result = "";
  products.forEach(product => {
   result += `
    <!--================single product======================-->
      <article class="product">
        <div class="img-container">
          <img 
          src=${product.image} 
          alt="executive parlor" 
          class="product-img"
          />
          <button class="bag-btn" data-id=${product.id}>
            <i class="fas fa-shopping-cart"></i>
            add to cart
          </button>
        </div>
        <h3>${product.title}</h3>
        <h4>$${product.price}</h4>
      </article>
      <!--================end of single product===============-->

   `;
  });
  productsDOM.innerHTML = result;
 }
 getBagButtons() {
  const buttons = [...document.querySelectorAll(".bag-btn")];
  buttonsDOM = buttons
  buttons.forEach(button => {
   let id = button.dataset.id;
   let inCart = cart.find(item => item.id === id);
   if (inCart) {
    button.innerText = "In Cart";
    button.disabled = true;
   }
    button.addEventListiner("click", (event) => {
     event.target.innerText = "In Cart";
     event.target.disabled = true;
     // get product from products
     // add product to the cart
     // add amount to the cart
     // save cart values
     // display cart item
    }); 
   
  });
 }
}
// local storage
class Storage {
 static saveProducts(products) {
  localStorage.setItem("products", JSON.stringify(products));
 }
}

document.addEventListener("DOMContentLoaded", () => {
 const ui = new UI();
 const products = new Products();

 // get all products
 products.getProducts().then(products => {
  ui.displayProducts(products);
  Storage.saveProducts(products);
 }).then(() => {
  // ui.getBagButtons(btns)
 });
});