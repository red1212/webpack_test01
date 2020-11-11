
//列表
function List(){
  this.listSize = 0;
  this.data =[]
  this.append  = append
  this.find = find
  this.remove = remove
  this.insert = insert
  this.content = content
}

//添加
function append(element){
  this.data[this.listSize ++] = element
}
//查询
function find(ele){
  for(let i=0;i<this.data.length;i++){
    if(ele == this.data[i]){
      return i
    }
  }
  return -1
}
//删除
function remove (ele){
  let index = this.find(ele)
  if(index > -1){
    this.data.splice(index,1)
    this.listSize -- 
    return true
  }else{
    return false
  }
}

//插入
function insert(element,after){
    let index = this.content(element)
    if(!index){
      this.data.splice(index,0,element)
      this.listSize ++
      return true
    }else{
      return false
    }
}

//判断值是否在列表总
function content(ele){
  for(let i =0;i<this.data.length;i++){
    if(ele == this.data[i]){
      return true
    }else{
      return false
    }
  }
}
var names = new List()
names.append('1')
names.append('2')
names.remove('1')
names.insert('我是查询插入的值')
console.log(names)