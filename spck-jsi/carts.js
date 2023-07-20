

// khoi tao du lieu
// let carts = []
// let cartsJson = JSON.stringify(carts)
// localStorage.setItem('carts',cartsJson)
// let productJson = JSON.stringify(products)
// localStorage.setItem('products',productJson)
// let p = localStorage.getItem('products');
// console.log(JSON.parse(p))
//=====================Delete to cart================================
let carts = JSON.parse(localStorage.getItem('carts'))
let cartsList = document.querySelector('.carts')
cartsList.addEventListener('click', function(e){
    if(e.srcElement.tagName == "BUTTON"){
        let i = e.srcElement.value
        // alert(i);
        carts.splice(i,1)
        console.log(carts)
        let cartsJson = JSON.stringify(carts)
        localStorage.setItem('carts', cartsJson)
    }
    loadCarts()
})
// Hien thi san pham
function loadCarts(){
    let arr = JSON.parse(localStorage.getItem('carts'))
    let items1 = document.querySelector('.carts')
    console.log(arr)
    let html = "";  
    let index = 0;
    for(i of arr){
        html +=
        `
            <div class="col">
                    <div class="item">
                        <div class="product-view">
                            <img style="width: 250px;" src="${i.img}" alt="">
                        </div>
                        <div class="content">
                            <h3>${i.name}</h3>
                            <p>${i.des}</p>
                            <button class="btn btn-danger" value = ${index}>Remove</button>
                            <button id= "checkout" style="width: 90px; height: 38px; border-radius: 6px; background-color: #146c43; color: white">Checkout</button>
                        </div>
                    </div>
                </div>
        `         
        index++;
    }
    console.log(html)
    items1.innerHTML = html
}
loadCarts()


let btn = document.getElementById("checkout")
btn.onclick = function(){
    alert("Đặt hàng thành công. Cảm ơn quý khách")
    console.log(alert)
    }

if (carts == 2){
    html+=
    `
        <button class="checkout-all style="position: absolute; right:  0; bottom: 0;"">Checkout All Item</button>
    `
}
