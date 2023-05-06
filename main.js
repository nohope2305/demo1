let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'Bàn phím razer',
        tag: 'razer black window',
        price: 20,
        inCart:0
    },
    {
        name: 'Màn hình acer',
        tag: 'Màn hình acer 24inch 165hz',
        price: 150,
        inCart:0
    },
    {
        name: 'Keyboard logitech pro x',
        tag: 'keyboard',
        price: 15,
        inCart:0
    },
    {
        name: 'Macbook m1',
        tag: 'black macbook',
        price: 20,
        inCart:0
    },
    {
        name: 'tai nghe dare u',
        tag: 'pink',
        price: 15,
        inCart:0
    },
    
    {
        name: 'Bàn phím razer',
        tag: 'black',
        price: 15,
        inCart:0
    },
    
];
for (let i=0; i < carts.length; i++) {
   carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i])
   })
}
function onLoadCartNumbers() {
   let productNumbers = localStorage.getItem('cartNumbers');

   if (productNumbers) {
    document.querySelector('.cart span ').textContent = productNumbers;
   }
}
function cartNumbers(product) {
    
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if( productNumbers ) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelectorAll('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelectorAll('.cart span').textContent = 
        1;
    }
    SetItems(product);
}
function SetItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    
    if(cartItems != null) {

        if(cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;

    } else {
        product.inCart = 1;
        cartItems = {
        [product.tag]: product
        }
    } 
   
    localStorage.setItem("productsInCart", JSON.stringify
    (cartItems));
}
function totalCost(product) {
    //console.log("The product price is", product.price);
    let cartCost= localStorage.getItem('totalCost');

    console.log("My cartCost is", cartCost);
    console.log(typeof cartCost);

    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + 
        product.price);
    } else {
        localStorage.setItem("totalCost",product.price)
    }
}
function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector
    (".products");
    console.log(cartItems);
    if(cartItems && productContainer ) {
       productContainer.innerHTML = '';
       Object.values(cartItems).map(item => {
        productContainer.innerHTML += `
       <div class="product">
       <ion-icon name="close-circle"></ion-icon>
        <img src="./imames/${item.tag}.jpg">
        <span>${item.name}</span>
        
       `
    });

    }
}
onLoadCartNumbers();
displayCart();