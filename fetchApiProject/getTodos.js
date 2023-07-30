let userListDOM = document.querySelector("#ul")
let isUserListOpened = false

document.getElementById("get-todos").addEventListener("click", getTodos)

function getTodos() {
    if (isUserListOpened == true) {
        userListDOM.innerHTML = ""
        isUserListOpened = false
    } else {
        fetch("https://gorest.co.in/public/v2/todos").then(
            response => response.json()
        ).then(
            responseJson => {
                let userListTemplate = ""

                responseJson.forEach(todos => {

                    userListTemplate += `
                        <li>
                        id --> ${todos.user_id},
                        due on --> ${JSON.stringify(todos.due_on)}
                        </li>
                    `
                })
                userListDOM.innerHTML = userListTemplate
                isUserListOpened = true
            }
        )
    }

}