function clearList() {
    const userList = document.getElementById("user_list");
    while (userList.firstChild) userList.removeChild(userList.firstChild);
}

function getList() {
    console.log("getList fired");
    const url = "http://localhost:8080/api/users";
    axios
        .get(url)
        .then(function (res) {
            const users = res.data.data;
            console.log("users", users);
            clearList();
            users.forEach(function (user) {
                const li = document.createElement("li");
                li.innerHTML = user.name + " " + user.age;
                li.setAttribute("data-id", user.id);
                const deleteButton = document.createElement("button");
                deleteButton.textContent = "Delete";
                deleteButton.addEventListener("click", function () {
                    deleteUserById(user.id);
                });
                li.appendChild(deleteButton);
                document.getElementById("user_list").appendChild(li);
            });
        })
        .catch(function (err) {
            console.error("Error fetching user list:", err);
        });
}

function deleteUserById(userId) {
    console.log("deleteUserById fired");
    const url = "http://localhost:8080/api/users/" + userId;
    axios
        .delete(url)
        .then(function (res) {
            if (res.status === 200) {
                console.log(res.data.msg);
                getList();
            }
        })
        .catch(function (err) {
            console.error("Error deleting user with ID: " + userId, err);
        });
}

function deleteList() {
    console.log("deleteList fired");
    const url = "http://localhost:8080/api/users";
    axios
        .delete(url)
        .then(function (res) {
            if (res.status === 204) {
                console.log("User List removed");
                getList();
            }
        })
        .catch(function (err) {
            console.error("Error deleting entire user list" + err);
        });
}

function postUser() {
    const username = document.getElementById("username");
    const age = document.getElementById("age");
    console.log("postuser fired");
    const url = "http://localhost:8080/api/users";
    if (!username.value || !age.value) return alert("missing username or age");
    axios
        .post(url, {
            name: username.value,
            age: age.value,
        })
        .then(function (res) {
            if (res.status === 201) {
                console.log("post user successfully");
                getList();
            }
        })
        .catch(function (err) {
            console.error("Error posting a user", err);
        });
}
getList();
