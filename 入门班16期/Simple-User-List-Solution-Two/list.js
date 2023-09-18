const user_list = document.getElementById("user_list"),
    user_form = document.querySelector(".user_form"),
    nameInput = document.getElementById("name"),
    ageInput = document.getElementById("age");

function clearUserList() {
    user_list.textContent = "";
}

function judgeContinue(s = "Are you sure you want to delete all users? Y/N") {
    const judge = prompt(s);
    return judge !== null && judge.toLowerCase() === "y";
}

async function deleteSingle() {
    try {
        if (!judgeContinue(`Are you sure to delete ${this.previousElementSibling.previousElementSibling.textContent}? Y/N`)) return;
        const response = await axios.delete(`//localhost:8080/api/clearsingle?id=${this.getAttribute("data-id")}`);
        if (response.status === 201) alert(response.data.msg);
        getUserList();
    } catch (err) {
        console.error(err);
    }
}

async function getUserList() {
    try {
        clearUserList();
        const response = await axios.get("//localhost:8080/api/users");
        const users = response.data.user;
        console.log("users", users);
        // if (users.length === 0) return alert("no users found, please add a new user");
        for (value of users) {
            const li = document.createElement("li");
            li.innerHTML = `
            <span>${value.name}</span>
            <span>${value.age}</span>
            <button class="btn_group_btn" data-id="${value.id}">Delete</button>`;
            user_list.appendChild(li);
        }
        user_list.querySelectorAll("span+.btn_group_btn").forEach(item => item.addEventListener("click", deleteSingle));
    } catch (error) {
        console.error("Error fetching userlist:", error);
    }
}

async function addUser() {
    try {
        if (!nameInput.value || !ageInput.value) return alert("please fill in all fields");
        const body = {
            name: nameInput.value,
            age: ageInput.value,
        };
        const response = await axios.post("//localhost:8080/api/user", body);
        if (response.status === 201) {
            const user = response.data.user;
            alert("user: " + user.name + " age: " + user.age + " has been added");
            getUserList();
            console.log("users", user);
            user_form.reset();
        }
    } catch (error) {
        console.error("Error adding one user", error);
    }
}

async function clear_list() {
    try {
        if (!judgeContinue()) return;
        const response = await axios.delete("//localhost:8080/api/clear");
        if (response.status === 204) alert("User List has been cleared successfully");
        getUserList();
    } catch (error) {
        console.error("Error removing userlist", error);
    }
}

document.getElementById("add_user").addEventListener("click", addUser);
document.getElementById("get_list").addEventListener("click", getUserList);
document.getElementById("clear_list").addEventListener("click", clear_list);
getUserList();
