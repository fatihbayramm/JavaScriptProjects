let userListDOM = document.querySelector("#ul")
let isUserListOpened = false

document.getElementById("get-posts").addEventListener("click", getPosts)

function getPosts() {
    if (isUserListOpened == true) {
        userListDOM.innerHTML = ""
        isUserListOpened = false
    } else {
        fetch("https://gorest.co.in/public/v2/posts").then(
            response => response.json()
        ).then(
            responseJson => {
                let userListTemplate = ""

                responseJson.forEach(post => {

                    userListTemplate += `
                        <li>
                        id --> ${post.user_id},
                        post title --> ${JSON.stringify(post.title)}
                        </li>
                    `

                })
                userListDOM.innerHTML = userListTemplate
                isUserListOpened = true
            }
        )
    }

}