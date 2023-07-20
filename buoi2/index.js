// Cau 1 
arr1 = [1,2,3,5]
arrC1a = [...arr1]
console.log("================================ Cau 1.1 =====================================")
console.log(arrC1a)

arrC1b = Object.assign([],arr1)
console.log("================================ Cau 1.2 =====================================")
console.log(arrC1b)

// cau 2
arrA = ['Hello', ' Xin chào'] 
arrB = ['Bonjour', 'Olá']
arrC2a = [...arrA, ...arrB]
console.log("================================ Cau 2.1 =====================================")
console.log(arrC2a)
arrC2b = arrA.concat(arrB)
console.log("================================ Cau 2.2 =====================================")
console.log(arrC2b)

// cau 3
console.log("================================ Cau 3.1 =====================================")
arrX = [0,1,2,3,4,5,6,7,8]
arrC3a = arrX.map(x => x * x)
console.log(arrC3a)
console.log("================================ Cau 3.2 =====================================")
arrC3b = arrX.filter(x => x % 2)
console.log(arrC3b)


// cau 4
console.log("================================ Cau 4 =====================================")
arr4C= [1,5,4,6]
a = 0
b = 2
function filterRange(arr,a,b){
    arrC4a = arr4C.slice(a,b)
    console.log(arrC4a)
}
filterRange(arr4C,a,b)  
// cau 5
console.log("================================ Cau 5 =====================================")
arrC4b = arr4C.filter(x => {
    if(x > a &&  x < b){
        return x
    }
})
console.log(arrC4b)
// cau 6

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
console.log("================================ Cau 6 =====================================")
var option1 = prompt("Nhập vào tuổi cần tìm ?")
student.map(x => {
    if(option1 == x.age){
        console.log(x)
    }
})
console.log("================================ Cau 6.2 =====================================")

var option2 = prompt("Nhập vào sở thích cần tìm ?")
student.map(x => {
    x.hobbies.map(y => {
        if(y == option2){
            console.log(x)
        }
    })
})
console.log("================================ Cau 6.4 =====================================")

student.map(x => {
    if(x.age == 11 ){
        x.age = 15
    }
    console.log(x)
})
