// function writelog(){
//   var myString='';
//   for(var param of arguments){
//     myString += `${param} - `;
//   }
//   console.log(myString);
// }
// writelog('javascript', 'PHP', 'Ruby');

//object
// var myInfo = {
//   name: 'cat',
//   age: 22,
//   class: '17dcd1a',
//   getName: function(){
//   return this.name;
//   }

  
// }
// myInfo.email = 'nguyenvancat145@gmail.com';
// myInfo.phone = '00000';
// console.log(myInfo.getName());
// delete myInfo.age;
// console.log(myInfo);

// function prototype
// function user(firstName, lastName, age){
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age =age;

// }
// user.prototype.phone = '0123456789';
// user.prototype.getPhone = function(){
//   return this.phone;
// }
// var auth = new user('cat','nguyen',22);
// var client = new user('khanh','nguyen',23);
// console.log(auth);
// console.log(client);
// console.log(auth.getPhone());
// get data time 
// var date = new Date();
// console.log(date);
 
//toán tử 3 ngôi trong javacsript
// var cours = {
//   name: 'JavaScript',
//   coin : 0,
// }
// var fee = cours.coin > 0 ? `${cours.coin} Coin` : 'Free fee';
// console.log(fee);
/**
 *  array method:
 * 1.forEach(), duyệt qua từng phần tử của mảng 
 * 2.every(), trả về true hoặc false khi tất cả đúng điều kiện
 * 3.some(),trả về true hoặc false khi 1 phần tử đúng điều kiện
 * 4.find(), 
 * 5.filter();
 * 6.map();
 * 7.reduce();
 */
// var courses = [
//   {
//     id: 1,
//     name : 'JavaScript',
//     coin : 100
//   },
//   {
//     id : 2,
//     name : 'PHP',
//     coin : 200
//   },
//   {
//     id : 3,
//     name : 'Ruby',
//     coin : 700
//   },
//   {
//     id : 4,
//     name : 'c++',
//     coin : 1000
//   }
// ];
//duyệt qua từng phần tử của mảng 
// courses.forEach(function(index, value){
//   console.log(index,value)
// })
// find()
// var value = courses.find(function(course,index){
//   console.log(index)
//   return course.name === 'PHP'
  
// })
// console.log(value)

// lấy phần tử từ array bằng vòng lặp 
// var getCoin = 0;
// for( var value of courses){
//   getCoin += value.coin;
// }
// console.log(getCoin);
// lấy các phần tử từ array bằng hàm reduce gồm 4 thành phần có thể lấy dc accumulator , currentValue, currentIndex, OriginArray
//
// var i = 0;
// function coinHandler(accumulator,currentValue){
  
//   i++;
//   var total = accumulator + " " + currentValue.name;
//   // mở console để xem hàm reduce chạy như thế nào
//   console.table({
//     'lượt chạy: ' : i,
//     'biến tích trữ: ' : accumulator,
//     'giá khóa học: ' : currentValue.name,
//     'total: ' : total
//   });
//   //
//   return total;
// }
// var totalCoin = courses.reduce(coinHandler,""); // số 0 là giá trị khởi tạo đầu tiên cho biến accumulator trong function coinHandler
// console.log(totalCoin);
// đề bài làm phẳng mảng number bằng reduce và output là mảng
// var number = [1,2,3,[4,5,6],[7,8],9,10];
// var test = number.reduce(function(flatOutput,output){
//   return flatOutput.concat(output);
// },[]);
// console.log(test)
// Array.prototype.map2 = function(callback){
//   var arrayLenght = this.length;
//   var output =[];
//   for( var i = 0; i < arrayLenght; i++){
//     var result = callback(this[i],i)
//     output.push(result)
//   }
//   return output;
// }

//  var courses = [
//   'JavaScript',
//   'PHP',
//   'Ruby'
//  ];

// var getname = courses.map2(function(course){
//   return course;
// });
// console.log(getname)
// var boxElement = document.querySelector('.box');
// boxElement.style.width = '100px'
// boxElement.style.height = '100px';
// boxElement.style.backgroundColor = 'red';\
// Object.assign(boxElement.style,{
//   width : '100px',
//   height :'100px',
//   backgroundColor : 'green',
// });
// // lấy giá trị css từ box
// console.log(boxElement.style.width);

// DOM events
/**
 * 1.Attribute events
 * 2.Assign event using the element node.
 * 
 */
var domEvent = document.querySelectorAll('h1');
for(var i = 0; i < domEvent.length; ++i){
  domEvent[i].onclick = function(e){
    console.log(e.target);
  }
}
console.log(domEvent);

// cách lấy data từ thẻ input[text] ta dùng onchange hoặc là oninput
var inputElement = document.querySelector('input[type = "text"]');
inputElement.oninput = function(e){
  console.log(e.target.value);
}
// cách lấy data từ thẻ input[checkbox] ta dùng onchange
var inputElement = document.querySelector('input[type = "checkbox"]');
inputElement.onchange = function(e){
  console.log(e.target.checked);
}
// cách lấy data từ thẻ select ta dùng onchange
var inputElement = document.querySelector('select');
inputElement.onchange = function(e){
  console.log(e.target.value);
}
/**
 * 1. keyup / keydown 
 * để đọc các nút trên bàn phím ta dùng onkeyup / onkeydown / onkeypress
 */
document.onkeyup = function(e){
  //e.which nó hiển thị số của nút mà ta nhấn
  switch(e.which){
    case 27:
      console.log('Exit');
      break;
  }
  
}
/**
 * 1.  e.preventDefault(); dùng ngăn chặn sự kiện không mong muốn
 * 2. e.stopPropagtion(); dùng ngăn sự kiện nổi bọt
 */
// làm cho ngăn chặn khi ta nhấp vào tìm kiếm không bị mất đi thẻ ul
var ulElement = document.querySelector('ul');
ulElement.onmousedown = function(e){
  e.preventDefault();
}
ulElement.onclick = function(e){
  console.log(e.target);
}


/**
 * 1. DOM event / Event listener(.addEventlistener)
 * + Lắng nghe sự kiện bằng cách dùng onlick 
 * + hủy bỏ sự kiện bằng các gắn cho nó function trống
 * 2 .
 */


//  var courses = [
//   'JavaScript',
//   'PHP',
//   'Ruby'
//  ];
// var number = [4,5,6,5,8];
// var total = 0;
// var i = 0;
// function myfunction(value,currentvalue,index,array){
//   i++;
//   total = value + currentvalue;
//   //total = value.concat(currentvalue) //  [4,5,6,5,8];
//   console.table({
//         'lượt chạy: ' : i,
//         'biến tích trữ: ' : value,
//         'giá khóa học: ' : currentvalue,
//         'total: ' : total,
//         'index:' : index,
//         'array:' : array,
//        });
//   return total;
 


// }
// var getnumber = number.reduce(myfunction,0)

// console.log(getnumber)