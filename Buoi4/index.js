let products = [
  {
    name: "Bing chling 12",
    des: "kem san xuat tu trung quoc",
    img: "./img/ip14-2.jpg"
  },
  {
    name: "Bing chling 2",
    des: "kem san xuat tu trung quoc",
    img: "./img/ip14-3.jpg"
  },
  {
    name: "Bing chling 32",
    des: "kem san xuat tu trung quoc",
    img: "./img/ip14.jpg"
  },
  {
    name: "Bing chling 43",
    des: "kem san xuat tu trung quoc",
    img: "./img/ip14-3.jpg"
  },
  {
    name: "Bing chling 54",
    des: "kem san xuat tu trung quoc",
    img: "./img/ip14-2.jpg"
  },
  {
    name: "Bing chling 6",
    des: "kem san xuat tu trung quoc",
    img: "./img/ip14-4.jpg"
  },
]
class View {
  constructor(title) {
    this.title = title
  }
  setTitle() {
    document.title = this.title
  }
  getHtml() {
    return "hello I'm View"
  }
}
class Home extends View {
  constructor(title, info) {
    super(title)
    this.info = info
  }
  load(arr) {
    let html = "";
    let count = 1;
    let index = 0;
    for (var i of arr) {
      if (count == 1) {
        html += `<div class="row" style="padding: 10px 50px;">`
      }
      html +=
        `
        <div class="col-3">
        <div class="card text-black">
          <i class="fab fa-apple fa-lg pt-3 pb-1 px-3"></i>
          <img src="${i.img}"
            class="card-img-top" alt="Apple Computer" style="width: 200px; height: 200px; margin: 0 auto; " />
          <div class="card-body">
            <div class="text-center">
              <h5 class="card-title">Believing is seeing</h5>
              <p class="text-muted mb-4">${i.name}</p>
            </div>
            <div>
              <div class="d-flex justify-content-between">
                <span>Pro Display XDR</span><span>$5,999</span>
              </div>
              <div class="d-flex justify-content-between">
                <span>Pro stand</span><span>$999</span>
              </div>
              <div class="d-flex justify-content-between">
                <span>Vesa Mount Adapter</span><span>$199</span>
              </div>
            </div>
            <div class="d-flex justify-content-between total font-weight-bold mt-4">
              <span>Total</span><span>$7,197.00</span>
            </div>
            <div class="d-flex justify-content-center total font-weight-bold mt-4" >
              <button style="width: 250px;" class="btn btn-primary btn-add" value = ${index}>Thêm vào giỏ</button>
            </div>

          </div>
        </div>
      </div>
      `
      if (count == 4) {
        html += `</div>`
        count = 0;
      }
      count++;
      index++;
    }
    return html
  }
  getHtml() {
    console.log((products))
    return this.load(products)
  }
}
class Dashboard extends View {
  constructor(title, info, namSinh) {
    super(title)
    this.info = info
    this.namSinh = namSinh
    var today = new Date();
    this.date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();

  }
  getHtml() {
    return `
        <h1>Welcom to ${this.info} day : ${this.date} : => ${this.namSinh}</h1>
      <p>Phận là con gái, chưa một lần yêu ai
        Nhìn về tương lai mà thấy như sông rộng đường dài
        Cảnh nhà neo đơn, bầy em chưa lớn trĩu đôi vai gánh nhọc nhằn
        Thầy mẹ thương em nhờ tìm người se duyên
        Lòng cầu mong em đậu bến cho yên một bóng thuyền
        Lứa đôi tình duyên còn chưa lưu luyến
        Sợ người ta đến em khóc sau bao lời khuyên.
        
        [ĐK:]
        
        Chưa yêu lần nào biết ra làm sao
        Biết trong tình yêu như thế nào
        Sông sâu là bao nào đo được đâu
        Lòng người ta ai biết có dài lâu
        Qua bao thời gian sống trong bình an
        Lỡ yêu người ta gieo trái ngang
        Nông sâu tùy sông làm sao mà trông
        Chưa đỗ bến biết nơi nào đục trong
        
        Rồi người ta đến theo họ hàng đôi bên
        Một ngày nên duyên một bước em nên người vợ hiền
        Bỏ lại sau lưng bầy em ngơ ngác đứng trông theo mắt đượm buồn
        Thầy mẹ vui hơn mà lệ tràn rưng rưng
        Dặn dò con yêu phải sống theo gia đạo bên chồng
        Bước qua dòng sông hỏi từng con sóng
        Đời người con gái không muốn yêu ai được không?</p>
        `
  }
}

let menu = document.querySelector(".list-menu")
menu.addEventListener('click', function (e) {
  let i = e.target.id
  var data = document.getElementById("main-app")
  console.log(i)
  // if(i == "home"){
  //     var Html = new Home("Home","Nguyen Go Home")
  //     Html.setTitle()
  //     data.innerHTML= Html.getHtml()
  // }
  // if(i == "dashboard"){
  //     var Html = new Dashboard("Dashboard","Nguyen Go Dashboard")
  //     Html.setTitle()
  //     data.innerHTML= Html.getHtml()
  // }
  /// ============================= nang cao Áp dụng Đa Hình =====================================    
  var html1 = new View("View")
  if (i == "home") {
    html1 = new Home("Home", "Nguyen Go Home")
  }
  if (i == "dashboard") {
    html1 = new Dashboard("Dashboard", "Nguyen Go Dashboard", "2001")
  }
  html1.setTitle()
  data.innerHTML = html1.getHtml()
})

