// const loginFormHandler = async (event) => {
//   event.preventDefault();

//   const email = document.querySelector('#email-login').value.trim();
//   const password = document.querySelector('#password-login').value.trim();

//   if (email && password) {
//     const response = await fetch('/api/user/login', {
//       method: 'POST',
//       body: JSON.stringify({ email, password }),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//       document.location.replace('/');
//     } else {
//       alert('Failed to log in.');
//     }
//   }
// };

const rateSelect = document.getElementById('rate-select')

rateSelect.addEventListener('click', async (event) => {
  const isButton = event.target.nodeName === 'BUTTON';
  if (!isButton) return;

  var ratechoice = event.target.value
  var song = document.querySelector('#songname').textContent
  var artist = document.querySelector('#songartist').textContent
  var link = document.querySelector('#songlink').textContent

  console.log (song)
  console.log (artist)
  console.log (link)
  console.log (ratechoice)

  if (song && artist && link && ratechoice) {
    const response = await fetch('/api/song/rating', {
      method: 'POST',
      body: JSON.stringify({song, artist, link, ratechoice}),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/rating');
    } else {
      alert('Failed to rate song.');
    }
  }


})