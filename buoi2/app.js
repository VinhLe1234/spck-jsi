//Cau1

const arr1 = [1,2,3,5]
const arr2 = Object.assign(arr1)
console.log(arr1)
console.log(arr2)
//==============================================
const arr4 = [1,2,3,5]
const arr4Copy = [...arr4]
console.log(arr4);
console.log(arr4Copy)

//Cau2
var arrA = ["Hello","Xin chao"]
var arrB = ["Bonjour","Ola"]
var arrC = ["waysToSayHello"]
var arr = [arrA, arrB, ...arrC]
console.log(arr)
//=============================================

//Cau3
var arrX = [0,1,2,3,4,5,6,7,8]
arrSquare = arrX.map(x => x*x)
console.log(arrSquare)
//=============================================
arrOdds = arrX.filter((num) => num % 2 === 1)
console.log(arrOdds)

//Cau 4
arr4C= [1,5,4,6]
a = 0
b = 2
function filterRange(arr,a,b){
    arrC4a = arr4C.slice(a,b)
    console.log(arrC4a)
}
filterRange(arr4C,a,b)  

//Cau 5
arrC4b = arr4C.filter(x => {
    if(x > a &&  x < b){
        return x
    }
})
console.log(arrC4b)
 
//Cau 6
let student = [
    {
        name: "Duong",
        age: 11,
        hobbies: ["video game","sleep","learn"]
    },
    {
        name: "Dong",
        age: 12,
        hobbies: ["video game","sick","study"]
    },
    {
        name: "Minh",
        age: 13,
        hobbies: ["video game","sick","learn"]
    },
    {
        name: "Thanh",
        age: 9,
        hobbies: ["play game","sleep","learn"]
    },
    {
        name: "Hung",
        age: 11,
        hobbies: ["play game","sick","study"]
    }
]

var option1 = prompt("Nhập vào tuổi cần tìm ?")
student.map(x => {
    if(option1 == x.age){
        console.log(x)
    }
})


var option2 = prompt("Nhập vào sở thích cần tìm ?")
student.map(x => {
    x.hobbies.map(y => {
        if(y == option2){
            console.log(x)
        }
    })
})


student.map(x => {
    if(x.age == 11 ){
        x.age = 15
    }
    console.log(x)
})

