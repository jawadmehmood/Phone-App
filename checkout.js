let getDataFromLocalStorage = JSON.parse(localStorage.getItem('cartItem'));

const items = document.querySelector('#items');
const totalAmount = document.querySelector('#total-amount');

function renderItems(){
    let total = 0;
    if(getDataFromLocalStorage != null && getDataFromLocalStorage.length > 0){
        for(let i = 0; i < getDataFromLocalStorage.length; i++){
            total += getDataFromLocalStorage[i].price * getDataFromLocalStorage[i].quantity
            items.innerHTML += `
            <div class="border border-light rounded m-5 p-3">
            <h1>Model: ${getDataFromLocalStorage[i].brand + ' ' + getDataFromLocalStorage[i].model}</h1>
            <h1>Quantity:
            <button class="btn btn-primary" onclick="addQuantity(${i})">+</button>
            ${getDataFromLocalStorage[i].quantity}
            <button class="btn btn-primary" onclick="lessQuantity(${i})">-</button>
            </h1>
            <h1>Price: ${getDataFromLocalStorage[i].price * getDataFromLocalStorage[i].quantity}</h1>
            <button class="btn btn-danger" onclick="deleteItem(${i})">delete</button>
            </div>

            `
        }
        totalAmount.innerHTML = `Total Amount = ${total}`
    }
    else{
        console.log('cart item empty ha maalik')
        items.innerHTML = `
        <h3 class="text-center">No Item Found...</h3>
        `
    }
}

renderItems()

function addQuantity(i){
    items.innerHTML = '';
    getDataFromLocalStorage[i].quantity += 1
    renderItems();
}

function lessQuantity(i){
    items.innerHTML = ''
    if(getDataFromLocalStorage[i].quantity <= 1){
        getDataFromLocalStorage.splice(i , 1);

    }else{
        getDataFromLocalStorage[i].quantity -= 1
    }
    renderItems()
}

function deleteItem(i){
    items.innerHTML = ''
    getDataFromLocalStorage.splice(i , 1);
    totalAmount.innerHTML = ''
    renderItems()
}