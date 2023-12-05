

<p align='center'><img src='../images/git.jpg' width='30%' height='30%' /></p>

# Note

## Git Shell Tutorial (`30/11/2023`)

### 之前练习的功能补全
#### 删除留言
```js
//删除留言
const handleDelete= async(event)=>{
    const messageId = event.target.getAttribute('data-id');
    const response = await axios.delete(`${api}/messages/${messageId}`);
    console.log(response)
    if(response.status === 200){
        alert('删除成功')
        getMessages();
    }
}
```

<hr>

#### 更新留言
```js
//更新留言
const handleUpdate = async(event)=>{
    const messageId = event.target.getAttribute('data-id');
    event.preventDefault();
    const nameInput = document.getElementById("name-input")
    const messageInput = document.getElementById("message-input")

    if(!nameInput.value||!messageInput.value) return;
    const newMessage = {
        name: nameInput.value,
        message: messageInput.value
    }
    const response = await axios.put(`${api}/messages/${messageId}`,newMessage)
    if(response.status === 201){
        alert('更新成功')
        getMessages();
    }

}
```

<hr>

#### 删除和更新相关的GET功能改动
```js
//获取留言
const getMessages = ()=>{
    const promise = fetch(`${api}/messages`,{
        method: "GET"
    })

    promise.then(response=>response.json()).then(messages=>{
        const messageList = document.getElementById('message-list');
        messages.data.forEach(message=>{
            const messageLi = document.createElement('li');
            const updateButtonId = `update-button-${message.id}`
            const deleteButtonId = `delete-button-${message.id}`
            messageLi.innerHTML = `
            <strong>${message.name}:</strong> ${message.message}
            <button class='update-button' id=${updateButtonId} data-id=${message.id}>更新</button>
            <button class='delete-button' id=${deleteButtonId} data-id=${message.id}>删除</button>
            `
            messageList.appendChild(messageLi);
           const updateButton = document.getElementById(updateButtonId)
           const deleteButton = document.getElementById(deleteButtonId)
           console.log(updateButton)
           deleteButton.addEventListener('click', handleDelete)
           updateButton.addEventListener('click', handleUpdate)
        })
        // const deleteButtons = document.querySelectorAll('.delete-button');
        // deleteButtons.forEach((button)=>{
        //     button.addEventListener('click', handleDelete)
        // })

    })

}
```

<hr>
<br>

### Git Shell内容复习
#### shell command
##### cd
- `.` 当前目录
- `..` 前一级目录
- `../..` 前两级目录
- `cd ..` `cd ../..`
- `cd ~` 回根目录
- /dirName

##### Is：用来展示当前目录下有哪些文件
  
##### clear：清屏

##### `rm -f fileName`：按名字删除选中文件

##### `rm -f dirName`：删除目录以及目录内所有文件

##### `rmdir dirName`：删除目录

##### `mkdir dirName`：创建目录

##### `touch fileName`：创建文件

##### `cat fileName`：打印文件内所有内容

##### `echo 'string'`
- 打印//string
- 一般用 `>` `>>` 与echo搭配
- `echo 'string'> fileName` 如果文件不存在，创建并写入；如果文件存在，覆盖已有内容
- `echo 'string'>> fileName` 如果文件不存在，创建并写入；如果文件已存在，已有内容之后写入

##### `open`：打开文件

<hr>

#### git command
##### `git init `本地初始化，创建隐藏文件夹`.git`

##### `git clone repoURL`从远程把代码get到本地

##### `git remote origin(repoName) repo_link`注意此时的origin是变量名

<hr>

##### branch
- 分支，多人协作时常用，分主分支(main)，和其他分支(featured...)
- branch master/main(这里放100%正确的代码)  <- feature branch(在这个上面做开发)
- branch master/main <- feature branch <- dev branch <- feature branch(稍微复杂一点项目，有conflict时使用)

##### `git checkout -b branchName`创建新分支并切换

##### `git checkout branchName`切换分支

##### `git branch -m branchName`修改当前分支名

##### git switch

##### `git branch`打印本地所有branch

##### `git branch -d branchName`删除分支

##### `git branch -m branchName`修改当前分支名

<hr>

##### 代码更新提交
##### `git add fileName` `git add .`添加特定文件/添加所有文件到缓存区

##### `git commit -m 'commit message'`提交所有的改变到本地仓库

##### `git push repoName branchName`将把本地仓库中指定分支的更改推送到远程仓库

##### `git pull origin master`获取远程master分支并更新合并到本地仓库（避免conflict）

##### `git fetch`
- 从远程仓库获取最新的历史记录
- git fetch branchName

<hr>

##### 合并代码
##### `git merge repoName branchName`
- 将指定的远程分支合并到你当前的本地分支
- 这个具体例子：branchName 所有的commits合并到我们当前的branch, 包括commits记录

##### `git merge repoName branchName  —squash` -> `git commit -m 'commitMessage'`
- 两命令搭配使用
- branchName 所有的commits合并到我们当前的branch, 并合并commits记录为新的commitMessage

<hr>

##### 代码回退
##### `git log`显示提交历史记录

##### `git reset —hard commitId`
- 意为将当前分支的 HEAD（即当前分支的最新提交）重置到指定的提交（commitId）
- 有两种情况
- 第一，当commitId已经push到远程，会警告覆盖或不同步，需要`git push origin featureBranch -f `
- 第二，当commitId没有push到远程，则没有影响

