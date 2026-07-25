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
  const [filter, setFilter] = useState('');

  useEffect(() => {



  }, [])

  return (
    <>
      <main>

      <input type="text" placeholder='Filtra' value={filter} onChage={e => setFilter(e.target.value)}/>




        <ul>
          {
            list.map((list, index) => (
              <li key={index}>
                {list.title},{list.genre}

              </li>
            ))
          }
        </ul>
      </main >
    </>
  )
}

export default App