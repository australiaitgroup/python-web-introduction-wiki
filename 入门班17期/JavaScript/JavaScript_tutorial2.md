

# Note

## JavaScript_tutorial2 (`9/11/2023`)

### function
- 形参和实参
```js
function functionName(name, age) {    //此时是形参，没有真实的值parameters

}

functionNmae('john', 12)                 //此时是实参arguments
```
- return
```js
let name
function handleNmae(firstName, lastName) {
  name = firstName + lastName
}
handleName('' , '')

function handleNmae(firstName, lastName) {
  name = firstName + lastName
  return name
}
const name = handleName('' , '')

swithc(age){
  case '1': {.....; break}
  case '2': {.....; break}
}

function handleName(firstName, lastName){
  if(....){
      ...if logic

   }else if(...){
      ...else if
   }else{
      ...else
   }
}

function handleName(firstName, lastName){
  if(....){
      ....if logic
      return
   }
  if(....){
      ....if logic
      return
   }
   ...else
}

```


- break
```js
switch(age){
  case'1':{.....; break}
  case'2':{.....; break}
  default:
}

for (
while
```

### dom
#### 抓取节点（5种主要方式）
```js
document.getElementById('')
document.querySelector('.content-div')//className只会抓取第一个 '.className',id '#id'
document.querySelectorAll('.content-div')//抓取所有
document.getElementByClassName('')
document.getElementByTagName('') //div
//以上为5种主要方式

const dom = document.getElementByTagName('html')
dom.getElementById('first-div')
document.body
document

```

#### dom常见用法
```js
//style可以实现一些特殊交互效果
dom.classList
dom.classList.add
dom.classList.remove

dom.style.display = 'none'
dom.style.display = 'block'

//event
//click, onChange, onInput,e.target.value
// keyDown e.target.keyCode === '13'
//事件监听
//click:这是一个鼠标事件，当用户点击某个元素时触发
//onChange:这是一个表单事件，当元素的值发生变化时（并且失去焦点）触发，通常用于 <input>, <select>, 和 <textarea> 元素
//onInput:这是一个表单事件，当 <input>, <select>, 或 <textarea> 元素的值正在被用户输入时触发。这个事件在元素的值发生任何变化时几乎立即触发
//keyDown:这是一个键盘事件，当用户按下键盘上的任何键时触发，如果按住不放，会重复触发

dom.addEventListener('click', (e:Event)=>{
    ...logic//dom.style.display = 'block'
    e.target
})
dom.onclick
don.oninput
dom.onchange

dom.parentNode
dom.children[0]
dom.childNodes[]
```

### 实战练习
#### counter


