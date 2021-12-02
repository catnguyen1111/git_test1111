
/********************************* các hàm trong js ****************
 * sort() sắp xếp từ thấp đến cao
 * reverse() ngược lại
 * Math.max.apply(null,number) : dùng để lấy số lớn nhất
 * Math.min.apply(null,number) : dùng để lấy số nhỏ nhất
 * 
 * 
 * */


var names = ['a','b','c','d','e','f','g','h','i','j','k']
var number = [12,23,9,5,33,55,44,77,11,100,-7,4,0]
var object1 = [
  {name:'Than', age: 18},
  {name:'Hoang', age: 28},
  {name:'Bình', age: 19},
  {name:'Quý', age: 20},
  {name:'Hoa', age: 22},
]

var data = document.getElementById("demo")
var maxNumber = Math.min.apply(null,number)

number.sort((a,b) =>{
  if(a > b){
    return 11;
  }
  else if(a < b){
    return -1;
  }
  return 0;
})
data.innerHTML = number;
// object1.sort((a,b) =>{
//   if(a.age > b.age){
//     return 1;
//   }
//   else if(a.age < b.age){
//     return -1;
//   }
//   return 0;
// })
// object1.sort((a,b) =>{
//  var n1 = a.name.toLowerCase();
//  var n2 = b.name.toLowerCase();
//  if(n1 > n2 ){
//    return 1;
  
//  }
//  else if(n1 < n2){
//    return -1;
//  }
//  return 0;
// })
// data.innerHTML = 
// object1[0].name + "," + object1[0].age +" <br>" +
// object1[1].name + "," + object1[1].age +" <br>" +
// object1[2].name + "," + object1[2].age +" <br>" +
// object1[3].name + "," + object1[3].age +" <br>" +
// object1[4].name + "," + object1[4].age +" <br>" 

function stack(){
  this.store = [];
  this.index = 0;
  this.next = undefined;
  this.push = function(element){
    this.store[this.index] = element;
    this.index++;
    this.next = true;
  }
  this.pop = function(){
    if(this.index == 0){
      return undefined;
    }
    this.index--;
    var result = this.store[this.index]
    delete this.store[this.index];
    this.next = false;
    return result;

  }
  this.peek = function(){
    if(this.next){
      return this.store[this.index-1]
    }
    return this.store[this.index]
  }
}

 /**
  * bubbleSort
  */

function ArrayList(){
  var arr = [5,4,2,7,8,1];
  var swap = function(arr,index1,index2){
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }
  this.bubbleSort = function(){
    var lenght = arr.length;
    for(var i = 0 ; i < lenght-1 ; i++){
      for(var j = i+1 ; j < lenght ; j++){
        if(arr[i] > arr[j]){
          swap(arr,i,j)
        }
      }
    }
    return arr;
  }
}