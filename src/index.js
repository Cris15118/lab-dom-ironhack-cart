// ITERATION 1

function updateSubtotal(product) {
  
  console.log('Calculating subtotal, yey!');

  let price = product.querySelector(".price span")
  let quantity = product.querySelector(".quantity input")

  let subTottalPrice = price.innerText * quantity.value

  let subtotalDOM = product.querySelector(".subtotal span")

  subtotalDOM.innerText= subTottalPrice
  return subTottalPrice

  //... your code goes here
}

function calculateAll() {


  let addNewProduct = document.querySelectorAll(".product")
  let counter = 0;
  addNewProduct.forEach((eachProduct)=>{
    counter = counter + updateSubtotal(eachProduct)
  })
  console.log(counter)

  let totalDOM = document.querySelector("#total-value span")

  totalDOM.innerText = counter
  console.log(totalDOM)




  
  

  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
 // const singleProduct = document.querySelector('.product');
 // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  
  event.currentTarget.parentNode.remove()
  //... your code goes here
}

let borrarDOM = document.querySelector(".btn btn-remove button")



// ITERATION 5

function createProduct() {

  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
