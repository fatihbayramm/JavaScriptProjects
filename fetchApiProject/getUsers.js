let userListDOM = document.querySelector("#ul")
let isUserListOpened = false

document.getElementById("get-users").addEventListener("click", getUsers)

function getUsers() {
    if (isUserListOpened == true) {
        userListDOM.innerHTML = ""
        isUserListOpened = false
    } else {
        fetch("https://gorest.co.in/public/v2/users").then(
            response => response.json()
        ).then(
            responseJson => {
                let userListTemplate = "";

                responseJson.forEach(user => {

                    userListTemplate += `
                        <li>
                        id --> ${user.id},
                        name --> ${JSON.stringify(user.name)}
                        </li>
                    `
                })
                userListDOM.innerHTML = userListTemplate
                isUserListOpened = true
            }
        )
    }

}




