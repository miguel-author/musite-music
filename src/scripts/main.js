// src/scripts/main.js
document.addEventListener('DOMContentLoaded', () => {
    const musicContainer = document.createElement('div');
    musicContainer.classList.add('music-container');
    document.querySelector('main').appendChild(musicContainer);

    const songs = [
        { title: 'Música 1', artist: 'Artista 1' },
        { title: 'Música 2', artist: 'Artista 2' },
        { title: 'Música 3', artist: 'Artista 3' },
    ];

    songs.forEach(song => {
        const songSquare = document.createElement('div');
        songSquare.classList.add('song-square');
        songSquare.innerHTML = `<h2>${song.title}</h2><p>${song.artist}</p>`;
        musicContainer.appendChild(songSquare);
    });
});