import { useState, useEffect } from 'react';
import './App.css'

const list = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
];

function App() {
  const [selectedGenre, setSelectedGenre] = useState('');
  const [filteredList, setFilteredList] = useState(list);
  const [searchTitle, setSearchTitle] = useState('');

  useEffect(() => {
    let result = list;
    if (selectedGenre !== '') {
      result = result.filter((movie) => movie.genre === selectedGenre);
    }
    if (searchTitle !== '') {
      result = result.filter((movie) =>
        movie.title.toLowerCase().includes(searchTitle.toLowerCase())
      );
    }
    setFilteredList(result);
  }, [selectedGenre, searchTitle]);

  return (
    <>
      <main>
        <h2>Filtra Film</h2>
        <div>
          <button onClick={() => setSelectedGenre('')}>Tutti</button>
          <button onClick={() => setSelectedGenre('Fantascienza')}>Fantascienza</button>
          <button onClick={() => setSelectedGenre('Thriller')}>Thriller</button>
          <button onClick={() => setSelectedGenre('Romantico')}>Romantico</button>
          <button onClick={() => setSelectedGenre('Azione')}>Azione</button>
        </div>
        <div>
          <input
            type="text"
            placeholder="Cerca per titolo..."
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
          />
        </div>
        <p>Genere selezionato: <strong>{selectedGenre || 'Tutti i generi'}</strong></p>
        <ul>
          {filteredList.map((movie, index) => (
            <li key={index}>
              <strong>{movie.title}</strong> - {movie.genre}
            </li>
          ))}
        </ul>
      </main >
    </>
  );
}

export default App