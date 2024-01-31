const searchInput = document.getElementById('search-input');
const resultPlaylist = document.getElementById('result-playlists');
const resultArtist = document.getElementById('result-artist');

function requestApi(searchTerm) {
  fetch(`http://localhost:3000/artists?name_like=${searchTerm}`)
      .then((response) => response.json())//vai pegar a resposta e tranformar em json
      .then((result) => displayResults(result));
}

function displayResults(result) {
  /**vai ocultar a div result-playlists */
  resultPlaylist.classList.add('hidden');
  const artistName = document.getElementById('artist-name');
  const artistImage = document.getElementById('artist-img');

  /**vai percorrer todos os resultados vindo da Api */
  result.forEach(element => {
    artistName.innerText = element.name;
    artistImage.src = element.urlImg;
  })
  /**vai exibir a div result-artist com as tag atualizadas*/
  resultArtist.classList.remove('hidden');
}

document.addEventListener('input', function() {
  const searchTerm = searchInput.value.toLowerCase();
  
  if (searchTerm === '') {
    resultPlaylist.classList.add('hidden');
    resultArtist.classList.remove('hidden');
    return;//para sair do laço if
  }

  requestApi(searchTerm);//chamando a API
})