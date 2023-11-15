const rateSelect = document.getElementById('rate-select')

rateSelect.addEventListener('click', async (event) => {
  const isButton = event.target.nodeName === 'BUTTON';
  if (!isButton) return;

  var ratechoice = event.target.value
  var song = document.querySelector('#songname').textContent
  var artist = document.querySelector('#songartist').textContent
  var link = document.querySelector('#songlink').textContent
   const doesexist = await fetch(`/api/song/name/${song}`,{
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  const finalData = await doesexist.json()
  if (finalData.songID === "Notfound")
  {
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
  }else
  {
    if (song && artist && link && ratechoice) {
      const response = await fetch(`/api/song/rating/${song}`, {
        method: 'PUT',
        body: JSON.stringify({ratechoice}),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/rating');
      } else {
        alert('Failed to rate song.');
      }
    }
  }
})