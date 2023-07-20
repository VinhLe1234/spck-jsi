let student = [
    {
        name: "NVA",
        age: 16,
        course: ["mindX 01", "mindX 02", "mindX 03"]
    },
    {
        name: "NVB",
        age: 18,
        course: ["mindX 01", "mindX 02", "mindX 04"]
    },
    {
        name: "NVC",
        age: 17,
        course: ["mindX 01", "mindX 03", "mindX 04"]
    },
    {
        name: "NVD",
        age: 15,
        course: ["mindX 01", "mindX 02", "mindX 03"]
    }
]
var p_Cau1 = document.getElementById("p_cau1")
function cau1a() {
    var option = prompt("Độ tuổi cần tìm?")
    var result = ""
    for (var item of student) {
        if (item.age == option) {
            result += item.name
        }
    }
    if(result == ""){
        result = "Not Found !!"
    }
    p_Cau1.innerHTML = result
}
function cau1b() {
    var option = prompt("Khóa học cần tìm?")
    var result = ""
    for (var item of student) {
        for (var course of item.course) {
            if (course == option) {
                result += item.name + "<br>"
            }
        }
    }
    if(result == ""){
        result = "Not Found !!"
    }
    p_Cau1.innerHTML = result
}
let arr1 = [0,2,4,6,8]
let arr2 = [1,3,5,7]
function cau2ab() {
    var arr3 = arr1.concat(arr2)
    var result = ""
    for (var item of arr3) {
        if(item > 3)
        result += item + " " 
    }
    p_Cau1.innerHTML = result
} 
function cau2C() {
    var arr3 = arr1.concat(arr2)
    // sap xep tang dan
    var result = arr3.sort()
    // sap xep giam dan
    //var result = arr3.sort(function(a,b) {return b-a})
    p_Cau1.innerHTML = result
} 