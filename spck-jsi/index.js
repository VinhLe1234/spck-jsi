let products = [
    {
       name: "Airmax 90 Futura",
       des: "4.109.000 ₫",
       img: "./img/Airmax.jpg",
    },
    {
       name: "City Rep TR",
       des: "1.909.000 ₫",
       img: "./img/CityrepTR.jpg",
    },
    {
       name: "Revolution",
       des: "1.859.000 ₫",
       img: "./img/Revolution.jpg",
    },
    {
       name: "Spark Women",
       des: "2.876.299 ₫",
       img: "./img/Spark-Women.jpg",
    },
    {
       name: "Pegasus 39",
       des: "2.190.000 ₫",
       img: "./img/Pegasus39.jpg",
    },
    {
       name: "Airzoom G.T Jump",
       des: "4.290.000 ₫",
       img: "./img/Airzoom.jpg",
    },
    {
       name: "Airmax 270",
       des: "4.659.000 ₫",
       img: "./img/Airmax270.jpg"
    },
    {
       name: "Streakfly Road",
       des: "3.289.299 ₫",
       img: "./img/Streakflyroad.jpg",
    },
  ]

  // ====== search =============
let btn = document.getElementById('btn')
btn.onclick = function (){
    let value = document.getElementById('search').value
    let arr = []
    for(i of products){
        if(i.name.indexOf(value) >= 0){
            arr.push(i);
        }
    }
    load(arr)
}

// ===================================
// ================= khoi tao du lieu =============
// let carts = []
// let cartsJson = JSON.stringify(carts)
// localStorage.setItem('carts',cartsJson)

// let productJson = JSON.stringify(products)
// localStorage.setItem('products',productJson)

// let p = localStorage.getItem('products');

// console.log(JSON.parse(p))

//================== Add to Carts ================
let carts = JSON.parse(localStorage.getItem('carts'))
let items = document.querySelector('.items')
items.addEventListener('click', function(e){
    if(e.srcElement.tagName == "BUTTON"){
        let i = e.srcElement.value
        carts.push(products[i])
        console.log(carts)
        let cartsJson = JSON.stringify(carts)
        localStorage.setItem('carts', cartsJson)
    }
    // loadCarts()
})
// ====================================

// ====================================
function load(arr){
    let items = document.querySelector('.items')
    let html = "";
    let count = 1;
    let index = 0;
    for(i of arr){
        if(count == 1){
            html += `<div class="row" style="margin-top: 10px;">`  
        }
        html += 
        `
            <div class="col-3">
                    <div class="item">
                        <div class="product-view">
                            <img style="width: 250px;" src="${i.img}" alt="">
                        </div>
                        <div class="content">
                            <h3>${i.name}</h3>
                            <p>${i.des}</p>
                            <button style="width: 250px;" class="addbt" value = ${index}>Thêm vào giỏ</button>
                        </div>
                    </div>
                </div>
        ` 
        if(count == 4){
            html +=`</div>`
            count = 0;
        }
        count++;
        index++;
    }
    items.innerHTML = html
}


load(products)