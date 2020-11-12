import _ from 'lodash';
import './index.css'
import Icon from './logo1.png'
import print from './print.js'
console.log(process.env.NODE_ENV)
if(process.env.NODE_ENV !=='production'){
  console.log('Looks like we are in development mode!')
}
function component() {
  var element = document.createElement('div');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'fsdfsdfdsf'], ' ');
  element.classList.add('hello')
  element.onclick = print;
  //将图像添加到我们现有的div
  var myIcon = new Image()
  myIcon.src = Icon;
  element.appendChild(myIcon)
  return element;
}

document.body.appendChild(component());
