//栈
function Stack(){
  this.list = []
  this.top =0
  this.push = push
  this.pop = pop
  this.peek = peek
  this.length = length
}

//push添加元素
function push(item){
  this.list[this.top++] = item
}

//pop
function pop(){
  return this.list[this.top--]
}

//peek
function peek(){
  return this.list[this.top -1]
}

//获取 length
function length(){
  return this.top
}

stacks = new Stack()


console.log(fact(5))
