//================== Delete to Carts ================
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
                            <button class="btn btn-danger" value = ${index}>xoa khoi gio</button>
                        </div>
                    </div>
                </div>
        `         
        index++;
    }
    console.log(html)
    items1.innerHTML = html
}
// loadCarts()
