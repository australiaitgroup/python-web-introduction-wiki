

# Note

## JavaScript_tutorial2 (`9/11/2023`)

<hr>

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

<hr>

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

<hr>

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

<hr>

### 实战练习
#### Counter
- 补充counter.js: 在output div中显示当前时间
- 时间应该每秒更新
```js
(function() {
   'use strict';
   // write your code here
   const dom = document.getElementById('output');
   function timer (){
      const d = new Date();
      // d.getHours()+':'+d.getMinutes()+':'+d.getSeconds()
     
      const time = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`//模板字符串
      dom.innerText = time
      // dom.textContent = time
   }
   setInterval(timer,1000)

}());
```

<hr>

#### Toggle
- 修改toggle.js: 实现对output div每隔2s添加和移除hide
```js
(function() {
   'use strict';
   // write your js here.
   const dom = document.getElementById('output')
   function hideOutput(){
      // if(dom.className === 'hide'){
      //    dom.classList.remove('hide')
      //    dom.className = ''
      //    return
      // }
      // dom.className = 'hide'
      // dom.classList.add('hide')
      dom.classList.toggle('hide')             //这一句可以直接替代以上多行代码
   }
   setInterval(hideOutput,2000)
}());
```

<hr>

#### Collapse
- 实现点击信息元素上面的箭头按钮对信息框折叠（隐藏）
- 这里不需要实现再次点击展开的效果
- Optional challenge: 仅仅使用一个单击事件监听器，且不对html进行任何更改来实现这个效果
```js
(function() {

    //1
    //const buttons = document.querySelectorAll('.material-icons');
    
    // buttons.forEach((button)=>{
    //     button.addEventListener('click',(e)=>{
    //         const extraInfo = document.getElementById(e.target.id+'-content');
    //         extraInfo.style.display = 'none'
    //     })
    // })

    //2
    const dom = document.getElementById('main')
    dom.addEventListener('click',(e)=>{
        if(e.target.tagName === 'BUTTON'){
            const extraInfo = document.getElementById(e.target.id+'-content');
            extraInfo.style.display = 'none'
        }
    })
}());
```

<hr>

#### Expand
- 扩张折叠信息块，使得div被折叠后，将箭头图标从up变为down
- 点击按钮时，应该展开div并切换图标
```js
(function() {
  'use strict';
  // TODO: Write some js
  const icons = document.querySelectorAll('.material-icons');
    
    icons.forEach((icon)=>{
        icon.addEventListener('click',(e)=>{
          const extraInfo = document.getElementById(e.target.id+'-content');
          if(extraInfo.style.display === 'none'){
            extraInfo.style.display = 'block'
            e.target.innerHTML = 'expand_less'
          }else{
            extraInfo.style.display = 'none'
            e.target.innerHTML = 'expand_more'
          }
        })
    })
}());
```

<hr>

#### Login
- 之前html tutorial做的登陆练习
- 实现登陆验证
<br>`如果account为“Admin” 密码为“12345”则Login成功，提示“登陆成功”`
<br>`否则Login失败，提示“账号密码不匹配”`
<br>`如果有input没有内容，则不允许触发submit button`
```js
(function() {
    'use strict';
    // write your js here.
    const account = document.getElementById('account')
    const password = document.getElementById('password')
    const button = document.querySelector('.login-btn')
    const form = document.querySelector('.login-box')
    account.oninput=(e)=>{
        account.value = e.target.value;
        if(!e.target.value){
            button.disabled=true
            return;
        }
        if(password.value){
            button.disabled=false
        }
    }

    password.oninput=(e)=>{
        password.value = e.target.value;
        if(!e.target.value){
            button.disabled=true
            return;
        }
        if(account.value){
            button.disabled=false
        }
    }

    form.onsubmit=()=>{
        const userValue = account.value;
        const pswValue = password.value;

        if(userValue==='Admin'&&pswValue==='12345'){
            alert('登陆成功')
        }else{
            alert('账号密码不匹配')
        }

    }

 
 }());
 ```
