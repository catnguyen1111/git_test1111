///////////////////////////////////////////////////////Promise//////////////////////////////////////////////////////////
// var promise = new Promise(
//   function(resolve, reject){
//     resolve('13');
    
//   }
// );

// promise
//   .then(function(data) {
//     console.log(data)
//     return new Promise(
//       function (resolve) {
//         setTimeout(function() {
//           resolve('15')
//         },1000);
//       }
//     )
//   })
//   .then(function(data) {
//     console.log(data)
//     return 10;
    
//   })
//   .then(function(data) {
//     console.log(data)
    
//   })

// muốn lấy dữ liệu từ  2 promise khác nhau không phụ thuộc vào data của nhau ta dùng promis.all nhưng trong promise.all này nó 
// có 1 điểm lưu ý là khi 1 trong các promise bị reject thì promise.all này sẽ bị reject

// var promise1 =  new Promise(
//   function(resolve) {
//     setTimeout(function () {
//       resolve([1])
//     },1000)
//   }
// )
// var promise2 =  new Promise(
//   function(resolve) {
//     setTimeout(function () {
//       resolve([2,3])
//     },3000)
//   }
// )

// Promise.all([promise1,promise2])
//   .then(function ([result1,result2]) {
    
//     console.log(result1.concat(result2))
//     return result1.concat(result2)
   
// })


// document.getElementById('result').innerHTML = "hello"


// có 1 điểm lưu ý là khi 1 trong các promise bị reject thì promise.all này sẽ bị reject

// var promise1 =  new Promise(
//   function(resolve) {
//     setTimeout(function () {
//       resolve([1])
//     },1000)
//   }
// )
// var promise2 =  new Promise(
//   function(resolve,reject) {
//     setTimeout(function () {
//       reject('error!')
//     },3000)
//   }
// )
//  Promise.all([promise1,promise2])
//   .then(function ([result1,result2]) {
    
//     console.log(result1.concat(result2))
//     return result1.concat(result2)
// })
//   .catch(function (params) {
//     console.log(params)
//   })




// function promise1() {
//   return new Promise(
//     function(resolve) {
//       setTimeout(function () {
//         resolve([1])
//       },1000)
//     }
//   )
// }
// function promise2() {
//   return new Promise(
//     function(resolve) {
//       setTimeout(function () {
//         resolve([2])
//       },1000)
//     }
//   )
// }
// function show(a) {
//   document.getElementById('result').innerHTML = a;
// }
// function result() {
  
//   Promise.all([promise1(),promise2()])
//   .then(result => {
//     console.log(result)
//     if(result[0] == '1'){
//       console.log('bằng nhau')
//     }else{
//       console.log('khác nhau')
//     }
//   })
// }
// result()


// function getDetailPage(){
//   return new Promise((resolve,reject)=>{
//       setTimeout(function(){
//           resolve(['Thông tin chi tiết của page tips javascript'])
//       }, 300)
//   })
// }

// //Lấy thông tin giới thiệu về page 
// function getInfoPage(){
//   return new Promise((resolve,reject)=>{
//       setTimeout(function(){
//           resolve('lấy thông tin giới thiệu của page tips javascript')
//       }, 400)
//   })
// }

// //Lấy những bài viết mới nhất của page 
// function getArticlesPage(){
//   return new Promise((resolve,reject)=>{
//       setTimeout(function(){
//           resolve('Lấy những bài viết mới nhất của page tips javascript')
//       }, 500)
//   })
// }

/////////////////////////////////////////////////////// Example Promise.all//////////////////////////////////////////////////////////
// function initLoad(){
//   // loading.show()
//   Promise.all([
//       getDetailPage().catch(err=>err),
//       getInfoPage().catch(err=>err),
//       getArticlesPage().catch(err=>err)
//   ]).then(res=>{
//       console.log(res) // ["Thông tin chi tiết của page tips javascript", "lấy thông tin giới thiệu của page tips javascript", "Lấy những bài viết mới nhất của page tips javascript"]
      
//       if(res[0] === 'Thông tin chi tiết của page tips javascript'){
//           //Get data success
          
//       }else{
//           //Xử lý Error tại đây..
//       }
//       /*
//           Tương tự cho res[1] và res[2] ...
//       */
//       // loading.hide()
//   })
//   document.getElementById('result').innerHTML = "hello"
// }

// //init load    
// initLoad()
///////////////////////////////////////////////////////Promise/////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////Promise and map//////////////////////////////////////////////////////////
// function timeOut(time) {
//   return new Promise(
//     function (resolve,reject) {
//       setTimeout(resolve(`complete in ${time}`),time)
//     }
//   )
// }
// var durations = [1000,2000,3000];
// var promises = [];
// durations.map(function (duration) {
//   console.log(duration)
//   promises.push(timeOut(duration))// chứa promises = [ promise,promise,promise]
// });

// console.log(promises)

// Promise.all(promises)
//   .then(function (a) {
//     console.log(a)
//     }
//   )

// viết gọn hơn 
// durations.map((duration)=>{
//   promises.push(timeOut(duration))
// })
// console.log(promises)
// Promise.all(promises)
//   .then((result) => {
//     console.log(result)
//   })
 
///////////////////////////////////////////////////////Promise and map//////////////////////////////////////////////////////////
/////////////////////////////////////////////////////// test hàm ///////////////////////////////////////////////////////
const animals = [
  {
      "name": "cat",
      "size": "small",
      "weight": 5
  },
  {
      "name": "dog",
      "size": "small",
      "weight": 10
  },
  {
      "name": "lion",
      "size": "medium",
      "weight": 150
  },
  {
      "name": "elephant",
      "size": "big",
      "weight": 5000
  }
]

////////////////////////////// dùng for-loop ///////////////////////////////////////////////////////
// var animalList = [];
// var animalSize = [];
// var animalWeight = [];
// for(var i = 0;i< animals.length;i++){
//   animalList.push(animals[i].name)
//   animalSize.push(animals[i].size)
//   animalWeight.push(animals[i].weight)
// }
// console.log(animalList)
// console.log(animalSize)
// console.log(animalWeight)
////////////////////////////// dùng for-loop ///////////////////////////////////////////////////////

////////////////////////////// dùng map() ///////////////////////////////////////////////////////
// var animalList =[]
// animalList = animals.map((animal,index,animalArray)=>{
//    return animal.name
//  })
//  console.log(animalList)

////////////////////////////// dùng map() ///////////////////////////////////////////////////////
 
////////////////////////////// use reduce() ///////////////////////////////////////////////////////

// lấy name của animal lưu vào mảng khác
// var animalList = animals.reduce((animal,animalCurrent)=>{
//   return animal.concat(animalCurrent.name)
// },[])
// console.log(animalList)
// // tính tổng cân nặng của các animal có trong object c
// var totalWeight = animals.reduce((weight,weightCurrent)=>{
//   return weight+weightCurrent.weight
// },0)
// console.log(totalWeight)
////////////////////////////// use reduce() ///////////////////////////////////////////////////////
////////////////////////////// use every() ///////////////////////////////////////////////////////
// var score = [7, 8, 9, 10,6];
 
// function checkPass(score) {
//     return score >= 5;
// }
 
// function myFunction() {
//     if (score.every(checkPass) == true) {
//         document.getElementById("demo").innerHTML = 'Đủ điểm đỗ!';
//     }else{
//         document.getElementById("demo").innerHTML = 'không đủ điểm đỗ!';
//     }
// }
 
// myFunction();
////////////////////////////// use every() ///////////////////////////////////////////////////////

////////////////////////////// use fill() ///////////////////////////////////////////////////////
/**
 * array.fill(value, start, end)
 */
var subject = ["CSS", "HTML", "PYTHON", "C"];
document.getElementById("demo").innerHTML = subject;
 
function myFunction() {  
    document.getElementById("demo").innerHTML = subject.fill("PHP", 2, 4);
}
myFunction(); //subject = ["CSS", "HTML", "PHP", "PHP"];
////////////////////////////// use fill() ///////////////////////////////////////////////////////

////////////////////////////// use find() ///////////////////////////////////////////////////////
/**
 * array.find(function(currentValue, index, arr))
 * hàm find() trả vầ giá trị phần tử  đầu tiên thỏa mãn dk kiểm tra
 * và bỏ qua không kiểm tra các phần tử còn lại.
 */
var checkElement = animals.find((c)=>c.weight>10)
console.log(checkElement) //  trả về object {name : 'lion',size:'medium',weight : '150'}

var test = [5,6,7,8]
function check(test){
    return test >=7;
}
var result = test.find(check);
console.log(result) // trả về số 7