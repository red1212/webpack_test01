/**链表
 * element 用来哎保存节点上的数据
 * next用来保存指向下一个节点的链接
**/

//定义一个链表
function Node(element){
  this.element = element
  this.next = null
}

//对链表的操作

function LList(){
  this.head = new Node('head');   //设置一个head节点，初始化的时候默认指向Null，
  this.find = find
  this.insert = insert;
}

//查询节点
function find(item){
  var currNode = this.head;
  console.log(currNode.element)
  while(currNode.element !=item){
    currNode = currNode.next;
  }
  return currNode
}

//插入节点
function insert(newEle,item){
  var newEle = new Node(newEle);
  var current = this.find(newEle)
}

let res = new LList()

res.insert('Conway','head')
