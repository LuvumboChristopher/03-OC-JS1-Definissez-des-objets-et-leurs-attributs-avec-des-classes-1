const episode = {
  title  : 'A Sweet Revenge',
  duration  : 42,
  hasBeenWatched : false, 
}

document.querySelector('#episode-info').innerText = `Episode: ${episode.title}
Duration: ${episode.duration} min
${episode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`