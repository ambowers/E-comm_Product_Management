// Task 2 add event listeners for product selection


//product data
const productOptions = {
    geometric: {price: 34.99, stock:true},
    sunset:{price:34.99, stock:false},
    pearl:{price:34.99, stock:true},
    floral:{price:34.99, stock:true}
};
//elements for design, pruchasing, and stock
let colorOptions = document.getElementById('color');
let purchaseButton = document.getElementById('purchase_button');
let stockStatusElement = document.getElementById('stock-status')

function updateProductDetails(){
    let selectedColor = colorOptions.value;
    let slectedProduct = productOptions[selectedColor];



// Task 3 handle stock availibility


// if else to disable the pruchase button if product is out of stock
if (slectedProduct.stock){
    stockStatusElement.textContent= "In Stock";
    stockStatusElement.style.color= 'green'; // color for in stock
    purchaseButton.disabled= false;
} else{
    stockStatusElement.textContent= "Out of Stock";
    stockStatusElement.style.color='red'; // color for out of stock
    purchaseButton.disabled = true;
    }
}
// use addEventListener to attach events to the dropdown selector button
colorSelector.addEventListener('change', updateProductDetails);
updateProductDetails();//initialize



// Task 4 create a checkout event

// use addEventListener to attach events to the dropdown purchase button
purchaseButton.addEventListener('click',()=>   {
    let selectedColor = colorOptions.value // case design attempted to be pruchased
    let slectedProduct = productOptions[selectedColor] // checks the stock of the cases
    if (slectedProduct.stock){
        alert(`Thank you for purchasing ${selectedColor} Designer iPhone Case (iPhone 15)`)
    } else {
        alert(`We are sorry, currently ${selectedColor} is out of stock.`)
    }    
});
