let products = [
    {
        name : "Bing chling 12",
        des : "kem san xuat tu trung quoc",
        img : "/img/bing-1.jpg"
    },
    {
        name : "Bing chling 2",
        des : "kem san xuat tu trung quoc",
        img : "/img/bing-1.jpg"
    },
    {
        name : "Bing chling 32",
        des : "kem san xuat tu trung quoc",
        img : "/img/bing-1.jpg"
    },
    {
        name : "Bing chling 43",
        des : "kem san xuat tu trung quoc",
        img : "/img/bing-1.jpg"
    },
    {
        name : "Bing chling 54",
        des : "kem san xuat tu trung quoc",
        img : "/img/bing-1.jpg"
    },
    {
        name : "Bing chling 6",
        des : "kem san xuat tu trung quoc",
        img : "/img/bing-1.jpg"
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
    loadCarts()
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
                            <button style="width: 250px;" class="btn btn-light btn-add" value = ${index}>Thêm vào giỏ</button>
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