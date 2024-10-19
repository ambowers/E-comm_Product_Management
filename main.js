// Task 2 add event listeners for product selection

//product data
const productOptions = {
    geometric: {price: 34.99, stock:true},
    sunset:{price:24.99, stock:false},
    pearl:{price:29.99, stock:true},
    floral:{price:34.99, stock:true}
};
//elements for price, design, pruchasing, and stock
let priceElement = document.getElementById('product-price');
let colorOptions = document.getElementById('color');
let purchaseButton = document.getElementById('purchase_button');
let stockStatusElement = document.getElementById('stock-status')

function updateProductDetials(){
    let selectedColor = colorSelection.value;
    let slectedProduct = productOptions[selectedColor];
// if else to disable the pruchase button if product is out of stock
if (slectedProduct.stock){
    stockStatusElement.textContent= "In Stock";
    stockStatusElement.style.color= 'green';
    purchaseButton.disabled= false;
} else{
    stockStatusElement.textContent= "Out of Stock";
    stockStatusElement.style.color='red';
    purchaseButton.disabled = true;
}

}