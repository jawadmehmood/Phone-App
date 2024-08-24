const phoneDetails = [
    {
        brand: 'Samsung',
        model: 'Galaxy A73',
        ram: 8,
        rom: 256,
        camera: '108MP',
        price: 170500
    },
    {
        brand: 'Samsung',
        model: 'Galaxy A54',
        ram: 8,
        rom: 256,
        camera: '50MP',
        price: 140000
    },
    {
        brand: 'Samsung',
        model: 'Galaxy A55',
        ram: 8,
        rom: 256,
        camera: '50MP',
        price: 140000
    },
    {
        brand: 'Samsung',
        model: 'Galaxy A53',
        ram: 8,
        rom: 128,
        camera: '64MP',
        price: 134000
    },
    {
        brand: 'Samsung',
        model: 'Galaxy A35',
        ram: 8,
        rom: 256,
        camera: '50MP',
        price: 120000
    },
    {
        brand: 'Samsung',
        model: 'Galaxy A34',
        ram: 8,
        rom: 128,
        camera: '48MP',
        price: 115000
    },
    {
        brand: 'Samsung',
        model: 'Gakaxy A25',
        ram: 8,
        rom: 256,
        camera: '50MP',
        price: 99000
    },
    {
        brand: 'Samsung',
        model: 'Galaxy A72',
        ram: 8,
        rom: 128,
        camera: '64MP',
        price: 83000
    }
]

const getDataFromLocalStorage = JSON.parse(localStorage.getItem('cartItem'))

let arr = [];
if(getDataFromLocalStorage != null){
    arr = getDataFromLocalStorage
}

const products = document.getElementById('products');

for(let i = 0; i < phoneDetails.length; i++){
    products.innerHTML += `
    <div class="card" style="width: 18rem;">
            <div class="card-body bg-dark text-light border border-light-subtle border-1 rounded">
              <h5 class="card-title">${phoneDetails[i].brand} ${phoneDetails[i].model}</h5>
              <h6 class="card-subtitle mt-2">Rs. ${phoneDetails[i].price}</h6>
              <button class="btn btn-primary mt-4" onclick="addToCart(${i})">Add to Cart</button>
            </div>
        </div>
    `
}

function addToCart(index){
    if(arr.includes(phoneDetails[index])){
        phoneDetails[index].quantity += 1;
    }
    else{
        phoneDetails[index].quantity = 1;
        arr.push(phoneDetails[index]);
    }
    console.log(arr);    
}

const checkoutBtn = document.querySelector('#checkout-btn');

checkoutBtn.addEventListener('click' , function(){
    localStorage.setItem('cartItem' , JSON.stringify(arr));
    window.location = 'checkout.html';
})