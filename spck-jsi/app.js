let products = [
    {
        name : "Khoai tây chiên",
        img : "./img/khoaitay.jpg",
        des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur nam aperiam rem, magni minus maxime sunt eaque maiores tempore quidem?",
        price: "20k",
    },
    {
        name : "Gà rán",
        img : "./img/garan.jpg",
        des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur nam aperiam rem, magni minus maxime sunt eaque maiores tempore quidem?",
        price: "50k",
    },
    {
        name:"Gà viên",
        img:"./img/gavien.jpg",
        des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur nam aperiam rem, magni minus maxime sunt eaque maiores tempore quidem?",
        price: "40k",
    },
    {
        name: "Burger tôm",
        img:  "./img/burgertom.jpg",
        des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur nam aperiam rem, magni minus maxime sunt eaque maiores tempore quidem?",
        price: "50k",
    },
    {
        name: "Burger bò",
        img: "./img/burgerbo.jpg",
        des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur nam aperiam rem, magni minus maxime sunt eaque maiores tempore quidem?",
        price: "50k",
    },
    {
        name: "Burger gà",
        img: "./img/burgerga.jpg",
        des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur nam aperiam rem, magni minus maxime sunt eaque maiores tempore quidem?",
        price: "50k",
    },
    {
        name: "Mực rán",
        img: "./img/mucran.jpg",
        des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur nam aperiam rem, magni minus maxime sunt eaque maiores tempore quidem?",
        price: "35k",
    },
    {
        name:"Khoai tây nghiền",
        img: "./img/khoaitaynghien.jpg",
        des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur nam aperiam rem, magni minus maxime sunt eaque maiores tempore quidem?",
        price: "30k",
    },
    {
        name : "Salad trộn",
        img : "./img/salad.jpg",
        des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur nam aperiam rem, magni minus maxime sunt eaque maiores tempore quidem?",
        price: "20k",
    },
    {
        name : "Kem tươi cây",
        img : "./img/kem.jpg",
        des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur nam aperiam rem, magni minus maxime sunt eaque maiores tempore quidem?",
        price: "15k",
    },
    {
        name:"Bánh trứng",
        img:"./img/eggtart.jpg",
        des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur nam aperiam rem, magni minus maxime sunt eaque maiores tempore quidem?",
        price: "20k",
    },
    {
        name : "Phô mai que",
        img : "./img/phomai.jpg",
        des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur nam aperiam rem, magni minus maxime sunt eaque maiores tempore quidem?",
        price: "20k",
    },
    {
        name:"Phô mai viên",
        img:"./img/phomaivien.jpg",
        des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur nam aperiam rem, magni minus maxime sunt eaque maiores tempore quidem?",
        price: "30k",
    },
    {
        name:"Bánh mì kẹp xúc xích",
        img:"./img/banhmixucxich.jpg",
        des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur nam aperiam rem, magni minus maxime sunt eaque maiores tempore quidem?",
        price: "17k",
    },
    {
        name:"Bánh donut",
        img:"./img/donut.jpg",
        des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur nam aperiam rem, magni minus maxime sunt eaque maiores tempore quidem?",
        price: "15k",
    },
    {
        name : "Nước ngọt",
        img : "./img/nuocngot.jpg",
        des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur nam aperiam rem, magni minus maxime sunt eaque maiores tempore quidem?",
        price: "10k",
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
// khoi tao du lieu
// let carts = []
// let cartsJson = JSON.stringify(carts)
// localStorage.setItem('carts',cartsJson)
// let productJson = JSON.stringify(products)
// localStorage.setItem('products',productJson)
// let p = localStorage.getItem('products');
// console.log(JSON.parse(p))

//================== Add to Carts ================
let carts = JSON.parse(localStorage.getItem('carts'))
let items = document.querySelector('.products')
items.addEventListener('click', function(e){
    if(e.srcElement.tagName == "BUTTON"){
        let i = e.srcElement.value
        carts.push(products[i])
        console.log(products)
        let cartsJson = JSON.stringify(carts)
        localStorage.setItem('carts', cartsJson)        
    }
    // loadCarts()
})
//====================================
function load(arr){
    let items = document.querySelector('.products')
    let html = "";
    let count = 1;
    let index = 0;
    console.log(arr)
    for(i of arr){
        if(count == 1){
            html += `<div class="row" style="margin-top: 10px;">`  
        }
        html += 
        `
        <div class="col-3">
        <div class="food-card">
          <img class="food-img" src="${i.img}" alt="">
          <h3>${i.name}</h3>
          <p>${i.des}</p>
          <h4>${i.price}</h4>
          <button value=${index}>Them vao gio</button>
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
