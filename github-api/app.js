const api = "https://api.github.com/users/";

document.getElementById("btn").addEventListener('click', function () {
    const inpForm = document.getElementById('inp').value;

    fetch(`${api}${inpForm}`)
        .then((response) => {
            return response.json()
        })
        .then(data => {
            natija(data)
        })
        .catch(err => {
            alert("Not found");
        })
        ;



})

function natija(response) {
    let img = document.querySelector('.img-section')
    img.innerHTML = `<img src="${response.avatar_url}">`;

    let name = document.querySelector('.name-section')
    name.innerHTML = `<h1>${response.name}</h1> <h6>${response.login}</h6>`

    let follow = document.querySelector('.follower-section');
    follow.innerHTML = `<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> <span>Followers:  ${response.followers}</span> , <span>Following:  ${response.following}</span>`

    let link = document.querySelector('.link-section')
    link.innerHTML = `<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg> <a href="${response.blog}">${response.blog}</a>`
}