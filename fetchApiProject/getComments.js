let userListDOM = document.querySelector("#ul")
let isUserListOpened = false

document.getElementById("get-comments").addEventListener("click", getComments)

function getComments() {
    if (isUserListOpened == true) {
        userListDOM.innerHTML = ""
        isUserListOpened = false
    } else {
        fetch("https://gorest.co.in/public/v2/comments").then(
            response => response.json()
        ).then(
            responseJson => {
                let userListTemplate = ""

                responseJson.forEach(comment => {

                    userListTemplate += `
                        <li>
                        id --> ${comment.id},
                        comment --> ${JSON.stringify(comment.body)}
                        </li>
                    `

                })
                userListDOM.innerHTML = userListTemplate;
                isUserListOpened = true
            }
        )
    }

}