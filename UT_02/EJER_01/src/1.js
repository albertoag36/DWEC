const playlist = [
  {
    "titulo": "Bohemian Rhapsody",
    "artista": "Queen",
    "duracion": 354
  },
  {
    "titulo": "Hotel California",
    "artista": "Eagles",
    "duracion": 390
  },
  {
    "titulo": "Billie Jean",
    "artista": "Michael Jackson",
    "duracion": 294
  },
  {
    "titulo": "Shape of You",
    "artista": "Ed Sheeran",
    "duracion": 233
  },
  {
    "titulo": "De Música Ligera",
    "artista": "Soda Stereo",
    "duracion": 212
  },
  {
    "titulo": "Blinding Lights",
    "artista": "The Weeknd",
    "duracion": 200
  },
  {
    "titulo": "Smells Like Teen Spirit",
    "artista": "Nirvana",
    "duracion": 301
  },
  {
    "titulo": "Lamento Boliviano",
    "artista": "Los Enanitos Verdes",
    "duracion": 223
  },
  {
    "titulo": "As It Was",
    "artista": "Harry Styles",
    "duracion": 167
  },
  {
    "titulo": "Rayando El Sol",
    "artista": "Maná",
    "duracion": 254
  }
]

playlist.forEach(cancion => console.log(`Título: ${cancion.titulo} | Artista: ${cancion.artista} | Duración (segundos): ${cancion.duracion}`))