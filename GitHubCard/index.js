/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

//Gonna pull some info from GitHub./

axios.get('https://api.github.com/users/anders529')
  .then(data => {
    console.log('Success! ', data);
    const cards = document.querySelector('.cards');
    cards.appendChild(createCard(data.data));
  })
    .catch(err => {
      console.log('Error: ', err)
    })

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

    // Going to pull follower info from GitHub
    axios.get('https://api.github.com/users/anders529/followers')
        .then(data => {
          console.log('Dang, that actually worked! Here is a list of followers:' ,data.data);
          const followersData = data.data;
          followersData.forEach(followerData => {
              followersArray.push(followerData.login);            
          });
        })
    followersArray.forEach(follower => {
      axios.get('https://api.github.com/users/${follower}')
        .then(data => {
          console.log('Follower Info: ', data.data);
          const cards2 = document.querySelector('.cards');
          cards2.appendChild(createCard(data.data));
        })

        .catch(err => {
          console.log("Couldn't get follower info:", err);
        })
    })

    .catch(err => {
      console.log('There was an issue trying to get followers. Sorry!', err)
    })

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
    'tetondan',
    'dustinmyers',
    'justsml',
    'luishrd',
    'bigknell'
  ];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

// Adding DOM elements and stuff.

const usrCrd = document.createElement('div');
const usrImg = document.createElement('img');
const UsrInfo = document.createElement('div');
const usrNme = document.createElement('h3');
const displName = document.createElement('p');
const usrLocation = document.createElement('p');
const profl = document.createElement('p');
const usrProfl = document.createElement('a');
const usrflwrs = document.createElement('p');
const usrFlwng = document.createElement('p');
const usrBio = document.createElement('p');

// Going to add some classes.

  usrCrd.classList.add('card');
  usrInfo.classList.add('card-info');
  usrNme.classList.add('name');
  displyNme.classList.add('username');

  // I hate assigning values to shit.

  usrImg.src = data.avatar_url;
  usrNme.textContent = data.name;
  displyNme.textContent = data.login;
  usrLocation.textContent = 'Location: ${data.location}';
  usrProfl.innerHTML = 'Profile: <a href=${data.html_url} > ${data.html_url}</a>';
  usrflwrs.textContent = 'Followers: ${data.followers}';
  usrFlwng.textContent = 'Following: ${data.following}';
  usrBio.textContent = 'Bio: ${data.bio}';

  // WHY DO I HAVE TO STRUCTURE THIS CRAP!? >:C GO AWAY!!! APPENDING CRAP SUCKS!!!

  usrCrd.appendChild(usrImg);
  usrCrd.appendChild(usrInfo);
  usrInfo.appendChild(usrNme);
  usrInfo.appendChild(displNme);
  usrInfo.appendChild(usrLocation);
  usrInfo.appendChild(profl);
  profl.appendChild(usrProfl);
  usrInfo.appendChild(usrflwrs);
  usrInfo.appendChild(usrFlwng);
  usrInfo.appendChild(usrBio);

  return usrCrd;

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
