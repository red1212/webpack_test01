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
  this.display = display;
  this.remove = remove;
  this.prefind = prefind
}

//查询节点
function find(item){
  var currNode = this.head;
  while(currNode.element !=item){
    currNode = currNode.next;
  }
  return currNode
}

//插入节点
function insert(newEle,item){
  var newNode = new Node(newEle);
  var current = this.find(item);
  newNode.next = current.next
  current.next = newNode
}

//查看
function display() {
  let currNode = this.head
  while(!(currNode.next ==null)){
    currNode = currNode.next
  }
}

//查找当前节点的上一个节点
function prefind(item) {
  let curNode = this.head
  while(!(curNode.next == null) && curNode.next.element !=item){
    curNode = curNode.next.next
  }
  console.log(curNode)
  return curNode
}
//删除一个节点
function remove(item) {
  //查找这个节点
  let preNode = this.prefind(item)
  if(preNode.next !=null){
    preNode.next = preNode.next.next
  }
}

let res = new LList()

res.insert('Conway','head')
res.insert('haha','Conway')
res.remove('Conway')
res.display()
