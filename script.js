const featuredPlaylists = [
  {
    title: "Pop Hits",
    cover: "assets/pop.jpeg",
  },
  {
    title: "Rock",
    cover: "assets/rock.jpeg",
  },
  {
    title: "Hip Hop",
    cover: "assets/hiphop.jpeg",
  },
  {
    title: "R&B",
    cover: "assets/r&b.jpeg",
  },
];

// Function to create playlist elements
function createPlaylistElement(playlist) {
  const playlistElement = document.createElement("div");
  playlistElement.classList.add("playlist");

  const coverImage = document.createElement("img");
  coverImage.src = playlist.cover;
  coverImage.alt = playlist.title;

  const playlistTitle = document.createElement("h3");
  playlistTitle.textContent = playlist.title;

  playlistElement.appendChild(coverImage);
  playlistElement.appendChild(playlistTitle);

  return playlistElement;
}

// Add featured playlists to the page
const playlistContainer = document.querySelector(".playlist-container");
featuredPlaylists.forEach((playlist) => {
  const playlistElement = createPlaylistElement(playlist);
  playlistContainer.appendChild(playlistElement);
});
