const user = document.querySelector('.input')
const userInfo = document.querySelector('.user-info')


user.addEventListener('keyup', searchUser);



async function searchUser(){
    let userName = user.value
    const url = fetch(`https://api.github.com/users/${userName}`)
    const response = await(url)
    const data = await response.json()
    console.log(data)
    if (data.message != 'Not found'){
        let HTML = `        
               <img src="${data.avatar_url}">
                <ul>
                    <li>bio: ${data.bio}</li>
                    <li>company: ${data.company}</li>
                    <li>created at: ${data.created_at}</li>
                    <li>followers: ${data.followers}</li>
                    <li>following: ${data.folowing}</li>
                </ul>`
        userInfo.insertAdjacentHTML("beforeend", HTML)
        console.log(userInfo)
    } else return
    return userInfo
}
















