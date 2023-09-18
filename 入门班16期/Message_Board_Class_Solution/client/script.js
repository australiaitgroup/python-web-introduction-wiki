const api = "http://localhost:8080";

// 删除留言
const handleDelete = async event => {
    const messageId = event.target.getAttribute("data-id");
    const response = await axios.delete(`${api}/messages/${messageId}`);
    if (response.status === 200) {
        getMessages();
    }
};

// 更新留言
const handleUpdate = event => {
    const messageId = event.target.getAttribute("data-id");
    let nameInput = document.getElementById("name-input");
    let messageInput = document.getElementById("message-input");

    let updateMessage = {
        name: nameInput.value,
        message: messageInput.value,
    };
    fetch(`${api}/messages/${messageId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updateMessage),
    }).then(response => {
        if (response.status === 201) {
            getMessages();
        }
    });
};

// 获取留言
const getMessages = () => {
    const promise = fetch(`${api}/messages`, {
        method: "GET",
    });
    promise
        .then(response => response.json())
        .then(messages => {
            const messageList = document.getElementById("message-list");
            messageList.innerHTML = ``;
            messages.forEach(message => {
                let messageItem = document.createElement("li");
                messageItem.innerHTML = `
                <strong>${message.name}</strong>${message.message}
                <button class='delete-button' data-id=${message.id}>删除</button>
                <button class='update-button' data-id=${message.id}>更新</button>
            `;
                messageList.appendChild(messageItem);
            });
            const deleteButtons = document.querySelectorAll(".delete-button");
            deleteButtons.forEach(button => {
                button.addEventListener("click", handleDelete);
            });
            const updateButtons = document.querySelectorAll(".update-button");
            for (let i = 0; i < updateButtons.length; i++) {
                updateButtons[i].addEventListener("click", handleUpdate);
            }
        });
};

// 增加留言
const handleCreateMessage = event => {
    event.preventDefault();
    const nameInput = document.getElementById("name-input");
    const messageInput = document.getElementById("message-input");
    const newMessage = {
        name: nameInput.value,
        message: messageInput.value,
    };
    const promise = fetch(`${api}/messages`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newMessage),
    });
    promise.then(response => {
        if (response.status === 201) {
            getMessages();
            nameInput.value = "";
            messageInput.value = "";
        }
    });
};

document.getElementById("message-form").addEventListener("submit", handleCreateMessage);
getMessages();
