class Node{
  constructor(data,next=null){
    this.data = data;
    this.next = next;
  }
};

class LinkedList{
  constructor(){
    this.head = null;
    this.size = 0;
  }
  insertFirst(data){
    this.head = new Node(data,this.head);
    this.size++;
  }
  insertLast(data){
    // because node last so the second element of node = null new Node(data,null)
    let node = new Node(data);
    let current;
    // if empty,
    if(!this.head){
      this.head = node;
    }else{
      current = this.head;
      while(current.next){
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  insertAt(data,index){
    if(index < 0 && index > this.size){
      return;
    }
    let node = new Node(data);
    let current,preCurrent;
    current = this.head; // gán nó bằng node đầu
    let count = 0;
    while(count < index){
      preCurrent = current;// 
      count++;
      current = current.next;
    }
    preCurrent.next = node; // nối node trước và node cần thêm
    node.next = current; // nối node mới thêm với node sau nó
    this.size++;
  }
  removeAt(index){
    let current = this.head;
    let count =0;
    let preCurrent;
    if(index < 0 && index > this.size){
      return;
    }
    if(index === 0){
      this.head = current.next;
    }
    else{
      while(count < index){
        preCurrent = current;
        count++;
        current = current.next;
      }
      // current sau khi thoát ra khỏi while thì nó là node cần tìm
      preCurrent.next = current.next; // nối 2 node trước và sau của node cần xóa
    }
    this.size--;
  }
  //cách 1
  // getDataoOfIndex(index){
  //   let current = this.head;
  //   let preCurrent;
  //   let count = 0;
  //   if(index < 0 && index > this.size){
  //     return;
  //   }
  //   while(current){
  //     if(count === index){
  //       let data = current.data;
  //       return data;
  //     }
  //     count++;
  //     current = current.next;
  //   }
  //   return null;
  // }
  //cách 2
  getDataoOfIndex(index){
    let current = this.head;
    let preCurrent;
    let count = 0;
    if(index < 0 && index > this.size){
      return;
    }
    if( index === 0){
      return current.data;
    }
    else{
      while(count < index){
        preCurrent = current;
        count++;
        current = current.next;
      }
      return current.data;
    }
    return null;
  }
  printList(){
    let current = this.head;
    while(current){
      console.log(current.data);
      current = current.next;
    }
  }
};
const lk = new LinkedList();
var object = {
  names : "cat",
  age:20
}
lk.insertFirst(100)
lk.insertFirst(200)
lk.insertFirst(object)
lk.insertLast(500)
lk.insertLast(600)
lk.insertAt(555,3)
lk.removeAt(0)
var data = lk.getDataoOfIndex(2)
lk.printList()
console.log(data);
console.log(lk)