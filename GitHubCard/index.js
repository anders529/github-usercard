// // THIS REALLY SHOULD HAVE BEEN STEP ONE!!! THIS TOOK ME FOREVER TO FIGURE OUT!!! >:C
const followersArray = [
'tetondan',
'dustinmyers',
'justsml',
'luishrd',
'bigknell'
];

// Gonna pull some info from GitHub.
axios.get('https://api.github.com/users/anders529')
.then(data => {
console.log('Successful!', data);
const cards = document.querySelector('.cards');
cards.appendChild(makeCards(data.data));
})
.catch(err => {
console.log('Error:', err);
})

// Going to grab Follower Information as well.

axios.get('https://api.github.com/users/anders529/followers')
.then(data =>{
console.log('Wow! That actually worked! Here is the list of your dumb followers:', data.data);
const followersData = data.data;
followersData.forEach(followerData =>{
  followersArray.push(followerData.login);
})

followersArray.forEach(follower => {
axios.get(`https://api.github.com/users/${follower}`)
.then(data => {
  console.log('Follower info: ' , data.data );
  const cards2 = document.querySelector('.cards');
  cards2.appendChild(makeCards(data.data));
})

.catch(err => {
  console.log('I cannot get any follower information: ', err);
})
})
})

.catch(err => {
console.log ('Houston, we have a problem: ' , err);
})

function makeCards(data){

// // Adding DOM elements and stuff.
  const usrCrd = document.createElement('div');
  const img = document.createElement('img');
  const info = document.createElement('div');
  const usrName = document.createElement('h3');
  const displayName = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const usrProfile = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

// // Going to add some classes.

    usrCrd.classList.add('card');
    info.classList.add('card-info');
    usrName.classList.add('name');
    displayName.classList.add('username');

//   // WHY DO I HAVE TO STRUCTURE THIS CRAP!? >:C GO AWAY!!! APPENDING CRAP SUCKS!!!

    usrCrd.appendChild(img);
    usrCrd.appendChild(info);
    info.appendChild(usrName);
    info.appendChild(displayName);
    info.appendChild(location);
    info.appendChild(profile);
    profile.appendChild(usrProfile);
    info.appendChild(followers);
    info.appendChild(following);
    info.appendChild(bio);

//  I hate assigning values to shit.

    img.src = data.avatar_url;
    usrName.textContent = data.name;
    displayName.textContent = data.login;
    location.textContent = `Location: ${data.location}`;
    usrProfile.textContent = `Profile: <a href=${data.html_url}>${data.html_url}</a>`;
    followers.textContent = `Followers: ${data.followers}`;
    following.textContent = `Following: ${data.following}`;
    bio.textContent = `Bio: ${data.bio}`;

    return usrCrd;
  }