function judgeContinue(target) {
    const judgeDelete = prompt(`Hi ${target.previousElementSibling.previousElementSibling.textContent}! Are you sure to delete "${target.previousElementSibling.textContent}" ? Y/N`);
    if (judgeDelete === null || !(judgeDelete.trim().toLowerCase() === "y")) return false;
    return true;
}

// 删除msg
async function handleDelete() {
    try {
        if (!judgeContinue(this)) return;
        const response = await axios.delete(`//localhost:8080/messages/${this.getAttribute("data-id")}`);
        if (response.status === 201) getMessages();
    } catch (error) {
        console.error("Error deleting message:", error);
    }
}

//更新msg
async function handleUpdate() {
    function handleKeyUp(event) {
        if (event.keyCode === 27) {
            document.removeEventListener("keyup", handleKeyUp);
            message_list.removeChild(field);
            getMessages();
        }
    }
    document.querySelectorAll("li>button:last-of-type").forEach(item => {
        item.disabled = true;
        item.className = "button_disabled";
    });
    const field = document.createElement("section");
    const message_list = document.getElementById("message-list");
    const name = this.closest("li").querySelector("b").textContent;
    field.innerHTML = `
    <label for='comment'>Hi <b>${name}</b>! Please update your comment</label>
    <input type='text' id='comment' name='comment' placeholder='Comment'/>
    <button class="update-button">Finish edit</button>`;
    message_list.appendChild(field);
    const comment_element = field.querySelector("#comment");
    comment_element.focus();
    document.addEventListener("keyup", handleKeyUp);
    field.querySelector(".update-button").addEventListener("click", async () => {
        const comment = comment_element.value;
        if (!comment) return alert(`Hi ${name}! Your updated comment is empty`);
        try {
            const response = await axios.put(
                `//localhost:8080/messages/${this.getAttribute("data-id")}`,
                {
                    name: name,
                    message: comment,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            message_list.removeChild(field);
            if (response.status === 201) getMessages();
        } catch (error) {
            console.error("Error updating message:", error);
        }
    });
}
// display messages
async function getMessages() {
    try {
        const response = await axios.get("//localhost:8080/messages");
        const messages = response.data;
        console.log("user list", messages);
        const messageList = document.getElementById("message-list");
        messageList.innerHTML = "";
        messages.forEach(message => {
            const messageItem = document.createElement("li");
            messageItem.innerHTML = `
            <b>${message.name}</b>
            <span>${message.message}</span>
            <button class="delete-button" data-id="${message.id}">Delete</button>
            <button class="update-button" data-id="${message.id}">Update</button>`;
            messageList.appendChild(messageItem);
        });
        document.querySelectorAll(".delete-button").forEach(item => item.addEventListener("click", handleDelete));
        document.querySelectorAll(".update-button").forEach(item => item.addEventListener("click", handleUpdate));
    } catch (error) {
        console.error("Error displaying message:", error);
    }
}
// post message
async function handleSubmitMessage(event) {
    event.preventDefault();
    try {
        const response = await axios.post(
            "//localhost:8080/messages",
            {
                name: this.children[0].value,
                message: this.children[1].value,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        if (response.status === 201) {
            this.reset();
            getMessages();
        }
    } catch (error) {
        console.error("Error occurred while submitting message:", error);
    }
}
getMessages();
document.getElementById("message-form").addEventListener("submit", handleSubmitMessage);
