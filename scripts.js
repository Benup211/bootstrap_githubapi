function fetchUserData() {
    const username = document.getElementById('username-input').value;
    if(username==="")
    {
        alert("Please enter a GitHub ID");
    }
    else{
        const apiUrl = `https://api.github.com/users/${username}`;
        axios.get(apiUrl)
        .then(response => {
            const user = response.data;
            document.getElementById('login').textContent = user.login;
            document.getElementById('repos').textContent = user.public_repos;
            document.getElementById('followers').textContent = user.followers;
            document.getElementById('following').textContent = user.following;
            document.getElementById('location').textContent = user.location;
            document.getElementById('twitter').textContent = user.twitter_username || 'N/A';
            document.getElementById('organizations').textContent = user.organizations_url;
            document.getElementById('avatar').src = user.avatar_url;
            document.getElementById('result-container').classList.remove('d-none');
        })
        .catch(error => {
            console.error(error);
            alert('An error occurred while fetching user data. Enter correct user name and try again!!');
        });
    }
  }