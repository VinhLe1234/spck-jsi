
// let SinhVien = {
//     // Tạo các thuộc tính
//     hoTen: 'Vương Đại Nguyên',
//     gioiTinh: 'Nam',
//     MSSV: '3119410279',
//     namSinh: '2001',

//     // Tạo các phương thức
//     hocBai: function() {
//         console.log('Đang học bài...');
//     },
//     diChoi: function() {
//         console.log('Đang đi chơi...');
//     },
//     xemPhim: function() {
//         console.log('Đang xem phim...');
//     }
// }

//=========================================== Class ===========================================

// // Tạo ra một class SinhVien
// class SinhVien {
//     //Hàm khởi tạo 
//     constructor(hoTen, gioiTinh, MSSV, namSinh) {
//         this.hoTen = hoTen;
//         this.gioiTinh = gioiTinh;
//         this.namSinh = namSinh;
//         this.MSSV = MSSV;
//     }

//     //Khai báo phương thức
//     hocBai(a,b) {
//         var kq = a + b
//         console.log('Đang học bài...' + kq);
//     }
//     diNgu() {
//         console.log('Đang ngủ...');
//     }
//     xemPhim() {
//         console.log('Đang xem phim...');
//     }
//     get getHoTen() {
//         return this.hoTen;
//     }
//     set setHoTen(hoTen) {
//         this.hoTen = hoTen;
//     }
// }


// // Khởi tạo các đối tượng sinh viên
// var sinhVien1 = new SinhVien("Vương Đại Nguyên", "Nam", "3119410279", "2001");
// var sinhVien2 = new SinhVien("Vương Đại Nguyên", "Nam");
// var sinhVien3 = new SinhVien();

// // Log ra thông tin đối tượng
// console.log(sinhVien1.hoTen);
// console.log(sinhVien2.hocBai(10,2));
// console.log(sinhVien3);

//=========================================== Kế thừa ===========================================
// class ConNguoi {
//     constructor(hoTen, namSinh) {
//         this.hoTen = hoTen || "unknown";
//         this.namSinh = namSinh || "unknown";
//     }
//     getHoTen() {
//         return "Tên " + this.hoTen + ", sinh năm " + this.namSinh;
//     }
//     getThongTin() {
//         return "Tên " + this.hoTen + ", sinh năm " + this.namSinh;
//     }
// }
// class SinhVien extends ConNguoi {
//     constructor(maSSV, hoTen, namSinh) {
//         super(hoTen, namSinh);
//         this.maSSV = maSSV || "unknown";
//     }
//     getThongTin() {
//         return this.getHoTen() + ", mã sinh viên " + this.maSSV;
//     }
//     // // Ghi đè phương thức
//     // getThongTin() {
//     //     return (
//     //         "MSSV " + this.maSSV + ", " + super.getThongTin()
//     //     );
//     // }
// }

// var sinhVien1 = new SinhVien("3119410279", "Vương Đại Nguyên", "2001");
// console.log(sinhVien1.getThongTin());

//=========================================== Đa Hình ===========================================
// class Shape {
//     show() {
//         console.log("-- Shape - - - - - - - - - - -");
//     }
// } //. Shape

// class Circle extends Shape {
//     show() {
//         super.show();
//         console.log("Type of Shape : Circle \n");
//     }
// } //. Circle


// class Square extends Shape {
//     show() {
//         super.show();
//         console.log("Type of Shape : Square \n");
//     }
// } //. Square

// // - main - - - - - - - - - 

// var form = new Shape();

// form = new Circle();
// form.show();

// form = new Square();
// form.show();

//=========================================== Trừu tượng ===========================================
// class Animal {

//     constructor() {
//         if (this.constructor == Animal) {
//             throw new Error("Abstract classes can't be instantiated.");
//         }
//     }

//     say() { 
//         throw new Error("Method 'say()' must be implemented.");
//     }

//     eat() {
//         console.log("eating");
//     }
// }

// class Dog extends Animal {
//     say() {
//         console.log("bark");
//     }
// }
// class Cat extends Animal {
//     say() {
//         console.log("meow");
//     }
// }
// class Horse extends Animal { }

// new Dog().eat(); // eating
// new Cat().eat(); // eating
// new Horse().eat(); // eating

// new Dog().say(); // bark
// new Cat().say(); // meow
// new Horse().say(); // Error: Method say() must be implemented.

// new Animal(); // Error: Abstract classes can't be instantiated.
//=========================================== Đóng gói ===========================================

// // Tạo ra một class SinhVien
// class SinhVien {
//     //Hàm khởi tạo 
//     #privateA
//     constructor(hoTen, gioiTinh, MSSV, namSinh) {
//         this.hoTen = hoTen;
//         this.gioiTinh = gioiTinh;
//         this.namSinh = namSinh;
//         this._Mssv = MSSV
//         this.#privateA = 10
//     }
//     getPr(){
//         return this.#privateA
//     }
//     setPr(A){
//         this.#privateA = A
//     }
// }
// // Khởi tạo các đối tượng sinh viên
// var sinhVien1 = new SinhVien("Vương Đại Nguyên", "Nam", "3119410279", "2001");

// // Log ra thông tin đối tượng
// // sinhVien1.namSinh = "1"
// // sinhVien1._Mssv = "222"
// console.log(sinhVien1);
// console.log(sinhVien1.getPr());
// sinhVien1.setPr(20)
// console.log(sinhVien1.getPr());
