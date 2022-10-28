const user = document.querySelector('.input')
const userInfo = document.querySelector('.user-info')


user.addEventListener('keyup', function(){
    let userName = user.value
    if(userName != ''){
        fetch(`https://api.github.com/users/${userName}`).then((res)=>{
            console.log(res)
            return res.json()
        }).then((res)=>{
            createUser(res)
        })
    }else(
        clear()
    )
});

function createUser(response){
    console.log(response)
    userInfo.style.display = 'flex';

    if(response.name !== undefined){
        userInfo.innerHTML = `
        <div class="user-img__wrapper">
                <img class="user-img" src="${response.avatar_url}" />
            </div>
            <div class="user-info__wrapper">
                <div class="user-info__text">Name: <span>${response.name}</span></div>
                <div class="user-info__text">BIO: <span>${response.bio}</span></div>
                <div class="user-info__text">Location: <span>${response.location}</span></div>
                <div class="user-info__text">Company: <span>${response.company}</span></div> 
                <div class="user-info__text">ID: <span>${response.id}</span></div> 
            </div>
        `
    }
}

function clear(){
    userInfo.style.display = 'none'
}








