//队列
function queue(){
  this.list = []
  this.enqueue = enqueue
  this.dequeue = dequeue
  this.front = front
  this.back = back
  this.empty = empty
}

//向队尾添加一个元素
function enqueue(item){
  this.list.push(item)
}

//删除队首的元素
function dequeue(){
  this.list.shift()
}

//读取队首的元素
function front(){
  return this.list[0]
}

//读取队尾的元素
function back(){
  return this.list[this.list.length - 1]
}

//判断数组是否为空
function empty(){
  if(this.list.length == 0){
    return false
  }else{
    return true
  }
}

queues = new queue()
 
queues.enqueue('df')

console.log(queues)