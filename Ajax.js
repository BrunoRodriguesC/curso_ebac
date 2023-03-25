document.addEventListener('DOMContentLoaded', function() {
    const name = document.querySelector('#name');
    const username = document.querySelector('#username');
    const avatar =  document.querySelector('#avatar');
    const repository = document.querySelector('#repository');
    const followers = document.querySelector('#followers');
    const following = document.querySelector('#following');
    const link =  document.querySelector('#link');

    fetch('https://api.github.com/users/BrunoRodriguesC')
        .then(function(result) {
            return result.json();
        })
        .then(function(json) {
            avatar.src = json.avatar_url; 
            name.innerText = json.name;
            username.innerText = json.login;
            repository.innerText = json.public_repos;
            followers.innerText = json.followers;
            following.innerText = json.following;
            link.href = json.html_url;
        })
})